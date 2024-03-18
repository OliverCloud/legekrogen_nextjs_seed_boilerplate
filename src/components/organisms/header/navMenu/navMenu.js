
import Link from 'next/link';
import styles from './navMenu.module.css';


const NavMenu = () => {
    return (
        <div className={styles.container}>
            <Link href={'/'}>we</Link>
            <Link href={'/'}>we</Link>
            <Link href={'/'}>we</Link>
        </div>
    )
}
export default NavMenu;