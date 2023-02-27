import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./screens/Home"
import Splash from './screens/Splash';
import Login from './screens/Login';
import Signup from './screens/Signup';


const Stack = createNativeStackNavigator();


const AppNavigator =()=> {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name ="splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name ="login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name ="signup" component={Signup} options={{headerShown:false}}/>
        
        <Stack.Screen name ="home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default AppNavigator