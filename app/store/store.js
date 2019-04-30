import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import navigation from '../middlewares/navigation/';
import rootReducer from './rootReducer';

const configureStore = () => {
  const middleware = [thunk];
  return createStore(rootReducer, applyMiddleware(...middleware, navigation));
};

export default configureStore;
