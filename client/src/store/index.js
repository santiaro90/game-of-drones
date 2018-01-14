// @flow
import {
  applyMiddleware,
  createStore,
  type Middleware,
  type Store
} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer, { type AppState } from './rootReducer'

export type StoreState = AppState

export default function configureStore(): Store<StoreState, *> {
  const middleware: Middleware<*, *, *>[] = [thunk]

  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
  }

  return createStore(rootReducer, applyMiddleware(...middleware))
}
