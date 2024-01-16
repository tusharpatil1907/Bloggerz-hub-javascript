import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'
import React from 'react'
import styles from '@/app/blog/blog.module.css'
function blog() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
            Blog category
        </h1>
        <div className={styles.content}>
            {/* it will make fetch request from search category */}
            <CardList/>
            <Menu/>
        </div>
      </div>
    </>
  )
}

export default blog
