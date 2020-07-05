import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { RouteWrapper } from './routeWrapper'

import { Home, Login, Register } from '../pages'

export const Routes: React.FC = () => (
  <HashRouter>
    <Switch>
      <RouteWrapper path="/login" exact component={Login} />
      <RouteWrapper path="/sign-up" component={Register} />
      <RouteWrapper path="/"exact isPrivate component={Home} />
    </Switch>
  </HashRouter>
)
