"use client"
import React from 'react'
import styles from '@/app/login/login.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

function page() {
  const {data,status} = useSession();

  const router = useRouter()
  console.log(data,status);
    if (status === 'loading'){
      return <div className={styles.loading}>Loading</div>
    }
    if (status === 'authenticated'){
      router.push('/')
    }
  return (
    <div className={styles.loginPage}>
      <div className={styles.Wrapper}>
      <div className={styles.socialButton} onClick={()=>signIn('google')}>Sign in with google</div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with google</div>
      </div>
    </div>
  )
}

export default page
