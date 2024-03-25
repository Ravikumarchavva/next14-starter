import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'
const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textContainer}>
        <h2>About Agency</h2>
        <h1>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p>
        We create digital ideas that are bigger,bolder,braver and better.We are a team of creative thinkers who are passionate about
          creativity.Our team work will make the things possible.
        </p>
        <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>234 K+</h1>
              <p>People Reacted</p>
            </div>
            <div className={styles.box}>
              <h1>5 K+</h1>
              <p>Services and Plugins </p>
            </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about.png" fill alt="Home gif"></Image> 
      </div>
    </div>
  )
}

export default About