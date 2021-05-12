/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type { Node } from 'react';
import {StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import feed from './assets/data/feed';
import DestinationSearch from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
import Router from './src/navigation/Router';

const post1 = feed[0];


const App: () => Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router/>
    </>
  );
};

export default App;
