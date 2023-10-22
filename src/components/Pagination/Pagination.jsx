import React from 'react'
import styles from './Pagination.module.css'
function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous page</button>
      <button className={styles.button}>Next page</button>
    </div>
  )
}

export default Pagination;
