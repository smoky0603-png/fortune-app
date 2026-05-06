import { useState, useEffect } from "react";

const STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

  * { box-sizing: border-boimport { useState, useEffect } from "react";

const STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
:root {
--gold: #c8a96e;import { useState, useEffect } from "react";

const STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --gold: #c8a96e; --gold-dim: rgba(200,169,110,0.3); --bg: #07060a; --ink: #e8ddd0; --muted: #7a6e62; --deep: rgba(255,255,255,0.04);
}
.app { min-height: 100vh; background: var(--bg); color: var(--ink); font-family: 'Zen Kaku Gothic New', sans-serif; font-weight: 300; }
.stars { position: fixed; inset: 0; z-index: 0; pointer-events: none; background: radial-gradient(ellipse at 20% 20%, rgba(90,50,150,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(30,60,100,0.12) 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.05) 0%, transparent 70%); }
.wrap { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; padding: 0 20px 100px; }
.hero { padding: 64px 0 48px; text-align: center; border-bottom: 1px solid var(--gold-dim); }
.hero-emblem { font-family: 'Cormorant Garamond', serif; font-size: 18px; letter-spacing: 0.5em; color: var(--gold); margin-bottom: 28px; font-style: italic; }
.hero-title { font-family: 'Shippori Mincho', serif; font-size: 32px; font-weight: 500; line-height: 1.5; color: var(--ink); margin-bottom: 12px; letter-spacing: 0.08em; }
.hero-sub { font-size: 13px; color: var(--muted); letter-spacing: 0.2em; line-height: 2; }
.price-tag { display: inline-flex; align-items: baseline; gap: 4px; margin-top: 28px; padding: 12px 32px; border: 1px solid var(--gold-dim); background: rgba(200,169,110,0.06); }
.price-yen { font-size: 14px; color: var(--gold); }
.price-num { font-family: 'Cormorant Garamond', serif; font-size: 42px; font-weight: 300; color: var(--gold); line-height: 1; }
.price-note { font-size: 11px; color: var(--muted); letter-spacing: 0.2em; }
.section { padding: 40px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
.section-label { font-size: 10px; letter-spacing: 0.4em; color: var(--gold); text-transform: uppercase; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
.section-label::after { content: ''; flex: 1; height: 1px; background: var(--gold-dim); }
.field { margin-bottom: 20px; }
.label { display: block; font-size: 11px; letter-spacing: 0.25em; color: var(--muted); margin-bottom: 8px; text-transform: uppercase; }
.input { width: 100%; background: var(--deep); border: 1px solid rgba(200,169,110,0.2); color: var(--ink); font-family: 'Zen Kaku Gothic New', sans-serif; font-size: 15px; font-weight: 300; padding: 12px 16px; outline: none; transition: border-color 0.3s; }
.input:focus { border-color: rgba(200,169,110,0.55); }
.input::placeholder { color: rgba(232,221,208,0.2); }
.date-row { display: flex; gap: 8px; }
.date-unit { flex: 1; }
.date-cap { font-size: 10px; text-align: center; color: rgba(122,110,98,0.7); letter-spacing: 0.2em; margin-top: 5px; text-transform: uppercase; }
.items-grid { display: grid; gap: 12px; }
.item-card { display: flex; gap: 16px; align-items: flex-start; padding: 18px 20px; background: var(--deep); border: 1px solid rgba(255,255,255,0.06); transition: border-color 0.3s; }
.item-card:hover { border-color: var(--gold-dim); }
.item-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
.item-title { font-family: 'Shippori Mincho', serif; font-size: 15px; color: var(--ink); margin-bottom: 4px; }
.item-desc { font-size: 12px; color: var(--muted); line-height: 1.8; }
.pay-btn { width: 100%; padding: 18px; background: linear-gradient(135deg, #c8a96e 0%, #9a7a40 100%); border: none; cursor: pointer; font-family: 'Zen Kaku Gothic New', sans-serif; font-size: 12px; letter-spacing: 0.4em; text-transform: uppercase; color: #07060a; font-weight: 400; transition: opacity 0.3s, transform 0.2s; margin-top: 8px; }
.pay-btn:hover:not(:disabled) { opacity: 0.85; transform: translateY(-1px); }
.pay-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.secure-note { text-align: center; margin-top: 12px; font-size: 11px; color: var(--muted); letter-spacing: 0.15em; }
.loading { padding: 60px 0; text-align: center; animation: fadeIn 0.5s ease; }
.loading-ring { width: 56px; height: 56px; margin: 0 auto 20px; border: 1px solid var(--gold-dim); border-top-color: var(--gold); border-radius: 50%; animation: spin 1.5s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.loading-msg { font-size: 12px; letter-spacing: 0.3em; color: var(--muted); }
.loading-steps { margin-top: 16px; }
.step { font-size: 11px; color: rgba(122,110,98,0.6); letter-spacing: 0.15em; padding: 4px 0; transition: color 0.5s; }
.step.active { color: var(--gold); }
.report { animation: fadeUp 0.9s ease forwards; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.report-header { text-align: center; padding: 40px 0 32px; border-bottom: 1px solid var(--gold-dim); }
.report-badge { font-size: 10px; letter-spacing: 0.4em; color: var(--gold); text-transform: uppercase; margin-bottom: 16px; }
.report-name { font-family: 'Shippori Mincho', serif; font-size: 24px; color: var(--ink); margin-bottom: 4px; }
.report-date { font-size: 12px; color: var(--muted); letter-spacing: 0.15em; }
.report-section { padding: 32px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
.rs-title { font-size: 10px; letter-spacing: 0.4em; color: var(--gold); text-transform: uppercase; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
.rs-title::before { content: '✦'; font-size: 8px; }
.number-display { display: flex; gap: 20px; align-items: center; margin-bottom: 20px; }
.num-circle { width: 72px; height: 72px; flex-shrink: 0; border: 1px solid var(--gold-dim); border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.num-val { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 300; color: var(--gold); line-height: 1; }
.num-label { font-size: 8px; letter-spacing: 0.2em; color: var(--muted); text-transform: uppercase; margin-top: 2px; }
.num-info-name { font-family: 'Shippori Mincho', serif; font-size: 18px; color: var(--ink); margin-bottom: 4px; }
.num-info-kw { font-size: 11px; color: var(--muted); letter-spacing: 0.15em; }
.report-text { font-size: 14px; line-height: 2.2; color: #c0b09a; white-space: pre-wrap; }
.compat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.compat-card { padding: 14px 16px; background: var(--deep); border: 1px solid rgba(255,255,255,0.06); text-align: center; }
.compat-num { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 300; color: var(--gold); line-height: 1; margin-bottom: 4px; }
.compat-label { font-size: 10px; letter-spacing: 0.2em; color: var(--muted); text-transform: uppercase; }
.error-box { margin-top: 16px; padding: 14px 18px; border: 1px solid rgba(180,80,80,0.4); color: #c07070; font-size: 13px; text-align: center; }
.restart-btn { display: block; width: 100%; margin-top: 32px; padding: 14px; border: 1px solid var(--gold-dim); background: transparent; color: var(--gold); font-family: 'Zen Kaku Gothic New', sans-serif; font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase; cursor: pointer; transition: background 0.3s; }
.restart-btn:hover { background: rgba(200,169,110,0.06); }
.success-banner { padding: 16px 20px; background: rgba(200,169,110,0.1); border: 1px solid var(--gold-dim); text-align: center; }
.success-banner-text { font-size: 12px; letter-spacing: 0.2em; color: var(--gold); }
`;

const NUMBER_DATA = {
  1: { name: "先駆者", keyword: "独立・リーダーシップ・創造", compat: [3, 5] },
  2: { name: "調和者", keyword: "協調・直感・バランス", compat: [4, 8] },
  3: { name: "表現者", keyword: "創造性・コミュニケーション・喜び", compat: [1, 9] },
  4: { name: "建設者", keyword: "安定・規律・実直", compat: [2, 6] },
  5: { name: "自由人", keyword: "変化・冒険・自由", compat: [1, 7] },
  6: { name: "養育者", keyword: "愛情・責任・家庭", compat: [4, 9] },
  7: { name: "求道者", keyword: "知性・内省・神秘", compat: [5, 11] },
  8: { name: "支配者", keyword: "力・物質・達成", compat: [2, 22] },
  9: { name: "完成者", keyword: "博愛・知恵・完成", compat: [3, 6] },
  11: { name: "啓示者", keyword: "直感・霊感・使命", compat: [7, 2] },
  22: { name: "大建築家", keyword: "夢・実現・偉大な力", compat: [8, 4] },
};

const ITEMS = [
  { icon: "◎", title: "ライフパスナンバー詳細鑑定", desc: "あなたの人生の使命と本質的なエネルギーを深く読み解きます" },
  { icon: "◈", title: "ソウルナンバー（魂の欲求）", desc: "内なる本当の望みと、魂レベルで求めているものを明らかに" },
  { icon: "◇", title: "デスティニーナンバー（運命数）", desc: "人生で達成すべき目標と、あなたが世界に与える影響を解読" },
  { icon: "◉", title: "相性の良い数字", desc: "あなたと波動が合うナンバーを2つ厳選してご紹介" },
  { icon: "✦", title: "今月のメッセージ", desc: "現在の宇宙のエネルギーとあなたの数字が交差する、特別なメッセージ" },
];

const STEPS = ["星図を展開中...", "数字の波動を解析中...", "あなたへのメッセージを紡いでいます..."];

function calcNum(digits) {
  let s = digits.reduce((a, b) => a + b, 0);
  while (s > 9 && s !== 11 && s !== 22) s = String(s).split("").map(Number).reduce((a, b) => a + b, 0);
  return s;
}
function calcLifePath(y, m, d) { return calcNum(`${y}${m.padStart(2,"0")}${d.padStart(2,"0")}`.split("").map(Number)); }
function calcSoul(name) {
  const v = { a:1,e:1,i:1,o:1,u:1,あ:1,い:1,う:1,え:1,お:1 };
  const d = name.toLowerCase().split("").map(c => v[c]||0).filter(Boolean);
  return d.length ? calcNum(d) : Math.floor(Math.random()*9)+1;
}
function calcDestiny(name) {
  const map = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん".split("").reduce((a,c,i)=>({...a,[c]:i%9+1}),{});
  return calcNum(name.split("").map(c=>map[c]||1));
}

export default function App() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [phase, setPhase] = useState("form");
  const [stepIdx, setStepIdx] = useState(0);
  const [report, setReport] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const n = params.get("name");
    const y = params.get("year");
    const m = params.get("month");
    const d = params.get("day");
    if (n && y && m && d) {
      setName(n); setYear(y); setMonth(m); setDay(d);
      generateReport(n, y, m, d);
      window.history.replaceState({}, "", "/");
    }
  }, []);

  const handlePay = async () => {
    if (!name || !year || !month || !day) return;
    setError("");
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, year, month, day }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("決済の準備中にエラーが発生しました。");
      }
    } catch (e) {
      setError("通信エラーが発生しました。もう一度お試しください。");
    }
  };

  const generateReport = async (n, y, m, d) => {
    setPhase("loading");
    setStepIdx(0);
    const lpn = calcLifePath(y, m, d);
    const soul = calcSoul(n);
    const destiny = calcDestiny(n);
    const lpInfo = NUMBER_DATA[lpn] || { name: "神秘数", keyword: "特別な使命", compat: [3, 7] };
    const t1 = setTimeout(() => setStepIdx(1), 1200);
    const t2 = setTimeout(() => setStepIdx(2), 2600);
    try {
      const prompt = `あなたは数秘術の鑑定師です。以下の情報をもとに、詳細な鑑定レポートを日本語で作成してください。

【鑑定情報】
お名前: ${n}
生年月日: ${y}年${m}月${d}日
ライフパスナンバー: ${lpn}（${lpInfo.name} / ${lpInfo.keyword}）
ソウルナンバー: ${soul}
デスティニーナンバー: ${destiny}

以下の4つのセクションを、それぞれ200字前後で書いてください。${n}さんへの個人的な語りかけを必ず含め、毎回ユニークな表現を使ってください。

【Section1: ライフパスナンバー${lpn}の本質】

【Section2: ソウルナンバー${soul}が示す魂の欲求】

【Section3: デスティニーナンバー${destiny}が描く運命】

【Section4: 今月のメッセージ】`;

      const res = await fetch("/api/generate-reading", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await res.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      const parse = (label) => { const match = text.match(new RegExp(`【${label}】([\\s\\S]*?)(?=【|$)`)); return match ? match[1].trim() : ""; };

      clearTimeout(t1); clearTimeout(t2);
      setReport({
        lpn, soul, destiny, lpInfo,
        s1: parse(`Section1: ライフパスナンバー${lpn}の本質`),
        s2: parse(`Section2: ソウルナンバー${soul}が示す魂の欲求`),
        s3: parse(`Section3: デスティニーナンバー${destiny}が描く運命`),
        s4: parse("Section4: 今月のメッセージ"),
        raw: text, name: n, year: y, month: m, day: d,
      });
      setPhase("report");
    } catch (e) {
      clearTimeout(t1); clearTimeout(t2);
      setError("鑑定中にエラーが発生しました。");
      setPhase("form");
    }
  };

  const isValid = name && year.length === 4 && month && day;

  return (
    <>
      <style>{STYLE}</style>
      <div className="app">
        <div className="stars" />
        <div className="wrap">
          <div className="hero">
            <div className="hero-emblem">✦ Premium Reading ✦</div>
            <div className="hero-title">数秘術<br />詳細鑑定レポート</div>
            <div className="hero-sub">5つのナンバーであなたの本質・使命・魂の欲求を<br />毎回オリジナルで読み解きます</div>
            <div className="price-tag">
              <span className="price-yen">¥</span>
              <span className="price-num">300</span>
              <span className="price-note">/ 1回鑑定</span>
            </div>
          </div>

          {phase === "form" && (
            <>
              <div className="section">
                <div className="section-label">含まれる鑑定内容</div>
                <div className="items-grid">
                  {ITEMS.map((item, i) => (
                    <div className="item-card" key={i}>
                      <div className="item-icon">{item.icon}</div>
                      <div>
                        <div className="item-title">{item.title}</div>
                        <div className="item-desc">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="section">
                <div className="section-label">鑑定情報を入力</div>
                <div className="field">
                  <label className="label">お名前（フルネーム）</label>
                  <input className="input" placeholder="山田 花子" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="field">
                  <label className="label">生年月日</label>
                  <div className="date-row">
                    <div className="date-unit" style={{flex:2}}>
                      <input className="input" placeholder="1990" maxLength={4} value={year} onChange={e => setYear(e.target.value.replace(/\D/g,""))} />
                      <div className="date-cap">年</div>
                    </div>
                    <div className="date-unit">
                      <input className="input" placeholder="01" maxLength={2} style={{textAlign:"center"}} value={month} onChange={e => setMonth(e.target.value.replace(/\D/g,""))} />
                      <div className="date-cap">月</div>
                    </div>
                    <div className="date-unit">
                      <input className="input" placeholder="01" maxLength={2} style={{textAlign:"center"}} value={day} onChange={e => setDay(e.target.value.replace(/\D/g,""))} />
                      <div className="date-cap">日</div>
                    </div>
                  </div>
                </div>
                <button className="pay-btn" disabled={!isValid} onClick={handlePay}>
                  ✦ ¥300で鑑定を受け取る ✦
                </button>
                <div className="secure-note">🔒 Stripeによる安全な決済</div>
                {error && <div className="error-box">{error}</div>}
              </div>
            </>
          )}

          {phase === "loading" && (
            <div className="loading">
              <div className="loading-ring" />
              <div className="loading-msg">鑑定中</div>
              <div className="loading-steps">
                {STEPS.map((s, i) => <div className={`step ${i <= stepIdx ? "active" : ""}`} key={i}>{s}</div>)}
              </div>
            </div>
          )}

          {phase === "report" && report && (
            <div className="report">
              <div className="success-banner">
                <div className="success-banner-text">✦ ご購入ありがとうございます ✦</div>
              </div>
              <div className="report-header">
                <div className="report-badge">✦ Premium Report ✦</div>
                <div className="report-name">{name} 様の鑑定書</div>
                <div className="report-date">{year}年{month}月{day}日生</div>
              </div>
              <div className="report-section">
                <div className="rs-title">ライフパスナンバーの本質</div>
                <div className="number-display">
                  <div className="num-circle"><div className="num-val">{report.lpn}</div><div className="num-label">Life Path</div></div>
                  <div><div className="num-info-name">{report.lpInfo.name}</div><div className="num-info-kw">{report.lpInfo.keyword}</div></div>
                </div>
                <div className="report-text">{report.s1 || report.raw}</div>
              </div>
              <div className="report-section">
                <div className="rs-title">ソウルナンバー — 魂の欲求</div>
                <div className="number-display">
                  <div className="num-circle"><div className="num-val">{report.soul}</div><div className="num-label">Soul</div></div>
                  <div><div className="num-info-name">{NUMBER_DATA[report.soul]?.name||"神秘数"}</div><div className="num-info-kw">{NUMBER_DATA[report.soul]?.keyword||"特別な使命"}</div></div>
                </div>
                {report.s2 && <div className="report-text">{report.s2}</div>}
              </div>
              <div className="report-section">
                <div className="rs-title">デスティニーナンバー — 運命</div>
                <div className="number-display">
                  <div className="num-circle"><div className="num-val">{report.destiny}</div><div className="num-label">Destiny</div></div>
                  <div><div className="num-info-name">{NUMBER_DATA[report.destiny]?.name||"神秘数"}</div><div className="num-info-kw">{NUMBER_DATA[report.destiny]?.keyword||"特別な使命"}</div></div>
                </div>
                {report.s3 && <div className="report-text">{report.s3}</div>}
              </div>
              <div className="report-section">
                <div className="rs-title">相性の良い数字</div>
                <div className="compat-grid">
                  {report.lpInfo.compat.map(n => (
                    <div className="compat-card" key={n}>
                      <div className="compat-num">{n}</div>
                      <div className="compat-label">{NUMBER_DATA[n]?.name||"神秘数"}</div>
                    </div>
                  ))}
                </div>
              </div>
              {report.s4 && (
                <div className="report-section">
                  <div className="rs-title">今月のメッセージ</div>
                  <div className="report-text">{report.s4}</div>
                </div>
              )}
              <button className="restart-btn" onClick={() => { setPhase("form"); setReport(null); }}>
                ✦ 別の鑑定を受ける ✦
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

--gold-dim: rgba(200,169,110,0.3);
--bg: #07060a;
--ink: #e8ddd0;
--muted: #7a6e62;
--deep: rgba(255,255,255,0.04);
}
.app { min-height: 100vh; background: var(--bg); color: var(--ink); font-family: 'Zen Kaku Gothic New', sans-serif; font-weight: 300; }
.stars {
position: fixed; inset: 0; z-index: 0; pointer-events: none;
background:
radial-gradient(ellipse at 20% 20%, rgba(90,50,150,0.15) 0%, transparent 60%),
radial-gradient(ellipse at 80% 80%, rgba(30,60,100,0.12) 0%, transparent 60%),
radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.05) 0%, transparent 70%);
}
.wrap { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; padding: 0 20px 100px; }
.hero { padding: 64px 0 48px; text-align: center; border-bottom: 1px solid var(--gold-dim); }
.hero-emblem { font-family: 'Cormorant Garamond', serif; font-size: 18px; letter-spacing: 0.5em; color: var(--gold); margin-bottom: 28px; font-style: italic; }
.hero-title { font-family: 'Shippori Mincho', serif; font-size: 32px; font-weight: 500; line-height: 1.5; color: var(--ink); margin-bottom: 12px; letter-spacing: 0.08em; }
.hero-sub { font-size: 13px; color: var(--muted); letter-spacing: 0.2em; line-height: 2; }
.price-tag { display: inline-flex; align-items: baseline; gap: 4px; margin-top: 28px; padding: 12px 32px; border: 1px solid var(--gold-dim); background: rgba(200,169,110,0.06); }
.price-yen { font-size: 14px; color: var(--gold); }
.price-num { font-family: 'Cormorant Garamond', serif; font-size: 42px; font-weight: 300; color: var(--gold); line-height: 1; }
.price-note { font-size: 11px; color: var(--muted); letter-spacing: 0.2em; }
.section { padding: 40px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
.section-label { font-size: 10px; letter-spacing: 0.4em; color: var(--gold); text-transform: uppercase; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
.section-label::after { content: ''; flex: 1; height: 1px; background: var(--gold-dim); }
.field { margin-bottom: 20px; }
.label { display: block; font-size: 11px; letter-spacing: 0.25em; color: var(--muted); margin-bottom: 8px; text-transform: uppercase; }
.input { width: 100%; background: var(--deep); border: 1px solid rgba(200,169,110,0.2); color: var(--ink); font-family: 'Zen Kaku Gothic New', sans-serif; font-size: 15px; font-weight: 300; padding: 12px 16px; outline: none; transition: border-color 0.3s; }
.input:focus { border-color: rgba(200,169,110,0.55); }
.input::placeholder { color: rgba(232,221,208,0.2); }
.date-row { display: flex; gap: 8px; }
.date-unit { flex: 1; }
.date-cap { font-size: 10px; text-align: center; color: rgba(122,110,98,0.7); letter-spacing: 0.2em; margin-top: 5px; text-transform: uppercase; }
.items-grid { display: grid; gap: 12px; }
.item-card { display: flex; gap: 16px; align-items: flex-start; padding: 18px 20px; background: var(--deep); border: 1px solid rgba(255,255,255,0.06); transition: border-color 0.3s; }
.item-card:hover { border-color: var(--gold-dim); }
.item-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
.item-title { font-family: 'Shippori Mincho', serif; font-size: 15px; color: var(--ink); margin-bottom: 4px; }
.item-desc { font-size: 12px; color: var(--muted); line-height: 1.8; }
.pay-btn { width: 100%; padding: 18px; background: linear-gradient(135deg, #c8a96e 0%, #9a7a40 100%); border: none; cursor: pointer; font-family: 'Zen Kaku Gothic New', sans-serif; font-size: 12px; letter-spacing: 0.4em; text-transform: uppercase; color: #07060a; font-weight: 400; transition: opacity 0.3s, transform 0.2s; margin-top: 8px; }
.pay-btn:hover:not(:disabled) { opacity: 0.85; transform: translateY(-1px); }
.pay-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.secure-note { text-align: center; margin-top: 12px; font-size: 11px; color: var(--muted); letter-spacing: 0.15em; }
.loading { padding: 60px 0; text-align: center; animation: fadeIn 0.5s ease; }
.loading-ring { width: 56px; height: 56px; margin: 0 auto 20px; border: 1px solid var(--gold-dim); border-top-color: var(--gold); border-radius: 50%; animation: spin 1.5s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.loading-msg { font-size: 12px; letter-spacing: 0.3em; color: var(--muted); }
.loading-steps { margin-top: 16px; }
.step { font-size: 11px; color: rgba(122,110,98,0.6); letter-spacing: 0.15em; padding: 4px 0; transition: color 0.5s; }
.step.active { color: var(--gold); }
.report { animation: fadeUp 0.9s ease forwards; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.report-header { text-align: center; padding: 40px 0 32px; border-bottom: 1px solid var(--gold-dim); }
.report-badge { font-size: 10px; letter-spacing: 0.4em; color: var(--gold); text-transform: uppercase; margin-bottom: 16px; }
.report-name { font-family: 'Shippori Mincho', serif; font-size: 24px; color: var(--ink); margin-bottom: 4px; }
.report-date { font-size: 12px; color: var(--muted); letter-spacing: 0.15em; }
.report-section { padding: 32px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
.rs-title { font-size: 10px; letter-spacing: 0.4em; color: var(--gold); text-transform: uppercase; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
.rs-title::before { content: '✦'; font-size: 8px; }
.number-display { display: flex; gap: 20px; align-items: center; margin-bottom: 20px; }
.num-circle { width: 72px; height: 72px; flex-shrink: 0; border: 1px solid var(--gold-dim); border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.num-val { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 300; color: var(--gold); line-height: 1; }
.num-label { font-size: 8px; letter-spacing: 0.2em; color: var(--muted); text-transform: uppercase; margin-top: 2px; }
.num-info-name { font-family: 'Shippori Mincho', serif; font-size: 18px; color: var(--ink); margin-bottom: 4px; }
.num-info-kw { font-size: 11px; color: var(--muted); letter-spacing: 0.15em; }
.report-text { font-size: 14px; line-height: 2.2; color: #c0b09a; white-space: pre-wrap; }
.compat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.compat-card { padding: 14px 16px; background: var(--deep); border: 1px solid rgba(255,255,255,0.06); text-align: center; }
.compat-num { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 300; color: var(--gold); line-height: 1; margin-bottom: 4px; }
.compat-label { font-size: 10px; letter-spacing: 0.2em; color: var(--muted); text-transform: uppercase; }
.error-box { margin-top: 16px; padding: 14px 18px; border: 1px solid rgba(180,80,80,0.4); color: #c07070; font-size: 13px; text-align: center; }
.restart-btn { display: block; width: 100%; margin-top: 32px; padding: 14px; border: 1px solid var(--gold-dim); background: transparent; color: var(--gold); font-family: 'Zen Kaku Gothic New', sans-serif; font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase; cursor: pointer; transition: background 0.3s; }
.restart-btn:hover { background: rgba(200,169,110,0.06); }
.success-banner { padding: 16px 20px; background: rgba(200,169,110,0.1); border: 1px solid var(--gold-dim); text-align: center; margin-bottom: 0; }
.success-banner-text { font-size: 12px; letter-spacing: 0.2em; color: var(--gold); }
`;

const NUMBER_DATA = {
  1: { name: "先駆者", keyword: "独立・リーダーシップ・創造", compat: [3, 5] },
  2: { name: "調和者", keyword: "協調・直感・バランス", compat: [4, 8] },
  3: { name: "表現者", keyword: "創造性・コミュニケーション・喜び", compat: [1, 9] },
  4: { name: "建設者", keyword: "安定・規律・実直", compat: [2, 6] },
  5: { name: "自由人", keyword: "変化・冒険・自由", compat: [1, 7] },
  6: { name: "養育者", keyword: "愛情・責任・家庭", compat: [4, 9] },
  7: { name: "求道者", keyword: "知性・内省・神秘", compat: [5, 11] },
  8: { name: "支配者", keyword: "力・物質・達成", compat: [2, 22] },
  9: { name: "完成者", keyword: "博愛・知恵・完成", compat: [3, 6] },
  11: { name: "啓示者", keyword: "直感・霊感・使命", compat: [7, 2] },
  22: { name: "大建築家", keyword: "夢・実現・偉大な力", compat: [8, 4] },
};

const ITEMS = [
  { icon: "◎", title: "ライフパスナンバー詳細鑑定", desc: "あなたの人生の使命と本質的なエネルギーを深く読み解きます" },
  { icon: "◈", title: "ソウルナンバー（魂の欲求）", desc: "内なる本当の望みと、魂レベルで求めているものを明らかに" },
  { icon: "◇", title: "デスティニーナンバー（運命数）", desc: "人生で達成すべき目標と、あなたが世界に与える影響を解読" },
  { icon: "◉", title: "相性の良い数字", desc: "あなたと波動が合うナンバーを2つ厳選してご紹介" },
  { icon: "✦", title: "今月のメッセージ", desc: "現在の宇宙のエネルギーとあなたの数字が交差する、特別なメッセージ" },
];

const STEPS = ["星図を展開中...", "数字の波動を解析中...", "あなたへのメッセージを紡いでいます..."];

function calcNum(digits) {
  let s = digits.reduce((a, b) => a + b, 0);
  while (s > 9 && s !== 11 && s !== 22) s = String(s).split("").map(Number).reduce((a, b) => a + b, 0);
  return s;
}

function calcLifePath(y, m, d) { return calcNum(`${y}${m.padStart(2,"0")}${d.padStart(2,"0")}`.split("").map(Number)); }

function calcSoul(name) {
  const v = { a:1,e:1,i:1,o:1,u:1,あ:1,い:1,う:1,え:1,お:1 };
  const d = name.toLowerCase().split("").map(c => v[c]||0).filter(Boolean);
  return d.length ? calcNum(d) : Math.floor(Math.random()*9)+1;
}

function calcDestiny(name) {
  const map = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん".split("").reduce((a,c,i)=>({...a,[c]:i%9+1}),{});
  return calcNum(name.split("").map(c=>map[c]||1));
}

export default function App() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [phase, setPhase] = useState("form");
  const [stepIdx, setStepIdx] = useState(0);
  const [report, setReport] = useState(null);
  const [error, setError] = useState("");
  const [paidInfo, setPaidInfo] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const n = params.get("name");
    const y = params.get("year");
    const m = params.get("month");
    const d = params.get("day");
    if (n && y && m && d) {
      setPaidInfo({ name: n, year: y, month: m, day: d });
      setName(n); setYear(y); setMonth(m); setDay(d);
      generateReport(n, y, m, d);
      window.history.replaceState({}, "", "/");
    }
  }, []);

  const handlePay = async () => {
    if (!name || !year || !month || !day) return;
    setError("");
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, year, month, day }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("決済の準備中にエラーが発生しました。");
      }
    } catch (e) {
      setError("通信エラーが発生しました。もう一度お試しください。");
    }
  };

  const generateReport = async (n, y, m, d) => {
    setPhase("loading");
    setStepIdx(0);
    const lpn = calcLifePath(y, m, d);
    const soul = calcSoul(n);
    const destiny = calcDestiny(n);
    const lpInfo = NUMBER_DATA[lpn] || { name: "神秘数", keyword: "特別な使命", compat: [3, 7] };
    const t1 = setTimeout(() => setStepIdx(1), 1200);
    const t2 = setTimeout(() => setStepIdx(2), 2600);
    try {
      const prompt = `あなたは数秘術の鑑定師です。以下の情報をもとに、詳細な鑑定レポートを日本語で作成してください。

【鑑定情報】
お名前: ${n}
生年月日: ${y}年${m}月${d}日
ライフパスナンバー: ${lpn}（${lpInfo.name} / ${lpInfo.keyword}）
ソウルナンバー: ${soul}
デスティニーナンバー: ${destiny}

以下の4つのセクションを、それぞれ200字前後で書いてください。${n}さんへの個人的な語りかけを必ず含め、毎回ユニークな表現を使ってください。

【Section1: ライフパスナンバー${lpn}の本質】

【Section2: ソウルナンバー${soul}が示す魂の欲求】

【Section3: デスティニーナンバー${destiny}が描く運命】

【Section4: 今月のメッセージ】`;

      // ✅ 修正: サーバーサイドAPIを経由
      const res = await fetch("/api/generate-reading", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await res.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      const parse = (label) => { const match = text.match(new RegExp(`【${label}】([\\s\\S]*?)(?=【|$)`)); return match ? match[1].trim() : ""; };

      clearTimeout(t1); clearTimeout(t2);

      setReport({
        lpn, soul, destiny, lpInfo,
        s1: parse(`Section1: ライフパスナンバー${lpn}の本質`),
        s2: parse(`Section2: ソウルナンバー${soul}が示す魂の欲求`),
        s3: parse(`Section3: デスティニーナンバー${destiny}が描く運命`),
        s4: parse("Section4: 今月のメッセージ"),
        raw: text,
        name: n, year: y, month: m, day: d, // ✅ 修正: m2 → m
      });
      setPhase("report");
    } catch (e) {
      clearTimeout(t1); clearTimeout(t2);
      setError("鑑定中にエラーが発生しました。");
      setPhase("form");
    }
  };

  const isValid = name && year.length === 4 && month && day;

  return (
    <>
      <style>{STYLE}</style>
      <div className="app">
        <div className="stars" />
        <div className="wrap">
          <div className="hero">
            <div className="hero-emblem">✦ Premium Reading ✦</div>
            <div className="hero-title">数秘術<br />詳細鑑定レポート</div>
            <div className="hero-sub">5つのナンバーであなたの本質・使命・魂の欲求を<br />毎回オリジナルで読み解きます</div>
            <div className="price-tag">
              <span className="price-yen">¥</span>
              <span className="price-num">300</span>
              <span className="price-note">/ 1回鑑定</span>
            </div>
          </div>

          {phase === "form" && (
            <>
              <div className="section">
                <div className="section-label">含まれる鑑定内容</div>
                <div className="items-grid">
                  {ITEMS.map((item, i) => (
                    <div className="item-card" key={i}>
                      <div className="item-icon">{item.icon}</div>
                      <div>
                        <div className="item-title">{item.title}</div>
                        <div className="item-desc">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="section">
                <div className="section-label">鑑定情報を入力</div>
                <div className="field">
                  <label className="label">お名前（フルネーム）</label>
                  <input className="input" placeholder="山田 花子" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="field">
                  <label className="label">生年月日</label>
                  <div className="date-row">
                    <div className="date-unit" style={{flex:2}}>
                      <input className="input" placeholder="1990" maxLength={4} value={year} onChange={e => setYear(e.target.value.replace(/\D/g,""))} />
                      <div className="date-cap">年</div>
                    </div>
                    <div className="date-unit">
                      <input className="input" placeholder="01" maxLength={2} style={{textAlign:"center"}} value={month} onChange={e => setMonth(e.target.value.replace(/\D/g,""))} />
                      <div className="date-cap">月</div>
                    </div>
                    <div className="date-unit">
                      <input className="input" placeholder="01" maxLength={2} style={{textAlign:"center"}} value={day} onChange={e => setDay(e.target.value.replace(/\D/g,""))} />
                      <div className="date-cap">日</div>
                    </div>
                  </div>
                </div>
                <button className="pay-btn" disabled={!isValid} onClick={handlePay}>
                  ✦ ¥300で鑑定を受け取る ✦
                </button>
                <div className="secure-note">🔒 Stripeによる安全な決済</div>
                {error && <div className="error-box">{error}</div>}
              </div>
            </>
          )}

          {phase === "loading" && (
            <div className="loading">
              <div className="loading-ring" />
              <div className="loading-msg">鑑定中</div>
              <div className="loading-steps">
                {STEPS.map((s, i) => <div className={`step ${i <= stepIdx ? "active" : ""}`} key={i}>{s}</div>)}
              </div>
            </div>
          )}

          {phase === "report" && report && (
            <div className="report">
              <div className="success-banner">
                <div className="success-banner-text">✦ ご購入ありがとうございます ✦</div>
              </div>
              <div className="report-header">
                <div className="report-badge">✦ Premium Report ✦</div>
                <div className="report-name">{name} 様の鑑定書</div>
                <div className="report-date">{year}年{month}月{day}日生</div>
              </div>
              <div className="report-section">
                <div className="rs-title">ライフパスナンバーの本質</div>
                <div className="number-display">
                  <div className="num-circle"><div className="num-val">{report.lpn}</div><div className="num-label">Life Path</div></div>
                  <div><div className="num-info-name">{report.lpInfo.name}</div><div className="num-info-kw">{report.lpInfo.keyword}</div></div>
                </div>
                <div className="report-text">{report.s1 || report.raw}</div>
              </div>
              <div className="report-section">
                <div className="rs-title">ソウルナンバー — 魂の欲求</div>
                <div className="number-display">
                  <div className="num-circle"><div className="num-val">{report.soul}</div><div className="num-label">Soul</div></div>
                  <div><div className="num-info-name">{NUMBER_DATA[report.soul]?.name||"神秘数"}</div><div className="num-info-kw">{NUMBER_DATA[report.soul]?.keyword||"特別な使命"}</div></div>
                </div>
                {report.s2 && <div className="report-text">{report.s2}</div>}
              </div>
              <div className="report-section">
                <div className="rs-title">デスティニーナンバー — 運命</div>
                <div className="number-display">
                  <div className="num-circle"><div className="num-val">{report.destiny}</div><div className="num-label">Destiny</div></div>
                  <div><div className="num-info-name">{NUMBER_DATA[report.destiny]?.name||"神秘数"}</div><div className="num-info-kw">{NUMBER_DATA[report.destiny]?.keyword||"特別な使命"}</div></div>
                </div>
                {report.s3 && <div className="report-text">{report.s3}</div>}
              </div>
              <div className="report-section">
                <div className="rs-title">相性の良い数字</div>
                <div className="compat-grid">
                  {report.lpInfo.compat.map(n => (
                    <div className="compat-card" key={n}>
                      <div className="compat-num">{n}</div>
                      <div className="compat-label">{NUMBER_DATA[n]?.name||"神秘数"}</div>
                    </div>
                  ))}
                </div>
              </div>
              {report.s4 && (
                <div className="report-section">
                  <div className="rs-title">今月のメッセージ</div>
                  <div className="report-text">{report.s4}</div>
                </div>
              )}
              <button className="restart-btn" onClick={() => { setPhase("form"); setReport(null); }}>
                ✦ 別の鑑定を受ける ✦
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
x; margin: 0; padding: 0; }

  :root {
    --gold: #c8a96e;
    --gold-dim: rgba(200,169,110,0.3);
    --bg: #07060a;
    --ink: #e8ddd0;
    --muted: #7a6e62;
    --deep: rgba(255,255,255,0.04);
  }

  .app { min-height: 100vh; background: var(--bg); color: var(--ink); font-family: 'Zen Kaku Gothic New', sans-serif; font-weight: 300; }

  .stars {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(ellipse at 20% 20%, rgba(90,50,150,0.15) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 80%, rgba(30,60,100,0.12) 0%, transparent 60%),
      radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.05) 0%, transparent 70%);
  }

  .wrap { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; padding: 0 20px 100px; }

  .hero { padding: 64px 0 48px; text-align: center; border-bottom: 1px solid var(--gold-dim); }
  .hero-emblem { font-family: 'Cormorant Garamond', serif; font-size: 18px; letter-spacing: 0.5em; color: var(--gold); margin-bottom: 28px; font-style: italic; }
  .hero-title { font-family: 'Shippori Mincho', serif; font-size: 32px; font-weight: 500; line-height: 1.5; color: var(--ink); margin-bottom: 12px; letter-spacing: 0.08em; }
  .hero-sub { font-size: 13px; color: var(--muted); letter-spacing: 0.2em; line-height: 2; }
  .price-tag { display: inline-flex; align-items: baseline; gap: 4px; margin-top: 28px; padding: 12px 32px; border: 1px solid var(--gold-dim); background: rgba(200,169,110,0.06); }
  .price-yen { font-size: 14px; color: var(--gold); }
  .price-num { font-family: 'Cormorant Garamond', serif; font-size: 42px; font-weight: 300; color: var(--gold); line-height: 1; }
  .price-note { font-size: 11px; color: var(--muted); letter-spacing: 0.2em; }

  .section { padding: 40px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .section-label { font-size: 10px; letter-spacing: 0.4em; color: var(--gold); text-transform: uppercase; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
  .section-label::after { content: ''; flex: 1; height: 1px; background: var(--gold-dim); }

  .field { margin-bottom: 20px; }
  .label { display: block; font-size: 11px; letter-spacing: 0.25em; color: var(--muted); margin-bottom: 8px; text-transform: uppercase; }
  .input { width: 100%; background: var(--deep); border: 1px solid rgba(200,169,110,0.2); color: var(--ink); font-family: 'Zen Kaku Gothic New', sans-serif; font-size: 15px; font-weight: 300; padding: 12px 16px; outline: none; transition: border-color 0.3s; }
  .input:focus { border-color: rgba(200,169,110,0.55); }
  .input::placeholder { color: rgba(232,221,208,0.2); }
  .date-row { display: flex; gap: 8px; }
  .date-unit { flex: 1; }
  .date-cap { font-size: 10px; text-align: center; color: rgba(122,110,98,0.7); letter-spacing: 0.2em; margin-top: 5px; text-transform: uppercase; }

  .items-grid { display: grid; gap: 12px; }
  .item-card { display: flex; gap: 16px; align-items: flex-start; padding: 18px 20px; background: var(--deep); border: 1px solid rgba(255,255,255,0.06); transition: border-color 0.3s; }
  .item-card:hover { border-color: var(--gold-dim); }
  .item-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
  .item-title { font-family: 'Shippori Mincho', serif; font-size: 15px; color: var(--ink); margin-bottom: 4px; }
  .item-desc { font-size: 12px; color: var(--muted); line-height: 1.8; }

  .pay-btn { width: 100%; padding: 18px; background: linear-gradient(135deg, #c8a96e 0%, #9a7a40 100%); border: none; cursor: pointer; font-family: 'Zen Kaku Gothic New', sans-serif; font-size: 12px; letter-spacing: 0.4em; text-transform: uppercase; color: #07060a; font-weight: 400; transition: opacity 0.3s, transform 0.2s; margin-top: 8px; }
  .pay-btn:hover:not(:disabled) { opacity: 0.85; transform: translateY(-1px); }
  .pay-btn:disabled { opacity: 0.35; cursor: not-allowed; }

  .secure-note { text-align: center; margin-top: 12px; font-size: 11px; color: var(--muted); letter-spacing: 0.15em; }

  .loading { padding: 60px 0; text-align: center; animation: fadeIn 0.5s ease; }
  .loading-ring { width: 56px; height: 56px; margin: 0 auto 20px; border: 1px solid var(--gold-dim); border-top-color: var(--gold); border-radius: 50%; animation: spin 1.5s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .loading-msg { font-size: 12px; letter-spacing: 0.3em; color: var(--muted); }
  .loading-steps { margin-top: 16px; }
  .step { font-size: 11px; color: rgba(122,110,98,0.6); letter-spacing: 0.15em; padding: 4px 0; transition: color 0.5s; }
  .step.active { color: var(--gold); }

  .report { animation: fadeUp 0.9s ease forwards; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .report-header { text-align: center; padding: 40px 0 32px; border-bottom: 1px solid var(--gold-dim); }
  .report-badge { font-size: 10px; letter-spacing: 0.4em; color: var(--gold); text-transform: uppercase; margin-bottom: 16px; }
  .report-name { font-family: 'Shippori Mincho', serif; font-size: 24px; color: var(--ink); margin-bottom: 4px; }
  .report-date { font-size: 12px; color: var(--muted); letter-spacing: 0.15em; }

  .report-section { padding: 32px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
  .rs-title { font-size: 10px; letter-spacing: 0.4em; color: var(--gold); text-transform: uppercase; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
  .rs-title::before { content: '✦'; font-size: 8px; }

  .number-display { display: flex; gap: 20px; align-items: center; margin-bottom: 20px; }
  .num-circle { width: 72px; height: 72px; flex-shrink: 0; border: 1px solid var(--gold-dim); border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .num-val { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 300; color: var(--gold); line-height: 1; }
  .num-label { font-size: 8px; letter-spacing: 0.2em; color: var(--muted); text-transform: uppercase; margin-top: 2px; }
  .num-info-name { font-family: 'Shippori Mincho', serif; font-size: 18px; color: var(--ink); margin-bottom: 4px; }
  .num-info-kw { font-size: 11px; color: var(--muted); letter-spacing: 0.15em; }
  .report-text { font-size: 14px; line-height: 2.2; color: #c0b09a; white-space: pre-wrap; }

  .compat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .compat-card { padding: 14px 16px; background: var(--deep); border: 1px solid rgba(255,255,255,0.06); text-align: center; }
  .compat-num { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 300; color: var(--gold); line-height: 1; margin-bottom: 4px; }
  .compat-label { font-size: 10px; letter-spacing: 0.2em; color: var(--muted); text-transform: uppercase; }

  .error-box { margin-top: 16px; padding: 14px 18px; border: 1px solid rgba(180,80,80,0.4); color: #c07070; font-size: 13px; text-align: center; }
  .restart-btn { display: block; width: 100%; margin-top: 32px; padding: 14px; border: 1px solid var(--gold-dim); background: transparent; color: var(--gold); font-family: 'Zen Kaku Gothic New', sans-serif; font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase; cursor: pointer; transition: background 0.3s; }
  .restart-btn:hover { background: rgba(200,169,110,0.06); }

  .success-banner { padding: 16px 20px; background: rgba(200,169,110,0.1); border: 1px solid var(--gold-dim); text-align: center; margin-bottom: 0; }
  .success-banner-text { font-size: 12px; letter-spacing: 0.2em; color: var(--gold); }
`;

const NUMBER_DATA = {
  1: { name: "先駆者", keyword: "独立・リーダーシップ・創造", compat: [3, 5] },
  2: { name: "調和者", keyword: "協調・直感・バランス", compat: [4, 8] },
  3: { name: "表現者", keyword: "創造性・コミュニケーション・喜び", compat: [1, 9] },
  4: { name: "建設者", keyword: "安定・規律・実直", compat: [2, 6] },
  5: { name: "自由人", keyword: "変化・冒険・自由", compat: [1, 7] },
  6: { name: "養育者", keyword: "愛情・責任・家庭", compat: [4, 9] },
  7: { name: "求道者", keyword: "知性・内省・神秘", compat: [5, 11] },
  8: { name: "支配者", keyword: "力・物質・達成", compat: [2, 22] },
  9: { name: "完成者", keyword: "博愛・知恵・完成", compat: [3, 6] },
  11: { name: "啓示者", keyword: "直感・霊感・使命", compat: [7, 2] },
  22: { name: "大建築家", keyword: "夢・実現・偉大な力", compat: [8, 4] },
};

const ITEMS = [
  { icon: "◎", title: "ライフパスナンバー詳細鑑定", desc: "あなたの人生の使命と本質的なエネルギーを深く読み解きます" },
  { icon: "◈", title: "ソウルナンバー（魂の欲求）", desc: "内なる本当の望みと、魂レベルで求めているものを明らかに" },
  { icon: "◇", title: "デスティニーナンバー（運命数）", desc: "人生で達成すべき目標と、あなたが世界に与える影響を解読" },
  { icon: "◉", title: "相性の良い数字", desc: "あなたと波動が合うナンバーを2つ厳選してご紹介" },
  { icon: "✦", title: "今月のメッセージ", desc: "現在の宇宙のエネルギーとあなたの数字が交差する、特別なメッセージ" },
];

const STEPS = ["星図を展開中...", "数字の波動を解析中...", "あなたへのメッセージを紡いでいます..."];

function calcNum(digits) {
  let s = digits.reduce((a, b) => a + b, 0);
  while (s > 9 && s !== 11 && s !== 22) s = String(s).split("").map(Number).reduce((a, b) => a + b, 0);
  return s;
}
function calcLifePath(y, m, d) { return calcNum(`${y}${m.padStart(2,"0")}${d.padStart(2,"0")}`.split("").map(Number)); }
function calcSoul(name) {
  const v = { a:1,e:1,i:1,o:1,u:1,あ:1,い:1,う:1,え:1,お:1 };
  const d = name.toLowerCase().split("").map(c => v[c]||0).filter(Boolean);
  return d.length ? calcNum(d) : Math.floor(Math.random()*9)+1;
}
function calcDestiny(name) {
  const map = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん".split("").reduce((a,c,i)=>({...a,[c]:i%9+1}),{});
  return calcNum(name.split("").map(c=>map[c]||1));
}

export default function App() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [phase, setPhase] = useState("form");
  const [stepIdx, setStepIdx] = useState(0);
  const [report, setReport] = useState(null);
  const [error, setError] = useState("");
  const [paidInfo, setPaidInfo] = useState(null);

  // 決済成功後のリダイレクト処理
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const n = params.get("name");
    const y = params.get("year");
    const m = params.get("month");
    const d = params.get("day");
    if (n && y && m && d) {
      setPaidInfo({ name: n, year: y, month: m, day: d });
      setName(n); setYear(y); setMonth(m); setDay(d);
      generateReport(n, y, m, d);
      window.history.replaceState({}, "", "/");
    }
  }, []);

  const handlePay = async () => {
    if (!name || !year || !month || !day) return;
    setError("");
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, year, month, day }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("決済の準備中にエラーが発生しました。");
      }
    } catch (e) {
      setError("通信エラーが発生しました。もう一度お試しください。");
    }
  };

  const generateReport = async (n, y, m, d) => {
    setPhase("loading");
    setStepIdx(0);
    const lpn = calcLifePath(y, m, d);
    const soul = calcSoul(n);
    const destiny = calcDestiny(n);
    const lpInfo = NUMBER_DATA[lpn] || { name: "神秘数", keyword: "特別な使命", compat: [3, 7] };

    const t1 = setTimeout(() => setStepIdx(1), 1200);
    const t2 = setTimeout(() => setStepIdx(2), 2600);

    try {
      const prompt = `あなたは数秘術の鑑定師です。以下の情報をもとに、詳細な鑑定レポートを日本語で作成してください。

【鑑定情報】
お名前: ${n}
生年月日: ${y}年${m}月${d}日
ライフパスナンバー: ${lpn}（${lpInfo.name} / ${lpInfo.keyword}）
ソウルナンバー: ${soul}
デスティニーナンバー: ${destiny}

以下の4つのセクションを、それぞれ200字前後で書いてください。${n}さんへの個人的な語りかけを必ず含め、毎回ユニークな表現を使ってください。

【Section1: ライフパスナンバー${lpn}の本質】
【Section2: ソウルナンバー${soul}が示す魂の欲求】
【Section3: デスティニーナンバー${destiny}が描く運命】
【Section4: 今月のメッセージ】`;

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      const parse = (label) => { const m = text.match(new RegExp(`【${label}】([\\s\\S]*?)(?=【|$)`)); return m ? m[1].trim() : ""; };

      clearTimeout(t1); clearTimeout(t2);
      setReport({ lpn, soul, destiny, lpInfo,
        s1: parse(`Section1: ライフパスナンバー${lpn}の本質`),
        s2: parse(`Section2: ソウルナンバー${soul}が示す魂の欲求`),
        s3: parse(`Section3: デスティニーナンバー${destiny}が描く運命`),
        s4: parse("Section4: 今月のメッセージ"),
        raw: text, name: n, year: y, month: m2, day: d,
      });
      setPhase("report");
    } catch (e) {
      clearTimeout(t1); clearTimeout(t2);
      setError("鑑定中にエラーが発生しました。");
      setPhase("form");
    }
  };

  const isValid = name && year.length === 4 && month && day;

  return (
    <>
      <style>{STYLE}</style>
      <div className="app">
        <div className="stars" />
        <div className="wrap">
          <div className="hero">
            <div className="hero-emblem">✦ Premium Reading ✦</div>
            <div className="hero-title">数秘術<br />詳細鑑定レポート</div>
            <div className="hero-sub">5つのナンバーであなたの本質・使命・魂の欲求を<br />毎回オリジナルで読み解きます</div>
            <div className="price-tag">
              <span className="price-yen">¥</span>
              <span className="price-num">300</span>
              <span className="price-note">/ 1回鑑定</span>
            </div>
          </div>

          {phase === "form" && (
            <>
              <div className="section">
                <div className="section-label">含まれる鑑定内容</div>
                <div className="items-grid">
                  {ITEMS.map((item, i) => (
                    <div className="item-card" key={i}>
                      <div className="item-icon">{item.icon}</div>
                      <div>
                        <div className="item-title">{item.title}</div>
                        <div className="item-desc">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section">
                <div className="section-label">鑑定情報を入力</div>
                <div className="field">
                  <label className="label">お名前（フルネーム）</label>
                  <input className="input" placeholder="山田 花子" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="field">
                  <label className="label">生年月日</label>
                  <div className="date-row">
                    <div className="date-unit" style={{flex:2}}>
                      <input className="input" placeholder="1990" maxLength={4} value={year} onChange={e => setYear(e.target.value.replace(/\D/g,""))} />
                      <div className="date-cap">年</div>
                    </div>
                    <div className="date-unit">
                      <input className="input" placeholder="01" maxLength={2} style={{textAlign:"center"}} value={month} onChange={e => setMonth(e.target.value.replace(/\D/g,""))} />
                      <div className="date-cap">月</div>
                    </div>
                    <div className="date-unit">
                      <input className="input" placeholder="01" maxLength={2} style={{textAlign:"center"}} value={day} onChange={e => setDay(e.target.value.replace(/\D/g,""))} />
                      <div className="date-cap">日</div>
                    </div>
                  </div>
                </div>
                <button className="pay-btn" disabled={!isValid} onClick={handlePay}>
                  ✦　¥300で鑑定を受け取る　✦
                </button>
                <div className="secure-note">🔒 Stripeによる安全な決済</div>
                {error && <div className="error-box">{error}</div>}
              </div>
            </>
          )}

          {phase === "loading" && (
            <div className="loading">
              <div className="loading-ring" />
              <div className="loading-msg">鑑定中</div>
              <div className="loading-steps">
                {STEPS.map((s, i) => <div className={`step ${i <= stepIdx ? "active" : ""}`} key={i}>{s}</div>)}
              </div>
            </div>
          )}

          {phase === "report" && report && (
            <div className="report">
              <div className="success-banner">
                <div className="success-banner-text">✦ ご購入ありがとうございます ✦</div>
              </div>
              <div className="report-header">
                <div className="report-badge">✦ Premium Report ✦</div>
                <div className="report-name">{name} 様の鑑定書</div>
                <div className="report-date">{year}年{month}月{day}日生</div>
              </div>

              <div className="report-section">
                <div className="rs-title">ライフパスナンバーの本質</div>
                <div className="number-display">
                  <div className="num-circle"><div className="num-val">{report.lpn}</div><div className="num-label">Life Path</div></div>
                  <div><div className="num-info-name">{report.lpInfo.name}</div><div className="num-info-kw">{report.lpInfo.keyword}</div></div>
                </div>
                <div className="report-text">{report.s1 || report.raw}</div>
              </div>

              <div className="report-section">
                <div className="rs-title">ソウルナンバー — 魂の欲求</div>
                <div className="number-display">
                  <div className="num-circle"><div className="num-val">{report.soul}</div><div className="num-label">Soul</div></div>
                  <div><div className="num-info-name">{NUMBER_DATA[report.soul]?.name||"神秘数"}</div><div className="num-info-kw">{NUMBER_DATA[report.soul]?.keyword||"特別な使命"}</div></div>
                </div>
                {report.s2 && <div className="report-text">{report.s2}</div>}
              </div>

              <div className="report-section">
                <div className="rs-title">デスティニーナンバー — 運命</div>
                <div className="number-display">
                  <div className="num-circle"><div className="num-val">{report.destiny}</div><div className="num-label">Destiny</div></div>
                  <div><div className="num-info-name">{NUMBER_DATA[report.destiny]?.name||"神秘数"}</div><div className="num-info-kw">{NUMBER_DATA[report.destiny]?.keyword||"特別な使命"}</div></div>
                </div>
                {report.s3 && <div className="report-text">{report.s3}</div>}
              </div>

              <div className="report-section">
                <div className="rs-title">相性の良い数字</div>
                <div className="compat-grid">
                  {report.lpInfo.compat.map(n => (
                    <div className="compat-card" key={n}>
                      <div className="compat-num">{n}</div>
                      <div className="compat-label">{NUMBER_DATA[n]?.name||"神秘数"}</div>
                    </div>
                  ))}
                </div>
              </div>

              {report.s4 && (
                <div className="report-section">
                  <div className="rs-title">今月のメッセージ</div>
                  <div className="report-text">{report.s4}</div>
                </div>
              )}

              <button className="restart-btn" onClick={() => { setPhase("form"); setReport(null); }}>
                ✦　別の鑑定を受ける　✦
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
