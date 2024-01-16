import React from 'react'
import styles from '@/components/comments/comment.module.css'
import Link from 'next/link'
import Image from 'next/image'
function Comment() {
  const status = 'auth'
  return (
    <div className={styles.container}>
      <h3 className={styles.title} >Comments</h3>
      {
        status === 'auth' ? (
          <div className={styles.Write}>
            <textarea name="comment" placeholder='write a comment here ... ' class={styles.input} ></textarea>  
            <button className={styles.submit}>Submit</button>
          </div>
        ) : (<Link className={styles.loginLink} href='/login' >Login to comment</Link>)
      }
      <div className={styles.user}>
        <div className={styles.userImageContainer}>
          <Image width={50} height={50} src='/p1.jpeg' className={styles.userImage} />
        </div>
        <div className={styles.userTextContainer}>
          <span>Tushar patil</span>
          <span>01.01.202</span>
        </div>
      </div>
      <div className={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A pariatur eum voluptatem nesciunt excepturi! Eaque ipsum quae ea eum omnis!
      </div>
      <div className={styles.user}>
        <div className={styles.userImageContainer}>
          <Image width={50} height={50} src='/p1.jpeg' className={styles.userImage} />
        </div>
        <div className={styles.userTextContainer}>
          <span>Tushar patil</span>
          <span>01.01.202</span>
        </div>
      </div>
      <div className={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A pariatur eum voluptatem nesciunt excepturi! Eaque ipsum quae ea eum omnis!
      </div>
      <div className={styles.user}>
        <div className={styles.userImageContainer}>
          <Image width={50} height={50} src='/p1.jpeg' className={styles.userImage} />
        </div>
        <div className={styles.userTextContainer}>
          <span>Tushar patil</span>
          <span>01.01.202</span>
        </div>
      </div>
      <div className={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A pariatur eum voluptatem nesciunt excepturi! Eaque ipsum quae ea eum omnis!
      </div>
      <div className={styles.user}>
        <div className={styles.userImageContainer}>
          <Image width={50} height={50} src='/p1.jpeg' className={styles.userImage} />
        </div>
        <div className={styles.userTextContainer}>
          <span>Tushar patil</span>
          <span>01.01.202</span>
        </div>
      </div>
      <div className={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A pariatur eum voluptatem nesciunt excepturi! Eaque ipsum quae ea eum omnis!
      </div>
      <div className={styles.user}>
        <div className={styles.userImageContainer}>
          <Image width={50} height={50} src='/p1.jpeg' className={styles.userImage} />
        </div>
        <div className={styles.userTextContainer}>
          <span>Tushar patil</span>
          <span>01.01.202</span>
        </div>
      </div>
      <div className={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A pariatur eum voluptatem nesciunt excepturi! Eaque ipsum quae ea eum omnis!
      </div>

    </div>
  )
}

export default Comment
