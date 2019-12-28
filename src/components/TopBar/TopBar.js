import React from 'react'

import Dots from './components/Dots/Dots'
import Search from './components/Search/Search'

import styles from './TopBar.module.scss'

const TopBar = () => (
  <div className={styles.topbar}>
    <Dots />
    <Search />
  </div>
)

export default TopBar
