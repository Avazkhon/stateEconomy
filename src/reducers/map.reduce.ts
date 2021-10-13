import {map} from '../constants/map.constants';

const INITIAL_STATE = {
  map,
};

const friendsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'REPLACE_TILE':
      const newState = {
        map: state.map.map(tile => {
          if (tile.id === action.id) {
            return action;
          }
          return tile;
        }),
      };
      return newState;
    default:
      return state;
  }
};

export default friendsReducer;
