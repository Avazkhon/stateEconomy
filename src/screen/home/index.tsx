/**
 * @format
 */
import React from 'react';
import {View, Text} from 'react-native';

function Home({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text onPress={() => navigation.navigate('Game')}>go to game screen</Text>
    </View>
  );
}

export const HomeScreen = Home;
