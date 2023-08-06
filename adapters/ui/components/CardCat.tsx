import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ICat } from '../../../domain/ICat'
interface Props{
  cat:ICat
}
const cardCat = ({cat}:Props) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.text}>{cat.breedName}</Text>
      <Image 
        style = {styles.imageContainer}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwBwlRQfkM-299NotdC0uYBX04O4LkvFrgXv5QXUIJg&s'
        }}/>
        <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', paddingHorizontal:20 }}>
        <Text style={styles.text}>{cat.origin}</Text>
        <Text style={styles.text}>{cat.inteligence}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
      marginTop:30,
      height:400,
      borderColor:'black',
      borderWidth:1,
      alignItems:'center',
    },
    imageContainer:{
      height:200, 
      width:200,
      marginTop:20,
     
      alignItems:'center'
    },
    text:{
      marginVertical:20,
      fontWeight:'bold'
    }
})

export default cardCat