/**
 * @format
 */
import React from 'react';
import {View, Text} from 'react-native';

import Map from './Map';

function Game({navigation}: any) {
  return (
    <View>
      <Text>game Screen</Text>
      <Text onPress={() => navigation.navigate('Home')}>Go to home screen</Text>
      <Map />
    </View>
  );
}

export const GameScreen = Game;
