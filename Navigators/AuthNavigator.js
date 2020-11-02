import React  from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Login from '../Screens/Login'
import Register from '../Screens/Register'
import {LinearGradient} from 'expo-linear-gradient'
const Stack = createStackNavigator();

 export const AuthNavigator = () => {
     return (
    <Stack.Navigator initialRouteName="Register" mode="modal" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
     )
}

