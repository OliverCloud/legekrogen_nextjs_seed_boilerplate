

import Hero from '@/components/(site)/molecules/hero/hero';
import styles from './page.module.css';
import { productsConfig } from '@/context/heroData';
import Products from '@/components/(site)/molecules/products/products';
import Members from '@/components/(site)/molecules/members/members';
import Footer from '@/components/(site)/organisms/footer/footer';

const Page = () => {

  return (
    <div>
      <Hero config={productsConfig} />
      <Products />
      <Members />
      <Footer />
    </div>
  );
}
export default Page;