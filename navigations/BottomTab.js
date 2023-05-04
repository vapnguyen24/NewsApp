import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import color from '../assets/color';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import ExploreScreen from '../screens/ExploreScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
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
              <Image source={require('../assets/images/HomeActive.png')} />
            ) : (
              <Image source={require('../assets/images/HomeInactive.png')} />
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
              <Image source={require('../assets/images/ExploreActive.png')} />
            ) : (
              <Image source={require('../assets/images/ExploreInactive.png')} />
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
              <Image source={require('../assets/images/BookmarkActive.png')} />
            ) : (
              <Image source={require('../assets/images/BookmarkInactive.png')} />
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
              <Image source={require('../assets/images/ProfileActive.png')} />
            ) : (
              <Image source={require('../assets/images/ProfileInactive.png')} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const BottomTab = () => {
  return <MyTabs />;
};

export default BottomTab;
