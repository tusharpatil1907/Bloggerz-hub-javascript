import Link from 'next/link'
import React from 'react'
import styles from './manuCategories.module.css'

const MenuCategories = ()=> {
  return (
    <div className={styles.categoryList}>
    <Link href='/blog/category=style' className={`${styles.categoryItem} ${styles.style}`}>
      Style
    </Link>
    <Link href='/blog/category=style' className={`${styles.categoryItem} ${styles.culture}`}>
      Culture
    </Link>
    <Link href='/blog/category=style' className={`${styles.categoryItem} ${styles.coding}`}>
      Coding
    </Link>
    <Link href='/blog/category=style' className={`${styles.categoryItem} ${styles.food}`}>
      Food
    </Link>
    <Link href='/blog/category=style' className={`${styles.categoryItem} ${styles.travel}`}>
      Travel
    </Link>
      </div>
  )
}

export default MenuCategories
