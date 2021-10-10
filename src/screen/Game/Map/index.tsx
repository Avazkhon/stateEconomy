/**
 * @format
 */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {map} from './map.constants';

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
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {map.map((row, indexRow) => (
          <View style={styles.column} key={indexRow}>
            {row.map((tile, indexTile) => (
              <View style={styles.row} key={indexTile}>
                <Text>{tile.locality.name}</Text>
                {tile.resources.map(resource => (
                  <Text>{resource.type}</Text>
                ))}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Map;
