/**
 * @format
 */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useSelector, shallowEqual} from 'react-redux';

import Tile from './Tile';
const styles = StyleSheet.create({
  column: {
    flexDirection: 'row',
  },
  row: {
    borderColor: '#fff',
    borderWidth: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

const Map = (): any => {
  const map = useSelector(state => {
    return state.map.map;
  });
  console.log('map', map);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {map.map((row, indexRow) => (
          <View style={styles.column} key={indexRow}>
            {row.map((tile, indexTile) => (
              <Tile tile={tile} key={indexTile} />
            ))}
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Map;
