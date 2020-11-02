import React, {useState , useLayoutEffect, useEffect} from 'react'
import { View  , StyleSheet , Dimensions , TouchableWithoutFeedback , Keyboard , Animated , Easing} from 'react-native'
import {Text , TextInput , Headline, Button , TouchableRipple , Subheading} from 'react-native-paper'
import {LinearGradient} from 'expo-linear-gradient'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Login = ({navigation}) => {
    
    const marginBottom = useState(new Animated.Value(200))[0]


    useEffect(() => {
        Animated.timing(marginBottom , { 
            toValue:0,
            duration:1000,
            easing: Easing.linear(),
            useNativeDriver: true
        }).start()
    }, [marginBottom])

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
          
         
              <Headline style={{marginTop:120 , marginLeft:30 , fontSize:32}}>Welcome</Headline>
          <Animated.View style={[styles.inputFields , {transform: [{translateY:marginBottom}]}]}>
              <View style={styles.inputs}>
                   <TextInput 
                  label="Email"
                  mode="flat"
                  selectionColor="transparent"
                  style={styles.inputMargin}
                  />
                   <TextInput 
                  label="Password"
                  mode="flat"
                  style={styles.inputMargin}
                  />
                      <Button mode="contained">Login</Button>
                   <Button onPress={() => navigation.navigate('Register')}>Don't have account , click here to create</Button>
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
       backgroundColor:'#ffcfe6'
        
    },
    inputs: {
        flex:1,
        width:Math.round(width / 1.2),
        marginLeft:30,
        marginTop:120
    },
    inputMargin: {
        marginVertical:5,
        backgroundColor:'transparent'
    }
})


export default Login
