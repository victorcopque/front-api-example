import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import feedReducer from './reducers/feedSlice';
import followReducer from './reducers/followSlice';

const persistFeedConfig = {
  key: 'feed',
  storage: AsyncStorage
};

const persistFollowConfig = {
  key: 'follow',
  storage: AsyncStorage
};

const rootReducer = combineReducers({
  feed: persistReducer(persistFeedConfig, feedReducer),
  follow: persistReducer(persistFollowConfig, followReducer) 
})

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middleware);

const persistor = persistStore(store);
export { persistor, store };