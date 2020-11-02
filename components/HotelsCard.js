import React from 'react'
import { View , Text , Image} from 'react-native'
import {Card} from 'react-native-paper'
const HotelsCard = ({location , image}) => {
    return (
        <View style={{flex:1}}>
            <View style={{height:80 , width: 120 , flex:1}}>
            <Card.Cover style={{height:140}} source={image} />
            </View>
            <View>
                <Text>{location}</Text>
            </View>
        </View>
    )
}

export default HotelsCard
