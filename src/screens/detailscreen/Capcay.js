import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Capcay = () => {
  return (
    <ScrollView style={{backgroundColor: '#B3CDFF'}}>
    <View style={{backgroundColor: '#FFD3E5', height:70}}>
        <Text style={{fontSize: 35, color: '#FF579E', marginTop: 15, marginHorizontal: 30, fontWeight: 'bold'}}> Detail Resep </Text>
    </View>
    <View>
        <Image
        source={require('../image/capcay.jpg')}
        style={{height: 250, width: 360, }}
        />
    </View>
    <View style={{backgroundColor: '#F1EBED'}}>
        <Text style={{fontSize: 35, marginHorizontal: 10, marginTop: 5,fontWeight: 'bold', height: 50, textAlign: 'center'}}> Tumis Capcay </Text>
    </View>
    <Text style={{fontSize: 20, marginTop: 15, marginHorizontal: 10}}>
    * Bahan-bahan: {"\n"}
    - 1/2 ikat sawi hijau, potong-potong {"\n"}
    - 1 buah wortel, iris {"\n"}
    - 1 bonggol kembang kol, iris {"\n"}
    - 50 gram kol, iris {"\n"}
    - 1 batang seledri, iris {"\n"}
    - 1/2 sdm saus tiram {"\n"}
    - 1/2 sdm kecap ikan {"\n"}
    - 1/2 sdt garam {"\n"}
    - 1/3 sdt lada bubuk {"\n"}
    - 1/2 sdt kaldu bubuk {"\n"}
    {"\n"}
    * Bumbu Halus {"\n"}
    - 5 siung bawang merah {"\n"}
    - 3 siung bawang putih {"\n"}
    - 1 butir kemiri {"\n"}
    {"\n"}
    * Cara membuat: {"\n"}
    1.  Tumis bumbu halus hingga harum. {"\n"}
    2. Masukkan wortel. Beri sedikit air. {"\n"}
    3. Masukkan sawi, kembang kol, dan kol. Tambahkan garam, kaldu, dan lada bubuk. Aduk rata. {"\n"}
    4. Tambahkan saus tiram dan kecap asin. Aduk rata. {"\n"}
    5. Masak hingga sayur lunak dan bumbu meresap. Angkat dan sajikan. {"\n"}
    </Text>

    </ScrollView>
  )
}

export default Capcay

const styles = StyleSheet.create({})