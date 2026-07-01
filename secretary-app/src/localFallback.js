// AIが使えない場合でも機能が必ず動くようにするためのローカル簡易処理

export function localExtractTasks(text) {
  const today = new Date().toISOString().slice(0, 10);
  return text
    .split(/\n|。/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 10)
    .map((line) => {
      let priority = "mid";
      if (/至急|緊急|今日中|ASAP/i.test(line)) priority = "high";
      else if (/来週|余裕があれば|そのうち/.test(line)) priority = "low";
      return { title: line, date: today, priority };
    });
}

export function localDraftEmail(context, tone) {
  const greeting = tone === "casual" ? "お疲れさまです。" : "お世話になっております。";
  const closing = tone === "casual" ? "よろしくお願いします！" : "何卒よろしくお願いいたします。";
  return "件名: ご連絡\n\n" + greeting + "\n\n" + context.trim() + "\n\n" + closing;
}
