import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

import Folder from './components/Folder'

import styles from './FoldersWrapper.module.scss'

const FoldersWrapper = ({
  currentFolder,
  folders,
  selectFolderFn
}) => (
  <div className={styles.wrapper}>
    {
      folders.map(folder => (
        <Folder
          key={folder.url}
          currentFolder={currentFolder}
          folder={folder}
          selectFolderFn={selectFolderFn}
        />
      ))
    }
    <button
      className={styles.addBtn}
    >
      <div className={styles.addBtnIcon}>
        +
      </div>
      <div className={styles.addBtnCaption}>New folder</div>
    </button>
  </div>
)

FoldersWrapper.propTypes = {
  currentFolder: PropTypes.string,
  folders: PropTypes.array.isRequired,
  selectFolderFn: PropTypes.func.isRequired
}

export default FoldersWrapper
