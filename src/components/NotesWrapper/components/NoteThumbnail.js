import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'

import styles from '../NotesWrapper.module.scss'

const NoteThumbnail = ({
  current,
  note,
  selectNoteFn
}) => (
  <Link
    className={note.id === current.note ? styles.thumbnailActive : styles.thumbnail}
    to={`/${note.folder}/${note.id}`}
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
        current.folder === 'notes' &&
          <div className={styles.thumbnailFolder}>
            <i className='fa fa-folder-o' />
            <span>{note.folder}</span>
          </div>
      }
    </>
  </Link>
)

NoteThumbnail.propTypes = {
  current: PropTypes.object,
  note: PropTypes.object.isRequired,
  selectNoteFn: PropTypes.func.isRequired
}

export default NoteThumbnail
