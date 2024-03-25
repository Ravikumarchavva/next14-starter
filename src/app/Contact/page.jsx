import styles from './contact.module.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// const HydrationTestNoSsr = dynamic(()=>import('@/Components/hydrationTest/HydrationTest'),{ssr:false})

const Contact = () => {
  // const a=Math.random()
  return (
    <div className={styles.contactContainer}>
      
      <div className={styles.imgContainer}>
        <Image 
        className={styles.img} 
        src="/contact.png" 
        fill alt="Home gif"
        sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
        ></Image>
      </div>
      <div className={styles.formContainer}>
        {/* <div suppressHydrationWarning>{a}</div>  */}
        <form className={styles.form} >
          <input className={styles.formElement} type="text" placeholder='Name and Surname'></input>
          <input className={styles.formElement} type="email"  placeholder='Email Address'></input>
          <input className={styles.formElement} type="text" placeholder='Phone Number(optional)'></input>
          <textarea className={styles.formElement} placeholder="Enter you message"
            name=''
            rows="6"
            cols="10"
          ></textarea>
          <button className={styles.formSubmit} type="submit">Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Contact