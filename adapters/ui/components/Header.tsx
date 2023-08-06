import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>CatBreeds</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer:{
      height:50,
      justifyContent:'center',
      alignItems:'center'
    },
    headerText:{
      fontWeight:'bold'
    }
})

export default Header