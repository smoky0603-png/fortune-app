import { useEffect, useState } from "react";
import { drawCards, meaningOf } from "./tarotDeck.js";
import { CardArt } from "./CardArt.jsx";
import { buildLocalReading } from "./localReading.js";
import { TermsOfService, PrivacyPolicy, Tokushoho } from "./legal/LegalPages.jsx";

const FONT_URL = "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap";

const STYLE = [
  "@import url('" + FONT_URL + "');",
  "* { box-sizing: border-box; margin: 0; padding: 0; }",
  ":root { --gold: #c8a96e; --gold-dim: rgba(200,169,110,0.3); --bg: #07060a; --ink: #e8ddd0; --muted: #7a6e62; --deep: rgba(255,255,255,0.04); }",
  ".app { min-height: 100vh; background: var(--bg); color: var(--ink); font-family: 'Zen Kaku Gothic New', sans-serif; font-weight: 300; }",
  ".stars { position: fixed; inset: 0; z-index: 0; pointer-events: none; background: radial-gradient(ellipse at 20% 20%, rgba(90,50,150,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(30,60,100,0.12) 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.05) 0%, transparent 70%); }",
  ".wrap { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; padding: 0 20px 100px; }",
  ".hero { padding: 64px 0 48px; text-align: center; border-bottom: 1px solid var(--gold-dim); }",
  ".hero-emblem { font-family: 'Cormorant Garamond', serif; font-size: 18px; letter-spacing: 0.5em; color: var(--gold); margin-bottom: 28px; font-style: italic; }",
  ".hero-title { font-family: 'Shippori Mincho', serif; font-size: 32px; font-weight: 500; line-height: 1.5; color: var(--ink); margin-bottom: 12px; letter-spacing: 0.08em; }",
  ".hero-sub { font-size: 13px; color: var(--muted); letter-spacing: 0.15em; line-height: 2; }",
  ".section { padding: 40px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }",
  ".section-label { font-size: 10px; letter-spacing: 0.4em; color: var(--gold); text-transform: uppercase; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }",
  ".section-label::after { content: ''; flex: 1; height: 1px; background: var(--gold-dim); }",
  ".theme-grid { display: grid; gap: 12px; }",
  ".theme-card { display: block; width: 100%; text-align: left; padding: 18px 20px; background: var(--deep); border: 1px solid rgba(255,255,255,0.08); color: var(--ink); cursor: pointer; transition: border-color 0.25s, background 0.25s; }",
  ".theme-card:hover { border-color: var(--gold-dim); }",
  ".theme-card.selected { border-color: var(--gold); background: rgba(200,169,110,0.08); }",
  ".theme-title { font-size: 15px; color: var(--ink); margin-bottom: 4px; }",
  ".theme-count { font-size: 10px; color: var(--gold); letter-spacing: 0.1em; margin-left: 8px; }",
  ".theme-desc { font-size: 12px; color: var(--muted); line-height: 1.8; }",
  ".field { margin-bottom: 0; }",
  ".label { display: block; font-size: 11px; letter-spacing: 0.25em; color: var(--muted); margin-bottom: 8px; text-transform: uppercase; }",
  ".textarea { width: 100%; background: var(--deep); border: 1px solid rgba(200,169,110,0.2); color: var(--ink); font-family: 'Zen Kaku Gothic New', sans-serif; font-size: 14px; font-weight: 300; padding: 12px 16px; outline: none; resize: vertical; min-height: 80px; transition: border-color 0.3s; }",
  ".textarea:focus { border-color: rgba(200,169,110,0.55); }",
  ".textarea::placeholder { color: rgba(232,221,208,0.2); }",
  ".draw-btn { width: 100%; padding: 18px; background: linear-gradient(135deg, #c8a96e 0%, #9a7a40 100%); border: none; cursor: pointer; font-size: 12px; letter-spacing: 0.4em; color: #07060a; margin-top: 8px; }",
  ".draw-btn:disabled { opacity: 0.35; cursor: not-allowed; }",
  ".loading { padding: 60px 0; text-align: center; }",
  ".loading-ring { width: 56px; height: 56px; margin: 0 auto 20px; border: 1px solid var(--gold-dim); border-top-color: var(--gold); border-radius: 50%; animation: spin 1.5s linear infinite; }",
  "@keyframes spin { to { transform: rotate(360deg); } }",
  ".loading-msg { font-size: 12px; letter-spacing: 0.3em; color: var(--muted); }",
  ".step { font-size: 11px; color: rgba(122,110,98,0.6); padding: 4px 0; }",
  ".step.active { color: var(--gold); }",
  ".report-header { text-align: center; padding: 40px 0 32px; border-bottom: 1px solid var(--gold-dim); }",
  ".report-title { font-size: 22px; color: var(--ink); margin-bottom: 6px; font-family: 'Shippori Mincho', serif; }",
  ".report-question { font-size: 12px; color: var(--muted); line-height: 1.8; }",
  ".card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin-bottom: 24px; }",
  "@keyframes cardEnter { from { opacity: 0; transform: translateY(12px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }",
  ".card-slot { animation: cardEnter 0.6s ease both; }",
  ".position-label { font-size: 10px; letter-spacing: 0.2em; color: var(--gold); text-align: center; margin-bottom: 8px; text-transform: uppercase; }",
  ".card-face { background: var(--deep); border: 1px solid var(--gold-dim); padding: 20px 12px; text-align: center; min-height: 140px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; }",
  ".card-face.is-reversed { border-style: dashed; }",
  ".card-art { display: flex; align-items: center; justify-content: center; transition: transform 0.3s; }",
  ".card-art-pips { display: grid; gap: 4px; justify-content: center; align-items: center; }",
  ".card-art-court { display: flex; flex-direction: column; align-items: center; gap: 2px; }",
  ".card-face.is-reversed .card-art { transform: rotate(180deg); }",
  ".card-num { font-family: 'Cormorant Garamond', serif; font-size: 11px; color: var(--muted); letter-spacing: 0.1em; }",
  ".card-name { font-size: 15px; color: var(--ink); line-height: 1.4; }",
  ".card-orientation { font-size: 10px; color: var(--gold); letter-spacing: 0.15em; }",
  ".card-meaning { font-size: 11px; color: var(--muted); line-height: 1.6; margin-top: 2px; }",
  ".report-text { font-size: 14px; line-height: 2.1; color: #c0b09a; white-space: pre-wrap; }",
  ".report-section { padding: 28px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }",
  ".rs-title { font-size: 10px; letter-spacing: 0.4em; color: var(--gold); text-transform: uppercase; margin-bottom: 16px; }",
  ".restart-btn { display: block; width: 100%; margin-top: 32px; padding: 14px; border: 1px solid var(--gold-dim); background: transparent; color: var(--gold); font-size: 11px; cursor: pointer; }",
  ".footer { display: flex; justify-content: center; gap: 20px; padding: 32px 0 0; }",
  ".footer-link { font-size: 11px; letter-spacing: 0.1em; color: var(--muted); background: none; border: none; cursor: pointer; padding: 0; }",
  ".footer-link:hover { color: var(--gold); }",
].join("\n");

