import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/home'
import Product from '../pages/product'

export default class RouterConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={Product} />
          <Redirect to="/" />
          <Route />
        </Switch>
      </HashRouter>
    )
  }
}
