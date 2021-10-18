import players from '../constants/players.constants';

const INITIAL_STATE = {
  players,
};

const friendsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'REPLACE_PLAYER':
      const newState = {
        players: state.players.map(player => {
          if (player.id === action.id) {
            return player;
          }
          return player;
        }),
      };
      return newState;
    default:
      return state;
  }
};

export default friendsReducer;
