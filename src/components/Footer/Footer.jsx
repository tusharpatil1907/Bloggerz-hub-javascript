import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src='/logo.png' width={50} height={50} />
          <h2 className={styles.title}>
            Tushar patil
          </h2>
        </div>
        <div className={styles.description}>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rerum eaque necessitatibus totam, debitis obcaecati et, consectetur laborum, tempora tenetur at voluptatem repudiandae harum! Sunt reiciendis optio ad numquam hic voluptatum odit adipisci, cum quisquam.
          </p>
        </div>
        <div className={styles.socialLinks}>
          <Image src='/instagram.png' className={styles.socialLink} width={30} height={30} />
          <Image src='/facebook.png' className={styles.socialLink} width={30} height={30} />
          <Image src='/youtube.png' className={styles.socialLink} width={30} height={30} />
          {/* <Image src='/instagram.png' width={30} height={30} /> */}
        </div>
      </div>


      <div className={styles.impLinks}>
        <div className={styles.links}>
          <span className={styles.linkhead} >links</span>
          <Link className={styles.link} href='/'>Home</Link>
          <Link className={styles.link} href='/'>About</Link>
          <Link className={styles.link} href='/'>Blogs</Link>
          <Link className={styles.link} href='/'>Contact</Link>
        </div>
        <div className={styles.links}>
          <span  className={styles.linkhead}>Tags</span>
          <Link className={styles.link} href='/'>link1</Link>
          <Link className={styles.link} href='/'>link2</Link>
          <Link className={styles.link} href='/'>link3</Link>
          <Link className={styles.link} href='/'>link4</Link>
        </div>
        <div className={styles.links}>
          <span className={styles.linkhead}>social</span>
          <Link className={styles.link} href='/'>Instagram</Link>
          <Link className={styles.link} href='/'>Tweeter</Link>
          <Link className={styles.link} href='/'>Facebook</Link>
          <Link className={styles.link} href='/'>Linkedin</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
