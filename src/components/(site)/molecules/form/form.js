"use client"

import styles from './form.module.css';
import Success from './feedback/success/success';
import { useEffect, useState } from 'react';

const Form = () => {
  const [members, setMembers] = useState([]);
  const [emailExists, setEmailExists] = useState(false);
  const [success, setSuccess] = useState(false);
  const [member, setMember] = useState([]);
  const [subscriber, setSubscriber] = useState({});
  useEffect(() => {
    fetch('http://localhost:3000/api/subscribers')
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
  
    const data = new FormData(form);

    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    setMember({ name, email, message });

    const memberExists = members.find(member => member.email === email);

    if (memberExists) {
      setEmailExists(true);
    } else {
      setEmailExists(false);
      setSuccess(true);
      let result = await fetch('http://localhost:3000/api/subscriber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      })

      let res = await result.json();
      
      setSubscriber(res.data)
      form.reset();

    }
  };

  return (
    <div className={styles.container}>

      {success ? <Success user={member} subscriber={subscriber} /> :  <form className={`${styles.form} ${ emailExists ? styles.message : ''}`} onSubmit={handleSubmit}>
        <label htmlFor='name'>
          <input type="text" autoComplete='fd' id='name' name='name' placeholder='Fulde navn' defaultValue={'John Doe'} required/>
        </label>
        <label htmlFor='email'>
          <input type="email" autoComplete='fd' id='email' name='email' placeholder='Email' defaultValue={'example@example.com'} required />
        </label>
        {emailExists ? <p className={styles.error}>Brugeren eksisterer allerede!</p> : ''} 
        <label htmlFor='message'>
          <textarea id='message' name='message' placeholder="Hvem køber du legetøj til?" />
        </label>
        
        <div className={styles.terms}>
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">Jeg accepterer <a href="#">betingelserne</a></label> 

        </div>
        <div className={styles.box}>
          <button type="submit" className={styles.btn}>Opret</button>
        </div>
        
      </form>}

      
    </div>
  );
};

export default Form;
