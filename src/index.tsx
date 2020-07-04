import React from 'react'
import ReactDOM from 'react-dom'

import { Reset } from './styles/reset'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Reset />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
