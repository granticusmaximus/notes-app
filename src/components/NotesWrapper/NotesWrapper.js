import React from 'react'
import PropTypes from 'prop-types'

import styles from './NotesWrapper.module.scss'

const NotesWrapper = ({
  notes
}) => (
  <div className={styles.wrapper}>
    {
      notes.map(note => (
        <div key={note.content} className={styles.thumbnail}>
          <p className={styles.thumbnailHeader}>{note.content}</p>
          <p className={styles.thumbnailDate}>20/09/2019 14:09</p>
        </div>
      ))
    }
  </div>
)

NotesWrapper.propTypes = {
  notes: PropTypes.array.isRequired
}

export default NotesWrapper
