import React from 'react'
import {View , ScrollView , Text} from 'react-native'
import {Avatar} from 'react-native-paper'
const Location = () => {
    return (
        <View style={{paddingVertical:15}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Avatar.Text style={{marginHorizontal:10 , backgroundColor:'#B3E5FC'}} size={50} label="BG" />
                <Avatar.Text style={{marginHorizontal:10  , backgroundColor:'#B3E5FC'}}  size={50} label="AG" />

                <Avatar.Text style={{marginHorizontal:10  , backgroundColor:'#B3E5FC'}}  size={50} label="KN" />
                <Avatar.Text style={{marginHorizontal:10  , backgroundColor:'#B3E5FC'}} size={50} label="LN" />
                <Avatar.Text style={{marginHorizontal:10  , backgroundColor:'#B3E5FC'}} size={50} label="PN" />
                <Avatar.Text style={{marginHorizontal:10  , backgroundColor:'#B3E5FC'}} size={50} label="HR" />
                <Avatar.Text style={{marginHorizontal:10  , backgroundColor:'#B3E5FC'}} size={50} label="MB" />
                <Avatar.Text style={{marginHorizontal:10  , backgroundColor:'#B3E5FC'}} size={50} label="DL" />
                <Avatar.Text style={{marginHorizontal:10  , backgroundColor:'#B3E5FC'}} size={50} label="PN" />
                <Avatar.Text style={{marginHorizontal:10  , backgroundColor:'#B3E5FC'}} size={50} label="SG" />
                <Avatar.Text style={{marginHorizontal:10  , backgroundColor:'#B3E5FC'}} size={50} label="BG" />
            </ScrollView>
        </View>
    )
}

export default Location
