import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'

import styles from './NotesWrapper.module.scss'

const NotesWrapper = ({
  current,
  filterPhrase,
  notes,
  selectNoteFn
}) => {
  let notesToRender = current.folder === 'all' ? notes : notes.filter((note) => note.folder === current.folder)
  notesToRender = notesToRender.filter((note) => note.content.includes(filterPhrase))

  return (
    <div className={styles.wrapper}>
      {
        notesToRender.map(note => (
          <Link
            className={note.id === current.note ? styles.thumbnailActive : styles.thumbnail}
            key={note.id}
            to={`/notes/${note.folder}/${note.id}`}
            onClick={() => selectNoteFn(note.id)}
          >
            <>
              <p className={styles.thumbnailHeader}>
                {`${note.content.length > 25 ? note.content.slice(0, 25) + '...' : note.content}`}
              </p>
              <p className={styles.thumbnailDate}>
                {moment(note.editDate).format('DD.MM.YYYY')}
              </p>
              {
                current.folder === 'all' &&
                  <div className={styles.thumbnailFolder}>
                    <i className='fa fa-folder-o' />
                    <span>{note.folder === 'all' ? 'Notes' : note.folder}</span>
                  </div>
              }
            </>
          </Link>
        ))
      }
    </div>
  )
}

NotesWrapper.propTypes = {
  current: PropTypes.object,
  filterPhrase: PropTypes.string,
  notes: PropTypes.array.isRequired,
  selectNoteFn: PropTypes.func.isRequired
}

export default NotesWrapper
