import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../WelcomeScreen';
import HomeScreen from '..//HomeScreen';
import Bakso from '../detailscreen/Bakso';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Bakso" component={Bakso} options={{ headerShown:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
