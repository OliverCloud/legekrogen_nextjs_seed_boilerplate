
import Hero from '@/components/(site)/molecules/hero/hero'
import styles from './page.module.css'
import { heroConfig } from '@/context/heroData'
import Products from '@/components/(site)/molecules/products/products'
import Reviews from '@/components/(site)/molecules/reviews/reviews'
import Members from '@/components/(site)/molecules/members/members'
import Footer from '@/components/(site)/organisms/footer/footer'
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

