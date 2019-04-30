import { combineReducers } from 'redux';

import navReducer from '../reducers/navigation';
import sessionReducer from '../reducers/session';
import chatReducer from '../reducers/chat';

export default combineReducers({
  nav: navReducer,
  sessionReducer,
  chatReducer
});
