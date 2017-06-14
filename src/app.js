/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Login from './login';
import Lista from './lista';
import DetailView from './DetailView';

const PokemonGo = StackNavigator({
  Login: {screen: Login},
  Lista: {screen: Lista},
  Detalle: {screen: DetailView},

})

AppRegistry.registerComponent('PokemonGo', () => PokemonGo);
