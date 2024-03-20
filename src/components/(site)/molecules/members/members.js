

import styles from './members.module.css'; 
import Link from 'next/link';

const Members = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
          
          <div className={styles.text}>
            <p>Kunne du også tænke dig at blive medlem af vores</p>
          </div>
   
          <p className={styles.title}>Kundeklub?</p>

          <Link className={styles.btn} href={'/kundeklubben'}>BLIV MEDLEM NU!</Link>
      </div>
    </div>
  );
};
export default Members;