import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import Question from './src/components/Question';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';

const App = () => {
  return (
    
    <NavigationContainer>
      <AuthStackNavigator/>
    </NavigationContainer>
  );
};

export default App;
