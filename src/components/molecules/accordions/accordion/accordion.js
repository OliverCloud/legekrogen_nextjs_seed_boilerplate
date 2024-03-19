"use client"

import { useState } from 'react';
import styles from './accordion.module.css';
import { FaChevronDown, FaQuestion } from "react-icons/fa";

const Accordion = ({qna}) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={`${styles.question} ${open ? styles.active : ''}`} onClick={handleClick}>
          
          <p className={styles.title}>{qna.question}</p>

          <div className={styles.icon}>
            <FaChevronDown />
          </div>

        </div>

        <div className={`${styles.answer} ${open ? styles.active : ''}`}>

          <p dangerouslySetInnerHTML={{__html: qna.answer}}></p>

        </div>

      </div>

    </div>
  );
}
export default Accordion;