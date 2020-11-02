import React , {useEffect , useState} from 'react'
import { View  , StyleSheet , Dimensions , TouchableWithoutFeedback , Keyboard, Animated , Easing} from 'react-native'
import {Text , TextInput , Headline, Button , TouchableRipple , Subheading} from 'react-native-paper'
import {LinearGradient} from 'expo-linear-gradient'
import {useNavigation} from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Register = ({navigation}) => {
    
    const marginbottom = useState(new Animated.Value(400))[0]

    useEffect(() => {
        Animated.timing(marginbottom , {
            toValue:0,
            duration: 1000,
            useNativeDriver : true
        }).start()
    }, [marginbottom])

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
        <View style={styles.container}>
            <Headline style={{marginTop:110 , marginLeft:30 , fontSize:34}}>Welcome</Headline>
            <Animated.View style={[styles.inputFields, {transform: [{translateX: marginbottom}]}]}>
                <View style={styles.inputs}>
                    <TextInput 
                    label="Name"
                    mode="flat"
                    style={styles.inputMargin}
                    />
                     <TextInput 
                    label="Email"
                    mode="flat"
                    style={styles.inputMargin}
                    />
                     <TextInput 
                    label="Password"
                    mode="flat"
                    style={styles.inputMargin}
                    />
                     <Button mode="contained">Register</Button>
                     <Button mode='text' color="white" onPress={() => navigation.navigate('Login')}>Already have , Login</Button>
                </View>
            </Animated.View>
        </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        height:height,
        width:width,
       
    },
    
    inputFields: {
         flex:1,
         borderTopLeftRadius:50,
         borderTopRightRadius:50,
         justifyContent:'flex-start',
         backgroundColor:'#81D4FA',
        
    },
    inputs: {
        flex:1,
        justifyContent:'center',
        width:Math.round(width / 1.2),
        marginLeft:30,
        marginTop:50
    },
    inputMargin: {
        marginVertical:5,
        backgroundColor:'transparent'
    }
})


export default Register