const THEMES = [
  {
    id: "daily",
    title: "今日の運勢",
    desc: "1枚引きで、今日1日のメッセージを受け取る",
    positions: ["今日のメッセージ"],
  },
  {
    id: "love",
    title: "恋愛",
    desc: "過去・現在・未来の3枚で、恋の行方を読む",
    positions: ["過去", "現在", "未来"],
  },
  {
    id: "work",
    title: "仕事・キャリア",
    desc: "過去・現在・未来の3枚で、仕事の流れを読む",
    positions: ["過去", "現在", "未来"],
  },
  {
    id: "general",
    title: "総合鑑定",
    desc: "6枚で読み解く、人生全体の流れ",
    positions: ["現在の状況", "障害・課題", "過去の影響", "近い未来", "顕在的な意識", "最終的な結果"],
  },
];

const STEPS = ["カードをシャッフル中...", "カードの意味を読み解いています...", "メッセージを紡いでいます..."];

function cardLabel(card) {
  return card.arcana === "major" ? card.num + " " + card.nameJa : card.nameJa;
}

const LEGAL_PAGES = {
  "#/terms": TermsOfService,
  "#/privacy": PrivacyPolicy,
  "#/tokushoho": Tokushoho,
};

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [question, setQuestion] = useState("");
  const [phase, setPhase] = useState("form");
  const [stepIdx, setStepIdx] = useState(0);
  const [cards, setCards] = useState([]);
  const [readings, setReadings] = useState(null);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const LegalPage = LEGAL_PAGES[hash];
  if (LegalPage) {
    return (
      <>
        <style>{STYLE}</style>
        <div className="app">
          <div className="stars" />
          <div className="wrap">
            <LegalPage onBack={() => (window.location.hash = "")} />
          </div>
        </div>
      </>
    );
  }

  const handleDraw = async () => {
    if (!selectedTheme) return;
    const drawn = drawCards(selectedTheme.positions.length);
    setCards(drawn);
    setPhase("loading");
    setStepIdx(0);
    const t1 = setTimeout(() => setStepIdx(1), 1200);
    const t2 = setTimeout(() => setStepIdx(2), 2600);

    try {
      const cardLines = selectedTheme.positions
        .map((pos, i) => {
          const c = drawn[i];
          return pos + ": " + c.nameJa + (c.isReversed ? "（逆位置）" : "（正位置）") + " - " + meaningOf(c);
        })
        .join("\n");

      const sectionLabels = [...selectedTheme.positions, "総合メッセージ"];
      const prompt =
        "あなたは経験豊富なタロット占い師です。以下の情報をもとに、日本語で詳細な鑑定文を書いてください。\n\n" +
        "【占いのテーマ】" + selectedTheme.title + "\n" +
        (question ? "【相談内容】" + question + "\n" : "") +
        "\n【引いたカード】\n" + cardLines + "\n\n" +
        "各ポジションについて300字程度で、カードの意味と向き（正位置/逆位置）を踏まえつつ、" +
        (question ? "相談内容に具体的に絡めながら、" : "") +
        "そのポジションが示す状況を掘り下げ、最後に一言アドバイスも添えてください。" +
        "最後に「総合メッセージ」として300字程度で、引いたカード全体のつながりを踏まえた総合的なまとめと、今後への具体的なアドバイスを書いてください。\n\n" +
        sectionLabels.map((label) => "【" + label + "】\n\n").join("");

      let perPosition;
      let overall;
      try {
        const res = await fetch("/api/generate-reading", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 2500,
            messages: [{ role: "user", content: prompt }],
          }),
        });

        const data = await res.json();
        if (!res.ok || data.error) throw new Error(data.error?.message || data.error || "API error");
        const text = data.content ? data.content.map((b) => b.text || "").join("") : "";
        const parse = (label) => {
          const match = text.match(new RegExp("【" + label + "】([\\s\\S]*?)(?=【|$)"));
          return match ? match[1].trim() : "";
        };
        perPosition = selectedTheme.positions.map((label) => parse(label));
        overall = parse("総合メッセージ");
        if (perPosition.some((t) => !t) || !overall) throw new Error("incomplete AI response");
      } catch (aiError) {
        // AIが使えない場合は、カードの意味から鑑定文をその場で組み立てる
        const fallback = buildLocalReading(selectedTheme, drawn, question);
        perPosition = fallback.perPosition;
        overall = fallback.overall;
      }

      clearTimeout(t1);
      clearTimeout(t2);
      setReadings({ perPosition, overall });
      setPhase("report");
    } catch (e) {
      clearTimeout(t1);
      clearTimeout(t2);
      const fallback = buildLocalReading(selectedTheme, drawn, question);
      setReadings(fallback);
      setPhase("report");
    }
  };

  const handleRestart = () => {
    setPhase("form");
    setCards([]);
    setReadings(null);
    setSelectedTheme(null);
    setQuestion("");
  };

  return (
    <>
      <style>{STYLE}</style>
      <div className="app">
        <div className="stars" />
        <div className="wrap">
          <div className="hero">
            <div className="hero-emblem">Tarot Reading</div>
            <div className="hero-title">タロット占い</div>
            <div className="hero-sub">テーマを選んでカードを引くと<br />AIがあなたへのメッセージを読み解きます</div>
          </div>

          {phase === "form" && (
            <>
              <div className="section">
                <div className="section-label">テーマを選ぶ</div>
                <div className="theme-grid">
                  {THEMES.map((theme) => (
                    <button
                      key={theme.id}
                      className={"theme-card" + (selectedTheme?.id === theme.id ? " selected" : "")}
                      onClick={() => setSelectedTheme(theme)}
                    >
                      <div className="theme-title">
                        {theme.title}
                        <span className="theme-count">{theme.positions.length}枚引き</span>
                      </div>
                      <div className="theme-desc">{theme.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="section">
                <div className="section-label">相談したいこと（任意）</div>
                <div className="field">
                  <label className="label">気になっていること</label>
                  <textarea
                    className="textarea"
                    placeholder="例：彼との関係はこれからどうなる？"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </div>
                <button className="draw-btn" disabled={!selectedTheme} onClick={handleDraw} style={{ marginTop: 20 }}>
                  カードを引く
                </button>
              </div>
            </>
          )}

          {phase === "loading" && (
            <div className="loading">
              <div className="loading-ring" />
              <div className="loading-msg">鑑定中</div>
              <div style={{ marginTop: 16 }}>
                {STEPS.map((s, i) => (
                  <div className={"step" + (i <= stepIdx ? " active" : "")} key={i}>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          )}

          {phase === "report" && readings && selectedTheme && (
            <div className="report">
              <div className="report-header">
                <div className="report-title">{selectedTheme.title}の鑑定結果</div>
                {question && <div className="report-question">「{question}」</div>}
              </div>

              <div className="report-section">
                <div className="card-grid">
                  {selectedTheme.positions.map((label, i) => {
                    const c = cards[i];
                    return (
                      <div className="card-slot" style={{ animationDelay: i * 150 + "ms" }} key={i}>
                        <div className="position-label">{label}</div>
                        <div className={"card-face" + (c.isReversed ? " is-reversed" : "")}>
                          <CardArt card={c} size={40} />
                          <div className="card-num">{cardLabel(c)}</div>
                          <div className="card-name">{c.nameJa}</div>
                          <div className="card-orientation">{c.isReversed ? "逆位置" : "正位置"}</div>
                          <div className="card-meaning">{meaningOf(c)}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {selectedTheme.positions.map((label, i) => (
                <div className="report-section" key={i}>
                  <div className="rs-title">{label}</div>
                  <div className="report-text">{readings.perPosition[i]}</div>
                </div>
              ))}

              {readings.overall && (
                <div className="report-section">
                  <div className="rs-title">総合メッセージ</div>
                  <div className="report-text">{readings.overall}</div>
                </div>
              )}

              <button className="restart-btn" onClick={handleRestart}>
                別の占いをする
              </button>
            </div>
          )}

          <div className="footer">
            <button className="footer-link" onClick={() => (window.location.hash = "#/terms")}>
              利用規約
            </button>
            <button className="footer-link" onClick={() => (window.location.hash = "#/privacy")}>
              プライバシーポリシー
            </button>
            <button className="footer-link" onClick={() => (window.location.hash = "#/tokushoho")}>
              特定商取引法に基づく表記
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
