import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import sagaRoot from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancers = [applyMiddleware(sagaMiddleware)];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle, indent */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const store = createStore(reducer, composeEnhancers(...enhancers));

sagaMiddleware.run(sagaRoot);

export default store;
