import React , {useState} from 'react'
import { View , Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {Headline , Paragraph , Title ,  List} from 'react-native-paper'
import CityList from './CityList'
const Bookings = () => {
    
    return (
        <View style={styles.container}>
           <Title style={styles.titleStyles}>Bookings</Title>
          
               <ScrollView>
                  <CityList title="Hotel Amar" />
                  <CityList title="Mamazz" />
                  <CityList title="Red Chili" />
                  <CityList title="Hotel Chanakya" />
                  <CityList title="Hotel Taj" />
                  <CityList title="Hotel Blackbirds" />
                  <CityList title="Etawah club" />
                  <CityList title="Hotel Cypher" />
               </ScrollView>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    titleStyles :{ 
        alignSelf:'center',
        marginTop:10
    }
})

export default Bookings;
