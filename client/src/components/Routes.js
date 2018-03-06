import React, { Component } from 'react'
import { Router, Switch, Route, Redirect} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'
import Login from './pages/Login'
import Register from './pages/Register'
import List from './pages/List'

const history = createBrowserHistory()

const PrivateRoute = ({ component: Component, isLogedIn, ...rest }) => {
  return <Route {...rest} render={(props) => (
    isLogedIn
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
}

class Routes extends Component {
  render() {
    const { isLogedIn } = this.props

    return (
      <Router history={history}>
        <Switch>
          <Route path= "/" exact render={() => (
            <Redirect to="/login" />
          )} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute isLogedIn={isLogedIn} path="/list" component={List} />
        </Switch> 
      </Router>
    )
  }
}

export default connect(
  state => ({
    ...state.user
  }),
  null
)(Routes)