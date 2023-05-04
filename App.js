import { StyleSheet, View } from 'react-native'
import React from 'react'
import MyNavigation from './navigations/MyNavigation'
import { UserProvider } from './components/app/user/utilities/UserContext'
import { NewsProvider } from './components/app/news/utilities/NewsContext'
import AppNavigation from './components/app/appNavigations/AppNavigation'


const App = () => {
  return (
    <UserProvider>
      <NewsProvider>
        <AppNavigation/>
      </NewsProvider>
    </UserProvider>
  )
}

export default App

const styles = StyleSheet.create({})