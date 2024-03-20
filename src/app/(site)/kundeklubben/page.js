

import styles from './page.module.css';
import { membersConfig } from '@/context/heroData';
import Members from '@/components/(site)/molecules/members/members';
import Form from '@/components/(site)/molecules/form/form';
import Hero from '@/components/(site)/molecules/hero/hero';
import Footer from '@/components/(site)/organisms/footer/footer';

const Page = () => {
  return (
    <div>
      <Hero config={membersConfig}/>
      <Form />
      <Members />
      <Footer />
    </div>
  );
}
export default Page;