import React from 'react'
import PropTypes from 'prop-types'

import NoteThumbnail from './components/NoteThumbnail'

import styles from './NotesWrapper.module.scss'

const NotesWrapper = ({
  current,
  searchPhrase,
  notes,
  selectNoteFn
}) => {
  let notesToRender = current.folder === 'notes' ? notes : notes.filter((note) => note.folder === current.folder)
  notesToRender = notesToRender.filter((note) => note.content.includes(searchPhrase))

  return (
    <div className={styles.wrapper}>
      {
        notesToRender.map(note => (
          <NoteThumbnail
            key={note.id}
            current={current}
            note={note}
            selectNoteFn={selectNoteFn}
          />
        ))
      }
    </div>
  )
}

NotesWrapper.propTypes = {
  current: PropTypes.object,
  searchPhrase: PropTypes.string,
  notes: PropTypes.array.isRequired,
  selectNoteFn: PropTypes.func.isRequired
}

export default NotesWrapper
