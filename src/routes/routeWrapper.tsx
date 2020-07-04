import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface IProps extends RouteProps{
  component: React.ComponentType
  isPrivate?: boolean
}

export const RouteWrapper: React.FC<IProps> = ({ component: Component, isPrivate, ...rest }) => {
  const signed = ''// useSelector(AuthSignedSelector)

  if (!signed && isPrivate) {
    return <Redirect to="/login" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/mentores" />
  }

  return <Route {...rest} component={Component} />
}

RouteWrapper.defaultProps = {
  isPrivate: false
}
