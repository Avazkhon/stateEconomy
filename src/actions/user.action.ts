import {UserType} from 'constants/users.constants';

export const addFriend = (user: {user: UserType}, locationId: number) => ({
  type: 'REPLACE_USER',
  user,
  locationId,
});
