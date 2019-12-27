import React from 'react'

import styles from './TopBar.module.scss'

const TopBar = () => (
  <div className={styles.topbar}>
    <div className={styles.dotsWrapper}>
      <div className={`${styles.dot} ${styles.dot__red}`} />
      <div className={`${styles.dot} ${styles.dot__yellow}`} />
      <div className={`${styles.dot} ${styles.dot__green}`} />
    </div>
  </div>
)

export default TopBar
