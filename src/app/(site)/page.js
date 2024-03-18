"use client"

import Products from '@/components/molecules/products/products'
import styles from './page.module.css'
import Hero from '@/components/molecules/hero/hero'
import Reviews from '@/components/molecules/reviews/reviews'
import Members from '@/components/molecules/members/members'
import Footer from '@/components/organisms/footer/footer'

export default function Home() {

  const config = {
    bgImg: '/heros/forsiden.jpg',
    bgColorBox: '#C1ADCE93',
    title: 'At lege er at leve',
    subTitle: 'Her hos os har vi et stort udvalg af legetøj i høj kvalitet',
    text: false,
    btn: false
  }

  return (
    <main className={styles.page} >
      <Hero config={config} />
      <Products />
      <Reviews />
      <Members />
      <Footer />
    </main>
  )
}

