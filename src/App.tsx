import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { store, persistor } from './redux'

import { Routes } from './routes'

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}
