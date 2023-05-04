import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import LoginScreen from '../screens/LoginScreen';
// import SignupScreen from '../screens/SignupScreen';
// import HomeScreen from '../screens/HomeScreen';
// import PostDetails from '../screens/PostDetails';
// import Demo from '../screens/ProfileDetailScreen';
// import BottomTab from './BottomTab';
// import FillProfileScreen from '../screens/FillProfileScreen';
// import SettingsScreen from '../screens/SettingsScreen';
// import AddNewsScreen from '../screens/AddNewsScreen';
// import BookmarkScreen from '../screens/BookmarkScreen';
// import ExploreScreen from '../screens/ExploreScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PostDetail" component={PostDetails} />
      <Stack.Screen name="FillProfile" component={FillProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="AddNews" component={AddNewsScreen} />
      <Stack.Screen name="Bookmark" component={BookmarkScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} /> */}
    </Stack.Navigator>
  );
};

const MyNavigation = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default MyNavigation;

const styles = StyleSheet.create({});
