

import Image from 'next/image';
import styles from './reviewCard.module.css';

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
          <p>{review.description}</p>
        </div>
        <div className={styles.byline}>
            <p className={styles.name}>{review.name}</p>
            <p>{review.byline}</p>
          </div>
    </div>
  );
}
export default ReviewCard;