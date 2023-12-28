import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../WelcomeScreen';
import HomeScreen from '..//HomeScreen';
import Bakso from '../detailscreen/Bakso';
import Kentang from '../detailscreen/Kentang';
import Spicy from '../detailscreen/Spicy';
import Capcay from '../detailscreen/Capcay';
import Terong from '../detailscreen/Terong';
import Tempe from '../detailscreen/Tempe';
import Sop from '../detailscreen/Sop';
import Jagung from '../detailscreen/Jagung';
import Perkedel from '../detailscreen/Perkedel';
import Teri from '../detailscreen/Teri';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Bakso" component={Bakso} options={{ headerShown:false }}/>
        <Stack.Screen name="Kentang" component={Kentang} options={{ headerShown:false }}/>
        <Stack.Screen name="Spicy" component={Spicy} options={{ headerShown:false }}/>
        <Stack.Screen name="Capcay" component={Capcay} options={{ headerShown:false }}/>
        <Stack.Screen name="Terong" component={Terong} options={{ headerShown:false }}/>
        <Stack.Screen name="Tempe" component={Tempe} options={{ headerShown:false }}/>
        <Stack.Screen name="Sop" component={Sop} options={{ headerShown:false }}/>
        <Stack.Screen name="Jagung" component={Jagung} options={{ headerShown:false }}/>
        <Stack.Screen name="Perkedel" component={Perkedel} options={{ headerShown:false }}/>
        <Stack.Screen name="Teri" component={Teri} options={{ headerShown:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
