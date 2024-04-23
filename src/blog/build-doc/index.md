---
title: このドキュメントを作るまで
description: ドキュメントサイトを作った時のメモ書き
---

# このドキュメントを作るまで

## 背景

Next.js でドキュメントサイトを作ってみたかった!

## 技術スタック

このドキュメントは以下の技術スタックで作成しています。

* Next.js (App Router)
* Tailwind CSS
* Markdoc

## スタックの導入方法

### Next.js

Next.js を以下のコマンドで導入します。

```sh
yarn create next-app
```

### Markdoc

Markdoc を以下のコマンドで導入します。

```sh
yarn add --dev @markdoc/markdoc
```

`@markdoc/next.js` は App Router の対応が Next.js 13 の時のままのようなので利用しません。

## お蔵入りしたもの

### MDX

Markdown は Markdown として表現したく、MDX で Next.js のフックを使いたくなかったため
