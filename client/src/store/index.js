// @flow
import { Middleware, Store, applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import rootReducer, { type AppState } from './rootReducer'

export default function configureStore(): Store<AppState> {
    const middleware: Middleware[] = []

    if (process.env.NODE_ENV === 'development') {
        middleware.push(logger)
    }

    return createStore(rootReducer, applyMiddleware(...middleware))
}
