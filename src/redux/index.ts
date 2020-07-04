import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootSaga } from '../saga'

// eslint-disable-next-line no-unused-vars
import { authReducer, IAuthStateT } from './auth'
// eslint-disable-next-line no-unused-vars
import { crudInformationReducer, IInformationCrud } from './information'

export interface AppState {
  auth: IAuthStateT
  information: IInformationCrud
}

function getReducers() {
  return combineReducers<AppState>({
    auth: authReducer,
    information: crudInformationReducer
  })
}

function createAppStore() {
  const reducers = getReducers()

  const sagaMiddleware = createSagaMiddleware()

  const persistConfig = {
    key: 'root',
    whitelist: ['auth'],
    storage
  }

  const persistedReducer = persistReducer(persistConfig, reducers)

  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}

export const { store, persistor } = createAppStore()
