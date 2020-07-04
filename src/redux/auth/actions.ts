import { AuthTypes, IAuthState } from './types'

interface ILoginRequestParams {
  email: string
  password: string
}

export const AuthActions = {
  loginRequest(data: ILoginRequestParams) {
    return {
      type: AuthTypes.LOGIN_REQUEST,
      payload: data
    }
  },
  loginSuccess({ authToken, user }: IAuthState) {
    return {
      type: AuthTypes.LOGIN_SUCCESS,
      payload: { authToken, user }
    }
  },
  loginFailure(errorMsg: string) {
    return {
      type: AuthTypes.LOGIN_FAILURE,
      payload: errorMsg
    }
  },
  logout() {
    return {
      type: AuthTypes.LOGOUT_SUCCESS
    }
  }
}
