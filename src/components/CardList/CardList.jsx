import React from 'react'
import styles from './CardList.module.css'
import Card from '../card/Card' 
import Pagination from '../Pagination/Pagination'
function CardList() {
  return (
    <div className={styles.container }>
      <h1 className={styles.title}>Recent post</h1>
      <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>        
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList

