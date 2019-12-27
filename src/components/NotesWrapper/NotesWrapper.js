import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './NotesWrapper.module.scss'

const NotesWrapper = ({
  currentNote,
  notes,
  selectNoteFn
}) => (
  <div className={styles.wrapper}>
    {
      notes.map(note => (
        <Link
          className={note.id === currentNote ? styles.thumbnailActive : styles.thumbnail}
          key={note.content}
          to={`/notes/${note.folder}/${note.id}`}
          onClick={() => selectNoteFn(note.id)}
        >
          <>
            <p className={styles.thumbnailHeader}>
              {`${note.content.length > 25 ? note.content.slice(0, 25) + '...' : note.content}`}
            </p>
            <p className={styles.thumbnailDate}>20/09/2019 14:09</p>
          </>
        </Link>
      ))
    }
  </div>
)
NotesWrapper.propTypes = {
  currentNote: PropTypes.number,
  notes: PropTypes.array.isRequired,
  selectNoteFn: PropTypes.func.isRequired
}

export default NotesWrapper
