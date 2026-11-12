// pages/index/index.ts
import { UNITS, gradeDefaults, DAILY_RANGES } from '../../engine/index.js';

Page({
  data: {
    activeTab: 'unit', // 'unit' | 'daily' | 'exam'
    grades: [
      { id: '1', name: '一年级' },
      { id: '2', name: '二年级' },
      { id: '3', name: '三年级' },
      { id: '4', name: '四年级' },
      { id: '5', name: '五年级' },
      { id: '6', name: '六年级' },
    ],
    selectedGrade: '3',
    selectedSemester: '上',
    currentUnits: [] as any[],
    selectedUnitIndex: 0,
    difficulty: 'medium', // 'easy' | 'medium' | 'hard'
    problemCount: 20, // 20 | 30 | 40

    // 每日一练
    dailyMode: 'oral', // 'oral' | 'vertical'
    filteredDailyRanges: [] as any[],
    selectedDailyId: 'sum-10',

    // 弹窗与设置
    showConfigModal: false,
    modalTitle: '',
    modalType: 'unit', // 'unit' | 'exam' | 'daily'
  },

  onLoad() {
    this.refreshUnits();
    this.refreshDailyRanges();
  },

  // 切换顶部主 Tab
  onTabChange(e: any) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({ activeTab: tab });
    if (tab === 'daily') {
      this.refreshDailyRanges();
    } else {
      this.refreshUnits();
    }
  },

  // 选择年级
  onGradeChange(e: any) {
    const grade = e.currentTarget.dataset.grade;
    this.setData({ selectedGrade: grade, selectedUnitIndex: 0 });
    this.refreshUnits();
    this.refreshDailyRanges();
  },

  // 切换学期
  onSemesterChange(e: any) {
    const semester = e.currentTarget.dataset.semester;
    this.setData({ selectedSemester: semester, selectedUnitIndex: 0 });
    this.refreshUnits();
  },

  // 刷新当前单元列表
  refreshUnits() {
    const gradeUnits = (UNITS as any)[this.data.selectedGrade] || {};
    const units = gradeUnits[this.data.selectedSemester] || [];
    this.setData({
      currentUnits: units,
      selectedUnitIndex: 0,
    });
  },

  // 刷新每日一练范围列表
  refreshDailyRanges() {
    const g = Number(this.data.selectedGrade);
    const mode = this.data.dailyMode;
    const ranges = (DAILY_RANGES as any[]).filter(r => r.mode === mode && r.grade <= g);
    this.setData({
      filteredDailyRanges: ranges,
      selectedDailyId: ranges.length > 0 ? ranges[0].id : '',
    });
  },

  // 点击单元卡片
  onUnitClick(e: any) {
    const index = e.currentTarget.dataset.index;
    const unit = this.data.currentUnits[index];
    if (!unit) return;

    const defaultCount = unit.maxCount || 20;
    this.setData({
      selectedUnitIndex: index,
      modalTitle: unit.name,
      modalType: this.data.activeTab === 'exam' ? 'exam' : 'unit',
      problemCount: defaultCount,
      showConfigModal: true,
    });
  },

  // 切换难度
  onDifficultyChange(e: any) {
    const diff = e.currentTarget.dataset.diff;
    this.setData({ difficulty: diff });
  },

  // 切换题量
  onCountChange(e: any) {
    const count = Number(e.currentTarget.dataset.count);
    this.setData({ problemCount: count });
  },

  // 切换每日一练口算/竖式模式
  onDailyModeChange(e: any) {
    const mode = e.currentTarget.dataset.mode;
    this.setData({ dailyMode: mode });
    this.refreshDailyRanges();
  },

  // 选择每日一练范围
  onDailyRangeSelect(e: any) {
    const id = e.currentTarget.dataset.id;
    const range = this.data.filteredDailyRanges.find(r => r.id === id);
    if (!range) return;

    this.setData({
      selectedDailyId: id,
      modalTitle: range.name,
      modalType: 'daily',
      problemCount: 20,
      showConfigModal: true,
    });
  },

  // 关闭配置弹窗
  closeModal() {
    this.setData({ showConfigModal: false });
  },

  // 确认出卷并跳转
  confirmGenerate() {
    const { modalType, selectedGrade, selectedSemester, selectedUnitIndex, difficulty, problemCount, selectedDailyId, dailyMode } = this.data;
    this.setData({ showConfigModal: false });

    if (modalType === 'unit' || modalType === 'exam') {
      const unit = this.data.currentUnits[selectedUnitIndex];
      if (!unit) return;

      const params = {
        mode: modalType,
        grade: selectedGrade,
        semester: selectedSemester,
        unitName: unit.name,
        plugin: unit.plugin || '',
        arithmeticPlugin: unit.arithmeticPlugin || '',
        topics: unit.topics ? JSON.stringify(unit.topics) : '',
        difficulty,
        count: problemCount,
      };

      wx.setStorageSync('currentPaperConfig', {
        ...params,
        unit,
      });

      wx.navigateTo({
        url: '/pages/paper/paper',
      });
    } else if (modalType === 'daily') {
      const range = this.data.filteredDailyRanges.find(r => r.id === selectedDailyId);
      if (!range) return;

      const params = {
        mode: 'daily',
        dailyMode,
        rangeId: range.id,
        rangeName: range.name,
        grade: selectedGrade,
        difficulty,
        count: problemCount,
      };

      wx.setStorageSync('currentPaperConfig', params);

      wx.navigateTo({
        url: '/pages/paper/paper',
      });
    }
  },

  // 打开关于页
  goToAbout() {
    wx.navigateTo({ url: '/pages/about/index' });
  },
});
