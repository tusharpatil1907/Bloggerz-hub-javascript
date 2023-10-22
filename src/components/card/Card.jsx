import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
function card() {
  return (
    <div className={styles.container}>
          <div className={styles.imagecontainer}>
            <Image className={styles.image} src='/p1.jpeg' fill/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>10.05.2002</span>
                <span className={styles.date}> - </span>
                <span className={styles.category}>Culture</span>
                <Link href='/'>
                <h1 className={styles.head}>Lorem ipsum dolor sit amet.</h1>
                </Link>
                <p className={styles.detail}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta, soluta, exercitationem velit quasi inventore voluptate nobis aspernatur nesciunt sapiente distinctio labore magni tempore unde tenetur fuga? Cumque, nemo dolorem tenetur temporibus modi neque tempora delectus dignissimos facilis magni impedit sunt aliquam non deserunt asperiores. Optio deserunt magnam eos ipsum.</p>
                <Link href='/' className={styles.btn}>Read More</Link>
            </div>
          </div>
        </div>
  )
}

export default card
