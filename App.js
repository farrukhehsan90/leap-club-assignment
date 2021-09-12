import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './src/component/game';
import CheckjsonText from './src/component/CheckJsonText';

export default function App() {
  return (
    // <Game />
    <CheckjsonText />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
