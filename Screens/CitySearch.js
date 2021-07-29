import React , {useEffect, useState} from 'react'
import { View , Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {Searchbar , List} from 'react-native-paper'
import CityList from '../components/CityList'
const CitySearch = () => {
    const [search , setSearch] = useState('')
    

    // useEffect(() => {
    //     console.log(search)
    //     //eslint-disable-next-line
    // })

    const arr = [
    <CityList title="Agra"/>, 
    <CityList title="Ahmedabad"/>,
    <CityList title="Ahmednagar"/>,
    <CityList title="Ahmedabad"/>,
    <CityList title="Ajmer"/>,
    <CityList title="Akbarpur"/>,
    <CityList title="Aligarh"/>,
    <CityList title="Ambala"/>,
    <CityList title="Amravati"/>,
    <CityList title="Bangalore"/>,
    <CityList title="Bankura"/>,
    <CityList title="Bariely"/>,
    <CityList title="Betul"/>,
    <CityList title="Bhilwara"/>,
    <CityList title="Bhuj"/>,

    ]

    return (
        <View>
            <View>
                <Searchbar
                placeholder="Search by locality, landmark or city"
                onChange={(text) => setSearch(text)} 
                // value={search}
                 />
            </View>
            <ScrollView>
            <View>
              <ScrollView>
              <List.Section>
                {arr.map(item => (<View key={Math.random(10).toString()} >{item}</View>))}
              </List.Section>
              </ScrollView>
            </View>
            </ScrollView>
        </View>
    )
}

export default CitySearch
