import React from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Notes from './views/Notes'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path={['/notes/:folder/:note_id', '/notes/:folder', '/notes']}
            component={Notes}
          />
        </Switch>
        <Redirect from='/' to='/notes/all' />
      </BrowserRouter>
    )
  }
}

export default App
