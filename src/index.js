/**
 * @format
 */

import * as React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {NavigationContainer} from '@react-navigation/native';

import rootReducers from './reducers';

import App from './App';

const store = createStore(rootReducers);
console.log('store', store);

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
