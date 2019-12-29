import React from 'react'
import PropTypes from 'prop-types'

import Folder from './components/Folder'
import NewFolderInput from './components/NewFolderInput'

import styles from './FoldersWrapper.module.scss'

class FoldersWrapper extends React.Component {
  state = {
    newFolderIsCreated: false
  }

  toggleFolderCreation = () => {
    this.setState({
      newFolderIsCreated: !this.state.newFolderIsCreated
    })
  }

  render () {
    const { currentFolder, folders, selectFolderFn, addFolderFn } = this.props
    return (
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
        {
          this.state.newFolderIsCreated &&
            <NewFolderInput
              toggleFolderCreation={this.toggleFolderCreation}
              addFolderFn={addFolderFn}
            />
        }
        <button
          className={styles.addBtn}
          onClick={this.toggleFolderCreation}
        >
          <div className={styles.addBtnIcon}>
            +
          </div>
          <div className={styles.addBtnCaption}>New folder</div>
        </button>
      </div>
    )
  }
}

FoldersWrapper.propTypes = {
  addFolderFn: PropTypes.func.isRequired,
  currentFolder: PropTypes.string,
  folders: PropTypes.array.isRequired,
  selectFolderFn: PropTypes.func.isRequired
}

export default FoldersWrapper
