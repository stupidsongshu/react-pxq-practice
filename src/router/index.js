import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/home'

export default class RouterConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Redirect to="/" />
          <Route />
        </Switch>
      </HashRouter>
    )
  }
}
