
import Link from 'next/link';
import styles from './navMenu.module.css';
import Image from 'next/image';

import { FaXmark } from "react-icons/fa6";

const NavMenu = ({navMenu, setNavMenu}) => {
    return (
        <div className={styles.container}>

            <div className={styles.menu}>

                <Link href={'/'} className={styles.logo}>
                    <Image
                        src="/logo/legekrogen_logo.png"
                        alt="smuknu logo"
                        width={200}
                        height={200}
                    />
                </Link>
                <div className={styles.btn} onClick={() => setNavMenu(!navMenu)}>
                    <FaXmark />
                </div>
            </div>

            <div className={styles.nav}>
                <Link href={'/'}>Home</Link>
                <Link href={'/faq'}>FAQ</Link>
                <Link href={'/kundeklubben'}>Kundeklubben</Link>
                <Link href={'/produkter'}>Produkter</Link>
            </div>
        </div>
    )
}
export default NavMenu;