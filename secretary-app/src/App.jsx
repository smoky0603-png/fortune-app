import { useEffect, useState } from "react";
import { parseNaturalLanguage } from "./nlDate.js";
import { localExtractTasks, localDraftEmail } from "./localFallback.js";
import { buildExtractPrompt, buildEmailPrompt, parseExtractedTasks } from "./ai.js";
import { TermsOfService, PrivacyPolicy } from "./legal/LegalPages.jsx";

const STYLE = [
  "* { box-sizing: border-box; margin: 0; padding: 0; }",
  ":root { --work: #4f46e5; --private: #db2777; --bg: #f6f7fb; --card: #ffffff; --border: #e4e6ef; --text: #23263a; --muted: #767b8a; --high: #d92d20; --low: #9aa0ae; }",
  "body { font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif; }",
  ".app { min-height: 100vh; background: var(--bg); color: var(--text); }",
  ".wrap { max-width: 640px; margin: 0 auto; padding: 0 16px 80px; }",
  ".hero { padding: 36px 0 20px; }",
  ".hero-title { font-size: 24px; font-weight: 700; margin-bottom: 6px; }",
  ".hero-sub { font-size: 13px; color: var(--muted); line-height: 1.6; }",
  ".privacy-banner { background: #eef0fb; border: 1px solid var(--border); border-radius: 10px; padding: 12px 14px; font-size: 12px; color: var(--muted); margin: 16px 0; line-height: 1.7; }",
  ".privacy-banner a { color: var(--work); cursor: pointer; text-decoration: underline; }",
  ".card { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 18px; margin-bottom: 16px; }",
  ".card-title { font-size: 13px; font-weight: 700; margin-bottom: 12px; letter-spacing: 0.02em; }",
  ".quickadd-row { display: flex; gap: 8px; margin-bottom: 10px; }",
  ".cat-toggle { display: flex; gap: 6px; margin-bottom: 10px; }",
  ".cat-btn { flex: 1; padding: 8px; border-radius: 8px; border: 1px solid var(--border); background: #fff; font-size: 12px; cursor: pointer; color: var(--muted); }",
  ".cat-btn.active.work { border-color: var(--work); color: var(--work); background: #eef0fd; }",
  ".cat-btn.active.private { border-color: var(--private); color: var(--private); background: #fdeef5; }",
  "input, textarea, select { font-family: inherit; font-size: 13px; border: 1px solid var(--border); border-radius: 8px; padding: 10px 12px; outline: none; color: var(--text); background: #fff; width: 100%; }",
  "input:focus, textarea:focus, select:focus { border-color: #b9bdf0; }",
  ".btn { border: none; border-radius: 8px; padding: 10px 16px; font-size: 12px; font-weight: 700; cursor: pointer; background: var(--text); color: #fff; white-space: nowrap; }",
  ".btn:disabled { opacity: 0.4; cursor: not-allowed; }",
  ".btn.secondary { background: #fff; color: var(--text); border: 1px solid var(--border); }",
  ".filter-tabs { display: flex; gap: 8px; margin: 4px 0 16px; }",
  ".filter-tab { padding: 6px 14px; border-radius: 999px; border: 1px solid var(--border); background: #fff; font-size: 12px; cursor: pointer; color: var(--muted); }",
  ".filter-tab.active { background: var(--text); color: #fff; border-color: var(--text); }",
  ".day-group { margin-bottom: 14px; }",
  ".day-label { font-size: 11px; font-weight: 700; color: var(--muted); margin-bottom: 8px; letter-spacing: 0.05em; }",
  ".task-item { display: flex; align-items: center; gap: 10px; background: #fff; border: 1px solid var(--border); border-radius: 10px; padding: 10px 12px; margin-bottom: 8px; cursor: grab; }",
  ".task-item.done .task-title { text-decoration: line-through; color: var(--muted); }",
  ".dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }",
  ".dot.work { background: var(--work); }",
  ".dot.private { background: var(--private); }",
  ".task-title { flex: 1; font-size: 13px; }",
  ".task-time { font-size: 11px; color: var(--muted); }",
  ".task-priority { font-size: 10px; padding: 2px 8px; border-radius: 999px; }",
  ".task-priority.high { background: #fee4e2; color: var(--high); }",
  ".task-priority.mid { background: #eef0f4; color: var(--muted); }",
  ".task-priority.low { background: #f2f3f5; color: var(--low); }",
  ".task-del { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 14px; }",
  ".empty { font-size: 12px; color: var(--muted); padding: 20px 0; text-align: center; }",
  ".extract-result { border: 1px dashed var(--border); border-radius: 10px; padding: 10px; margin-top: 12px; }",
  ".extract-row { display: flex; align-items: center; gap: 8px; padding: 6px 0; border-bottom: 1px solid var(--border); }",
  ".extract-row:last-child { border-bottom: none; }",
  ".extract-info { flex: 1; font-size: 12px; }",
  ".tone-row { display: flex; gap: 8px; margin: 10px 0; }",
  ".tone-btn { flex: 1; padding: 8px; border-radius: 8px; border: 1px solid var(--border); background: #fff; font-size: 12px; cursor: pointer; color: var(--muted); }",
  ".tone-btn.active { border-color: var(--text); color: var(--text); background: #f0f0f2; }",
  ".draft-output { white-space: pre-wrap; font-size: 13px; line-height: 1.8; background: #fafafb; border: 1px solid var(--border); border-radius: 8px; padding: 12px; margin-top: 10px; }",
  ".footer { display: flex; justify-content: center; gap: 16px; padding: 24px 0 8px; flex-wrap: wrap; }",
  ".footer-link { font-size: 11px; color: var(--muted); background: none; border: none; cursor: pointer; }",
  ".footer-link.danger { color: var(--high); }",
  ".legal-page { padding: 40px 0; }",
  ".legal-back { background: none; border: none; color: var(--muted); font-size: 12px; cursor: pointer; margin-bottom: 20px; }",
  ".legal-title { font-size: 20px; margin-bottom: 20px; }",
  ".legal-body h2 { font-size: 14px; margin: 18px 0 6px; }",
  ".legal-body p { font-size: 13px; line-height: 1.9; color: #3a3e50; }",
].join("\n");

