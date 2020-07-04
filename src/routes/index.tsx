import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { RouteWrapper } from './routeWrapper'

import { Home, Login } from '../pages'

export const Routes: React.FC = () => (
  <HashRouter>
    <Switch>
      <RouteWrapper path='/' exact component={Login} />
      <RouteWrapper path='/login' isPrivate exact component={Home} />
    </Switch>
  </HashRouter>
)
