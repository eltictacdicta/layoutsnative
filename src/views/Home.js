import React from 'react'
import {View,Text,TouchableHighlight} from 'react-native'

const Home = ({navegation}) => {
  return (
    <View>
        <Text>
            Hola soy la home
        </Text>
        <TouchableHighlight 
            onPress={()=> navegation.navegate('')}
        ></TouchableHighlight>
    </View>
    
  )
}

export default Home
