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
            path={['/:folder/:note_id', '/:folder', '/']}
            component={Notes}
          />
        </Switch>
        <Redirect from='/' to='/notes/' />
      </BrowserRouter>
    )
  }
}

export default App
