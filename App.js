/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import Entypo from 'react-native-vector-icons/Entypo';

const App: () => Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

      </SafeAreaView>
    </>
  );
};

export default App;