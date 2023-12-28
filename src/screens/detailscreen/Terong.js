import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Terong = () => {
  return (
    <ScrollView style={{backgroundColor: '#B3CDFF'}}>
    <View style={{backgroundColor: '#FFD3E5', height:70}}>
        <Text style={{fontSize: 35, color: '#FF579E', marginTop: 15, marginHorizontal: 30, fontWeight: 'bold'}}> Detail Resep </Text>
    </View>
    <View>
        <Image
        source={require('../image/terongbalado.jpg')}
        style={{height: 250, width: 360, }}
        />
    </View>
    <View style={{backgroundColor: '#F1EBED'}}>
        <Text style={{fontSize: 35, marginHorizontal: 10, marginTop: 5,fontWeight: 'bold', height: 50, textAlign: 'center'}}> Terong Balado </Text>
    </View>
    <Text style={{fontSize: 20, marginTop: 15, marginHorizontal: 10}}>
    * Bahan-bahan {"\n"}
    - 4 buah terong ungu {"\n"}
    - minyak goreng {"\n"}
    - 2 lembar daun jeruk {"\n"}
    - 1 batang serai, memarkan {"\n"}
    - 2 sdm air jeruk nipis {"\n"}
    - 1 sdm kaldu ayam bubuk{"\n"}
    {"\n"}
    * Bumbu {"\n"}
    - 5 buah cabe merah besar {"\n"}
    - 12 buah cabe rawit merah {"\n"}
    - 8 butir bawang merah {"\n"}
    - 3 siung bawang putih {"\n"}
    - 1 buah tomat merah {"\n"}
    - 1 sdt gula pasir {"\n"}
    - 2 sdt garam {"\n"}
    {"\n"}
    * Cara membuat {"\n"}
    1. Belah terong menjadi dua lalu potong menjadi dua. Rendam terong dengan air yang diberi sedikit garam. {"\n"}
    2. Tiriskan terong lalu lap hingga kering airnya. {"\n"}
    3. Panaskan minyak banyak dalam wajan, goreng potongan terong sebentar hingga layu lalu angkat dan tiriskan. {"\n"}
    4. Bumbu: Giling bahan-bahan bumbu hingga agak halus.{"\n"}
    5. Panaskan 100 ml minyak dalam wajan.{"\n"}
    6. Masukkan bumbu, daun jeruk, serai dan kaldu bubuk. Aduk-aduk hingga rata. {"\n"}
    7. Kecilkan api, aduk-aduk bumbu hingga benar-benar matang. Berbutir kecil dan minyaknya kemerahan. {"\n"}
    8. Masukkan terong dan air jeruk nipis, aduk dan biarkan mendidih beberapa saat lalu angkat. {"\n"}
    </Text>

    </ScrollView>
  )
}

export default Terong

const styles = StyleSheet.create({})