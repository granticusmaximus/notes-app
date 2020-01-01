import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from '../FoldersWrapper.module.scss'

const Folder = ({
  currentFolder,
  folder,
  selectFolderFn
}) => (
  <Link
    className={folder.url === currentFolder ? styles.folderLabelActive : styles.folderLabel}
    key={folder.url}
    to={`/${folder.url}`}
    onClick={() => selectFolderFn(folder.url)}
  >
    {folder.name}
  </Link>
)

Folder.propTypes = {
  currentFolder: PropTypes.string.isRequired,
  folder: PropTypes.object.isRequired,
  selectFolderFn: PropTypes.func.isRequired
}

export default Folder
