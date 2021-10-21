const INITIAL_STATE = {
  locations: [{id: 123, users: []}],
};

const friendsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'REPLACE_USER':
      const newState = {
        locations: state.locations.map(location => {
          if (location.id === action.locationId) {
            return location.users.map(user => {
              if (user.id === action.user.id) {
                return action.user;
              }
              return user;
            });
          }
          return location;
        }),
      };
      return newState;
    default:
      return state;
  }
};

export default friendsReducer;
