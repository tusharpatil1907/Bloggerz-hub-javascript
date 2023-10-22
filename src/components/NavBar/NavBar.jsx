import React from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'
import AuthLinks from '../Authlinks/AuthLinks'
import Theme from '../Theme/Theme'
import Link from 'next/link'
function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='instagram' width={24} height={24} />
        <Image src='/youtube.png' alt='youtube' width={24} height={24} />
        
      </div>
      <div className={styles.logo}>Blogerz-Hub</div>
      <div className={styles.links}>
        <Theme/>
        <Link className={styles.link} href='/'>HomePage</Link>
        <Link className={styles.link} href='/'>Contact</Link>
        <Link className={styles.link} href='/'>About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default NavBar
