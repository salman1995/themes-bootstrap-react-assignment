import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const reduxLogger = createLogger({ collapsed: true });
const middlewareList = [thunk, reduxLogger];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewareList)));

export default store;
