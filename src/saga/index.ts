import { all, takeLatest } from 'redux-saga/effects'

import { AuthTypes } from '../redux/auth/types'
import { AuthSagas, SignUpSagas } from './profileSagas'

export function * rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, AuthSagas),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, SignUpSagas)
  ])
}
