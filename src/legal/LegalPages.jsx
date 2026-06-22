const STYLE = [
  ".legal { padding: 48px 0 80px; }",
  ".legal-back { display: inline-block; margin-bottom: 32px; font-size: 11px; letter-spacing: 0.2em; color: var(--gold); cursor: pointer; background: none; border: none; padding: 0; }",
  ".legal-title { font-family: 'Shippori Mincho', serif; font-size: 22px; color: var(--ink); margin-bottom: 32px; letter-spacing: 0.05em; }",
  ".legal-h2 { font-size: 13px; letter-spacing: 0.15em; color: var(--gold); margin: 28px 0 10px; }",
  ".legal-p { font-size: 13px; line-height: 2; color: #c0b09a; margin-bottom: 8px; white-space: pre-wrap; }",
  ".legal-table { width: 100%; border-collapse: collapse; margin: 8px 0 20px; }",
  ".legal-table tr { border-bottom: 1px solid rgba(255,255,255,0.06); }",
  ".legal-table th { width: 38%; text-align: left; font-size: 12px; color: var(--muted); padding: 12px 8px; vertical-align: top; letter-spacing: 0.05em; }",
  ".legal-table td { font-size: 13px; color: #c0b09a; padding: 12px 8px; line-height: 1.9; vertical-align: top; }",
].join("\n");

function LegalLayout({ title, onBack, children }) {
  return (
    <>
      <style>{STYLE}</style>
      <div className="legal">
        <button className="legal-back" onClick={onBack}>
          ← トップへ戻る
        </button>
        <div className="legal-title">{title}</div>
        {children}
      </div>
    </>
  );
}

export function TermsOfService({ onBack }) {
  return (
    <LegalLayout title="利用規約" onBack={onBack}>
      <div className="legal-h2">第1条（適用）</div>
      <div className="legal-p">
        本規約は、森口祐太（以下「運営者」）が提供するAIタロット占いサービス「タロット占い」（以下「本サービス」）の利用条件を定めるものです。利用者は本サービスを利用した時点で、本規約に同意したものとみなされます。
      </div>

      <div className="legal-h2">第2条（サービス内容）</div>
      <div className="legal-p">
        本サービスは、利用者が選択したテーマに基づきタロットカードを抽出し、AIによる鑑定文を表示するものです。一部のメニューは有料で提供されます。
      </div>

      <div className="legal-h2">第3条（利用料金・お支払い）</div>
      <div className="legal-p">
        有料メニューの料金は、サービス画面に表示する価格（税込）に従うものとし、決済代行会社（Stripe）を通じてクレジットカード等により決済いただきます。決済完了後、鑑定結果を提供します。
      </div>

      <div className="legal-h2">第4条（キャンセル・返金）</div>
      <div className="legal-p">
        本サービスはデジタルコンテンツであり、鑑定結果の提供をもってサービス提供が完了するため、提供後の返金には対応いたしません。システム上の不備により正常にサービスを利用できなかった場合は、第8条のお問い合わせ先までご連絡ください。
      </div>

      <div className="legal-h2">第5条（免責事項）</div>
      <div className="legal-p">
        本サービスが提供する鑑定結果は、占いという性質上、エンターテインメント・参考情報として提供するものであり、結果の正確性や利用者に生じる結果を保証するものではありません。医学的・法律的・金融上の助言に代わるものではなく、重要な意思決定は利用者自身の判断と責任において行ってください。運営者は、本サービスの利用により利用者に生じた損害について、運営者の故意または重過失による場合を除き、責任を負いません。
      </div>

      <div className="legal-h2">第6条（禁止事項）</div>
      <div className="legal-p">
        利用者は、本サービスの運営を妨害する行為、不正アクセス、その他法令または公序良俗に反する行為を行ってはなりません。
      </div>

      <div className="legal-h2">第7条（規約の変更）</div>
      <div className="legal-p">
        運営者は、必要と判断した場合、利用者への事前通知なく本規約を変更できるものとします。変更後の規約は本サービス上に表示した時点から効力を有します。
      </div>

      <div className="legal-h2">第8条（お問い合わせ）</div>
      <div className="legal-p">本サービスに関するお問い合わせは、以下のメールアドレスまでご連絡ください。{"\n"}smoky0603@gmail.com</div>
    </LegalLayout>
  );
}