const CATEGORY_LABEL = { work: "仕事", private: "プライベート" };
const PRIORITY_LABEL = { high: "至急", mid: "通常", low: "余裕あり" };
const STORAGE_KEY = "secretary-app-items";

function useLocalStorageState(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch (e) {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // 保存領域が使えない場合は何もしない（次回起動時は初期状態に戻る）
    }
  }, [key, value]);
  return [value, setValue];
}

function formatDayLabel(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  return d.getMonth() + 1 + "/" + d.getDate() + "（" + weekdays[d.getDay()] + "）";
}

const LEGAL_PAGES = { "#/terms": TermsOfService, "#/privacy": PrivacyPolicy };

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const [items, setItems] = useLocalStorageState(STORAGE_KEY, []);

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [quickAddText, setQuickAddText] = useState("");
  const [quickCategory, setQuickCategory] = useState("work");

  const [extractText, setExtractText] = useState("");
  const [extractLoading, setExtractLoading] = useState(false);
  const [extractResult, setExtractResult] = useState([]);

  const [emailContext, setEmailContext] = useState("");
  const [emailTone, setEmailTone] = useState("polite");
  const [emailDraft, setEmailDraft] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);

  const LegalPage = LEGAL_PAGES[hash];
  if (LegalPage) {
    return (
      <>
        <style>{STYLE}</style>
        <div className="app">
          <div className="wrap">
            <LegalPage onBack={() => (window.location.hash = "")} />
          </div>
        </div>
      </>
    );
  }

  const addItem = (partial) => {
    setItems((prev) => [...prev, { id: crypto.randomUUID(), done: false, time: null, priority: "mid", ...partial }]);
  };

  const handleQuickAdd = () => {
    const trimmed = quickAddText.trim();
    if (!trimmed) return;
    const parsed = parseNaturalLanguage(trimmed);
    addItem({ title: parsed.title, date: parsed.date, time: parsed.time, category: quickCategory });
    setQuickAddText("");
  };

  const toggleDone = (id) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));
  const deleteItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const handleDragStart = (e, id) => e.dataTransfer.setData("text/plain", id);

  const handleDropOnItem = (e, targetId) => {
    e.preventDefault();
    e.stopPropagation();
    const draggedId = e.dataTransfer.getData("text/plain");
    if (!draggedId || draggedId === targetId) return;
    setItems((prev) => {
      const dragged = prev.find((i) => i.id === draggedId);
      const target = prev.find((i) => i.id === targetId);
      if (!dragged || !target) return prev;
      const without = prev.filter((i) => i.id !== draggedId);
      const targetIdx = without.findIndex((i) => i.id === targetId);
      const next = [...without];
      next.splice(targetIdx, 0, { ...dragged, date: target.date });
      return next;
    });
  };

  const handleDropOnDay = (e, date) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("text/plain");
    if (!draggedId) return;
    setItems((prev) => prev.map((i) => (i.id === draggedId ? { ...i, date } : i)));
  };

  const visibleItems = items.filter((i) => categoryFilter === "all" || i.category === categoryFilter);
  const dateKeys = [...new Set(visibleItems.map((i) => i.date))].sort();

  const handleExtract = async () => {
    if (!extractText.trim()) return;
    setExtractLoading(true);
    try {
      const res = await fetch("/api/ai-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: buildExtractPrompt(extractText) }],
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error?.message || data.error || "API error");
      const text = data.content ? data.content.map((b) => b.text || "").join("") : "";
      const tasks = parseExtractedTasks(text);
      if (!tasks.length) throw new Error("empty result");
      setExtractResult(tasks.map((t) => ({ ...t, tempId: crypto.randomUUID() })));
    } catch (e) {
      const fallback = localExtractTasks(extractText).map((t) => ({ ...t, tempId: crypto.randomUUID() }));
      setExtractResult(fallback);
    } finally {
      setExtractLoading(false);
    }
  };

  const addExtracted = (tempId) => {
    const task = extractResult.find((t) => t.tempId === tempId);
    if (!task) return;
    addItem({ title: task.title, date: task.date, category: "work", priority: task.priority });
    setExtractResult((prev) => prev.filter((t) => t.tempId !== tempId));
  };

  const handleDraftEmail = async () => {
    if (!emailContext.trim()) return;
    setEmailLoading(true);
    try {
      const res = await fetch("/api/ai-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 800,
          messages: [{ role: "user", content: buildEmailPrompt(emailContext, emailTone) }],
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error?.message || data.error || "API error");
      const text = data.content ? data.content.map((b) => b.text || "").join("") : "";
      if (!text.trim()) throw new Error("empty result");
      setEmailDraft(text.trim());
    } catch (e) {
      setEmailDraft(localDraftEmail(emailContext, emailTone));
    } finally {
      setEmailLoading(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(emailDraft).catch(() => {});
  };

  const handleClearAll = () => {
    if (!window.confirm("すべての予定・タスクをこの端末から削除します。よろしいですか？")) return;
    setItems([]);
  };

  return (
    <>
      <style>{STYLE}</style>
      <div className="app">
        <div className="wrap">
          <div className="hero">
            <div className="hero-title">AI秘書</div>
            <div className="hero-sub">予定・タスクの管理と、メモからのタスク抽出、メール下書きをまとめてサポートします</div>
          </div>

          <div className="privacy-banner">
            予定・タスクはこの端末にのみ保存されます。AI機能を使った時だけ、入力内容がAI提供元に送信されます。
            詳しくは<a onClick={() => (window.location.hash = "#/privacy")}>プライバシーポリシー</a>をご確認ください。
          </div>

          <div className="card">
            <div className="card-title">予定・タスクをすぐ追加</div>
            <div className="cat-toggle">
              <button
                className={"cat-btn work" + (quickCategory === "work" ? " active" : "")}
                onClick={() => setQuickCategory("work")}
              >
                仕事
              </button>
              <button
                className={"cat-btn private" + (quickCategory === "private" ? " active" : "")}
                onClick={() => setQuickCategory("private")}
              >
                プライベート
              </button>
            </div>
            <div className="quickadd-row">
              <input
                placeholder="例: 明日15時 山田さんとMTG"
                value={quickAddText}
                onChange={(e) => setQuickAddText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleQuickAdd()}
              />
              <button className="btn" onClick={handleQuickAdd}>
                追加
              </button>
            </div>
          </div>

          <div className="filter-tabs">
            {["all", "work", "private"].map((f) => (
              <button
                key={f}
                className={"filter-tab" + (categoryFilter === f ? " active" : "")}
                onClick={() => setCategoryFilter(f)}
              >
                {f === "all" ? "すべて" : CATEGORY_LABEL[f]}
              </button>
            ))}
          </div>

          {dateKeys.length === 0 && <div className="empty">予定・タスクはまだありません</div>}

          {dateKeys.map((date) => (
            <div className="day-group" key={date} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDropOnDay(e, date)}>
              <div className="day-label">{formatDayLabel(date)}</div>
              {visibleItems
                .filter((i) => i.date === date)
                .map((item) => (
                  <div
                    className={"task-item" + (item.done ? " done" : "")}
                    key={item.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item.id)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDropOnItem(e, item.id)}
                  >
                    <input type="checkbox" checked={item.done} onChange={() => toggleDone(item.id)} style={{ width: "auto" }} />
                    <span className={"dot " + item.category} />
                    <span className="task-title">{item.title}</span>
                    {item.time && <span className="task-time">{item.time}</span>}
                    <span className={"task-priority " + item.priority}>{PRIORITY_LABEL[item.priority]}</span>
                    <button className="task-del" onClick={() => deleteItem(item.id)}>
                      ×
                    </button>
                  </div>
                ))}
            </div>
          ))}

          <div className="card">
            <div className="card-title">メモからタスクを抽出</div>
            <textarea
              rows={4}
              placeholder="会議のメモや箇条書きを貼り付けてください"
              value={extractText}
              onChange={(e) => setExtractText(e.target.value)}
            />
            <button className="btn" style={{ marginTop: 10 }} disabled={extractLoading} onClick={handleExtract}>
              {extractLoading ? "抽出中..." : "タスクを抽出"}
            </button>

            {extractResult.length > 0 && (
              <div className="extract-result">
                {extractResult.map((task) => (
                  <div className="extract-row" key={task.tempId}>
                    <div className="extract-info">
                      {task.title}
                      <span className={"task-priority " + task.priority} style={{ marginLeft: 8 }}>
                        {PRIORITY_LABEL[task.priority]}
                      </span>
                      <span className="task-time" style={{ marginLeft: 8 }}>
                        {task.date}
                      </span>
                    </div>
                    <button className="btn secondary" onClick={() => addExtracted(task.tempId)}>
                      追加
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="card">
            <div className="card-title">メール下書きを作成</div>
            <textarea
              rows={4}
              placeholder="伝えたい状況・目的を入力してください（例: 明日の会議を30分遅らせてほしい）"
              value={emailContext}
              onChange={(e) => setEmailContext(e.target.value)}
            />
            <div className="tone-row">
              <button
                className={"tone-btn" + (emailTone === "polite" ? " active" : "")}
                onClick={() => setEmailTone("polite")}
              >
                丁寧
              </button>
              <button
                className={"tone-btn" + (emailTone === "casual" ? " active" : "")}
                onClick={() => setEmailTone("casual")}
              >
                フランク
              </button>
            </div>
            <button className="btn" disabled={emailLoading} onClick={handleDraftEmail}>
              {emailLoading ? "作成中..." : "下書きを作成"}
            </button>
            {emailDraft && (
              <>
                <div className="draft-output">{emailDraft}</div>
                <button className="btn secondary" style={{ marginTop: 8 }} onClick={handleCopyEmail}>
                  コピー
                </button>
              </>
            )}
          </div>

          <div className="footer">
            <button className="footer-link" onClick={() => (window.location.hash = "#/terms")}>
              利用規約
            </button>
            <button className="footer-link" onClick={() => (window.location.hash = "#/privacy")}>
              プライバシーポリシー
            </button>
            <button className="footer-link danger" onClick={handleClearAll}>
              全データを削除
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
