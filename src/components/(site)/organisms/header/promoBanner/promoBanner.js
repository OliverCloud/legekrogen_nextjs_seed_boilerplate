
import { FaTruck } from 'react-icons/fa';
import styles from './promoBanner.module.css'

const PromoBanner = () => {
  return (
    <div className={styles.container}>
      <FaTruck /> 
      <p className={styles.text}>Fri fragt ved køb over 499,-</p>
      
    </div>
  );
}
export default PromoBanner;