import React from 'react'

import FoldersWrapper from './components/FoldersWrapper/FoldersWrapper'
import NotesWrapper from './components/NotesWrapper/NotesWrapper'
import Preview from './components/Preview/Preview'

const initialStateNotes = [
  {
    content: 'Need to buy something',
    folder: 'School'
  },
  {
    content: 'Lalalalal',
    folder: 'Random'
  },
  {
    content: 'Trrrrrrr',
    folder: 'Random'
  }
]

const initialStateFolders = ['All notes', 'School', 'Random', 'Another notes']

class App extends React.Component {
  state = {
    notes: [...initialStateNotes],
    folders: [...initialStateFolders]
  }

  render () {
    return (
      <div className='App'>
        <FoldersWrapper folders={this.state.folders} />
        <NotesWrapper notes={this.state.notes} />
        <Preview />
      </div>
    )
  }
}

export default App
