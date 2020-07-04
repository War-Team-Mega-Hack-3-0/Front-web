import { all, takeLatest } from 'redux-saga/effects'

import { AuthTypes } from '../redux/auth/types'
import { AuthSagas } from './authSagas'

export function * rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, AuthSagas)
  ])
}
