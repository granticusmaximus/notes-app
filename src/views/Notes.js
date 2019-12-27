import React from 'react'

import FoldersWrapper from '../components/FoldersWrapper/FoldersWrapper'
import NotesWrapper from '../components/NotesWrapper/NotesWrapper'
import Preview from '../components/Preview/Preview'

const initialStateNotes = [
  {
    content: 'Need to buy something',
    folder: 'school',
    id: 124111251
  },
  {
    content: 'Lalalalal',
    folder: 'random',
    id: 7458457334
  },
  {
    content: 'Trrrrrrr',
    folder: 'random',
    id: 908623682
  },
  {
    content: 'Blaka blaka blaka',
    folder: 'another',
    id: 239852398888
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
      folder: null,
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
    const notesCopy = this.state.notes

    const notesToEdit = notesCopy.findIndex((note) => note.id === this.state.current.note)
    notesCopy[notesToEdit].content = e.target.value

    this.setState({
      notes: [...notesCopy]
    })
  }

  render () {
    return (
      <div className='App'>
        <FoldersWrapper
          currentFolder={this.state.current.folder}
          folders={this.state.folders}
          selectFolderFn={this.selectFolder}
        />
        <NotesWrapper
          currentNote={this.state.current.note}
          notes={(this.state.notes).filter((note) => note.folder === this.state.current.folder)}
          selectNoteFn={this.selectNote}
        />
        <Preview
          note={(this.state.notes).find((note) => note.id === this.state.current.note)}
          editFn={this.editNote}
        />
      </div>
    )
  }
}

export default Notes
