import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '../Menu/Menu'
import styles from './menuPosts.module.css'
const MenuPosts = ({WithImage}) => {
  return (
   
     <div className={styles.items}>
    <Link href="/" className={styles.item}>
     {WithImage && (<div className={styles.imageContainer}>
        <Image className={styles.image} src='/p1.jpeg' alt='' fill />
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>
          Travel
        </span>
        <h3 className={styles.postTitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>john doe</span>
          <span className={styles.date}>10.10.23</span>
        </div>
      </div>
    </Link>
    <Link href="/" className={styles.item}>
     { WithImage && (<div className={styles.imageContainer}>
        <Image className={styles.image} src='/p1.jpeg' alt='' fill />
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.style}`}>
          style
        </span>
        <h3 className={styles.postTitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>john doe</span>
          <span className={styles.date}>10.10.23</span>
        </div>
      </div>
    </Link>
    <Link href="/" className={styles.item}>
     {WithImage && (<div className={styles.imageContainer}>
        <Image className={styles.image} src='/p1.jpeg' alt='' fill />
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.coding}`}>
          coding
        </span>
        <h3 className={styles.postTitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>john doe</span>
          <span className={styles.date}>10.10.23</span>
        </div>
      </div>
    </Link>
    <Link href="/" className={styles.item}>
      {WithImage && (<div className={styles.imageContainer}>
        <Image className={styles.image} src='/p1.jpeg' alt='' fill />
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.food}`}>
          food
        </span>
        <h3 className={styles.postTitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>john doe</span>
          <span className={styles.date}>10.10.23</span>
        </div>
      </div>
    </Link>
    <Link href="/" className={styles.item}>
      {WithImage && (<div className={styles.imageContainer}>
        <Image className={styles.image} src='/p1.jpeg' alt='' fill />
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.culture}`}>
          culture
        </span>
        <h3 className={styles.postTitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>john doe</span>
          <span className={styles.date}> - 10.10.23</span>
        </div>
      </div>
    </Link>
 
  </div>
   
  )
}

export default MenuPosts

