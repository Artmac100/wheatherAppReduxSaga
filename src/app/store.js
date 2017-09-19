import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import sagaRoot from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, createLogger());
const store = createStore(reducer, middleware);

sagaMiddleware.run(sagaRoot);

export default store;
