const GOLD = "var(--gold)";

function Svg({ size, viewBox = "0 0 24 24", children, style }) {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={style}>
      {children}
    </svg>
  );
}

// スートのシンボル（杖・杯・剣・金貨）
export function SuitIcon({ suit, size = 22 }) {
  if (suit === "wands") {
    return (
      <Svg size={size}>
        <line x1="5" y1="19" x2="19" y2="5" />
        <line x1="14" y1="5" x2="19" y2="5" />
        <line x1="19" y1="5" x2="19" y2="10" />
        <line x1="8.5" y1="13.5" x2="11" y2="11" />
        <line x1="12" y1="9.5" x2="14.5" y2="7" />
      </Svg>
    );
  }
  if (suit === "cups") {
    return (
      <Svg size={size}>
        <path d="M6,4 C6,9 7,11 12,11 C17,11 18,9 18,4" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="8" y1="20" x2="16" y2="20" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </Svg>
    );
  }
  if (suit === "swords") {
    return (
      <Svg size={size}>
        <line x1="12" y1="2" x2="12" y2="15" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <rect x="10" y="15" width="4" height="6" rx="1" />
      </Svg>
    );
  }
  // pentacles
  return (
    <Svg size={size}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 4 L14.2 10.2 L20.8 10.4 L15.6 14.2 L17.4 20.6 L12 16.8 L6.6 20.6 L8.4 14.2 L3.2 10.4 L9.8 10.2 Z" />
    </Svg>
  );
}

// 大アルカナ22枚のシンボル
const MAJOR_ICONS = {
  0: (s) => (
    <Svg size={s}>
      <circle cx="12" cy="16" r="5" />
      <line x1="12" y1="9" x2="12" y2="3" />
      <line x1="9" y1="6" x2="12" y2="3" />
      <line x1="15" y1="6" x2="12" y2="3" />
    </Svg>
  ),
  I: (s) => (
    <Svg size={s}>
      <path d="M6,12 C6,9 9,9 12,12 C15,15 18,15 18,12 C18,9 15,9 12,12 C9,15 6,15 6,12 Z" />
    </Svg>
  ),
  II: (s) => (
    <Svg size={s}>
      <path d="M16,4 A8,8 0 1,0 16,20 A6,6 0 1,1 16,4 Z" />
    </Svg>
  ),
  III: (s) => (
    <Svg size={s}>
      <circle cx="12" cy="12" r="2.6" />
      <circle cx="12" cy="5.5" r="2.2" />
      <circle cx="12" cy="18.5" r="2.2" />
      <circle cx="5.5" cy="12" r="2.2" />
      <circle cx="18.5" cy="12" r="2.2" />
    </Svg>
  ),
  IV: (s) => (
    <Svg size={s}>
      <rect x="6" y="11" width="12" height="9" />
      <path d="M6,11 L12,4 L18,11" />
    </Svg>
  ),
  V: (s) => (
    <Svg size={s}>
      <line x1="4" y1="16" x2="13" y2="7" />
      <circle cx="4" cy="16" r="2" />
      <line x1="9" y1="11" x2="11" y2="13" />
      <line x1="11" y1="9" x2="13" y2="11" />
      <line x1="11" y1="20" x2="20" y2="11" />
      <circle cx="20" cy="11" r="2" />
    </Svg>
  ),
  VI: (s) => (
    <Svg size={s}>
      <circle cx="9.5" cy="12" r="6" />
      <circle cx="14.5" cy="12" r="6" />
    </Svg>
  ),
  VII: (s) => (
    <Svg size={s}>
      <circle cx="12" cy="12" r="8" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="4" y1="12" x2="20" y2="12" />
    </Svg>
  ),
  VIII: (s) => (
    <Svg size={s}>
      <path d="M3,18 L12,5 L21,18 Z" />
      <path d="M7,11 C7,8 10,8 12,11 C14,14 17,14 17,11 C17,8 14,8 12,11 C10,14 7,14 7,11 Z" />
    </Svg>
  ),
  IX: (s) => (
    <Svg size={s}>
      <path d="M9,9 L15,9 L17,16 L7,16 Z" />
      <circle cx="12" cy="5" r="1.6" />
      <line x1="12" y1="16" x2="12" y2="21" />
    </Svg>
  ),
  X: (s) => (
    <Svg size={s}>
      <circle cx="12" cy="12" r="8" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="6.3" y1="6.3" x2="17.7" y2="17.7" />
      <line x1="17.7" y1="6.3" x2="6.3" y2="17.7" />
    </Svg>
  ),
  XI: (s) => (
    <Svg size={s}>
      <line x1="12" y1="3" x2="12" y2="17" />
      <line x1="5" y1="8" x2="19" y2="8" />
      <path d="M5,8 L3,13 A3,2 0 0,0 7,13 Z" />
      <path d="M19,8 L17,13 A3,2 0 0,0 21,13 Z" />
      <line x1="8" y1="20" x2="16" y2="20" />
    </Svg>
  ),
  XII: (s) => (
    <Svg size={s}>
      <line x1="4" y1="4" x2="20" y2="4" />
      <line x1="12" y1="4" x2="12" y2="14" />
      <circle cx="12" cy="18" r="3.2" />
    </Svg>
  ),
  XIII: (s) => (
    <Svg size={s}>
      <path d="M12,20 C6,17 6,11 8,7 C10,3 14,3 16,7 C18,11 18,17 12,20 Z" />
      <circle cx="9.5" cy="10" r="1.3" />
      <circle cx="14.5" cy="10" r="1.3" />
      <line x1="11" y1="14" x2="13" y2="14" />
    </Svg>
  ),
  XIV: (s) => (
    <Svg size={s}>
      <path d="M5,5 C5,5 9,12 5,19" />
      <path d="M19,5 C19,5 15,12 19,19" />
      <line x1="6" y1="12" x2="18" y2="12" />
    </Svg>
  ),
  XV: (s) => (
    <Svg size={s}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 19 L9.8 12.8 L3.2 12.6 L8.4 8.8 L6.6 2.4 L12 6.2 L17.4 2.4 L15.6 8.8 L20.8 12.6 L14.2 12.8 Z" />
    </Svg>
  ),
  XVI: (s) => (
    <Svg size={s}>
      <rect x="8" y="9" width="8" height="12" />
      <line x1="6" y1="9" x2="18" y2="9" />
      <path d="M12,2 L9,10 L13,10 L10,16" />
    </Svg>
  ),
  XVII: (s) => (
    <Svg size={s}>
      <path d="M12,2 L14.5,9.5 L22,9.8 L16,14.5 L18,22 L12,17.5 L6,22 L8,14.5 L2,9.8 L9.5,9.5 Z" />
    </Svg>
  ),
  XVIII: (s) => (
    <Svg size={s}>
      <path d="M16,4 A8,8 0 1,0 16,20 A6,6 0 1,1 16,4 Z" />
      <circle cx="6" cy="6" r="0.9" />
      <circle cx="4" cy="14" r="0.9" />
      <circle cx="9" cy="19" r="0.9" />
    </Svg>
  ),
  XIX: (s) => (
    <Svg size={s}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="1" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="23" y2="12" />
      <line x1="4.2" y1="4.2" x2="7" y2="7" />
      <line x1="17" y1="17" x2="19.8" y2="19.8" />
      <line x1="4.2" y1="19.8" x2="7" y2="17" />
      <line x1="17" y1="7" x2="19.8" y2="4.2" />
    </Svg>
  ),
  XX: (s) => (
    <Svg size={s}>
      <path d="M5,20 L12,4 L19,20" />
      <line x1="12" y1="4" x2="12" y2="1" />
      <line x1="8" y1="13" x2="16" y2="13" />
    </Svg>
  ),
  XXI: (s) => (
    <Svg size={s}>
      <ellipse cx="12" cy="12" rx="9" ry="6.5" />
      <circle cx="12" cy="5.5" r="1" />
      <circle cx="12" cy="18.5" r="1" />
      <circle cx="3" cy="12" r="1" />
      <circle cx="21" cy="12" r="1" />
    </Svg>
  ),
};

