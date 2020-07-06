import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { RouteWrapper } from './routeWrapper'

import { Home, Login, Register, FinancialGoal, VtexIntegration } from '../pages'

export const Routes: React.FC = () => (
  <HashRouter>
    <Switch>
      <RouteWrapper path="/login" exact component={Login} />
      <RouteWrapper path="/sign-up" exact component={Register} />
      <RouteWrapper path="/financial-goal" exact component={FinancialGoal} />
      <RouteWrapper path="/" exact isPrivate component={Home} />
      <RouteWrapper path="/vtex-integration" exact isPrivate component={VtexIntegration} />
    </Switch>
  </HashRouter>
)
