---
title: このドキュメントを作るまで
description: ドキュメントサイトを作った時のメモ書き
color: cornflowerblue
---

# このドキュメントを作るまで

## 背景

Next.js でドキュメントサイトを作ってみたかった  
今なら App Router が流行りなので、それの練習もかねて  

## 技術スタック

このドキュメントは以下の技術スタックで作成しました。

* Next.js (App Router)
* Tailwind CSS
* Markdoc

## 導入方法

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

`@markdoc/next.js` は App Router の対応が Next.js 13 の時のままなので利用しませんでした。

frontmatter は gray-matter を使って取っています

## ハマったポイント

### slug + index.html のルーティング

`trailingSlash: true` を入れると OK

## お蔵入りしたもの

### MDX

Markdown として表現したくて MDX 内で Next.js のフックを使いたくなかったので。
