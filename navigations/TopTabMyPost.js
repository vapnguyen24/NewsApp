import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyNewsScreen from '../components/app/news/screens/MyNewsScreen';
import MyRecentNews from '../components/app/news/screens/MyRecentNews';
import color from '../assets/color';

const Tab = createMaterialTopTabNavigator();
const windowHeight = Dimensions.get('window').height;

const MyTabs = () => {
    return (
        <Tab.Navigator
        style={{minHeight: 0}}
          initialRouteName="Feed"
          screenOptions={{
            tabBarInactiveTintColor: color.gray_text,
            tabBarActiveTintColor: color.black,
            tabBarLabelStyle: { fontSize: 12, textTransform: 'capitalize', fontFamily: 'poppins_medium', fontSize: 16 },
            tabBarStyle: { backgroundColor: '#fff' },
          }}
        >
          <Tab.Screen
            name="News"
            component={MyNewsScreen}
            options={{ tabBarLabel: 'News' }}
          />
          <Tab.Screen
            name="Recent"
            component={MyRecentNews}
            options={{ tabBarLabel: 'Recent' }}
          />
        </Tab.Navigator>
    );
}

const TopTabMyPost = () => {
  return (
    <MyTabs/>
  )
}

export default TopTabMyPost

const styles = StyleSheet.create({})