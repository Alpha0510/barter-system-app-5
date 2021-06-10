 import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { AppDrawerNavigator } from '';

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  // Drawer:{screen: AppDrawerNavigator}
});

const AppContainer = createAppContainer(switchNavigator);
