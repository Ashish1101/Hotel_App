import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Hotels from '../Screens/Hotels'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { color } from 'react-native-reanimated'
import { ImageBackground , StyleSheet , Image , View , Text} from 'react-native'
import CitySearch from '../Screens/CitySearch'

const Tabs = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()

// const Header = props => (
//     <View style={{justifyContent: 'flex-end'}}>
//       <Text style={{color: 'white', fontSize: 25}}>COMPANY LOGO</Text>
//     </View>
//   );

// const ImageHeader = props => (
//     <View style={{ backgroundColor: '#eee' , height:80}}>
//       <Image
//         style={[StyleSheet.absoluteFill , {height:80}]}
//         source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
//       />
//       <Header {...props} style={{ backgroundColor: 'transparent' }}/>
//     </View>
//   );

const HomeStack = () => {
    return (
       <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle:{backgroundColor:'#1E88E5'} , headerTintColor:'white'}} >
           <Stack.Screen name="Home" component={Home}/>
           <Stack.Screen name="City" component={CitySearch} />
       </Stack.Navigator>
    )
}

const ProfileStack = () => {
    return (
       <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#1E88E5'} , headerTintColor:'white'}}>
           <Stack.Screen name="Profile" component={Profile} />
       </Stack.Navigator>
    )
}

const HotelStack = () => {
    return (
       <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#1E88E5'} , headerTintColor:'white'}}>
           <Stack.Screen name="Hotel" component={Hotels} />
       </Stack.Navigator>
    )
}

const HomeIcon = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ color }) => (
        <AntDesign name="home" size={24} color="white" />
    ),
  }

  const ProfileIcon = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ color }) => (
        <AntDesign name="user" size={24} color="white" />
    ),
  }

  const HotelIcon = {
    tabBarLabel: 'Hotel',
    tabBarIcon: ({ color }) => (
       
       <MaterialCommunityIcons name="hotel" size={24} color="white" />
    ),
  }


export const MainNavigator = () => {
    return (
    <Tabs.Navigator shifting={true} >
        <Tabs.Screen name="Home" component={HomeStack} options={HomeIcon} />
        <Tabs.Screen name="Hotels" component={HotelStack} options={HotelIcon} />
        <Tabs.Screen name="Profile" component={ProfileStack} options={ProfileIcon}  />
    </Tabs.Navigator>
    )
}