import React from 'react'
import { View  , Text , StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {Avatar , List , Divider} from 'react-native-paper'
import Bookings from '../components/Bookings'
const Profile = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={{paddingTop:50}}>
                  <Avatar.Text size={100} style={{alignSelf:'center'}} label="AS" /> 
                </View>
                <View style={{marginTop:10}}>
               <List.Item title="Ashish Kumar" 
                left={props => <List.Icon {...props} icon="home" />} 
               />
               <Divider />
               <List.Item title="ashishskkumar321@gmail.com"
               left={props => <List.Icon {...props} icon="email" />} 
               />
            </View>
            </View>
            <Bookings />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
    // text: {
    //     flex:8,
    // }
})


export default Profile