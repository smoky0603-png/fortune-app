# タロット占いアプリ - デプロイ手順

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
| ANTHROPIC_API_KEY | sk-ant-xxxx（Anthropicのシークレットキー） |

### 5. 完成！
デプロイ後に発行されるURLにアクセスすれば
テーマを選んでタロットカードを引き、AIによる鑑定文を読むことができます。

## ローカルで動かす

```
npm install
echo "ANTHROPIC_API_KEY=sk-ant-xxxx" > .env
npm run dev
```

`ANTHROPIC_API_KEY`を設定しなくても、AI鑑定が使えない場合はカードの意味から鑑定文をその場で組み立てるので、結果は必ず表示されます。
