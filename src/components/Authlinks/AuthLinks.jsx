"use client"

import React, { useState } from 'react'
import styles from './AuthLinks.module.css'
import Link from 'next/link'
function AuthLinks() {
  const [open,setOpen] = useState(false)

  const status = 'auth'
  return (
    <>
    {
      status==='notauth'? (
      <Link href='/login' className={styles.link}>Login</Link>
      ):(
        <>
            <Link href='/write' className={styles.link}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.hamburgerMenu} >
          <Link  href='/'>HomePage</Link>
          <Link href='/'>Contact</Link>
          <Link  href='/'>About</Link>
          {
            status==='notauth'? (
            <Link href='/login'>Login</Link>
            ):(
              <>
                  <Link href='/write'>Write</Link>
                <span className={styles.link}>Logout</span>
              </>
            )
          }
        </div>
          
      )}
    </>
  )
}

export default AuthLinks
