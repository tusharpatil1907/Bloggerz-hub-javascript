import React from 'react'
import styles from './CategoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      {/* <hr  className='hr' /> */}
      <div className={styles.Categories}>
        {/* <div className={styles.category}> */}
          <Link href={'/blog'} className={`${styles.category} ${styles.style}`}>
            <Image
              src='/style.png'
              alt='style'
              width={32}
              height={32}
              className={styles.image}
            />style
          </Link>
          <Link href={'/blog'} className={`${styles.category} ${styles.travel}`}>
            <Image
              src='/travel.png'
              alt='style'
              width={32}
              height={32}
              className={styles.image}
            />travel
          </Link>
          <Link href={'/blog'} className={`${styles.category} ${styles.food}`}>
            <Image
              src='/food.png'
              alt='style'
              width={32}
              height={32}
              className={styles.image}
            />Food
          </Link>
          
          <Link href={'/blog'} className={`${styles.category} ${styles.culture}`}>
            <Image
              src='/culture.png'
              alt='style'
              width={32}
              height={32}
              className={styles.image}
            />culture
          </Link>
          <Link href={'/blog'} className={`${styles.category} ${styles.coding}`}>
            <Image
              src='/coding.png'
              alt='style'
              width={32}
              height={32}
              className={styles.image}
            />coding
          </Link>
           
          
        {/* </div> */}
      </div>
    </div>
  )
}

export default CategoryList
