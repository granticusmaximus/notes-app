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
            path={['/notes', '/notes/:folder', '/notes/:folder/:note_id']}
            component={Notes}
          />
        </Switch>
        {/* <Redirect from='/' to='/notes' /> */}
      </BrowserRouter>
    )
  }
}

export default App
