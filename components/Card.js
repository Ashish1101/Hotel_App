import React from 'react'
import {View , ScrollView , Text , Dimensions} from 'react-native'
import {Avatar , Card , Title} from 'react-native-paper'

const width = Dimensions.get('window').width

const CardImage = ({image , title}) => {
    return (
        <View style={{marginLeft:18 , paddingVertical:10}}>
              <Title style={{fontSize:16}}>{title}</Title>
              <Card style={{width:width / 1.1}}>
                  <Card.Cover source={{uri:image}} />
            </Card>
        </View>
    )
}

export default CardImage