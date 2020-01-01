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
  filterNotesFn
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
        filterNotesFn={filterNotesFn}
      />
    </div>
  </div>
)

TopBar.propTypes = {
  addNoteFn: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired,
  deleteNoteFn: PropTypes.func.isRequired,
  filterNotesFn: PropTypes.func.isRequired
}

export default TopBar
