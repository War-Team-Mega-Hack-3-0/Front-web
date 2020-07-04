import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { RouteWrapper } from './routeWrapper'

import { Home } from '../pages'

export const Routes: React.FC = () => (
  <HashRouter>
    <Switch>
      <RouteWrapper path='/' exact component={Home}/>
    </Switch>
  </HashRouter>
)
