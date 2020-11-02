import React from 'react'
import { View  , Text} from 'react-native'
import {Divider, Title , TouchableRipple} from 'react-native-paper'
import Location from '../components/Location'
import CardImage from '../components/Card'
import { ScrollView, TouchableOpacity , TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Collections from '../components/Collections'
import {useNavigation} from '@react-navigation/native'
const Home = () => {

    const image8 = 'https://images.pexels.com/photos/3201735/pexels-photo-3201735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image9 = 'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image10 = 'https://images.pexels.com/photos/4760126/pexels-photo-4760126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image11 = 'https://images.pexels.com/photos/2983198/pexels-photo-2983198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image12 = 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    const image3 = 'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image4 = 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   
    const navigation = useNavigation()

    return (
        <ScrollView>
        <View>
           <Location />
           <Divider />
           <View style={{backgroundColor:'#e8e8e8'}}>
               <TouchableRipple onPress={() => navigation.navigate('City')}>
               <CardImage title="Pay once , Stay Twice!" image={image3} />
               </TouchableRipple>
               <CardImage title="Sign up now" image={image4} />
           </View>
           <View style={{paddingVertical:10}}>
           <Title style={{fontSize:16 , marginLeft:14}}>Our Collections</Title>
           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft:8 , backgroundColor:'#ededed'}}>
               <Collections title="COLLECTION O" info="Premium business stays" image={image8} />
               <Collections title="SPOT ON" info="comfortable budget stays" image={image9} />
               <Collections title="CAPITAL O" info="Beautiful designed spaces" image={image10} />
               <Collections title="OYO HOME" info="Modern & stylish homestays" image={image11} />
               <Collections title="POWER BREAK" info="6 hr stays at discounted rates" image={image12} />
           </ScrollView>
           </View>
         
        </View>
        </ScrollView>
    )
}

export default Home
