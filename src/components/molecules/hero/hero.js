"use client"
import Image from 'next/image';
import styles from './hero.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Hero = ({config}) => {

  const [btns, setBtns] = useState(config.btn);
  const [textOn, setTextOn] = useState(config.text);
    return (
        <div className={styles.container}>
            <div className={styles.img}>
              <Image src={config.bgImg} alt="hero" width={300} height={300} />
            </div>
            <div className={styles.wrapper} style={{ backgroundColor: config.bgColorBox }}>
            

                <p className={styles.title} style={{ color: config.colorTitle }}>{config.title}</p>
                
                <div className={styles.text} style={{ color: config.colorText }}>
                  <p>{config.subTitle}</p>
                  {textOn ? <p>{config.text}</p> : ''}
                </div>

                {btns ? <Link className={styles.btn} href={'/produkter'}>Se udvalgte produkter</Link> : ''}
              

              
            
            </div>
            
        </div>
    )
}
export default Hero;