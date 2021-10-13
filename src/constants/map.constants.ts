/**
 * @format
 */

export interface TileExempleType {
  id: number;
  type: 'terra';
  owner: number | null;
  locality: {
    type: 'town' | 'castle' | 'village' | null;
  };
  resources: [];
}

export const tileExemple: Array<TileExempleType> = [
  {
    id: 1,
    type: 'terra',
    owner: null,
    locality: {
      type: 'town',
    },
    resources: [],
  },
  {
    id: 2,
    type: 'terra',
    owner: null,
    locality: {
      type: 'castle',
    },
    resources: [],
  },
  {
    id: 3,
    type: 'terra',
    owner: null,
    locality: {
      type: 'village',
    },
    resources: [],
  },
  {
    id: 4,
    type: 'terra',
    owner: null,
    locality: {
      type: null,
    },
    resources: [],
  },
];

function getRandomInt(min = 0, max = 50) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function getTile(iInit = 0, jInit = 0) {
  const map: Array<Array<TileExempleType>> = [];
  for (let i = iInit; i <= 30; i++) {
    const colum: Array<TileExempleType> = [];
    for (let j = jInit; j <= 20; j++) {
      let tile: TileExempleType | null = null;
      const randomNumber = getRandomInt();
      switch (randomNumber) {
        case 0:
          tile = tileExemple[0];
          break;
        case 1:
          tile = tileExemple[1];
          break;
        case 2:
          tile = tileExemple[2];
          break;
        default:
          tile = tileExemple[3];
      }
      tile.id = i + j;
      colum.push(tile);
    }
    map.push(colum);
  }
  return map;
}

export const map = getTile();
