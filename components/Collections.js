import React from 'react'
import { View , Dimensions} from 'react-native'
import {Card , Text , Button ,Title , Paragraph} from 'react-native-paper'

const width = Dimensions.get('window').width
const height= Dimensions.get('window').height

const Collections = ({image , title , info}) => {
    return (
    <View style={{marginTop:8}}>
        <Card style={{width:width / 2.2  , marginHorizontal:8}}>
        <Card.Cover style={{height:140}} source={{uri:image}} />
           <Card.Content>
           <Text style={{fontSize:16}}>{title}</Text>
            <Paragraph style={{fontSize:12}}>{info}</Paragraph>
           </Card.Content>
       </Card>
   </View>
    )
}

export default Collections