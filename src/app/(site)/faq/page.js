
import Hero from '@/components/(site)/molecules/hero/hero';
import styles from './page.module.css';
import { faqConfig } from '@/context/heroData';
import Accordions from '@/components/(site)/molecules/accordions/accordions';
import Members from '@/components/(site)/molecules/members/members';
import Footer from '@/components/(site)/organisms/footer/footer';

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