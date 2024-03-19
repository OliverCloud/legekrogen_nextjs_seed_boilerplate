
import Hero from '@/components/molecules/hero/hero';
import styles from './page.module.css';
import Footer from '@/components/organisms/footer/footer';
import Members from '@/components/molecules/members/members';
import Accordions from '@/components/molecules/accordions/accordions';
import { faqConfig } from '@/context/heroData';

const Page = () => {

  return (
    <div>
      <Hero config={faqConfig}  />
      <Accordions />
      <Members />
      <Footer />
    </div>
   
  );
}
export default Page;