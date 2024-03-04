import { combineReducers } from 'redux'
import { applyMiddleware, legacy_createStore as createStore, compose } from "redux"
import { thunk } from "redux-thunk"

import { dataReducer } from './reducers/dataReducer'
import { createProjectReducer } from './reducers/createProjectReducer'

const rootReducer = combineReducers({
    data: dataReducer,
    project: createProjectReducer
})

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

  export type RootState = ReturnType<typeof rootReducer>

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* @ts-ignore */
  export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
    ));
