import React from 'react'
import PropTypes from 'prop-types'

import styles from './Preview.module.scss'

const Preview = ({
  note
}) => (
  <div className={styles.preview}>
    {
      note ? (
        <>
          <p>{note.content}</p>
          <p>{note.id}</p>
          <p>{note.folder}</p>
        </>
      ) : ('Ni ma nic')
    }
  </div>
)

Preview.propTypes = {
  note: PropTypes.object
}

export default Preview
