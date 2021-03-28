import { combineReducers } from 'redux';

import app from './app.reducer';
import themes from './themes.reducer';

export default combineReducers({
  app,
  themes
});
