# 数秘術鑑定アプリ - デプロイ手順

## GitHubへのアップ手順

### 1. GitHubで新しいリポジトリを作る
1. github.com にログイン
2. 右上「+」→「New repository」
3. Repository name: `fortune-app`
4. Publicを選択 → 「Create repository」

### 2. このファイルをアップロード
リポジトリページで「uploading an existing file」をクリックして
このフォルダの中身を全部ドラッグ＆ドロップ

### 3. Vercelにデプロイ
1. vercel.com にアクセス
2. 「Add New Project」
3. GitHubのfortune-appリポジトリを選択
4. 「Deploy」ボタンをクリック

### 4. 環境変数を設定
Vercelダッシュボード → Settings → Environment Variables

| Name | Value |
|------|-------|
| STRIPE_SECRET_KEY | sk_live_xxxx（Stripeのシークレットキー） |

### 5. 完成！
デプロイ後に発行されるURLをシェアすれば
ユーザーが¥300で鑑定を受けられます🎉
