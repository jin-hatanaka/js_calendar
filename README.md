## 概要
本リポジトリは、JavaScript（Vanilla JS）を用いて作成したカレンダーアプリです。
コマンドラインで指定した月のカレンダーを描画できるように実装しています。
外部ライブラリに依存せず、日付計算・カレンダー描画から DOM 操作まで自前で実装しています。

## 使用技術
- JavaScript（Vanilla JS）
- Node.js（スクリプト実行・動作確認用）

## 機能一覧
- コマンドラインからカレンダーを表示
- 外部ライブラリを使用しない日付計算・描画処理
- 当月のカレンダー表示
- オプション指定による任意月の表示（`-m`）
- 不正な月指定時のエラーハンドリング

## コマンドの実行結果

```
node calendar.js
```

<img width="429" height="154" alt="Image" src="https://github.com/user-attachments/assets/4b39b780-1af5-4284-9f91-30701f74aa68" />

```
node calendar.js -m 6
```

<img width="471" height="137" alt="Image" src="https://github.com/user-attachments/assets/d45f9bc7-8914-4bc3-a4ee-134ec96c95a7" />

```
node calendar.js -m 100
```

<img width="482" height="37" alt="Image" src="https://github.com/user-attachments/assets/b925b603-826a-4524-a04a-52a811ef05a9" />
