import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Teri = () => {
  return (
    <ScrollView style={{backgroundColor: '#B3CDFF'}}>
    <View style={{backgroundColor: '#FFD3E5', height:70}}>
        <Text style={{fontSize: 35, color: '#FF579E', marginTop: 15, marginHorizontal: 30, fontWeight: 'bold'}}> Detail Resep </Text>
    </View>
    <View>
        <Image
        source={require('../image/sambalteri.jpg')}
        style={{height: 250, width: 360, }}
        />
    </View>
    <View style={{backgroundColor: '#F1EBED'}}>
        <Text style={{fontSize: 35, marginHorizontal: 10, marginTop: 5,fontWeight: 'bold', height: 50, textAlign: 'center'}}> Sambal Teri kemangi </Text>
    </View>
    <Text style={{fontSize: 20, marginTop: 15, marginHorizontal: 10}}>
    * Bahan-bahan {"\n"}
    - 50 gram teri nasi, goreng {"\n"}
    - 7 buah cabai merah besar {"\n"}
    - 4 buah cabai merah keriting {"\n"}
    - 1 buah tomat {"\n"}
    - 5 butir bawang merah {"\n"}
    - 1 1/2 sendok teh terasi, bakar {"\n"}
    - 1/2 sendok teh garam {"\n"}
    - 1 sendok teh gula merah {"\n"}
    - 5 batang daun kemangi {"\n"}
    {"\n"}
    * Cara membuat {"\n"}
    1. Panggang cabai dan tomat di atas bara api sampai kulit tomat mengelupas. Kupas kulitnya. {"\n"}
    2. Ulek halus cabai, bawang merah, terasi, garam, dan gula. Tambahkan tomat. Ulek rata. {"\n"}
    3. Masukkan daun kemangi dan teri. Ulek asal rata. {"\n"}
    </Text>

    </ScrollView>
  )
}

export default Teri

const styles = StyleSheet.create({})