import React from 'react'

import styles from './Notes.module.scss'

import FoldersWrapper from '../components/FoldersWrapper/FoldersWrapper'
import NotesWrapper from '../components/NotesWrapper/NotesWrapper'
import Preview from '../components/Preview/Preview'
import TopBar from '../components/TopBar/TopBar'

const initialStateNotes = [
  {
    content: 'Need to buy something',
    folder: 'school',
    id: 124111251,
    editDate: new Date()
  },
  {
    content: 'Lalalalal',
    folder: 'random',
    id: 7458457334,
    editDate: new Date()
  },
  {
    content: 'Trrrrrrr',
    folder: 'random',
    id: 908623682,
    editDate: new Date()
  },
  {
    content: 'Blaka blaka blaka',
    folder: 'another',
    id: 239852398888,
    editDate: new Date()
  }
]

const initialStateFolders = [
  {
    name: 'All notes',
    url: 'all'
  },
  {
    name: 'School',
    url: 'school'
  },
  {
    name: 'Random',
    url: 'random'
  },
  {
    name: 'Another',
    url: 'another'
  }
]

class Notes extends React.Component {
  state = {
    notes: [...initialStateNotes],
    folders: [...initialStateFolders],
    current: {
      folder: 'all',
      note: null
    }
  }

  selectFolder = (folder) => {
    this.setState({
      current: {
        folder: folder,
        note: null
      }
    })
  }

  selectNote = (note) => {
    this.setState(prevState => ({
      current: {
        ...prevState.current,
        note: note
      }
    }))
  }

  editNote = (e) => {
    const notesCopy = [...this.state.notes]

    const notesToEdit = notesCopy.findIndex((note) => note.id === this.state.current.note)
    notesCopy[notesToEdit].content = e.target.value
    notesCopy[notesToEdit].editDate = new Date()

    this.setState({
      notes: [...notesCopy]
    })
  }

  filterNotes = () => {
    if (this.state.current.folder === 'all') {
      return this.state.notes
    } else return (this.state.notes).filter((note) => note.folder === this.state.current.folder)
  }

  addNote = (note) => {
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
      current: {
        ...prevState.current,
        note: note.id
      }
    }))
  }

  deleteNote = () => {
    const notes = [...this.state.notes]
    const noteToDelete = notes.findIndex((note) => note.id === this.state.current.note)

    if (noteToDelete !== -1) {
      notes.splice(noteToDelete, 1)
      this.setState({
        notes: notes
      })
    }
  }

  render () {
    return (
      <div className={styles.desktop}>
        <div className={styles.appWrapper}>
          <TopBar
            addNoteFn={this.addNote}
            current={this.state.current}
            deleteNoteFn={this.deleteNote}
          />
          <div className={styles.viewWrapper}>
            <FoldersWrapper
              currentFolder={this.state.current.folder}
              folders={this.state.folders}
              selectFolderFn={this.selectFolder}
            />
            <NotesWrapper
              addNoteFn={this.addNote}
              current={this.state.current}
              notes={this.filterNotes()}
              selectNoteFn={this.selectNote}
            />
            <Preview
              note={(this.state.notes).find((note) => note.id === this.state.current.note)}
              editFn={this.editNote}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Notes
