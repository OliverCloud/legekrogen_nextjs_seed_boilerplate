
import Link from 'next/link';
import styles from './success.module.css';
import Image from 'next/image';

const Succes = ({user, subscriber}) => {
    return (
        <div className={styles.container}>
    
            <div className={styles.wrapper}>
                <div>
                    <p className={styles.title}>
                        TAK!
                        <span>{user.name} {subscriber.name}</span>
                    </p>

                    <div className={styles.subTitle}>
                        <p> Vi er så glade for at du vil være en del af vores kundeklub.</p>
                    </div>
                    
                    <div className={styles.img}>
                        <Image src="/heros/medlem.jpg" alt="review" width={100} height={100}/>
                    </div>
            
                
                    <div className={styles.text}>
                
                        <p>Tag et kig i din indbakke. Vi har givet dig fri fragt på din første ordre.</p>
                        
                    </div>

                    
                    <Link className={styles.btn} href={'/'}>Tilbage til forsiden</Link>
                </div>
                
            </div>  
                
          
        </div>
    )
}
export default Succes;