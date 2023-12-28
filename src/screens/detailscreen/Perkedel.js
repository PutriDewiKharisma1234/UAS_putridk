import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Perkedel = () => {
  return (
    <ScrollView style={{backgroundColor: '#B3CDFF'}}>
    <View style={{backgroundColor: '#FFD3E5', height:70}}>
        <Text style={{fontSize: 35, color: '#FF579E', marginTop: 15, marginHorizontal: 30, fontWeight: 'bold'}}> Detail Resep </Text>
    </View>
    <View>
        <Image
        source={require('../image/perkedelkentang.webp')}
        style={{height: 250, width: 360, }}
        />
    </View>
    <View style={{backgroundColor: '#F1EBED'}}>
        <Text style={{fontSize: 35, marginHorizontal: 10, marginTop: 5,fontWeight: 'bold', height: 50, textAlign: 'center'}}> Perkedel Kentang </Text>
    </View>
    <Text style={{fontSize: 20, marginTop: 15, marginHorizontal: 10}}>
    * Bahan-bahan {"\n"}
    - 500 gr kentang, kupas dan cuci bersih {"\n"}
    - 100 gr kornet {"\n"}
    - 3 sdm tepung terigu {"\n"}
    - 1 batang seledri, iris tipis {"\n"}
    - 1 butir kuning telur, kocok lepas {"\n"}
    - 1 butir putih telur sebagai bahan pelapis {"\n"}
    {"\n"}
    * Bumbu {"\n"}
    - 3 siung bawang putih {"\n"}
    - 4 siung bawang merah {"\n"}
    - 1/2 sdt merica bubuk {"\n"}
    - 1/2 sdt kaldu jamur {"\n"}
    - 2 sdt garam {"\n"}
    {"\n"}
    * Cara membuat {"\n"}
    1. Potong-potong kentang dan goreng hingga matang, haluskan selagi masih panas dengan ulekan. {"\n"}
    2. Goreng bawang hingga matang, angkat. Tumis sebentar kornet dengan minyak bekas menggoreng bawang, tiriskan. Ulek halus bawang bersama garam dan kaldu bubuk.{"\n"}
    3. Campurkan bumbu halus dengan kentang halus. Masukkan kuning telur, kornet dan potongan seledri. {"\n"}
    4. Ambil adonan secukupnya bulat-bulatkan agak pipih hingga tidak ada yang tampak retak. {"\n"}
    5. Simpan dulu di kulkas paling tidak 2 jam. Keluarkan dan celupkan ke dalam putih telur. {"\n"}
    6. Goreng perkedel kentang hingga matang kecokelatan. Angkat.
    </Text>

    </ScrollView>
  )
}

export default Perkedel

const styles = StyleSheet.create({})