import React from 'react'
import Links from './links/Links'
import styles from "./navbar.module.css"
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <div className={styles.links}>
        <Links/>
      </div>


    </div>
  )
}

export default Navbar