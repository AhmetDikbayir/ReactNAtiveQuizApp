import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import auth from '@react-native-firebase/auth';
import AppStackNavigator from './src/navigators/AppStackNavigator';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const onAuthStateChanged = async (user) => {
    await setCurrentUser(user);
    setIsLoading(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount  
  }, []);

  if(isLoading){
    return null;}

  return (
    
    <NavigationContainer>
      {
        currentUser ? <AppStackNavigator/> : <AuthStackNavigator />
      }
    </NavigationContainer>
  );
};

export default App;
