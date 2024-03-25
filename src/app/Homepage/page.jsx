import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
const Home = () => {


  return (
    <div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency</h1>
        <p>
          We are a team of creative thinkers who are passionate about
          creativity.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button1}>Learn more</button>
          <button className={styles.button2}>contact</button>
        </div>
      </div>
      <div className={styles.linksContainer}>
        
          <div className={styles.brands}> 
           <Image src="/brands.png" className={styles.branda} fill alt="Brands"></Image>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/hero.gif" fill alt="Home gif"></Image>
      </div>
    </div>
  )   
}

export default Home