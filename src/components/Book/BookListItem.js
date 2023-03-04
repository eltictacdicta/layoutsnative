import React from 'react'
import {Image,StyleSheet,View,Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  image:{
    width:50,
    height: 50,
    marginRight: 10
  }
})

const BookListItem = ({book, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: book.cover }} />
        <Text>{book.title}</Text>
        <Icon name="chevron-right" style={{marginLeft:'auto', marginRight:10}} size={20} color="#900" />
      </View>
    </TouchableOpacity>
  )
}

export default BookListItem
