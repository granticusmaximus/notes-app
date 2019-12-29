import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

const DeleteNoteBtn = ({ deleteNoteFn, current }) => {
  const buttonStyle = current.note !== null ? styles.btn : styles.btnDisabled
  
  return (
    <button
      className={buttonStyle}
      onClick={deleteNoteFn}
      disabled={current.note === null}
    >
      <i className='fa fa-trash-o' />
    </button>
  )
}

DeleteNoteBtn.propTypes = {
  current: PropTypes.object.isRequired,
  deleteNoteFn: PropTypes.func.isRequired
}

export default DeleteNoteBtn
