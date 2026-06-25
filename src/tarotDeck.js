// 大アルカナ22枚
const MAJOR_ARCANA = [
  { num: "0", nameJa: "愚者", nameEn: "The Fool", upright: "新しい旅立ち・無限の可能性", reversed: "軽率・計画性のない行動",
    detailUpright: "新しい一歩を恐れず踏み出すことで、思いがけない可能性が開けていくでしょう。",
    detailReversed: "勢いだけで突き進むと足元をすくわれやすいので、慎重さも忘れずに。" },
  { num: "I", nameJa: "魔術師", nameEn: "The Magician", upright: "創造力・行動力・新たな始まり", reversed: "未熟さ・力の空回り",
    detailUpright: "持っている力や才能をうまく組み合わせることで、望む形を生み出せる時期です。",
    detailReversed: "アイデアはあっても実行力が伴わず、空回りしてしまう恐れがあります。" },
  { num: "II", nameJa: "女教皇", nameEn: "The High Priestess", upright: "直感・静かな知恵", reversed: "閉ざされた心・思い込み",
    detailUpright: "言葉にしなくても伝わる直感を信じることで、正しい方向が見えてきます。",
    detailReversed: "思い込みや視野の狭さが、本当のことを見えにくくしているかもしれません。" },
  { num: "III", nameJa: "女帝", nameEn: "The Empress", upright: "豊かさ・愛情・成長", reversed: "過保護・浪費",
    detailUpright: "豊かな愛情とエネルギーに恵まれ、物事が自然と育っていく時期です。",
    detailReversed: "与えすぎたり甘やかしすぎたりすることで、バランスを崩しやすい状態です。" },
  { num: "IV", nameJa: "皇帝", nameEn: "The Emperor", upright: "安定・統率力・現実的な力", reversed: "支配欲・頑固さ",
    detailUpright: "現実的な計画と強い意志があれば、状況をしっかりとコントロールできます。",
    detailReversed: "支配的になりすぎたり、頑なな態度が周囲との摩擦を生みやすい状態です。" },
  { num: "V", nameJa: "法王", nameEn: "The Hierophant", upright: "伝統・教え・信頼", reversed: "形式主義・教条への固執",
    detailUpright: "経験ある人からの助言や、これまでの教えが今の指針になります。",
    detailReversed: "形式や前例にこだわりすぎると、本来の目的を見失ってしまいます。" },
  { num: "VI", nameJa: "恋人", nameEn: "The Lovers", upright: "調和・愛・結びつき", reversed: "すれ違い・優柔不断",
    detailUpright: "心が通じ合い、お互いを思いやる気持ちが関係を深めてくれます。",
    detailReversed: "気持ちのすれ違いや迷いが、関係に距離を生んでいるようです。" },
  { num: "VII", nameJa: "戦車", nameEn: "The Chariot", upright: "勝利・前進・意志の力", reversed: "暴走・方向性の欠如",
    detailUpright: "強い意志と行動力で、目標に向かって一気に前進できる時です。",
    detailReversed: "勢いだけで突き進むと、方向を誤ったり制御を失う恐れがあります。" },
  { num: "VIII", nameJa: "力", nameEn: "Strength", upright: "内なる強さ・忍耐", reversed: "自信の欠如・無理な抑圧",
    detailUpright: "穏やかさと強さを併せ持つことで、困難を乗り越える力が湧いてきます。",
    detailReversed: "無理に抑え込もうとすることで、心や状況に負担がかかっています。" },
  { num: "IX", nameJa: "隠者", nameEn: "The Hermit", upright: "内省・探求・孤独の中の知恵", reversed: "孤立・頑なな閉鎖性",
    detailUpright: "一人の時間でじっくり向き合うことで、本当に大切なものが見えてきます。",
    detailReversed: "閉じこもりすぎることで、孤独感や視野の狭さが強まっています。" },
  { num: "X", nameJa: "運命の輪", nameEn: "Wheel of Fortune", upright: "転機・巡り合わせ・好機", reversed: "停滞・悪い巡り合わせ",
    detailUpright: "巡り合わせが良い方向に動き出し、思いがけない好機が訪れそうです。",
    detailReversed: "物事が思うように進まず、巡り合わせの悪さを感じやすい時期です。" },
  { num: "XI", nameJa: "正義", nameEn: "Justice", upright: "公正・バランス・正しい判断", reversed: "不公平・偏った判断",
    detailUpright: "公平な視点と冷静な判断が、納得できる結果へと導いてくれます。",
    detailReversed: "偏った見方や不公平さが、判断を曇らせているかもしれません。" },
  { num: "XII", nameJa: "吊られた男", nameEn: "The Hanged Man", upright: "視点の転換・受容", reversed: "無駄な犠牲・停滞",
    detailUpright: "視点を変えてみることで、これまで見えなかった答えが見つかります。",
    detailReversed: "犠牲や我慢が報われず、停滞感を強めてしまっているようです。" },
  { num: "XIII", nameJa: "死神", nameEn: "Death", upright: "終わりと再生・大きな転換", reversed: "変化への抵抗・停滞",
    detailUpright: "一つの区切りを受け入れることで、新しい流れが生まれていきます。",
    detailReversed: "変化を恐れて手放せないことが、足踏みの原因になっています。" },
  { num: "XIV", nameJa: "節制", nameEn: "Temperance", upright: "調和・中庸・バランスの回復", reversed: "過剰・不調和",
    detailUpright: "無理のないバランスを保つことで、心地よい調和が生まれます。",
    detailReversed: "何かに偏りすぎたり、ペースが乱れたりしているようです。" },
  { num: "XV", nameJa: "悪魔", nameEn: "The Devil", upright: "誘惑・執着・束縛", reversed: "解放・束縛からの脱却",
    detailUpright: "目の前の誘惑や執着が、本来の自由を縛ってしまっているかもしれません。",
    detailReversed: "縛られていたものから解放され、自分の意志を取り戻せる時です。" },
  { num: "XVI", nameJa: "塔", nameEn: "The Tower", upright: "崩壊・予期せぬ変化", reversed: "回避された危機・小さな崩壊",
    detailUpright: "想定外の出来事が、これまでの前提を大きく揺さぶる可能性があります。",
    detailReversed: "大きな崩壊は避けられ、小さな変化で済みそうな状況です。" },
  { num: "XVII", nameJa: "星", nameEn: "The Star", upright: "希望・癒し・理想", reversed: "失望・理想と現実のずれ",
    detailUpright: "希望を持ち続けることで、理想に近づくための力が湧いてきます。",
    detailReversed: "理想と現実のギャップに、少し疲れを感じているようです。" },
  { num: "XVIII", nameJa: "月", nameEn: "The Moon", upright: "不安・幻想・潜在意識", reversed: "誤解の解消・不安の終息",
    detailUpright: "はっきりしない不安はあっても、その奥にある直感を信じてみましょう。",
    detailReversed: "誤解や不安が解け、見通しが少しずつ明るくなっていきます。" },
  { num: "XIX", nameJa: "太陽", nameEn: "The Sun", upright: "成功・喜び・生命力", reversed: "一時的な停滞・自信過剰",
    detailUpright: "明るいエネルギーに満ち、物事が順調に進んでいく時期です。",
    detailReversed: "一時的な停滞はあっても、根底にある好調さは続いています。" },
  { num: "XX", nameJa: "審判", nameEn: "Judgement", upright: "再生・覚醒・決断の時", reversed: "後悔・決断の遅れ",
    detailUpright: "これまでの経験を踏まえて、新しい段階へ進む決断の時が来ています。",
    detailReversed: "決断をためらうことで、次のステップに進みにくくなっています。" },
  { num: "XXI", nameJa: "世界", nameEn: "The World", upright: "完成・達成・統合", reversed: "未完成・中途半端な終わり",
    detailUpright: "一つの物事がしっかりと形になり、満たされた完成を感じられます。",
    detailReversed: "もう少しで完成というところで、何かが足りていないようです。" },
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
        suitTheme: meta.theme,
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

// 大アルカナのみ持つ、より詳しい一文解説（小アルカナはnull）
export function detailOf(card) {
  if (card.arcana !== "major") return null;
  return card.isReversed ? card.detailReversed : card.detailUpright;
}
