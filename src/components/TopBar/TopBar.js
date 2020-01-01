import React from 'react'
import PropTypes from 'prop-types'

import AddNoteBtn from './components/Buttons/AddNoteBtn'
import DeleteNoteBtn from './components/Buttons/DeleteNoteBtn'
import Dots from './components/Dots/Dots'
import Search from './components/Search/Search'

import styles from './TopBar.module.scss'

const TopBar = ({
  addNoteFn,
  current,
  deleteNoteFn,
  searchNotesFn,
  searchPhrase
}) => (
  <div className={styles.topbar}>
    <div className={styles.dotsContainer}>
      <Dots />
    </div>
    <div className={styles.buttonsContainer}>
      <AddNoteBtn
        addNoteFn={addNoteFn}
        current={current}
      />
      <DeleteNoteBtn
        current={current}
        deleteNoteFn={deleteNoteFn}
      />
    </div>
    <div className={styles.searchContainer}>
      <Search
        searchNotesFn={searchNotesFn}
        searchPhrase={searchPhrase}
      />
    </div>
  </div>
)

TopBar.propTypes = {
  addNoteFn: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired,
  deleteNoteFn: PropTypes.func.isRequired,
  searchNotesFn: PropTypes.func.isRequired,
  searchPhrase: PropTypes.string.isRequired
}

export default TopBar
