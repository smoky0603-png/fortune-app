export function buildExtractPrompt(text) {
  const today = new Date().toISOString().slice(0, 10);
  return (
    "あなたは優秀な秘書です。今日の日付は" + today + "です。\n" +
    "以下のメモや会議内容から、実行すべきタスクを抽出してください。\n" +
    "各タスクについて title（タスク名）、date（期限日、YYYY-MM-DD形式。明記がなければ妥当な日を推定）、" +
    "priority（\"high\"|\"mid\"|\"low\"）を持つJSON配列だけを出力してください。説明文やコードブロックは不要です。\n\n" +
    "【メモ】\n" + text
  );
}

export function buildEmailPrompt(context, tone) {
  const toneLabel = tone === "casual" ? "親しみやすいフランクな" : "丁寧なビジネス";
  return (
    "以下の状況・目的を踏まえて、" + toneLabel + "口調の日本語メール文面を、件名と本文の形式で作成してください。\n\n" +
    "【状況・目的】\n" + context
  );
}

export function parseExtractedTasks(rawText) {
  const cleaned = rawText.replace(/```json|```/g, "").trim();
  const jsonMatch = cleaned.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error("no JSON found in AI response");
  const arr = JSON.parse(jsonMatch[0]);
  if (!Array.isArray(arr)) throw new Error("AI response is not an array");
  return arr
    .map((t) => ({
      title: String(t.title || "").trim(),
      date: /^\d{4}-\d{2}-\d{2}$/.test(t.date) ? t.date : new Date().toISOString().slice(0, 10),
      priority: ["high", "mid", "low"].includes(t.priority) ? t.priority : "mid",
    }))
    .filter((t) => t.title);
}
