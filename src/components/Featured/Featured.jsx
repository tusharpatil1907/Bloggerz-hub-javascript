import React from 'react'
import styles from './Featured.module.css'
import Image from 'next/image'

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Tushar here!</b>
        Discover My Stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill />

        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet nostrum, </h1>
          <p className={styles.postDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A veritatis numquam accusantium ipsam et amet est adipisci natus, perspiciatis eligendi provident architecto at accusamus consequatur nulla sint maxime iste beatae quaerat itaque. Reprehenderit quam numquam, hic esse ipsa dolor repudiandae earum? Itaque voluptatibus impedit dicta neque voluptatum modi ipsum sed?</p>
          <button className={styles.button}>Read more</button>
        </div>

      </div>
    </div>
  )
}

export default Featured
