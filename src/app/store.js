import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'cookies-js'
import testandoReducer from '../components/Basic/testandoSlice';

const persistTestandoConfig = {
  key: 'testando',
  storage: new CookieStorage(Cookies/*, options */)
};

const rootReducer = combineReducers({
  testando: persistReducer(persistTestandoConfig, testandoReducer)
})

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middleware);

const persistor = persistStore(store);
export { persistor, store };