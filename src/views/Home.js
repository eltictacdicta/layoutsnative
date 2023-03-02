import React from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import Library from './Library'

const Home = ({navigation}) => {
  return (
    <View>
        <Text>
            Hola soy la home
        </Text>
        <TouchableHighlight 
            onPress={()=> navigation.navigate(Library)}
        ><Text>Ir a librería</Text></TouchableHighlight>
    </View>
    
  )
}

export default Home
