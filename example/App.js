/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import SlidingTabNavigator, { Screen } from './src';

const App = () => {
  return (
    <SlidingTabNavigator tabStyle={{ backgroundColor: '#99f' }} scrollable>
      <Screen name='home' renderIcon={<Text>Ico</Text>}>
        <View style={[styles.screen, { backgroundColor: '#F76' }]} />
      </Screen>
      <Screen name='test' renderIcon={<Text>Ico</Text>}>
        <View style={[styles.screen, { backgroundColor: '#595' }]} />
      </Screen>
      <Screen name='asd' renderIcon={<Text>Ico</Text>}>
        <View style={[styles.screen, { backgroundColor: '#515' }]} />
      </Screen>
      <Screen name='fgh' renderIcon={<Text>Ico</Text>}>
        <View style={[styles.screen, { backgroundColor: '#995' }]} />
      </Screen>
      <Screen name='jkl' renderIcon={<Text>Ico</Text>}>
        <View style={[styles.screen, { backgroundColor: '#d95' }]} />
      </Screen>
    </SlidingTabNavigator>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
});

export default App;
