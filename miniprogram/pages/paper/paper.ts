// pages/paper/paper.ts
import { generatePaper, generateExamPaper, generateDailyPractice, gradeDefaults, diagramToDataUrl } from '../../engine/index.js';

Page({
  data: {
    paperConfig: {} as any,
    paperTitle: '',
    paperSubtitle: '',
    isExam: false,
    sections: [] as any[],
    answerSections: [] as any[],
    totalProblems: 0,
    showAnswers: false,
    generatedTime: '',
  },

  onLoad() {
    const config = wx.getStorageSync('currentPaperConfig');
    if (!config) {
      wx.showToast({ title: '配置未找到', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1500);
      return;
    }

    this.setData({ paperConfig: config });
    this.createPaper();
  },

  // 生成或重新生成试卷
  createPaper() {
    const config = this.data.paperConfig;
    wx.showLoading({ title: '实时生成中...' });

    try {
      let rawPaper: any;
      let title = '';
      let subtitle = '';

      if (config.mode === 'exam') {
        const defaults = gradeDefaults(Number(config.grade), config.semester, 35);
        rawPaper = generateExamPaper({
          ...defaults,
          ...config,
          ...(config.unit || {}),
        });
        title = `人教版小学数学 · ${config.grade}年级${config.semester}册`;
        subtitle = `《${config.unitName}》单元达标测验卷（满分 100 分 · 40 分钟）`;
      } else if (config.mode === 'daily') {
        rawPaper = generateDailyPractice({
          mode: config.dailyMode,
          rangeId: config.rangeId,
          grade: Number(config.grade),
          problemCount: config.count || 20,
          difficulty: config.difficulty || 'medium',
        });
        title = `小学数学 · 每日一练（${config.dailyMode === 'oral' ? '口算速算' : '规范竖式'}）`;
        subtitle = `专项：${config.rangeName} · 共 ${config.count} 题`;
      } else {
        const defaults = gradeDefaults(Number(config.grade), config.semester, config.count || 20);
        rawPaper = generatePaper({
          ...defaults,
          ...config,
          ...(config.unit || {}),
          problemCount: config.count || 20,
          difficulty: config.difficulty || 'medium',
        });
        const diffMap: any = { easy: '基础卷', medium: '标准卷', hard: '提高卷' };
        title = `人教版小学数学 · ${config.grade}年级${config.semester}册`;
        subtitle = `《${config.unitName}》单元同步练习（${diffMap[config.difficulty] || '标准卷'}）`;
      }

      const problemList = rawPaper.paper || [];

      // 处理题目图表 SVG Data URL
      const processedProblems = problemList.map((p: any, idx: number) => {
        let diagramUrl = '';
        if (p.diagram) {
          try {
            diagramUrl = diagramToDataUrl(p.diagram);
          } catch (e) {
            console.error('Diagram render error:', e);
          }
        }
        return {
          ...p,
          problemIndex: idx + 1,
          diagramUrl,
        };
      });

      // 智能分板块展示
      let sections: any[] = [];
      let answerSections: any[] = [];

      if (config.mode === 'exam') {
        // 考试卷按 6 大板块划分
        const secMap = new Map<number, any>();
        processedProblems.forEach((p: any) => {
          const sId = p.examSection || 1;
          if (!secMap.has(sId)) {
            secMap.set(sId, {
              sectionId: sId,
              title: p.sectionTitle || '练习题目',
              scoreText: `（每题 ${p.score || 2} 分）`,
              problems: [],
            });
          }
          secMap.get(sId)!.problems.push(p);
        });
        sections = Array.from(secMap.values()).sort((a, b) => a.sectionId - b.sectionId);
      } else {
        // 同步练按类型分组
        const oral = processedProblems.filter((p: any) => p.format === 'arithmetic' || (p.type === 'arithmetic' && p.format !== 'vertical'));
        const vertical = processedProblems.filter((p: any) => p.format === 'vertical');
        const fill = processedProblems.filter((p: any) => p.format === 'fill' || p.responseKind === 'blank' || (!p.diagram && (p.format === 'judge' || p.format === 'choice')));
        const draw = processedProblems.filter((p: any) => p.diagram || p.format === 'draw');
        const word = processedProblems.filter((p: any) => p.format === 'application' || p.responseKind === 'word' || (!oral.includes(p) && !vertical.includes(p) && !fill.includes(p) && !draw.includes(p)));

        let secIdx = 1;
        const cnNums = ['一', '二', '三', '四', '五', '六'];
        if (oral.length > 0) {
          sections.push({ sectionId: secIdx, title: `${cnNums[secIdx - 1]}、直接写出得数`, problems: oral, isOral: true });
          secIdx++;
        }
        if (vertical.length > 0) {
          sections.push({ sectionId: secIdx, title: `${cnNums[secIdx - 1]}、列竖式计算`, problems: vertical, isVertical: true });
          secIdx++;
        }
        if (fill.length > 0) {
          sections.push({ sectionId: secIdx, title: `${cnNums[secIdx - 1]}、用心填一填`, problems: fill, isFill: true });
          secIdx++;
        }
        if (draw.length > 0) {
          sections.push({ sectionId: secIdx, title: `${cnNums[secIdx - 1]}、动手实践与操作`, problems: draw, isDraw: true });
          secIdx++;
        }
        if (word.length > 0) {
          sections.push({ sectionId: secIdx, title: `${cnNums[secIdx - 1]}、走进生活，解决问题`, problems: word, isWord: true });
          secIdx++;
        }
      }

      // 生成答案组
      answerSections = sections.map(sec => ({
        title: sec.title,
        items: sec.problems.map((p: any) => ({
          index: p.problemIndex,
          answer: p.answer,
          analysis: p.analysis || p.reviewNote || '',
        })),
      }));

      const now = new Date();
      const timeStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

      this.setData({
        paperTitle: title,
        paperSubtitle: subtitle,
        isExam: config.mode === 'exam',
        sections,
        answerSections,
        totalProblems: processedProblems.length,
        generatedTime: timeStr,
      });

      wx.hideLoading();
    } catch (err: any) {
      wx.hideLoading();
      console.error('Generation failed:', err);
      wx.showModal({
        title: '生成异常',
        content: err.message || '出题引擎运算异常，请重试',
        showCancel: false,
      });
    }
  },

  // 换一批题目
  onRegenerate() {
    this.createPaper();
    wx.showToast({ title: '已重新生成新题目', icon: 'success' });
  },

  // 切换答案折叠
  toggleAnswers() {
    this.setData({ showAnswers: !this.data.showAnswers });
  },

  // 一键复制纯文本
  copyPaperText() {
    let text = `${this.data.paperTitle}\n${this.data.paperSubtitle}\n姓名：______ 班级：______ 得分：______\n\n`;
    this.data.sections.forEach(sec => {
      text += `${sec.title}\n`;
      sec.problems.forEach((p: any) => {
        text += `${p.problemIndex}. ${p.question}\n`;
      });
      text += '\n';
    });

    text += `【参考答案】\n`;
    this.data.answerSections.forEach(sec => {
      text += `${sec.title}\n`;
      sec.items.forEach((item: any) => {
        text += `${item.index}. ${item.answer}${item.analysis ? '（' + item.analysis + '）' : ''}\n`;
      });
    });

    wx.setClipboardData({
      data: text,
      success: () => {
        wx.showToast({ title: '试卷文本已复制', icon: 'success' });
      },
    });
  },

  // 导出提示
  onExport() {
    wx.showActionSheet({
      itemList: ['📋 复制全卷文字（可发微信群/打印）', '👀 查看并核对参考答案'],
      success: (res) => {
        if (res.tapIndex === 0) {
          this.copyPaperText();
        } else if (res.tapIndex === 1) {
          this.setData({ showAnswers: true });
        }
      },
    });
  },
});
