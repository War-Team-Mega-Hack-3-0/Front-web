import { AuthTypes, IAuthActions, IAuthState } from './types'

export type IAuthStateT = IAuthState

const initialState: IAuthState = {
  authToken: '',
  user: {
    _id: '',
    email: '',
    integrations: [],
    createdAt: '',
    updatedAt: ''
  },
  hasDone: false,
  isLoading: false,
  hasError: false,
  errorMsg: ''
}

const actionMap = {
  [AuthTypes.SIGN_UP_REQUEST]: (state: IAuthState, action: IAuthActions) => ({
    ...state,
    isLogging: true,
    hasError: false,
    errorMsg: ''
  }),
  [AuthTypes.LOGIN_REQUEST]: (state: IAuthState, action: IAuthActions) => ({
    ...state,
    isLogging: true,
    hasError: false,
    errorMsg: ''
  }),
  [AuthTypes.LOGIN_SUCCESS]: (state: IAuthState, action: IAuthActions) => ({
    ...state,
    authToken: action.payload.authToken,
    user: action.payload.user,
    hasDone: false,
    isLoading: false,
    hasError: false,
    errorMsg: ''
  }),
  [AuthTypes.LOGIN_FAILURE]: (state: IAuthState, action: IAuthActions) => ({
    ...state,
    hasError: true,
    isLogging: false,
    errorMsg: action.payload
  }),

  [AuthTypes.LOGOUT_SUCCESS]: () => initialState
}

export const authReducer = (state = initialState, action: IAuthActions): IAuthState =>
  actionMap[action.type] ? actionMap[action.type](state, action) : state