export function PrivacyPolicy({ onBack }) {
  return (
    <LegalLayout title="プライバシーポリシー" onBack={onBack}>
      <div className="legal-p">
        森口祐太（以下「運営者」）は、AIタロット占いサービス「タロット占い」（以下「本サービス」）における利用者の情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
      </div>

      <div className="legal-h2">1. 取得する情報</div>
      <div className="legal-p">
        本サービスでは、利用者がご相談内容として入力したテキスト、および選択したテーマ・カードの抽出結果を取得します。本サービスは利用者を識別するアカウント登録を求めず、これらの情報をデータベースに保存することはありません。
      </div>
      <div className="legal-p">
        有料メニューをご利用の場合、決済に必要な情報（カード情報等）は決済代行会社であるStripe, Inc.が直接取得・処理し、運営者はカード情報そのものを取得・保持しません。
      </div>

      <div className="legal-h2">2. 利用目的</div>
      <div className="legal-p">取得した相談内容・カード情報は、鑑定結果を生成し利用者に表示する目的のみに利用します。</div>

      <div className="legal-h2">3. 第三者への提供</div>
      <div className="legal-p">
        鑑定文の生成にあたり、入力された相談内容・カード情報をAI機能の提供事業者であるAnthropic, PBCのAPIに送信します。送信先における取り扱いは当該事業者のポリシーに従います。
      </div>
      <div className="legal-p">決済処理に関しては、Stripe, Inc.に必要な情報を送信します。</div>

      <div className="legal-h2">4. Cookie等の利用</div>
      <div className="legal-p">本サービスは現時点で、利用者を追跡するCookieやアクセス解析ツールを使用していません。</div>

      <div className="legal-h2">5. お問い合わせ</div>
      <div className="legal-p">本ポリシーに関するお問い合わせは、以下のメールアドレスまでご連絡ください。{"\n"}smoky0603@gmail.com</div>

      <div className="legal-h2">6. ポリシーの変更</div>
      <div className="legal-p">本ポリシーの内容は、必要に応じて変更されることがあります。変更後の内容は本サービス上に表示した時点から効力を有します。</div>
    </LegalLayout>
  );
}

export function Tokushoho({ onBack }) {
  const rows = [
    ["事業者名", "森口祐太"],
    ["運営責任者", "森口祐太"],
    ["所在地", "ご請求をいただいた場合、法令に従い遅滞なく開示いたします。"],
    ["電話番号", "ご請求をいただいた場合、法令に従い遅滞なく開示いたします。"],
    ["メールアドレス", "smoky0603@gmail.com"],
    ["サービス内容", "AIによるタロット占い鑑定サービス（オンライン提供）"],
    [
      "販売価格",
      "一枚引き：無料\n三枚鑑定：¥500（税込）\n六枚鑑定：¥1,000（税込）",
    ],
    ["商品代金以外の必要料金", "インターネット接続料金・通信料金はお客様のご負担となります。"],
    ["お支払い方法", "クレジットカード決済（決済代行：Stripe, Inc.）"],
    ["お支払い時期", "鑑定実施時に決済が確定します。"],
    ["サービス提供時期", "決済完了後、直ちにご利用いただけます。"],
    [
      "返品・キャンセルについて",
      "デジタルサービスであり、鑑定結果の提供をもって役務提供が完了するため、提供後の返金・キャンセルはお受けできません。システム上の不備により正常にご利用いただけなかった場合は、上記メールアドレスまでご連絡ください。",
    ],
    ["動作環境", "インターネット接続環境、および最新版の主要ウェブブラウザ"],
  ];

  return (
    <LegalLayout title="特定商取引法に基づく表記" onBack={onBack}>
      <table className="legal-table">
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label}>
              <th>{label}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </LegalLayout>
  );
}
