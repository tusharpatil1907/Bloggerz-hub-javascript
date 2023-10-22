import React from 'react'
import styles from './Menu.module.css'
import MenuPosts from '../menuPosts/menuPosts'
import MenuCategories from '../menuCategories/menuCategories'
function Menu() {
  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>{"What's hot"}</p>
      <h2 className={styles.title}>Most popular</h2>
      <MenuPosts WithImage={false}/>

      <p className={styles.subtitle}>Discover by Topics</p>
      {/* <MenuCategories/> */}
      <h2 className={styles.title}>Category</h2>
      <MenuCategories/>


      <p className={styles.subtitle}>Choosen by editors</p>
      <h2 className={styles.title}>Editors Pick</h2>
      <MenuPosts WithImage={true} />

   

    </div>
  )
}

export default Menu
