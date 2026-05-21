
# 外山綾一 ポートフォリオサイト — CLAUDE.md

## プロジェクト概要

外山 綾一（業務改善エンジニア / フロントエンドエンジニア）の自己紹介・経歴・スキルを表示する1ページ構成のポートフォリオサイト。
コンセプト: 「現場を知るエンジニアが、仕組みで課題を解決する。」

## 技術スタック

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 16.2.6（App Router） |
| スタイリング | Tailwind CSS v4 + `@tailwindcss/postcss` |
| 言語 | TypeScript |
| デプロイ | Vercel |
| パッケージマネージャー | npm |

## ディレクトリ構成

```
lp-mypage/
├── app/
│   ├── layout.tsx          # フォント設定・メタデータ
│   ├── page.tsx            # 全セクションを束ねるエントリ
│   └── globals.css         # Tailwind ディレクティブ + @theme 変数
├── components/
│   ├── Hero.tsx            # ファーストビュー（LP コンセプト・課題解決）
│   ├── Skills.tsx          # スキル一覧（バー表示）
│   ├── Profile.tsx         # プロフィール・自己紹介（写真プレースホルダー付き）
│   ├── Contact.tsx         # 問い合わせ（メールリンク CTA）
│   └── Footer.tsx          # コピーライト
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── CLAUDE.md
└── portfolio_toyama.md     # コンテンツ原稿
```

## ページ構成（セクション順）

| # | コンポーネント | 内容 |
|---|---|---|
| 1 | `Hero` | キービジュアル / お悩みカード×4 / 解決策×3（ダミー） |
| 2 | `Skills` | スキルバー（業務改善・自動化 / フロントエンド の2カテゴリ） |
| 3 | `Profile` | 写真 + 名刺情報 / 自己紹介文・主な取り組み |
| 4 | `Contact` | 問い合わせ CTA（メールリンク・GitHub リンク） |
| 5 | `Footer` | コピーライト |

## デザイン仕様

| 項目 | 値 |
|------|----|
| テーマ | シンプル・ミニマル |
| 背景色（基本） | ホワイト `#FFFFFF` |
| 背景色（サブ） | ライトグレー `#F9FAFB`（gray-50） |
| キービジュアル背景 | ダーク `#111827` |
| 本文色 | ダークグレー `#1F2937` |
| アクセントカラー | ブルー `#2563EB` |
| 日本語フォント | Noto Sans JP（Google Fonts） |
| 英語フォント | DM Sans（Google Fonts） |
| ダークモード | 非対応（ライトのみ） |
| アニメーション | 使用しない |

## レスポンシブ方針

- **ブレークポイント**: `sm`（640px）・`md`（768px）を主に使用
- **基本方針**: モバイルファースト（Tailwind デフォルトがモバイル）
- **縦余白**: `py-16 md:py-24` を全セクションで統一
- **文字サイズ**: `text-3xl sm:text-4xl md:text-6xl` のように3段階でスケール
- **Skills**: mobile はカード背景（`bg-gray-50 p-4 rounded-xl`）、sm+ は横並びフラット表示
- **Profile 写真**: mobile は中央寄せ（`mx-auto md:mx-0`）、md+ は左固定

## コンテンツ仕様

### 連絡先（架空）

| 種別 | 値 |
|------|----|
| Email | ayaichi.toyama@example.com |
| GitHub | https://github.com/ayaichi-toyama |

### スキルレベル表記

5段階のドットバー（`SkillBar` コンポーネント）で表示。★ 表記は使わない。

### プロフィール写真

`public/photo.png`（600×800px、3:4センタークロップ済み）を `next/image` の `fill` で表示。

### 問い合わせ（Contact セクション）

- `id="contact"` の `<section>` として実装
- メールリンク・GitHub リンクを CTA ボタン形式で並べる
- サーバーコンポーネントのまま維持（フォーム送信機能は持たない）

## コーディング規約

- コンポーネントは1ファイル1関数（デフォルトエクスポート）
- Props・型は同ファイル内に `type` で定義する
- Tailwind クラスのみでスタイリングし、インラインスタイルは使わない
- `<section>` タグに `id` を付与してセクション間リンクを可能にする
- `any` 型は使用しない
- `"use client"` は必要な箇所のみ（現状は全てサーバーコンポーネント）
- コメントは日本語で書く（理由が非自明な箇所にのみ記載し、コードが何をするかは書かない）

## 実装時の注意点

- フォントは `layout.tsx` で `next/font/google` から読み込み、CSS 変数（`--font-dm-sans` / `--font-noto-sans-jp`）で参照する
- 画像は `next/image` を使う（`output: 'export'` は設定しないため Vercel 前提）
- Tailwind v4 の設定は `postcss.config.mjs`（`@tailwindcss/postcss`）と `globals.css`（`@theme`）で管理する。`tailwind.config.ts` は不要
