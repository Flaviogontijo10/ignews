import Head from 'next/head';
import stlyes from '../styles/home.module.scss'

export default function Home(){
  return (
    <>
        <Head>
          <title>Início | ig.news</title>
        </Head>,
       <h1 className={stlyes.title}>
            Hello <span>Word</span>
       </h1>
    </>
  )
}

  
  

