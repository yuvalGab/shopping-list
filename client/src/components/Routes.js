import React, { Component } from 'react'
import { Router, Switch, Route, Redirect} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Login from './pages/Login'
import Register from './pages/Register'
import List from './pages/List'

const history = createBrowserHistory()

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path= "/" exact render={() => (
            <Redirect to="/login" />
          )} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/list" component={List} />
        </Switch> 
      </Router>
    )
  }
}

export default Routes