---
title: メモ置き場 | このドキュメントを作るまで
description: ドキュメントサイトを作った時のメモ書き
---

# このドキュメントを作るまで

## 背景

Next.js でドキュメントサイトを作ってみたかった!

モチベーションとしては以下があります。

* Gatsby の GraphQL をメンテするのが面倒
* Docusaurus だとデザインが融通効かなそうな気がする
* Next.js の練習も兼ねて作れば一挙両得では?
* 自作すれば CSS とかも自由に選べるのでは?

なるべく Next.js のエコシステムに手を入れなければ、式年遷宮があっても楽になるはず...

## 技術スタック

このドキュメントは以下の技術スタックで作成しています。

* Next.js
* TailwindCSS
* Markdoc

## スタックの導入方法

### Next.js

Next.js を以下のコマンドで導入します。

```sh
yarn create next-app --typescript ${ディレクトリ}
```

デフォルトでは pages がルートディレクトリ直下にあるため、`src` に移します。  
この作業をする場合には、 `.next` ディレクトリを削除しましょう。

```sh
rm -rf .next
mkdir src
mv pages src
mv styles src
```

### TailwindCSS

TailwindCSS のパッケージを入れ、 `tailwindcss init` コマンドで初期化します。

```sh
yarn add --dev tailwindcss postcss autoprefixer
.node_modules/.bin/tailwindcss init -p
```

`tailwind.config.json` が作成されるため、ソースの場所を追記します。

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,md,jsx,tsx,mdx}', // 追加
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Next.js の globals.css に以下の行を入れて TailwindCSS を利用可能にします。

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Markdoc

Markdoc を以下のコマンドで導入します。

```sh
yarn add --dev @markdoc/markdoc @markdoc/next.js
```

そして、Markdoc を `next.cofnig.js` で有効化します。  
今回は `./src/component/markdoc` に設定ファイルを置くため、その設定を入れます。

```javascript
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const withMarkdoc = require('@markdoc/next.js')({
  schemaPath: path.join('./', 'src', 'component', 'markdoc')
});
module.exports = withMarkdoc({
  ... nextConfig,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md'],
});
```

TailwindCSS を効かせる場合は `./src/component/markdoc/nodes.ts` を編集してカスタマイズしましょう。

## お蔵入りしたもの

* MDX: メタ情報を MDX 側で JS として書くのが辛かったので、今回は見送りました
  * getStaticProps などを MDX で書くのは可搬性がよろしくないなと思ったので

### MDX

Next.js の MDX パッケージと MDX の loader を導入します。  
また、TailwindCSS を適用するため、React でクラスを当てるための設定も導入します。

```sh
yarn add @next/mdx @mdx-js/loader @mdx-js/react
```

`next.config.js` に MDX 用の設定を記載します。

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX({
  ... nextConfig,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
```

このままでは TailwindCSS が当たらないので、`MDXProvider` を入れ  
変換時に TailwindCSS の当たるコンポーネントに置き換えます。

```jsx
<MDXProvider components={components}>
  <Component />
</MDXProvider>
```

## 所感

Markdown 用のコンポーネントを使って TSX で書いていた方が、個人的には楽という事に気づきました...  
これもまた収穫ということで...