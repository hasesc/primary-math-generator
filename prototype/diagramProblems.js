// 图形数据与答案一起生成，网页渲染与组卷共用同一份数据。
const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const timeText = ({ hour, minute }) => `${hour}时${minute ? `${minute}分` : ''}`;

export function clockProblems(difficulty, count, { grade }) {
  const step = String(grade) === '1' ? 60 : { easy: 15, medium: 5, hard: 1 }[difficulty];
  const slots = 720 / step;
  const offset = randomInt(0, slots - 1);
  const timeAt = slot => {
    const minutes = ((slot + offset) % slots) * step;
    return { hour: Math.floor(minutes / 60) || 12, minute: minutes % 60 };
  };
  return Array.from({ length: count }, (_, i) => {
    const mode = i % 3;
    const index = Math.floor(i / 3);
    const time = timeAt(index);
    const label = timeText(time);
    let question, answer, clocks, format;
    if (mode === 0 && index < slots) {
      question = '看钟面，写出时间。';
      answer = label;
      clocks = [time];
      format = 'fill';
    } else if (mode === 1 && index < slots) {
      question = `在钟面上画出 ${label} 的时针和分针。`;
      answer = label;
      clocks = [null];
      format = 'draw';
    } else {
      const correct = index % 3;
      const shift = index < slots ? 0 : (mode + 1) * 3;
      clocks = [0, 1, 2].map(j => j === correct ? time : timeAt(index + (j + shift) % (slots - 1) + 1));
      question = `哪一个钟面显示 ${label}？`;
      answer = ['A', 'B', 'C'][correct];
      format = 'choice';
    }
    return {
      question, answer, format, subtype: 'unit-clock', diagram: { kind: 'clock', clocks },
      answerDiagram: format === 'draw' ? { kind: 'clock', clocks: [time] } : undefined,
    };
  });
}

const statistics = {
  'data-table': { title: '四个小组收集的卡片', labels: ['一组', '二组', '三组', '四组'] },
  'double-table': { title: '四个小组两天收集的卡片', labels: ['一组', '二组', '三组', '四组'] },
  'bar-chart': { title: '各组收集的卡片（张）', labels: ['一组', '二组', '三组', '四组'] },
  'bar-average': { title: '各组收集的卡片（张）', labels: ['一组', '二组', '三组', '四组'] },
  'line-chart': { title: '四天收集的卡片（张）', labels: ['周一', '周二', '周三', '周四'] },
  'pie-chart': { title: '借阅图书构成', labels: ['故事', '科普', '历史', '艺术'] },
};

