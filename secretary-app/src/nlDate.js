const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

function toISODate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

// 「明日15時 山田さんとMTG」のような1行の自然文から日付・時刻・タイトルを抽出する
export function parseNaturalLanguage(input, now = new Date()) {
  let text = input;
  let date = null;

  const relativeDays = { 今日: 0, 本日: 0, 明日: 1, 明後日: 2, 明々後日: 3 };
  for (const word of Object.keys(relativeDays)) {
    if (text.includes(word)) {
      const d = new Date(now);
      d.setDate(d.getDate() + relativeDays[word]);
      date = toISODate(d);
      text = text.replace(word, "");
      break;
    }
  }

  if (!date) {
    const nextWeekMatch = text.match(/来週(月|火|水|木|金|土|日)曜?日?/);
    if (nextWeekMatch) {
      const wd = WEEKDAYS.indexOf(nextWeekMatch[1]);
      const d = new Date(now);
      // 今週月曜（週の始まり）からの経過日数を引いて、来週の対象曜日まで進める
      const daysSinceMonday = (d.getDay() + 6) % 7;
      const thisMonday = new Date(d);
      thisMonday.setDate(d.getDate() - daysSinceMonday);
      const wdFromMonday = (wd + 6) % 7;
      thisMonday.setDate(thisMonday.getDate() + wdFromMonday + 7);
      date = toISODate(thisMonday);
      text = text.replace(nextWeekMatch[0], "");
    }
  }

  if (!date) {
    const wdMatch = text.match(/(月|火|水|木|金|土|日)曜日?/);
    if (wdMatch) {
      const wd = WEEKDAYS.indexOf(wdMatch[1]);
      const d = new Date(now);
      const diff = (wd - d.getDay() + 7) % 7 || 7;
      d.setDate(d.getDate() + diff);
      date = toISODate(d);
      text = text.replace(wdMatch[0], "");
    }
  }

  if (!date) {
    const dm = text.match(/(\d{1,2})\/(\d{1,2})/) || text.match(/(\d{1,2})月(\d{1,2})日/);
    if (dm) {
      const month = parseInt(dm[1], 10);
      const day = parseInt(dm[2], 10);
      const d = new Date(now.getFullYear(), month - 1, day);
      if (d < new Date(now.getFullYear(), now.getMonth(), now.getDate())) d.setFullYear(d.getFullYear() + 1);
      date = toISODate(d);
      text = text.replace(dm[0], "");
    }
  }

  if (!date) date = toISODate(now);

  let time = null;
  const tm = text.match(/(\d{1,2}):(\d{2})/) || text.match(/(\d{1,2})時(\d{1,2})?分?/);
  if (tm) {
    const h = String(parseInt(tm[1], 10)).padStart(2, "0");
    const m = tm[2] ? String(parseInt(tm[2], 10)).padStart(2, "0") : "00";
    time = h + ":" + m;
    text = text.replace(tm[0], "");
  }

  const title = text.trim().replace(/^[\s、,]+|[\s、,]+$/g, "") || input.trim();
  return { date, time, title };
}
