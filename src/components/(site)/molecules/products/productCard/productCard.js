
import Image from 'next/image';
import styles from './productCard.module.css';
import { useBasket } from '@/context/basket';


const ProductCard = ({ product }) => {

  const discount = product.discountInPercent > 0 ? styles.active : '';
  const {addToBasket} = useBasket();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <Image src={product.image} alt={product.title} width={300} height={300} />
          <div className={`${styles.discount} ${discount}`}>
            <p>{product.discountInPercent}%</p>
          </div>
        </div>
      
        <div className={styles.text}>
    
          <p className={styles.title}>{product.title}</p>
          <p className={styles.price}>{product.price} kr.</p>
        
        </div>
        <button className={styles.btn} onClick={() => addToBasket(product._id)}>Læg i kurv</button>
      </div>
    </div>
  );
}
export default ProductCard;