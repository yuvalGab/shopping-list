import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import Login from './pages/login'

class App extends Component {
  render() {
    return (
     <div>
      <Router>
        <Switch>
          <Route path= "/" exact render={() => (
            <Redirect to="/login" />
          )} />
          <Route path="/login" component={Login} />
        </Switch> 
      </Router>
     </div>
    )
  }
}

export default App
