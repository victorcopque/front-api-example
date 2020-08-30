import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import feedReducer from './reducers/feedSlice';

const persistFeedConfig = {
  key: 'feed',
  storage: AsyncStorage
};

const rootReducer = combineReducers({
  feed: persistReducer(persistFeedConfig, feedReducer)
})

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middleware);

const persistor = persistStore(store);
export { persistor, store };