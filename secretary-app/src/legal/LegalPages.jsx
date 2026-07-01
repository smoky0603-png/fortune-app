function Page({ title, onBack, children }) {
  return (
    <div className="legal-page">
      <button className="legal-back" onClick={onBack}>
        ← 戻る
      </button>
      <h1 className="legal-title">{title}</h1>
      <div className="legal-body">{children}</div>
    </div>
  );
}

export function PrivacyPolicy({ onBack }) {
  return (
    <Page title="プライバシーポリシー" onBack={onBack}>
      <p>本アプリは、以下の方針で利用者のデータを取り扱います。</p>
      <h2>1. 予定・タスクの保存場所</h2>
      <p>
        登録した予定・タスクは、サーバーには送信・保存されません。すべてお使いの端末のブラウザ内（localStorage）にのみ保存されます。
        アプリを削除したりブラウザのデータを消去したりすると、保存内容も失われます。
      </p>
      <h2>2. AI機能（タスク抽出・メール下書き）について</h2>
      <p>
        「タスク抽出」または「メール下書き」を実行した場合のみ、その時に入力したテキストがAIモデル提供元（Anthropic社）のAPIに送信されます。
        この送信は機能を実行するたびに都度行われ、サーバー側での保存や、他の目的での利用は行いません。
      </p>
      <h2>3. データの削除</h2>
      <p>アプリ内の「全データを削除」ボタンから、いつでも端末に保存された予定・タスクをすべて削除できます。</p>
      <h2>4. 第三者提供</h2>
      <p>本アプリが取得した情報を、上記のAI機能の実行以外の目的で第三者に提供することはありません。</p>
    </Page>
  );
}

export function TermsOfService({ onBack }) {
  return (
    <Page title="利用規約" onBack={onBack}>
      <p>本規約は、本アプリ（以下「本サービス」）の利用条件を定めるものです。</p>
      <h2>1. 提供内容</h2>
      <p>本サービスは、個人の予定・タスク管理を補助するツールを無償で提供します。</p>
      <h2>2. 免責事項</h2>
      <p>
        AIによるタスク抽出・メール文面の生成内容は補助的な提案であり、その正確性を保証するものではありません。
        重要な予定や連絡については、必ず内容をご自身でご確認ください。
      </p>
      <h2>3. 禁止事項</h2>
      <p>法令または公序良俗に反する目的での利用、本サービスの運営を妨げる行為を禁止します。</p>
    </Page>
  );
}
