import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './FoldersWrapper.module.scss'

const FoldersWrapper = ({
  currentFolder,
  folders,
  selectFolderFn
}) => (
  <div className={styles.wrapper}>
    {
      folders.map(folder => (
        <Link
          className={folder.url === currentFolder ? styles.folderLabelActive : styles.folderLabel}
          key={folder.url}
          to={`/notes/${folder.url}`}
          onClick={() => selectFolderFn(folder.url)}
        >
          {folder.name}
        </Link>
      ))
    }
  </div>
)

FoldersWrapper.propTypes = {
  currentFolder: PropTypes.string,
  folders: PropTypes.array.isRequired,
  selectFolderFn: PropTypes.func.isRequired
}

export default FoldersWrapper
