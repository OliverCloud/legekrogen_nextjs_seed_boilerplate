
import Link from 'next/link';
import styles from './footer.module.css';
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
          <div>
            <p className={styles.title}>Kundeservice</p>
            <div className={styles.info}>
              <div>
                <FaRegEnvelope />
                <p className={styles.email}>kontakt@legehjørnet.dk</p>
              </div>
              
              <div>
                <FaPhoneAlt />
                <p className={styles.phone}>+45 23 45 67 89</p>
              </div>
             
            </div>
          </div>

          <div>
          <p className={styles.title}>Følg os</p>
            <div className={styles.shome}>
              <Link className={styles.icon} href={'https://www.facebook.com/'} target={'_blank'}>
                <Image src="/icons/icons8-facebook-24.svg" alt="facebook" width={20} height={20} />
              </Link>
              <Link className={styles.icon} href={'https://www.instagram.com/'} target={'_blank'}>
                <Image src="/icons/icons8-instagram-24.svg" alt="instagram" width={20} height={20} />
              </Link>
            </div>
          </div>
          
        </div>
    )
}
export default Footer;