import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Tempe = () => {
  return (
    <ScrollView style={{backgroundColor: '#B3CDFF'}}>
    <View style={{backgroundColor: '#FFD3E5', height:70}}>
        <Text style={{fontSize: 35, color: '#FF579E', marginTop: 15, marginHorizontal: 30, fontWeight: 'bold'}}> Detail Resep </Text>
    </View>
    <View>
        <Image
        source={require('../image/osengtempe.jpg')}
        style={{height: 250, width: 360, }}
        />
    </View>
    <View style={{backgroundColor: '#F1EBED'}}>
        <Text style={{fontSize: 35, marginHorizontal: 10, marginTop: 5,fontWeight: 'bold', height: 50, textAlign: 'center'}}> Oseng Tempe </Text>
    </View>
    <Text style={{fontSize: 20, marginTop: 15, marginHorizontal: 10}}>
    * Bahan-bahan {"\n"}
    - 1 papan tempe, dipotong dadu {"\n"}
    - Kacang panjang 12 buah, dipotong seukuran 2 ruas jari. {"\n"}
    {"\n"}
    * Bumbu {"\n"}
    - Daun salam dan daun jeruk masing-masing sebanyak 2 lembar {"\n"}
    - Kecap manis 2 sdm {"\n"}
    - Saus tiram 1 sdm {"\n"}
    - Gula pasir 1 sdt {"\n"}
    - Bawang merah 4 butir, iris tipis {"\n"}
    - Bawang putih 5 siung, iris tipis {"\n"}
    - Cabe merah 5 buah, iris tipis {"\n"}
    - Lengkuas 1 ruas, digeprek {"\n"}
    - Jahe 1 ruas, digeprek {"\n"}
    - Serai 1 buah, digeprek {"\n"}
    - ½ sdt garam {"\n"}
    - Air secukupnya {"\n"}
    - Minyak sayur secukupnya {"\n"}
    {"\n"}
    * Cara membuat {"\n"}
    1. Cuci bersih kacang panjang yang sudah dipotong, lalu sisihkan. {"\n"}
    2. Potong dadu tempe, lalu goreng sebentar. Setelah itu angkat, tiriskan, lalu sisihkan. {"\n"}
    3. Tumis bawang merah, bawang putih, dan cabai hingga layu dan harum. Masukkan lengkuas, jahe, serai, daun salam, dan daun jeruk. Aduk rata dan masak sebentar. {"\n"}
    4. Lalu, masukkan kacang panjang, tempe, dan petai. Oseng-oseng sebentar dan beri kecap manis, saus tiram, garam, dan gula. Tambahkan air lalu aduk rata. {"\n"}
    5. Koreksi rasa. Jika sudah pas, aduk sebentar dan angkat. 
    </Text>

    </ScrollView>
  )
}

export default Tempe

const styles = StyleSheet.create({})