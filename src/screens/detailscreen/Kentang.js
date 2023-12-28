import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Kentang = () => {
  return (
    <ScrollView style={{backgroundColor: '#B3CDFF'}}>
    <View style={{backgroundColor: '#FFD3E5', height:70}}>
        <Text style={{fontSize: 35, color: '#FF579E', marginTop: 15, marginHorizontal: 30, fontWeight: 'bold'}}> Detail Resep </Text>
    </View>
    <View>
        <Image
        source={require('../image/sambalgoreng.jpg')}
        style={{height: 250, width: 360, }}
        />
    </View>
    <View style={{backgroundColor: '#F1EBED'}}>
        <Text style={{fontSize: 30, marginHorizontal: 10, marginTop: 5,fontWeight: 'bold', height: 70, textAlign: 'center'}}> 
        Sambal Goreng Kentang {"\n"}
        Ati Ampela </Text>
    </View>
    <Text style={{fontSize: 20, marginTop: 15, marginHorizontal: 10}}>
    * Bahan-bahan: {"\n"}
    - 500 gr ati dan ampela {"\n"}
    - 2 buah kentang ukuran besar {"\n"}
    - 1 sachet Sasa bumbu lumur ayam special {"\n"}
    - 1 sdt garam {"\n"}
    - 1 sdt gula {"\n"}
    - 1 sdt Sasa MSG {"\n"}
    - 1 sdt gula merah {"\n"}
    - 1 sdt asam jawa {"\n"}
    - 1 bungkus sasa santan omega 3 {"\n"}
    - Secukupnya minyak goreng {"\n"}
    {"\n"}
    * Bumbu Halus {"\n"}
    - 8 siung bawang merah {"\n"}
    - 3 siung bawang putih {"\n"}
    - 1 ruas jari jahe {"\n"}
    - 4 buah kemiri {"\n"}
    - 7 buah cabai merah {"\n"}
    - 1 buah tomat {"\n"}
    {"\n"}
    * Bumbu Aromatic {"\n"}
    - 1 batang serai {"\n"}
    - 2 lembar daun jeruk {"\n"}
    - 1 ruas lengkuas geprek {"\n"}
    - 2 lembar daun salam {"\n"}
    {"\n"}
    * Cara membuat: {"\n"}
    1. Cuci bersih ati ampela, rebus dengan 500 ml air, {"\n"}
    di tambahkan dengan 1 sachet Sasa bumbu lumur ayam spesial, serai, jahe dan daun salam. {"\n"}
    2. Potong kentang berbentuk dadu, goreng hingga kuning kecoklatan. {"\n"}
    3. Haluskan bumbu, tumis hingga bumbu matang dan wangi. {"\n"}
    4. Tambahkan serai, daun jeruk, lengkuas geprek dan daun salam. {"\n"}
    5. Beri bumbu garam, gula, sasa MSG, gula merah dan air asam jawa. {"\n"}
    6. Tuangkan ati ampela ke dalam tumisan bumbu, aduk rata. {"\n"}
    7. Tambahkan sasa santan omega 3, masak sebentar dan masukan kentang. {"\n"}
    8. Matikan kompor, sambal goreng ati ampela dan kentang siap di nikmati.
    </Text>

    </ScrollView>
  )
}

export default Kentang

const styles = StyleSheet.create({})