import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { RouteWrapper } from './routeWrapper'

import {
  Home,
  Login,
  Register,
  FinancialGoal,
  VtexIntegration,
  BusinessTips
} from '../pages'

export const Routes: React.FC = () => (
  <HashRouter>
    <Switch>
      <RouteWrapper path="/login" exact component={Login} />
      <RouteWrapper path="/sign-up" exact component={Register} />
      <RouteWrapper isPrivate path="/" exact component={Home} />
      <RouteWrapper isPrivate path="/financial-goal" exact component={FinancialGoal} />
      <RouteWrapper isPrivate path="/vtex-integration" exact component={VtexIntegration} />
      <RouteWrapper isPrivate path="/tips" exact component={BusinessTips} />
    </Switch>
  </HashRouter>
)
