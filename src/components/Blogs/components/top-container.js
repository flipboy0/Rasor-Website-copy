import React from 'react'

import projectStyles from '../index.css'
import styles from './top-container.module.css'

const TopContainer = (props) => {
  return (
    <div className={styles['top-container']}>
      <div className={styles['hero']}>
        <div className={styles['content-container']}>
          <h1 className={styles['text']}>
            <span
              className={` ${styles['text1']} ${projectStyles['heading']} `}
            >
              Blogs
            </span>
            <br></br>
            <br></br>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default TopContainer