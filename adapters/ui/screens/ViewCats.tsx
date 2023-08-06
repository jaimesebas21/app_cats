import { SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardCat from '../components/CardCat'
import { ICat } from '../../../domain/ICat'
import CatModel from '../../../domain/modelCat'
const uri= 'https://api.thecatapi.com/v1/breeds'

const ViewCats = () => {

  const [cats, setCats] = useState<ICat[]>([])

  const apiCats = async () => {
    try {
      let listCats = []
      const response = await fetch(uri,{
        headers: { 'API-KEY': 'x-api-key:bda53789-d59e-46cd-9bc4-2936630fde39' }
      });
      const jsonData = await response.json();
      jsonData.map((cat:any) =>  listCats.push(new CatModel(cat.name, cat.origin, cat.affection_level, cat.intelligence, cat.reference_image_id)))
      setCats(listCats)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => { apiCats() }, [])
  
  return (
    <SafeAreaView style={{flex:1}}>
      <Header/>

      <FlatList
        data={cats}
        renderItem={({item}) => <CardCat cat={item}/> }
      />
      
        
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    cardContainer:{
      borderColor:'black',
      borderWidth:1  
    }
})

export default ViewCats