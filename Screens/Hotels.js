import React from 'react'
import { View  , Text , FlatList} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Collections from '../components/Collections'
const Hotels = () => {
    
    const image1 = 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    const image2 = 'https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image3 = 'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image4 = 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image5 = 'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image6 = 'https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"'
    const image7 = 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image8 = 'https://images.pexels.com/photos/3201735/pexels-photo-3201735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image9 = 'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image10 = 'https://images.pexels.com/photos/4760126/pexels-photo-4760126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image11 = 'https://images.pexels.com/photos/2983198/pexels-photo-2983198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const image12 = 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    const array = [
        {
            image : image1,
            location: "Agra",
            id: 1
        },
        {
            image : image2,
            location: "Mumbai",
            id: 2
        },
        {
            image : image3,
            location: "Delhi",
            id: 3
        },
        {
            image : image4,
            location: "Pune",
            id:4
        },
        {
            image : image5,
            location: "Lucknow",
            id: 5
        },
        {
            image : image6,
            location: "Kanpur",
            id:6
        },
        {
            image : image7,
            location: "Mirzapur",
            id:7
        },
        {
            image : image8,
            location: "Noida",
            id:8
        },
        {
            image : image9,
            location: "Baranasi",
            id:9
        },
        {
            image : image10,
            location: "Gwalior",
            id:10
        },
        {
            image : image11,
            location: "Ludhiana",
            id:11
        },
        {
            image : image12,
            location: "Amritsar",
            id:12
        },
    ]

    return (
        <ScrollView>
        <View style={{flex:1 , flexDirection:'row' , flexWrap:'wrap'}}>
           {array.map(item => ( <Collections key={item.id} title={item.location} image={item.image} />))}
        </View>
        </ScrollView>
    )
}

export default Hotels