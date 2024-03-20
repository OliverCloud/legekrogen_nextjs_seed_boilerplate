

import Image from 'next/image';
import styles from './basketItemCard.module.css'
import { useBasket } from '@/context/basket';

const BasketItemCard = ({product}) => {

  const {addToBasket, removeFromBasket} = useBasket();
  
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={product.image} alt={product.title} width={100} height={100} />
      </div>
      <div className={styles.text}>
        
        <div className={styles.box}>
          <p>{product.title}</p>
          <div>
            <button className={styles.btn} onClick={() => removeFromBasket(product._id)}>-</button>
            <p>{product.amount}</p>
            <button className={styles.btn} onClick={() => addToBasket(product._id)}>+</button>
          </div>

        </div>

        <div className={styles.price}>
          <p>{product.price * product.amount} kr.</p>
        </div>
      </div>
    </div>
  );
};
export default BasketItemCard;