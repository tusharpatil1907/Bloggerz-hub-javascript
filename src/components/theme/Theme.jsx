"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import styles from './Theme.module.css'
import { ThemeContext } from '@/app/context/ThemeContext';


function Theme() {

  const {toggle,theme} = useContext(ThemeContext)
  // console.log(theme)


  return (
    <div className={styles.container} onClick={toggle}  
    style={theme === 'dark'?
    {background:'white'}:
    {background:'#0f172a'}}>
      <Image src='/moon.png' alt='moon' height={14} width={14}/>
      <div
        className={styles.ball}
        style={theme === 'dark'?
         {left:1,background:'#0f172a'}:
         {right:1,background:'white'}}>
      </div>
      <Image src='/sun.png' alt="sun" height={14} width={14}/>


    </div>
  )
}

export default Theme