export function statisticsProblems(difficulty, count, { plugin }) {
  const { title, labels } = statistics[plugin];
  const items = [];
  const seen = new Set();
  const scale = { easy: 1, medium: 2, hard: 5 }[difficulty];
  for (let attempts = 0; items.length < count && attempts < count * 30; attempts++) {
    const values = Array.from({ length: 4 }, (_, i) => (i * 10 + randomInt(1, 9)) * scale);
    // 打乱大小次序，最高的一项不会总落在同一位置。
    for (let i = values.length - 1; i > 0; i--) {
      const j = randomInt(0, i);
      [values[i], values[j]] = [values[j], values[i]];
    }
    let diagram = { kind: plugin, title, labels, values };
    let tasks;
    if (plugin === 'double-table') {
      const second = values.map(value => value + randomInt(1, 6));
      diagram = { ...diagram, second };
      const dayOne = values.reduce((sum, n) => sum + n);
      const dayTwo = second.reduce((sum, n) => sum + n);
      const growth = second.map((n, i) => n - values[i]);
      const target = Math.ceil((values[1] + second[1]) / 10) * 10 + 10;
      tasks = [
        ['read-cell', '二组第二天收集了多少张？', second[1]],
        ['group-total', '三组两天一共收集了多少张？', values[2] + second[2]],
        ['group-change', '四组第二天比第一天多收集多少张？', growth[3]],
        ['day-total', '第一天四个小组一共收集了多少张？', dayOne],
        ['day-change', '四个小组第二天合计比第一天多收集多少张？', dayTwo - dayOne],
        ['cross-day', '一组第一天和四组第二天合计收集了多少张？', values[0] + second[3]],
        ['greatest-change', '哪个小组第二天增加得最多？如果并列，请都写出来。', labels.filter((_, i) => growth[i] === Math.max(...growth)).join('、')],
        ['missing-from-target', `二组想在两天内收集 ${target} 张，还差多少张？`, target - values[1] - second[1]],
      ];
    } else if (plugin === 'pie-chart') {
      const cuts = [randomInt(2, 7), randomInt(8, 12), randomInt(13, 18)];
      diagram.values = [cuts[0], cuts[1] - cuts[0], cuts[2] - cuts[1], 20 - cuts[2]].map(n => n * 5);
      const total = randomInt(5, 20) * 20;
      const [story, science, history, art] = diagram.values;
      const pct = n => `${n}%`;
      const bookCount = n => `${n} 本`;
      tasks = [
        ['read-share', '科普书占借阅总数的百分之几？', pct(science)],
        ['combine-shares', '故事书与历史书合计占借阅总数的百分之几？', pct(story + history)],
        ['share-to-count', `一共借出 ${total} 本书，其中有多少本艺术书？`, bookCount(total * art / 100)],
        ['rank-shares', '哪类书借得最多？如果并列，请都写出来。', labels.filter((_, i) => diagram.values[i] === Math.max(...diagram.values)).join('、')],
        ['remaining-share', '除科普书外，其余图书合计占借阅总数的百分之几？', pct(100 - science)],
        ['compare-shares', '故事书和艺术书的占比相差多少个百分点？', `${Math.abs(story - art)} 个百分点`],
        ['count-to-total', `科普书借出了 ${total * science / 100} 本。一共借出了多少本书？`, bookCount(total)],
        ['count-to-count', `故事书借出了 ${total * story / 100} 本。历史书借出了多少本？`, bookCount(total * history / 100)],
        ['count-difference', `一共借出 ${total} 本书。科普书与历史书的借阅量相差多少本？`, bookCount(total * Math.abs(science - history) / 100)],
        ['share-threshold', '哪些类别的借阅量达到或超过总数的四分之一？', labels.filter((_, i) => diagram.values[i] >= 25).join('、')],
      ];
    } else {
      if (plugin === 'bar-average') values[3] += (4 - values.reduce((a, b) => a + b) % 4) % 4;
      const sum = values.reduce((total, n) => total + n);
      const max = Math.max(...values);
      const min = Math.min(...values);
      const threshold = 20 * scale;
      tasks = [
        ['read-value', `${labels[1]}收集了多少张？`, values[1]],
        ['combine-values', `${labels[0]}和${labels[2]}合计收集了多少张？`, values[0] + values[2]],
        ['compare-values', `${labels[3]}和${labels[2]}收集的数量相差多少张？`, Math.abs(values[3] - values[2])],
        ['find-extrema', '收集最多和最少的分别是哪一项？如果并列，请都写出来。', `${labels.filter((_, i) => values[i] === max).join('、')}最多，${labels.filter((_, i) => values[i] === min).join('、')}最少`],
        ['total', '四项合计收集了多少张卡片？', sum],
        ['threshold', `哪些项目收集的卡片达到或超过 ${threshold} 张？`, labels.filter((_, i) => values[i] >= threshold).join('、')],
        ['target', `目标是收集 ${Math.ceil(sum / 10) * 10 + 10} 张，还差多少张？`, Math.ceil(sum / 10) * 10 + 10 - sum],
      ];
      if (plugin === 'bar-average') {
        tasks.push(['average', '平均每组收集了多少张？', sum / 4]);
        tasks.push(['above-average', '哪些小组收集的张数高于平均数？', labels.filter((_, i) => values[i] > sum / 4).join('、')]);
      }
      if (plugin === 'line-chart') {
        const changes = values.slice(1).map((n, i) => n - values[i]);
        tasks.push(['rising-intervals', '哪几个相邻日期之间，卡片数量增加了？如果没有，写“没有”。', changes.flatMap((n, i) => n > 0 ? [`${labels[i]}到${labels[i + 1]}`] : []).join('、') || '没有']);
      }
    }
    const [skill, question, answer] = tasks[items.length % tasks.length];
    const key = JSON.stringify([question, diagram]);
    if (seen.has(key)) continue;
    seen.add(key);
    items.push({ question, answer: String(answer), diagram, subtemplateId: skill, subtype: 'unit-statistics' });
  }
  return items;
}
