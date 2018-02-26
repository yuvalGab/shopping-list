import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from './pages/Login'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path= "/" exact render={() => (
            <Redirect to="/login" />
          )} />
          <Route path="/login" component={Login} />
        </Switch> 
      </Router>
    )
  }
}

export default Routes