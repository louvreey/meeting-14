import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import MainNavigator from './navigator/MainNavigator';

const App = () => {
  return (
    <SafeAreaProvider><MainNavigator/></SafeAreaProvider>
  )
}

export default App