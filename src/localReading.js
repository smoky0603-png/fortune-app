import { meaningOf, detailOf } from "./tarotDeck.js";

const CLOSINGS = {
  daily: "今日はこのメッセージを心に留めて、一日を過ごしてみてください。",
  love: "焦らず、カードが示す流れに沿って関係を育んでいきましょう。",
  work: "カードの示す流れを意識しながら、次の一手を選んでみてください。",
  general: "全体の流れを踏まえて、今のあなたに必要な一歩を選んでいきましょう。",
};

const POSITION_CONTEXT = (label) => `この「${label}」が示す流れを意識すると、次に進むためのヒントが見えてきます。`;

function positionText(label, card) {
  const orientation = card.isReversed ? "逆位置" : "正位置";
  const lines = [`${label}に出たのは「${card.nameJa}」（${orientation}）。`];

  if (card.arcana === "major") {
    lines.push(`${meaningOf(card)}を示す大アルカナのカードです。`);
    lines.push(detailOf(card));
  } else {
    lines.push(`${card.suitJa}は${card.suitTheme}を象徴するスートで、${meaningOf(card)}を意味します。`);
  }
  lines.push(POSITION_CONTEXT(label));
  return lines.join("");
}

function buildOverall(theme, cards, question) {
  const majorCards = cards.filter((c) => c.arcana === "major");
  const reversedCount = cards.filter((c) => c.isReversed).length;
  const suitCounts = cards.reduce((acc, c) => {
    if (c.suit) acc[c.suit] = (acc[c.suit] || 0) + 1;
    return acc;
  }, {});
  const dominantSuit = Object.entries(suitCounts).sort((a, b) => b[1] - a[1])[0];

  const intro = question ? `「${question}」というご相談について、` : "";

  let tone;
  if (majorCards.length >= Math.ceil(cards.length / 2)) {
    const names = majorCards.map((c) => c.nameJa).join("・");
    tone = `大アルカナの「${names}」が出ており、大きな転機やテーマ性の強い流れにあることがうかがえます。`;
  } else if (dominantSuit && dominantSuit[1] >= 2) {
    const suitJa = cards.find((c) => c.suit === dominantSuit[0]).suitJa;
    const suitTheme = cards.find((c) => c.suit === dominantSuit[0]).suitTheme;
    tone = `${suitJa}（${suitTheme}）のカードが重なっており、その領域が今の状況に強く関わっているようです。`;
  } else {
    tone = "日常の中の積み重ねや、さまざまな側面が絡み合っている流れが出ています。";
  }

  const balance =
    reversedCount >= Math.ceil(cards.length / 2)
      ? "逆位置のカードが多く、立ち止まって見直すべきことがあるサインとも読めます。"
      : "正位置のカードが多く、流れ自体は前向きに進みやすい状態です。";

  return `${intro}${tone}${balance}${CLOSINGS[theme.id] || CLOSINGS.general}`;
}

// AIが使えない場合に、カードの意味から鑑定文をその場で組み立てるフォールバック
export function buildLocalReading(theme, cards, question) {
  const perPosition = theme.positions.map((label, i) => positionText(label, cards[i]));
  const overall = buildOverall(theme, cards, question);
  return { perPosition, overall };
}
