# AI秘書アプリ - デプロイ手順

個人向けのスケジュール・タスク管理を補助するAI秘書アプリです。

## v1.0（MVP）でできること

- 予定・タスクのワンタップ追加、ドラッグ&ドロップでの日付変更・並べ替え
- 仕事/プライベートのカテゴリ切り替え・色分け表示
- 会議メモなどの自由文からタスクを自動抽出し、優先度付きでカレンダーに追加
- 状況を入力するだけでメール下書きを自動生成
- 予定・タスクは端末内（ブラウザのlocalStorage）にのみ保存。AI機能利用時のみ入力内容がAI提供元に送信される設計

## Vercelへのデプロイ

1. Vercelで「Add New Project」→ このリポジトリを選択
2. Root Directoryに `secretary-app` を指定
3. 環境変数を設定（Settings → Environment Variables）

| Name | Value |
|------|-------|
| ANTHROPIC_API_KEY | sk-ant-xxxx（任意。未設定でもローカル簡易処理で機能する） |

4. Deploy

## ローカルで動かす

```
cd secretary-app
npm install
echo "ANTHROPIC_API_KEY=sk-ant-xxxx" > .env
npm run dev
```

`ANTHROPIC_API_KEY`を設定しなくても、タスク抽出・メール下書きはローカルの簡易ロジックで必ず結果が表示されます。

## 今後のロードマップ

- v1.5: 音声入力・会議の自動文字起こし＋要約
- v2.0: 参加者の空き時間を自動検出した日程調整、緊急時の予定再編成の提案機能（Google Calendar連携が前提）
