import React from 'react'
import {FlatList, View,Text,TouchableHighlight} from 'react-native'
import Library from './Library'
import BookListItem from '../components/Book/BookListItem'

const BOOK_LIST = [
  {
    id: 1,
    title: 'Hacia rutas salvajes',
    cover: 'https://picsum.photos/200'
  },
  {
    id: 2,
    title: 'El nombre del viento',
    cover: 'https://picsum.photos/200'
  },
  {
    id: 3,
    title: 'Software libre para una sociedad libre',
    cover: 'https://picsum.photos/200'
  }
]


const Home = ({navigation}) => {
  function handlerOnPress(){
    navigation.navigate(Library)
  }
  return (
    <View>
        <FlatList
          data={BOOK_LIST}
          renderItem={({item}) => <BookListItem onPress={handlerOnPress} book={item}/>}
          keyExtractor={item => item.id}
        />
    </View>
    
  )
}

export default Home
