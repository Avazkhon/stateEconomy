/**
 * @format
 */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {assets} from './tile.constants';

import {TileExempleType} from '../../../../constants/map.constants';

const styles = StyleSheet.create({
  row: {
    borderColor: '#fff',
    borderWidth: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  image: {width: 50, height: 50, borderRadius: 50},
});

const Map = ({tile}: {tile: TileExempleType}) => {
  return (
    <View style={styles.row}>
      {tile.locality.type === 'town' && (
        <Image source={assets.townAsset} style={styles.image} />
      )}
      {tile.locality.type === 'castle' && (
        <Image source={assets.castleAsset} style={styles.image} />
      )}
      {tile.locality.type === 'village' && (
        <Image source={assets.villageAsset} style={styles.image} />
      )}
      <Text>{tile.locality.type}</Text>
    </View>
  );
};

export default Map;
