import {TileExempleType} from 'constants/map.constants';

export const addFriend = (tile: {tile: TileExempleType}) => ({
  type: 'REPLACE_TILE',
  payload: tile,
});
