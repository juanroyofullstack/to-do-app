import { combineReducers } from 'redux'
import { applyMiddleware, legacy_createStore as createStore, compose } from "redux"
import { thunk } from "redux-thunk"

import { taskReducer } from './taskReducer'
import { createProjectReducer } from './createProjectReducer'

const rootReducer = combineReducers({
    tasks: taskReducer,
    project: createProjectReducer
})

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* @ts-ignore */
  export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
    ));
