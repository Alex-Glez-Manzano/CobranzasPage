import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {CobranzasApp} from './CobranzasApp'
import {Provider} from 'react-redux'
import './styles.css'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CobranzasApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
