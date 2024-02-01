'use client'
import styles from '@/app/write/writePage.module.css'
import Image from 'next/image'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
''
function page() {
    const [open,setopen] = useState(false)
    const [value,setvalue] = useState('')
  return (  
    <div className={styles.container}>
        <input type="text" name="" className={styles.input} placeholder='Title' />
        <div className={styles.editor}>
            <button className={styles.button} onClick={()=>setopen(!open) }>
                <Image src='/plus.png' width={16} height={16}  />
            </button>
            {open && (
                <div className={styles.add}>
                     <button className={styles.addButton}>
                <Image src='/image.png' width={16} height={16}  />
            </button>
            <button className={styles.addButton}>
                <Image src='/external.png' width={16} height={16}  />
            </button>
            <button className={styles.addButton}>
                <Image src='/video.png' width={16} height={16}  />
            </button>
                </div>
            )}


            <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setvalue} placeholder='Your Text here'/>
        </div>
        <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default page
