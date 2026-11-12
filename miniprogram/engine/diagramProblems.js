// 图形数据与答案一起生成，网页渲染与组卷共用同一份数据。
const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const timeText = ({ hour, minute }) => `${hour}时${minute ? `${minute}分` : ''}`;

export function clockProblems(difficulty, count, { grade }) {
  const isG1 = String(grade) === '1';

  // 1年级考法定义 (保持 fill, draw, choice 三种卷面题型，兼顾丰富考法与全量契约)
  const g1Skills = {
    easy: ['clock-read-whole', 'clock-parts-whole', 'clock-choice-whole'],
    medium: ['clock-draw-whole', 'clock-time-shift', 'clock-choice-whole'],
    hard: ['clock-approximate-time', 'clock-daily-routine', 'clock-draw-whole', 'clock-choice-whole', 'clock-time-shift'],
  };

  // 2年级考法定义 (5分步长、1分精准读写、偏角作图、经过时间推算)
  const g2Skills = {
    easy: ['time-read-5min', 'time-draw-5min', 'time-choice-5min'],
    medium: ['time-read-1min', 'time-draw-accurate', 'time-choice-5min'],
    hard: ['time-elapsed-fill', 'time-draw-future', 'time-choice-5min'],
  };

  const pool = (isG1 ? g1Skills : g2Skills)[difficulty] || (isG1 ? g1Skills.easy : g2Skills.easy);
  const out = [];
  const seen = new Set();
  let attempts = 0;

  while (out.length < count && attempts < count * 80) {
    attempts++;
    const subtemplateId = pool[out.length % pool.length];
    const i = attempts;
    let question, answer, clocks, format, answerDiagram;

    if (isG1) {
      // ---------------- 一年级逻辑（整时 1~12） ----------------
      const h = ((attempts * 5 + randomInt(1, 11)) % 12) + 1;
      const wholeTime = { hour: h, minute: 0 };
      const label = `${h}时`;

      switch (subtemplateId) {
        case 'clock-read-whole': {
          const prompts = [
            '看钟面，写出时间。',
            '认一认钟面上的时刻，填在横线上。',
            '仔细观察钟面，此时是（ ）时整。',
            '看钟面写时刻。',
          ];
          question = prompts[attempts % prompts.length];
          answer = label;
          clocks = [wholeTime];
          format = 'fill';
          break;
        }
        case 'clock-parts-whole': {
          const parts = [
            `看钟面，分针指向12，时针正指向 ${h}，这时是（ ）时整。`,
            `看钟面，此时时针指向 ${h}，分针指向12，钟面表示（ ）时。`,
            `观察钟面（${h}时），钟面上又粗又短的针指的是数字（ ）。`,
            `钟面上有12个大格，此时时针指向数字 ${h}，表示（ ）时。`,
          ];
          question = parts[attempts % parts.length];
          answer = `${h}`;
          clocks = [wholeTime];
          format = 'fill';
          break;
        }
        case 'clock-draw-whole': {
          const drawPrompts = [
            `在钟面上画出 ${label} 的时针和分针。`,
            `请在钟面上补全 ${label} 的指针（短针指几，长针指12）。`,
            `画一画：请在钟面上表示出 ${label}。`,
          ];
          question = drawPrompts[attempts % drawPrompts.length];
          answer = label;
          clocks = [null];
          answerDiagram = { kind: 'clock', clocks: [wholeTime] };
          format = 'draw';
          break;
        }
        case 'clock-time-shift': {
          const isAfter = attempts % 2 === 0;
          if (isAfter) {
            const nextH = h === 12 ? 1 : h + 1;
            question = `看钟面（${h}时），过 1 小时是（ ）时。`;
            answer = `${nextH}时`;
          } else {
            const prevH = h === 1 ? 12 : h - 1;
            question = `看钟面（${h}时），1 小时前是（ ）时。`;
            answer = `${prevH}时`;
          }
          clocks = [wholeTime];
          format = 'fill';
          break;
        }
        case 'clock-choice-whole': {
          const correct = attempts % 3;
          const w1 = ((h + 2) % 12) + 1;
          const w2 = ((h + 5) % 12) + 1;
          const hours = correct === 0 ? [h, w1, w2] : (correct === 1 ? [w1, h, w2] : [w1, w2, h]);
          clocks = hours.map(hr => ({ hour: hr, minute: 0 }));
          question = `哪一个钟面显示 ${label}？`;
          answer = ['A', 'B', 'C'][correct];
          format = 'choice';
          break;
        }
        case 'clock-approximate-time': {
          const isAboutBefore = attempts % 2 === 0;
          if (isAboutBefore) {
            const prevH = h === 1 ? 12 : h - 1;
            clocks = [{ hour: prevH, minute: 55 }];
            const prompts = [
              `观察钟面，分针快走到12，时针快指到 ${h}，这时可以说是快到（ ）时了。`,
              `看钟面上的指针位置，此时大约是快到（ ）时整。`,
              `观察钟面，现在的时刻可以说成是：快到（ ）时。`,
            ];
            question = prompts[attempts % prompts.length];
            answer = `${h}`;
          } else {
            clocks = [{ hour: h, minute: 5 }];
            const prompts = [
              `观察钟面，分针刚走过12，时针刚走过 ${h}，这时可以说是刚过（ ）时。`,
              `看钟面上的指针位置，此时大约是刚过（ ）时整。`,
              `观察钟面，现在的时刻可以说成是：刚过（ ）时。`,
            ];
            question = prompts[attempts % prompts.length];
            answer = `${h}`;
          }
          format = 'fill';
          break;
        }
        case 'clock-daily-routine': {
          const routines = [
            { act: '早晨背书包去上学', h: 8, prompt: '小明在这一时刻正在（ ）。' },
            { act: '中午在学校吃午餐', h: 12, prompt: '同学们在这一时刻正在（ ）。' },
            { act: '下午在操场做运动', h: 4, prompt: '亮亮在这一时刻正在（ ）。' },
            { act: '晚上准时上床睡觉', h: 9, prompt: '红红在这一时刻正在（ ）。' },
            { act: '上午去图书馆看书', h: 10, prompt: '周末上午这一时刻小华正在（ ）。' },
            { act: '下午参加美术兴趣班', h: 3, prompt: '周末下午这一时刻明明正在（ ）。' },
            { act: '早晨起床刷牙洗脸', h: 7, prompt: '天天在这一时刻正在（ ）。' },
            { act: '晚上和爸爸妈妈吃晚餐', h: 6, prompt: '全家人在这一时刻正在（ ）。' },
          ];
          const r = routines[attempts % routines.length];
          clocks = [{ hour: r.h, minute: 0 }];
          question = `看钟面（${r.h}时整），${r.prompt}（填对应活动名称）`;
          answer = r.act;
          format = 'fill';
          break;
        }
      }
    } else {
      // ---------------- 二年级逻辑 ----------------
      const h = ((attempts * 3 + randomInt(1, 11)) % 12) + 1;

      switch (subtemplateId) {
        case 'time-read-5min': {
          const m = (((attempts + 1) * 7) % 12) * 5;
          const time = { hour: h, minute: m };
          const label = timeText(time);
          question = attempts % 2 === 0 ? '看钟面，写出时间。' : '认一认钟面上的时刻。';
          answer = label;
          clocks = [time];
          format = 'fill';
          break;
        }
        case 'time-draw-5min': {
          const m = ((attempts * 3 + 1) % 12) * 5;
          const time = { hour: h, minute: m };
          const label = timeText(time);
          question = `在钟面上画出 ${label} 的时针和分针。`;
          answer = label;
          clocks = [null];
          answerDiagram = { kind: 'clock', clocks: [time] };
          format = 'draw';
          break;
        }
        case 'time-choice-5min': {
          const m = ((attempts * 5 + 2) % 12) * 5;
          const targetTime = { hour: h, minute: m };
          const label = timeText(targetTime);
          const correct = attempts % 3;
          const w1 = { hour: h, minute: (m + 20) % 60 };
          const w2 = { hour: ((h + 2) % 12) + 1, minute: m };
          clocks = correct === 0 ? [targetTime, w1, w2] : (correct === 1 ? [w1, targetTime, w2] : [w1, w2, targetTime]);
          question = `哪一个钟面显示 ${label}？`;
          answer = ['A', 'B', 'C'][correct];
          format = 'choice';
          break;
        }
        case 'time-read-1min': {
          const m = ((attempts * 17 + 7) % 59) + 1;
          const time = { hour: h, minute: m };
          const label = timeText(time);
          question = attempts % 2 === 0 ? '看钟面，写出时间。' : '认一认钟面上的精准时刻。';
          answer = label;
          clocks = [time];
          format = 'fill';
          break;
        }
        case 'time-draw-accurate': {
          const m = [15, 30, 45, 50, 55][attempts % 5];
          const time = { hour: h, minute: m };
          const label = timeText(time);
          question = `在钟面上画出 ${label} 的时针和分针。`;
          answer = label;
          clocks = [null];
          answerDiagram = { kind: 'clock', clocks: [time] };
          format = 'draw';
          break;
        }
        case 'time-elapsed-fill': {
          const startM = (attempts % 6) * 5;
          const dur = 20 + (attempts % 5) * 5;
          const endM = startM + dur;
          const startTime = { hour: h, minute: startM };
          clocks = [startTime];
          question = `看钟面（${timeText(startTime)}），亮亮开始踢球，踢了 ${dur} 分钟，结束时间是（ ）时（ ）分。`;
          answer = `${h}时${endM}分`;
          format = 'fill';
          break;
        }
        case 'time-draw-future': {
          const m = (attempts % 6) * 5;
          const nextM = m + 20;
          const currentTime = { hour: h, minute: m };
          const futureTime = { hour: h, minute: nextM };
          const futureLabel = timeText(futureTime);
          question = `钟面上现在是 ${timeText(currentTime)}，请画出过20分钟后（${futureLabel}）的时针和分针。`;
          answer = futureLabel;
          clocks = [null];
          answerDiagram = { kind: 'clock', clocks: [futureTime] };
          format = 'draw';
          break;
        }
      }
    }

    const key = clocks ? JSON.stringify([question, clocks]) : question;
    if (seen.has(key)) continue;
    seen.add(key);

    out.push({
      question,
      answer,
      format,
      subtype: 'unit-clock',
      subtemplateId,
      band: difficulty,
      diagram: { kind: 'clock', clocks },
      answerDiagram,
    });
  }

  return out;
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
      if (difficulty === 'easy') {
        tasks = [
          ['read-cell', '二组第二天收集了多少张？', second[1]],
          ['read-cell-day1', '一组第一天收集了多少张？', values[0]],
          ['group-total', '三组两天一共收集了多少张？', values[2] + second[2]],
          ['day-total', '第一天四个小组一共收集了多少张？', dayOne],
          ['day-total-second', '第二天四个小组一共收集了多少张？', dayTwo],
          ['group-change', '四组第二天比第一天多收集多少张？', growth[3]],
          ['cross-day', '一组第一天和四组第二天合计收集了多少张？', values[0] + second[3]],
        ];
      } else if (difficulty === 'hard') {
        tasks = [
          ['group-change', '四组第二天比第一天多收集多少张？', growth[3]],
          ['day-change', '四个小组第二天合计比第一天多收集多少张？', dayTwo - dayOne],
          ['cross-day', '一组第一天和四组第二天合计收集了多少张？', values[0] + second[3]],
          ['greatest-change', '哪个小组第二天增加得最多？如果并列，请都写出来。', labels.filter((_, i) => growth[i] === Math.max(...growth)).join('、')],
          ['missing-from-target', `二组想在两天内收集 ${target} 张，还差多少张？`, target - values[1] - second[1]],
          ['least-change', '哪个小组第二天增加得最少？如果并列，请都写出来。', labels.filter((_, i) => growth[i] === Math.min(...growth)).join('、')],
          ['multi-group-compare', '第一天收集最多的组比第二天收集最少的组多多少张？', Math.max(...values) - Math.min(...second)],
        ];
      } else {
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
      }
    } else if (plugin === 'pie-chart') {
      const cuts = [randomInt(2, 7), randomInt(8, 12), randomInt(13, 18)];
      diagram.values = [cuts[0], cuts[1] - cuts[0], cuts[2] - cuts[1], 20 - cuts[2]].map(n => n * 5);
      const total = randomInt(5, 20) * 20;
      const [story, science, history, art] = diagram.values;
      const pct = n => `${n}%`;
      const bookCount = n => `${n} 本`;
      if (difficulty === 'easy') {
        tasks = [
          ['read-share', '科普书占借阅总数的百分之几？', pct(science)],
          ['read-share-story', '故事书占借阅总数的百分之几？', pct(story)],
          ['combine-shares', '故事书与历史书合计占借阅总数的百分之几？', pct(story + history)],
          ['share-to-count', `一共借出 ${total} 本书，其中有多少本艺术书？`, bookCount(total * art / 100)],
          ['rank-shares', '哪类书借得最多？如果并列，请都写出来。', labels.filter((_, i) => diagram.values[i] === Math.max(...diagram.values)).join('、')],
          ['remaining-share', '除科普书外，其余图书合计占借阅总数的百分之几？', pct(100 - science)],
          ['compare-shares', '故事书和艺术书的占比相差多少个百分点？', `${Math.abs(story - art)} 个百分点`],
          ['count-to-total', `科普书借出了 ${total * science / 100} 本。一共借出了多少本书？`, bookCount(total)],
          ['count-difference', `一共借出 ${total} 本书。科普书与历史书的借阅量相差多少本？`, bookCount(total * Math.abs(science - history) / 100)],
          ['share-threshold', '哪些类别的借阅量达到或超过总数的四分之一？', labels.filter((_, i) => diagram.values[i] >= 25).join('、')],
        ];
      } else if (difficulty === 'hard') {
        tasks = [
          ['combine-shares', '故事书与历史书合计占借阅总数的百分之几？', pct(story + history)],
          ['share-to-count', `一共借出 ${total} 本书，其中有多少本艺术书？`, bookCount(total * art / 100)],
          ['rank-shares', '哪类书借得最多？如果并列，请都写出来。', labels.filter((_, i) => diagram.values[i] === Math.max(...diagram.values)).join('、')],
          ['remaining-share', '除科普书外，其余图书合计占借阅总数的百分之几？', pct(100 - science)],
          ['compare-shares', '故事书和艺术书的占比相差多少个百分点？', `${Math.abs(story - art)} 个百分点`],
          ['count-to-total', `科普书借出了 ${total * science / 100} 本。一共借出了多少本书？`, bookCount(total)],
          ['count-to-count', `故事书借出了 ${total * story / 100} 本。历史书借出了多少本？`, bookCount(total * history / 100)],
          ['count-difference', `一共借出 ${total} 本书。科普书与历史书的借阅量相差多少本？`, bookCount(total * Math.abs(science - history) / 100)],
          ['share-threshold', '哪些类别的借阅量达到或超过总数的四分之一？', labels.filter((_, i) => diagram.values[i] >= 25).join('、')],
          ['share-ratio-compare', `科普书借出量是艺术书借出量的几倍？（填小数或整数）`, Number((science / art).toFixed(2))],
        ];
      } else {
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
      }
    } else {
      if (plugin === 'bar-average') values[3] += (4 - values.reduce((a, b) => a + b) % 4) % 4;
      const sum = values.reduce((total, n) => total + n);
      const max = Math.max(...values);
      const min = Math.min(...values);
      const threshold = 20 * scale;
      const changes = values.slice(1).map((n, i) => n - values[i]);

      if (plugin === 'bar-average') {
        if (difficulty === 'easy') {
          tasks = [
            ['read-value', `${labels[1]}收集了多少张？`, values[1]],
            ['read-value-alt', `${labels[2]}收集了多少张？`, values[2]],
            ['combine-values', `${labels[0]}和${labels[2]}合计收集了多少张？`, values[0] + values[2]],
            ['compare-values', `${labels[3]}和${labels[2]}收集的数量相差多少张？`, Math.abs(values[3] - values[2])],
            ['find-extrema', '收集最多和最少的分别是哪一项？如果并列，请都写出来。', `${labels.filter((_, i) => values[i] === max).join('、')}最多，${labels.filter((_, i) => values[i] === min).join('、')}最少`],
            ['total', '四项合计收集了多少张卡片？', sum],
            ['average', '平均每组收集了多少张？', sum / 4],
          ];
        } else if (difficulty === 'hard') {
          tasks = [
            ['combine-values', `${labels[0]}和${labels[2]}合计收集了多少张？`, values[0] + values[2]],
            ['compare-values', `${labels[3]}和${labels[2]}收集的数量相差多少张？`, Math.abs(values[3] - values[2])],
            ['find-extrema', '收集最多和最少的分别是哪一项？如果并列，请都写出来。', `${labels.filter((_, i) => values[i] === max).join('、')}最多，${labels.filter((_, i) => values[i] === min).join('、')}最少`],
            ['total', '四项合计收集了多少张卡片？', sum],
            ['average', '平均每组收集了多少张？', sum / 4],
            ['above-average', '哪些小组收集的张数高于平均数？', labels.filter((_, i) => values[i] > sum / 4).join('、')],
            ['below-average', '哪些小组收集的张数低于平均数？', labels.filter((_, i) => values[i] < sum / 4).join('、')],
            ['target-average', `如果再加一个五组，要使五组的平均数达到 ${Math.ceil(sum / 4) + 5} 张，五组需要收集多少张？`, (Math.ceil(sum / 4) + 5) * 5 - sum],
          ];
        } else {
          tasks = [
            ['read-value', `${labels[1]}收集了多少张？`, values[1]],
            ['combine-values', `${labels[0]}和${labels[2]}合计收集了多少张？`, values[0] + values[2]],
            ['compare-values', `${labels[3]}和${labels[2]}收集的数量相差多少张？`, Math.abs(values[3] - values[2])],
            ['find-extrema', '收集最多和最少的分别是哪一项？如果并列，请都写出来。', `${labels.filter((_, i) => values[i] === max).join('、')}最多，${labels.filter((_, i) => values[i] === min).join('、')}最少`],
            ['total', '四项合计收集了多少张卡片？', sum],
            ['threshold', `哪些项目收集的卡片达到或超过 ${threshold} 张？`, labels.filter((_, i) => values[i] >= threshold).join('、')],
            ['target', `目标是收集 ${Math.ceil(sum / 10) * 10 + 10} 张，还差多少张？`, Math.ceil(sum / 10) * 10 + 10 - sum],
            ['average', '平均每组收集了多少张？', sum / 4],
            ['above-average', '哪些小组收集的张数高于平均数？', labels.filter((_, i) => values[i] > sum / 4).join('、')],
          ];
        }
      } else if (plugin === 'line-chart') {
        if (difficulty === 'easy') {
          tasks = [
            ['read-value', `${labels[1]}收集了多少张？`, values[1]],
            ['read-value-alt', `${labels[2]}收集了多少张？`, values[2]],
            ['combine-values', `${labels[0]}和${labels[2]}合计收集了多少张？`, values[0] + values[2]],
            ['compare-values', `${labels[3]}和${labels[0]}收集的数量相差多少张？`, Math.abs(values[3] - values[0])],
            ['find-extrema', '收集最多和最少的分别是哪一天？如果并列，请都写出来。', `${labels.filter((_, i) => values[i] === max).join('、')}最多，${labels.filter((_, i) => values[i] === min).join('、')}最少`],
            ['total', '四天合计收集了多少张卡片？', sum],
            ['rising-intervals', '哪几个相邻日期之间，卡片数量增加了？如果没有，写“没有”。', changes.flatMap((n, i) => n > 0 ? [`${labels[i]}到${labels[i + 1]}`] : []).join('、') || '没有'],
          ];
        } else if (difficulty === 'hard') {
          const pos = changes.map((n, i) => ({ n, i })).filter(x => x.n > 0);
          const maxG = pos.length ? Math.max(...pos.map(x => x.n)) : 0;
          const fastest = pos.length ? pos.filter(x => x.n === maxG).map(x => `${labels[x.i]}到${labels[x.i + 1]}`).join('、') : '没有';
          tasks = [
            ['combine-values', `${labels[0]}和${labels[2]}合计收集了多少张？`, values[0] + values[2]],
            ['compare-values', `${labels[3]}和${labels[0]}收集的数量相差多少张？`, Math.abs(values[3] - values[0])],
            ['find-extrema', '收集最多和最少的分别是哪一天？如果并列，请都写出来。', `${labels.filter((_, i) => values[i] === max).join('、')}最多，${labels.filter((_, i) => values[i] === min).join('、')}最少`],
            ['total', '四天合计收集了多少张卡片？', sum],
            ['fastest-growth', '哪两个相邻日期之间增加得最多？如果没有增加，写“没有”。', fastest],
            ['declining-intervals', '哪几个相邻日期之间，卡片数量减少了？如果没有，写“没有”。', changes.flatMap((n, i) => n < 0 ? [`${labels[i]}到${labels[i + 1]}`] : []).join('、') || '没有'],
            ['target', `目标是收集 ${Math.ceil(sum / 10) * 10 + 10} 张，还差多少张？`, Math.ceil(sum / 10) * 10 + 10 - sum],
          ];
        } else {
          tasks = [
            ['read-value', `${labels[1]}收集了多少张？`, values[1]],
            ['combine-values', `${labels[0]}和${labels[2]}合计收集了多少张？`, values[0] + values[2]],
            ['compare-values', `${labels[3]}和${labels[0]}收集的数量相差多少张？`, Math.abs(values[3] - values[0])],
            ['find-extrema', '收集最多和最少的分别是哪一天？如果并列，请都写出来。', `${labels.filter((_, i) => values[i] === max).join('、')}最多，${labels.filter((_, i) => values[i] === min).join('、')}最少`],
            ['total', '四天合计收集了多少张卡片？', sum],
            ['threshold', `哪些项目收集的卡片达到或超过 ${threshold} 张？`, labels.filter((_, i) => values[i] >= threshold).join('、')],
            ['target', `目标是收集 ${Math.ceil(sum / 10) * 10 + 10} 张，还差多少张？`, Math.ceil(sum / 10) * 10 + 10 - sum],
            ['rising-intervals', '哪几个相邻日期之间，卡片数量增加了？如果没有，写“没有”。', changes.flatMap((n, i) => n > 0 ? [`${labels[i]}到${labels[i + 1]}`] : []).join('、') || '没有'],
          ];
        }
      } else {
        // data-table, bar-chart
        if (difficulty === 'easy') {
          tasks = [
            ['read-value', `${labels[1]}收集了多少张？`, values[1]],
            ['read-value-alt', `${labels[2]}收集了多少张？`, values[2]],
            ['combine-values', `${labels[0]}和${labels[2]}合计收集了多少张？`, values[0] + values[2]],
            ['compare-values', `${labels[3]}和${labels[2]}收集的数量相差多少张？`, Math.abs(values[3] - values[2])],
            ['find-extrema', '收集最多和最少的分别是哪一项？如果并列，请都写出来。', `${labels.filter((_, i) => values[i] === max).join('、')}最多，${labels.filter((_, i) => values[i] === min).join('、')}最少`],
            ['total', '四项合计收集了多少张卡片？', sum],
            ['total-half', `${labels[0]}和${labels[1]}两组一共收集了多少张？`, values[0] + values[1]],
          ];
        } else if (difficulty === 'hard') {
          tasks = [
            ['combine-values', `${labels[0]}和${labels[2]}合计收集了多少张？`, values[0] + values[2]],
            ['compare-values', `${labels[3]}和${labels[2]}收集的数量相差多少张？`, Math.abs(values[3] - values[2])],
            ['find-extrema', '收集最多和最少的分别是哪一项？如果并列，请都写出来。', `${labels.filter((_, i) => values[i] === max).join('、')}最多，${labels.filter((_, i) => values[i] === min).join('、')}最少`],
            ['total', '四项合计收集了多少张卡片？', sum],
            ['threshold', `哪些项目收集的卡片达到或超过 ${threshold} 张？`, labels.filter((_, i) => values[i] >= threshold).join('、')],
            ['target', `目标是收集 ${Math.ceil(sum / 10) * 10 + 10} 张，还差多少张？`, Math.ceil(sum / 10) * 10 + 10 - sum],
            ['rank-values', '按收集数量从多到少排序，排在第二位的是哪个项目？', labels.slice().sort((a, b) => values[labels.indexOf(b)] - values[labels.indexOf(a)])[1]],
          ];
        } else {
          tasks = [
            ['read-value', `${labels[1]}收集了多少张？`, values[1]],
            ['combine-values', `${labels[0]}和${labels[2]}合计收集了多少张？`, values[0] + values[2]],
            ['compare-values', `${labels[3]}和${labels[2]}收集的数量相差多少张？`, Math.abs(values[3] - values[2])],
            ['find-extrema', '收集最多和最少的分别是哪一项？如果并列，请都写出来。', `${labels.filter((_, i) => values[i] === max).join('、')}最多，${labels.filter((_, i) => values[i] === min).join('、')}最少`],
            ['total', '四项合计收集了多少张卡片？', sum],
            ['threshold', `哪些项目收集的卡片达到或超过 ${threshold} 张？`, labels.filter((_, i) => values[i] >= threshold).join('、')],
            ['target', `目标是收集 ${Math.ceil(sum / 10) * 10 + 10} 张，还差多少张？`, Math.ceil(sum / 10) * 10 + 10 - sum],
          ];
        }
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
