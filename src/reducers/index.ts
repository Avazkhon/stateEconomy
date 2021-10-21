import {combineReducers} from 'redux';

import map from './map.reduce';
import players from './players.reduce';
import users from './users.reduce';

export default combineReducers({
  map,
  players,
  users,
});
