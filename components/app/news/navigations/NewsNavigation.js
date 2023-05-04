import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import color from '../../../../assets/color'
import HomeScreen from '../screens/HomeScreen'
import BookmarkScreen from '../screens/BookmarkScreen'
import ProfileDetailScreen from '../screens/ProfileDetailScreen'
import ExploreScreen from '../screens/ExploreScreen'
import AddNewsScreen from '../screens/AddNewsScreen'
import SettingsScreen from '../screens/SettingsScreen'
import FillProfileScreen from '../screens/FillProfileScreen'
import PostDetails from '../screens/PostDetails'
import AllTrendingNews from '../screens/AllTrendingNews'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NewsBottomNavigation = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarActiveTintColor: color.blue,
            tabBarInactiveTintColor: color.gray_text,
            headerShown: false,
            tabBarStyle: {height: 78},
            tabBarItemStyle: {height: 70},
            tabBarLabelStyle: {fontSize: 14, fontFamily: 'poppins_regular'},
            tabBarIconStyle: {marginTop: 12},
          })}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image source={require('../../../../assets/images/HomeActive.png')} />
                ) : (
                  <Image source={require('../../../../assets/images/HomeInactive.png')} />
                ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image source={require('../../../../assets/images/ExploreActive.png')} />
                ) : (
                  <Image source={require('../../../../assets/images/ExploreInactive.png')} />
                ),
            }}
          />
    
          <Tab.Screen
            name="Bookmark"
            component={BookmarkScreen}
            options={{
              tabBarLabel: 'Bookmark',
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image source={require('../../../../assets/images/BookmarkActive.png')} />
                ) : (
                  <Image source={require('../../../../assets/images/BookmarkInactive.png')} />
                ),
            }}
          />
    
          <Tab.Screen
            name="Profile"
            component={ProfileDetailScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image source={require('../../../../assets/images/ProfileActive.png')} />
                ) : (
                  <Image source={require('../../../../assets/images/ProfileInactive.png')} />
                ),
            }}
          />
        </Tab.Navigator>
      );
}

const NewsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="NewsBottomNav"
      screenOptions={{
      headerShown: false,
    }}>

      <Stack.Screen name='NewsBottomNav' component={NewsBottomNavigation}/>
      <Stack.Screen name='AddNews' component={AddNewsScreen}/>
      <Stack.Screen name='PostDetail' component={PostDetails}/>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="FillProfile" component={FillProfileScreen} />
      <Stack.Screen name="AllTrendingNews" component={AllTrendingNews} />
      
    </Stack.Navigator>
  )
}

export default NewsNavigation