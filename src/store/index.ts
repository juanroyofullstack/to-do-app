import {
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore as createStore,
} from 'redux'
import thunk from 'redux-thunk'

import { createProjectReducer } from './reducers/createProjectReducer'
import { dataReducer } from './reducers/dataReducer'

const rootReducer = combineReducers({
	data: dataReducer,
	project: createProjectReducer,
})

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
)
