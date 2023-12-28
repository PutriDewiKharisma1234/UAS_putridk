import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Jagung = () => {
  return (
    <ScrollView style={{backgroundColor: '#B3CDFF'}}>
    <View style={{backgroundColor: '#FFD3E5', height:70}}>
        <Text style={{fontSize: 35, color: '#FF579E', marginTop: 15, marginHorizontal: 30, fontWeight: 'bold'}}> Detail Resep </Text>
    </View>
    <View>
        <Image
        source={require('../image/dadarjagung.jpg')}
        style={{height: 250, width: 360, }}
        />
    </View>
    <View style={{backgroundColor: '#F1EBED'}}>
        <Text style={{fontSize: 35, marginHorizontal: 10, marginTop: 5,fontWeight: 'bold', height: 50, textAlign: 'center'}}> Dadar Jagung </Text>
    </View>
    <Text style={{fontSize: 20, marginTop: 15, marginHorizontal: 10}}>
    * Bahan-bahan: {"\n"}
    - 3 buah jagung manis, pipil 3 {"\n"}
    - sdm tepung terigu {"\n"}
    - 1 sdm tepung beras {"\n"}
    - 1 butir telur {"\n"}
    - 2 batang seledri. iris kasar {"\n"}
    - 1 cabai merah besar atau cabai rawit, iris kasar {"\n"}
    {"\n"}
    * Bumbu Halus {"\n"}
    - 3 buah bawang merah {"\n"}
    - 2 siung bawang putih {"\n"}
    {"\n"}
    * Bumbu Pelengkap {"\n"}
    - Garam {"\n"}
    - Penyedap rasa misalnya kaldu jamur {"\n"}
    - Merica Minyak wijen (opsional) {"\n"}
    - Minyak Raja Rasa (opsional) {"\n"}
    {"\n"}
    * Cara membuat: {"\n"}
    1. Haluskan jagung sesuai selera. Bisa menggunakan blender, ulekan, maupun diiris tipis. {"\n"}
    2. Masukkan tepung beras, tepung terigu, bumbu halus, seledri, cabai, telur, dan bumbu pelengkap. Aduk rata. {"\n"}
    3. Tambahkan air sekitar dua sampai lima sendok makan kalau adonan terlalu kental. {"\n"}
    4. Pastikan adonan juga tidak terlalu encer. Simpan adonan di dalam kulkas selama 10-15 menit. {"\n"}
    5. Ambil adonan menggunakan sendok sayur, tuang di dalam minyak goreng panas. {"\n"}
    6. Goreng dadar jagung di atas api sedang sampai kuning kecoklatan. Angkat dan tiriskan. Sajikan.{"\n"}
    </Text>

    </ScrollView>
  )
}

export default Jagung

const styles = StyleSheet.create({})