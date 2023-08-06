import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ICat } from '../../../domain/ICat'
const uri= 'https://api.thecatapi.com/v1/breeds'

interface Props{
  cat:ICat
}
const cardCat = ({cat}:Props) => {
  const [url, setUrl] = useState('')
  const getImage = async () => {
    try {
      if (!cat.imageUrl) return
      const response = await fetch('https://api.thecatapi.com/v1/images/'+ cat.imageUrl)
      const jsonData = await response.json();
      setUrl(jsonData.url)
    } catch (error) {
      console.error('Error fetching image:', error, cat);
    }
  };

  useLayoutEffect(() => {
    getImage()
  }, [])
  

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.text}>{cat.breedName}</Text>
      {url != ''&& <Image 
        style = {styles.imageContainer}
        source={{
          uri: url
        }}/>}
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