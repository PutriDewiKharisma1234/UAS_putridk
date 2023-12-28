import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Sop = () => {
  return (
    <ScrollView style={{backgroundColor: '#B3CDFF'}}>
    <View style={{backgroundColor: '#FFD3E5', height:70}}>
        <Text style={{fontSize: 35, color: '#FF579E', marginTop: 15, marginHorizontal: 30, fontWeight: 'bold'}}> Detail Resep </Text>
    </View>
    <View>
        <Image
        source={require('../image/sopdaging.jpg')}
        style={{height: 250, width: 360, }}
        />
    </View>
    <View style={{backgroundColor: '#F1EBED'}}>
        <Text style={{fontSize: 35, marginHorizontal: 10, marginTop: 5,fontWeight: 'bold', height: 50, textAlign: 'center'}}> Sop Daging </Text>
    </View>
    <Text style={{fontSize: 20, marginTop: 15, marginHorizontal: 10}}>
    * Bahan-bahan: {"\n"}
    - 1/4 kg Daging Sapi, potong kecil-kecil {"\n"}
    - 2 buah Kentang, potong-potong {"\n"}
    - 3 buah Wortel, iris bundar {"\n"}
    - 6 siung Bawang Merah, iris tipis {"\n"}
    - 3 siung Bawang Putih, memarkan saja {"\n"}
    - 2 tangkai Seledri, iris halus {"\n"}
    - 1 telunjuk Kayu Manis {"\n"}
    - 2 ruas jari Jahe, memarkan {"\n"}
    - 1 sdm Ketumbar {"\n"}
    - 10 butir Merica {"\n"}
    - 1 sdt Sasa Bubuk MSG {"\n"}
    - 1 sdt Jintan {"\n"}
    - 1 sdt Adas Manis {"\n"}
    - 5 buah cengkeh {"\n"}
    - Air secukupnya {"\n"}
    - Garam secukupnya {"\n"}
    {"\n"}
    * Cara membuat: {"\n"}
    1. Sangrai ketumbar, merica, jintan, adas dan cengkeh. Haluskan kecuali cengkeh. Balurkan rempah halus ke daging. diamkan 5 menit. {"\n"}
    2. Presto daging, jahe dan bawang putih dengan air secukupnya sampai lembut, bisa juga direbus saja. {"\n"}
    3. Jika sudah matang dan lembut, masukkan wortel dan kentang. Masukkan kayu manis dan cengkeh. {"\n"}
    4. Masukkan Sasa Bubuk MSG. {"\n"}
    5. Sembari menunggu sayuran lembut, tumis irisan bawang dan seledri. Setelah sayuran matang, masukkan tumisan tadi bersama minyaknya {"\n"}
    6. Sop siap disajikan hangat. {"\n"}
    </Text>

    </ScrollView>
  )
}

export default Sop

const styles = StyleSheet.create({})