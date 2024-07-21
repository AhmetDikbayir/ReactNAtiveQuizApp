import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Question from './src/components/Question';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
