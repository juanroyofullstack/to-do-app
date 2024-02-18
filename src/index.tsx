import './index.css'

import React from 'react'
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { applyMiddleware, createStore, Store } from "redux"
import { thunk } from "redux-thunk"

import App from './App'
import reducer from "./store/reducer"

const store = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root')

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
       <App />
      </Provider>
    </React.StrictMode>,
  rootElement
)
