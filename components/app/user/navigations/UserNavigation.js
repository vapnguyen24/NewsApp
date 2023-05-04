import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

const Stack = createStackNavigator();

const UserNavigation = () => {
  return (
    // <NavigationContainer  
    //     initialRouteName="Login"
    //     screenOptions={{
    //     headerShown: false,
    // }}>
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
  )
}

export default UserNavigation