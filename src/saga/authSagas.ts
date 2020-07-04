import { call, put } from 'redux-saga/effects'

import { authRequest, IAuthRequest } from '../services/api/auth'
import { AuthActions } from '../redux/auth/actions'
import { IAuthState } from '../redux/auth/types'

interface IParams {
  payload: {
    email: string
    password: string
  }
  type: string
}

export function * AuthSagas({ payload }: IParams) {
  try {
    const { data, meta } = (yield call(authRequest, payload)) as IAuthRequest
    const relevantData = filterRelevantData({ data, meta }) as IAuthState
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
