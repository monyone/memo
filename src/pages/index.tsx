import type { NextPage } from 'next'
import { A, H1, H2, P, Ul } from '../component/markdown'

const Home: NextPage = () => {
  return (
    <article>
      <H1>メモ置き場</H1>
      <H2>これは何?</H2>
      <P>
        Next.js, TailwindCSS, Markdoc で作るドキュメントサイトの練習
      </P>
      <P>
        作った背景/方法は <A href={'/building-doc/how-to-setup.html'}>このドキュメントを作るまで</A> を参照
      </P>
      <H2>コンテンツ</H2>
      <P>
        特になし
      </P>
    </article>
  )
}

export default Home
