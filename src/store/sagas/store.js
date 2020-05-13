import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReduce from './../reducer';
import fetchGames from './appSagas';

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReduce, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(fetchGames);

export default store;