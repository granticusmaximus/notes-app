import React from 'react'
import PropTypes from 'prop-types'

import styles from './FoldersWrapper.module.scss'

const FoldersWrapper = ({
  folders
}) => (
  <div className={styles.wrapper}>
    {
      folders.map(folder => (
        <div className={styles.folderLabel} key={folder}>
          {folder}
        </div>
      ))
    }
  </div>
)

FoldersWrapper.propTypes = {
  folders: PropTypes.array.isRequired
}

export default FoldersWrapper
