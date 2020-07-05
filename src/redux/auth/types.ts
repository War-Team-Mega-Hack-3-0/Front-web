import { IBaseInitialState } from '../baseInitialState'
import { IData } from '../../services/api/profile'

export const AuthTypes = {
  SIGN_UP_REQUEST: '[auth]SIGN_UP_REQUEST',
  LOGIN_REQUEST: '[auth]LOGIN_REQUEST',
  LOGIN_SUCCESS: '[auth]LOGIN_SUCCESS',
  LOGIN_FAILURE: '[auth]LOGIN_FAILURE',
  LOGOUT_SUCCESS: '[auth]LOGOUT_SUCCESS'
}

export interface IAuthState extends IBaseInitialState {
  readonly authToken: string
  readonly user: IData
}

export interface IAuthActions {
  type: '[auth]LOGIN_REQUEST' | '[auth]LOGIN_SUCCESS' | '[auth]LOGIN_FAILURE' | '[auth]LOGOUT_SUCCESS'
  payload?: any
}
