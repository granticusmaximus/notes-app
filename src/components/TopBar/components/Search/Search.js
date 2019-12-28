import React from 'react'

import styles from './Search.module.scss'

const Search = () => (
  <div className={styles.search}>
    <div className={styles.icon}>
      <i className="fa fa-search"></i>
    </div>
    <input className={styles.input} type='text' placeholder='Search' />
  </div>
)

export default Search
