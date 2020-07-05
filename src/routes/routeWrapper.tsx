import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { authState } from '../redux/auth/selectors'

interface IProps extends RouteProps {
  component: React.ComponentType
  isPrivate?: boolean
}

export const RouteWrapper: React.FC<IProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const signed = useSelector(authState).authToken

  if (!signed && isPrivate) {
    return <Redirect to="/login" />
  }

  // if (signed && !isPrivate) {
  //   return <Redirect to="/" />
  // }

  return <Route {...rest} component={Component} />
}

RouteWrapper.defaultProps = {
  isPrivate: false
}
