import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import List from './pages/List'

class Routes extends Component {
  render() {
    return (
      <Router>
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