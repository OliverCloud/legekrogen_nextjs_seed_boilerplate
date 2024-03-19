
import Hero from '@/components/molecules/hero/hero';
import styles from './page.module.css';
import Products from '@/components/molecules/products/products';
import Members from '@/components/molecules/members/members';
import Footer from '@/components/organisms/footer/footer';
import { productsConfig } from '@/context/heroData';

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