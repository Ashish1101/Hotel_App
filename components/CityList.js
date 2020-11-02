import React , {useState} from 'react'
import { View } from 'react-native'
import { List} from 'react-native-paper'
const CityList = ({title}) => {

    const [expanded , setExpanded] = useState(false)
   
    const toggle = () => {
        setExpanded(!expanded)
    }

    return (
        <View>
            <List.Accordion
                    title={title}
                    expanded={expanded}
                    onPress={toggle}
                    >
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
        </View>
    )
}

export default CityList
