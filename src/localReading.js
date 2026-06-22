import { meaningOf } from "./tarotDeck.js";

const CLOSINGS = {
  daily: "今日はこのメッセージを心に留めて過ごしてみてください。",
  love: "焦らず、カードが示す流れに沿って関係を育んでいきましょう。",
  work: "カードの示す流れを意識しながら、次の一手を選んでみてください。",
  general: "全体の流れを踏まえて、今のあなたに必要な一歩を選んでいきましょう。",
};

function positionText(label, card) {
  const orientation = card.isReversed ? "逆位置" : "正位置";
  return `${label}に出たのは「${card.nameJa}」（${orientation}）。${meaningOf(card)}を示すカードです。`;
}

// AIが使えない場合に、カードの意味から鑑定文をその場で組み立てるフォールバック
export function buildLocalReading(theme, cards, question) {
  const perPosition = theme.positions.map((label, i) => positionText(label, cards[i]));
  const majorCount = cards.filter((c) => c.arcana === "major").length;
  const tone = majorCount >= Math.ceil(cards.length / 2) ? "大きな転機やテーマ性の強いカードが多く出ています。" : "日常の中の積み重ねを示すカードが多く出ています。";
  const intro = question ? `「${question}」というご相談について、` : "";
  const overall = `${intro}${tone}${CLOSINGS[theme.id] || CLOSINGS.general}`;
  return { perPosition, overall };
}
