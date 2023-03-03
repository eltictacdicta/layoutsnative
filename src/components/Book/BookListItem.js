import React from 'react'
import {View,Text} from 'react-native'

const BookListItem = ({book}) => {
  return (
    <View>
      <Text>{book.title}</Text>
    </View>
  )
}

export default BookListItem