export function MajorIcon({ num, size = 40 }) {
  const render = MAJOR_ICONS[num] || MAJOR_ICONS["0"];
  return render(size);
}

// コートカード（ペイジ・ナイト・クイーン・キング）の冠マーク
export function CourtMark({ rank, size = 16 }) {
  const points = { P: 1, N: 2, Q: 3, K: 5 }[rank] || 1;
  const step = 16 / (points + 1);
  const spikes = Array.from({ length: points }, (_, i) => {
    const x = step * (i + 1);
    return `${x - step / 2.4},6 ${x},${1} ${x + step / 2.4},6`;
  });
  return (
    <Svg size={size} viewBox="0 0 16 8" style={{ marginBottom: 2 }}>
      <polyline points={`0,6 ${spikes.join(" ")} 16,6`} fill="none" />
    </Svg>
  );
}

const PIP_LAYOUT_COLS = { 1: 1, 2: 2, 3: 3, 4: 2, 5: 2, 6: 3, 7: 3, 8: 4, 9: 3, 10: 4 };

// カードの絵柄（大アルカナはシンボル、小アルカナはスートをランクの数だけ並べたピップ柄）
export function CardArt({ card, size = 40 }) {
  if (card.arcana === "major") {
    return (
      <div className="card-art card-art-major">
        <MajorIcon num={card.num} size={size} />
      </div>
    );
  }
  if (["P", "N", "Q", "K"].includes(card.num)) {
    return (
      <div className="card-art card-art-court">
        <CourtMark rank={card.num} />
        <SuitIcon suit={card.suit} size={size * 0.7} />
      </div>
    );
  }
  const count = parseInt(card.num, 10) || 1;
  const cols = PIP_LAYOUT_COLS[count] || 3;
  const pipSize = count <= 2 ? size * 0.7 : Math.max(12, size * 0.42);
  return (
    <div className="card-art card-art-pips" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {Array.from({ length: count }, (_, i) => (
        <SuitIcon suit={card.suit} size={pipSize} key={i} />
      ))}
    </div>
  );
}
