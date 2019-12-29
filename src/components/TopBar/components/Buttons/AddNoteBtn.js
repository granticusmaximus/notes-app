import React from 'react'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'

import styles from './Button.module.scss'

const AddNoteBtn = ({ addNoteFn, current }) => (
  <button
    className={styles.btn}
    onClick={() => addNoteFn({
      content: 'New note',
      folder: current.folder,
      id: uniqid(),
      editDate: new Date()
    })}
  >
    <i className='fa fa-edit' />
  </button>
)

AddNoteBtn.propTypes = {
  addNoteFn: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired
}

export default AddNoteBtn
