/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Platform} from 'react-native';

import AosContainer from './containers/AosContainer';
import IosContainer from './containers/IosContainer';

function App() {
  if (Platform.OS === 'android') {
    return <AosContainer />;
  }

  if (Platform.OS === 'ios') {
    return <IosContainer />;
  }
}

export default App;
