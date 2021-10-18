/**
 * @format
 */

import players from './players.constants';

export interface TileExempleType {
  id: number;
  type: 'terra';
  owner: number | null;
  locality: 'town' | 'castle' | 'village' | null;
  resources: [];
}

export const tileExemple: Array<TileExempleType> = [
  {
    id: 1,
    type: 'terra',
    owner: null,
    locality: 'town',
    resources: [],
  },
  {
    id: 2,
    type: 'terra',
    owner: null,
    locality: 'castle',
    resources: [],
  },
  {
    id: 3,
    type: 'terra',
    owner: null,
    locality: 'village',
    resources: [],
  },
  {
    id: 4,
    type: 'terra',
    owner: null,
    locality: null,
    resources: [],
  },
];

export function getTile(iInit = 100, jInit = 1) {
  const map = [];
  for (let i = iInit; i < 2000; i = i + 100) {
    const colum = [];
    for (let j = jInit; j < 20; j++) {
      const user = players.find(item => item.location[i + j]);
      let tile = null;
      if (user) {
        tile = tileExemple.find(item => item.locality === user.location[i + j]);
        tile.owner = user.id;
      } else {
        tile = tileExemple[3];
      }
      colum.push({...tile, id: i + j});
    }
    map.push(colum);
  }
  return map;
}
