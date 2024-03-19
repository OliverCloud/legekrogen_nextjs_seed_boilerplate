"use client"

import Products from '@/components/molecules/products/products'
import styles from './page.module.css'
import Hero from '@/components/molecules/hero/hero'
import Reviews from '@/components/molecules/reviews/reviews'
import Members from '@/components/molecules/members/members'
import Footer from '@/components/organisms/footer/footer'
import { heroConfig } from '@/context/heroData'

export default function Home() {

  return (
    <main className={styles.page} >
      <Hero config={heroConfig} />
      <Products recomended={true} />
      <Reviews />
      <Members />
      <Footer />
    </main>
  )
}

