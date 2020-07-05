import { call, put } from 'redux-saga/effects'

import { authRequest, signUpRequest, IAuthRequest } from '../services/api/profile'
import { AuthActions, ISignUpParams, ILoginRequestParams } from '../redux/auth/actions'
import { IAuthState } from '../redux/auth/types'

interface IAuthSagasParams {
  payload: ILoginRequestParams
  type: string
}
export function * AuthSagas({ payload }: IAuthSagasParams) {
  try {
    const { data } = (yield call(authRequest, payload)) as { data: IAuthRequest }
    const relevantData = filterRelevantData(data) as IAuthState
    yield put(AuthActions.loginSuccess(relevantData))
  } catch (err) {
    yield put(AuthActions.loginFailure(err))
  }
}

interface ISignUpSagasParams {
  payload: ISignUpParams
  type: string
}
export function * SignUpSagas({ payload }: ISignUpSagasParams) {
  try {
    const { data } = (yield call(signUpRequest, payload)) as { data: IAuthRequest }
    const relevantData = filterRelevantData(data) as IAuthState
    yield put(AuthActions.loginSuccess(relevantData))
  } catch (err) {
    yield put(AuthActions.loginFailure(err))
  }
}

function filterRelevantData({ data, meta }: IAuthRequest) {
  const { _id, email, integrations, createdAt, updatedAt } = data
  return {
    authToken: meta.token,
    user: {
      _id,
      email,
      integrations,
      createdAt,
      updatedAt
    }
  }
}
