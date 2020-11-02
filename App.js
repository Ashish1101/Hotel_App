import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React , {useState , useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login'
import Register from './Screens/Register'
import {NavigationContainer} from '@react-navigation/native'
import {AuthNavigator} from './Navigators/AuthNavigator'
import {Provider as PaperProvider} from 'react-native-paper'
import {MainNavigator} from './Navigators/MainNavigator'

export default function App() {

  const [state , setState ] = useState(true)

  // useEffect(() => {
  //    setTimeout(() => {
  //       setState(true)
  //    }  ,3000)
  //   //eslint-disable-next-line
  // })

  return (
      <PaperProvider>
        <StatusBar backgroundColor="#1976D2" />
        <NavigationContainer>
           {/* <AuthNavigator />
          <MainNavigator /> */}
          {state === true ? (<MainNavigator />) : (<AuthNavigator />)}
        </NavigationContainer>
      </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
