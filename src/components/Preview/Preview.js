import React from 'react'
import PropTypes from 'prop-types'

import styles from './Preview.module.scss'

const Preview = ({
  editFn,
  note
}) => (
  <div className={styles.preview}>
    {
      note ? (
        <>
          <p className={styles.date}>20/09/2019 14.07</p>
          <textarea
            className={styles.content}
            value={note.content}
            onChange={editFn}
          />
        </>
      ) : ('Ni ma nic')
    }
  </div>
)

Preview.propTypes = {
  editFn: PropTypes.func,
  note: PropTypes.object
}

export default Preview
