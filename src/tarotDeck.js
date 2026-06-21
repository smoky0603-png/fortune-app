// 大アルカナ22枚
const MAJOR_ARCANA = [
  { num: "0", nameJa: "愚者", nameEn: "The Fool", upright: "新しい旅立ち・無限の可能性", reversed: "軽率・計画性のない行動" },
  { num: "I", nameJa: "魔術師", nameEn: "The Magician", upright: "創造力・行動力・新たな始まり", reversed: "未熟さ・力の空回り" },
  { num: "II", nameJa: "女教皇", nameEn: "The High Priestess", upright: "直感・静かな知恵", reversed: "閉ざされた心・思い込み" },
  { num: "III", nameJa: "女帝", nameEn: "The Empress", upright: "豊かさ・愛情・成長", reversed: "過保護・浪費" },
  { num: "IV", nameJa: "皇帝", nameEn: "The Emperor", upright: "安定・統率力・現実的な力", reversed: "支配欲・頑固さ" },
  { num: "V", nameJa: "法王", nameEn: "The Hierophant", upright: "伝統・教え・信頼", reversed: "形式主義・教条への固執" },
  { num: "VI", nameJa: "恋人", nameEn: "The Lovers", upright: "調和・愛・結びつき", reversed: "すれ違い・優柔不断" },
  { num: "VII", nameJa: "戦車", nameEn: "The Chariot", upright: "勝利・前進・意志の力", reversed: "暴走・方向性の欠如" },
  { num: "VIII", nameJa: "力", nameEn: "Strength", upright: "内なる強さ・忍耐", reversed: "自信の欠如・無理な抑圧" },
  { num: "IX", nameJa: "隠者", nameEn: "The Hermit", upright: "内省・探求・孤独の中の知恵", reversed: "孤立・頑なな閉鎖性" },
  { num: "X", nameJa: "運命の輪", nameEn: "Wheel of Fortune", upright: "転機・巡り合わせ・好機", reversed: "停滞・悪い巡り合わせ" },
  { num: "XI", nameJa: "正義", nameEn: "Justice", upright: "公正・バランス・正しい判断", reversed: "不公平・偏った判断" },
  { num: "XII", nameJa: "吊られた男", nameEn: "The Hanged Man", upright: "視点の転換・受容", reversed: "無駄な犠牲・停滞" },
  { num: "XIII", nameJa: "死神", nameEn: "Death", upright: "終わりと再生・大きな転換", reversed: "変化への抵抗・停滞" },
  { num: "XIV", nameJa: "節制", nameEn: "Temperance", upright: "調和・中庸・バランスの回復", reversed: "過剰・不調和" },
  { num: "XV", nameJa: "悪魔", nameEn: "The Devil", upright: "誘惑・執着・束縛", reversed: "解放・束縛からの脱却" },
  { num: "XVI", nameJa: "塔", nameEn: "The Tower", upright: "崩壊・予期せぬ変化", reversed: "回避された危機・小さな崩壊" },
  { num: "XVII", nameJa: "星", nameEn: "The Star", upright: "希望・癒し・理想", reversed: "失望・理想と現実のずれ" },
  { num: "XVIII", nameJa: "月", nameEn: "The Moon", upright: "不安・幻想・潜在意識", reversed: "誤解の解消・不安の終息" },
  { num: "XIX", nameJa: "太陽", nameEn: "The Sun", upright: "成功・喜び・生命力", reversed: "一時的な停滞・自信過剰" },
  { num: "XX", nameJa: "審判", nameEn: "Judgement", upright: "再生・覚醒・決断の時", reversed: "後悔・決断の遅れ" },
  { num: "XXI", nameJa: "世界", nameEn: "The World", upright: "完成・達成・統合", reversed: "未完成・中途半端な終わり" },
].map((c) => ({ ...c, arcana: "major", suit: null }));

const SUITS = {
  wands: { ja: "ワンド", symbol: "🔥", theme: "情熱・行動・創造" },
  cups: { ja: "カップ", symbol: "💧", theme: "感情・愛情・直感" },
  swords: { ja: "ソード", symbol: "⚔", theme: "思考・葛藤・言葉" },
  pentacles: { ja: "ペンタクル", symbol: "⭐", theme: "現実・仕事・物質" },
};

const RANKS = [
  { num: "1", label: "エース", upright: "始まり・可能性", reversed: "出だしの遅れ・停滞" },
  { num: "2", label: "2", upright: "選択・バランス", reversed: "迷い・優柔不断" },
  { num: "3", label: "3", upright: "成長・協力", reversed: "孤立・停滞した成長" },
  { num: "4", label: "4", upright: "安定・基盤", reversed: "停滞・束縛" },
  { num: "5", label: "5", upright: "変化・葛藤", reversed: "対立の解消" },
  { num: "6", label: "6", upright: "調和・分かち合い", reversed: "不均衡・依存" },
  { num: "7", label: "7", upright: "試練・内省", reversed: "迷走・自己疑念" },
  { num: "8", label: "8", upright: "前進・力の発揮", reversed: "力不足・停滞" },
  { num: "9", label: "9", upright: "達成間近・忍耐", reversed: "焦り・疲弊" },
  { num: "10", label: "10", upright: "完成・結末", reversed: "崩壊・次の始まり" },
  { num: "P", label: "ペイジ", upright: "学び・好奇心", reversed: "未熟さ・無責任" },
  { num: "N", label: "ナイト", upright: "行動・挑戦", reversed: "性急・空回り" },
  { num: "Q", label: "クイーン", upright: "成熟した感受性", reversed: "過敏・依存" },
  { num: "K", label: "キング", upright: "達成・統率力", reversed: "支配・独裁" },
];

function buildMinorArcana() {
  const cards = [];
  for (const [suit, meta] of Object.entries(SUITS)) {
    for (const rank of RANKS) {
      cards.push({
        num: rank.num,
        nameJa: `${meta.ja}の${rank.label}`,
        nameEn: `${rank.label} of ${suit}`,
        upright: rank.upright,
        reversed: rank.reversed,
        arcana: "minor",
        suit,
        suitJa: meta.ja,
        symbol: meta.symbol,
      });
    }
  }
  return cards;
}

export const TAROT_DECK = [...MAJOR_ARCANA, ...buildMinorArcana()];

export function drawCards(count) {
  const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((card) => ({
    ...card,
    isReversed: Math.random() < 0.5,
  }));
}

export function meaningOf(card) {
  return card.isReversed ? card.reversed : card.upright;
}
