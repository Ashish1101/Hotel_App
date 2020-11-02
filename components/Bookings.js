import React , {useState} from 'react'
import { View , Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {Headline , Paragraph , Title ,  List} from 'react-native-paper'
import CityList from './CityList'
const Bookings = () => {
    
    return (
        <View style={{flex:1}}>
           <Title style={{alignSelf:'center' , marginTop:10}}>Bookings</Title>
          
               <ScrollView>
                  <CityList title="Amar Ashiyana" />
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

export default Bookings;
