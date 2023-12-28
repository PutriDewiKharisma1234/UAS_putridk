import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Spicy = () => {
  return (
    <ScrollView style={{backgroundColor: '#B3CDFF'}}>
    <View style={{backgroundColor: '#FFD3E5', height:70}}>
        <Text style={{fontSize: 35, color: '#FF579E', marginTop: 15, marginHorizontal: 30, fontWeight: 'bold'}}> Detail Resep </Text>
    </View>
    <View>
        <Image
        source={require('../image/spicychicken.jpg')}
        style={{height: 250, width: 360, }}
        />
    </View>
    <View style={{backgroundColor: '#F1EBED'}}>
        <Text style={{textAlign: 'center',fontSize: 30, marginHorizontal: 10, marginTop: 10,fontWeight: 'bold', height: 50,}}>
        Spicy Chicken Wings</Text>
    </View>
    <Text style={{fontSize: 20, marginTop: 15, marginHorizontal: 10}}>
        * Bahan-Bahan {"\n"}
        - 1/2 kg sayap ayam, masing-masing dibagi 2 {"\n"}
        - 1 buah jeruk nipis {"\n"}
        - 1 sdm maizena {"\n"}
        - 2 sdm tepung terigu {"\n"}
        - 1 sdm tepung beras{"\n"}
        - 1 sdt garam {"\n"}
        - 1/2 sdt kaldu bubuk {"\n"}
        - 1 sdt merica bubuk {"\n"}
        -Minyak goreng {"\n"}
        {"\n"}
        * Saus {"\n"}
        - 1 sdm saus tiram {"\n"}
        - 3 sdm saus tomat {"\n"}
        - 3 sdm saus sambal {"\n"}
        - 1 sdt kecap manis {"\n"}
        - 1 sdt minyak wijen {"\n"}
        - 3 sdt cabe bubuk {"\n"}
        - 3 siung bawang putih, dicincang dan ditumis {"\n"}
        - Secukupnya wijen, disangrai (untuk taburan) {"\n"}
        {"\n"}
        * Cara Membuat {"\n"}
        1. Cuci bersih ayam, lalu beri air jeruk nipis dan garam. Diamkan selama 20 menit. {"\n"}
        2. Campur semua bahan tepung dan bumbu. Cuci bersih lagi ayam, baluri seluruhnya dengan tepung bumbu. {"\n"}
        3. Panaskan minyak, goreng ayam dengan api kecil hingga seluruh permukaannya matang. Tiriskan minyaknya, sisihkan. {"\n"}
        4. Campur semua bahan saus kecuali bawang dan wijen. Tumis bawang putih cincang dengan sedikit minyak sampai harum dan matang. Tuang bawang putih dengan minyak yang masih panas ke dalam saus, aduk-aduk sampai rata. {"\n"}
        5. Masukkan ayam, bumbui sampai seluruhnya tertutup saus. Tata dalam piring saji, taburi wijen. Sajikan.
    </Text>

    </ScrollView>
  )
}

export default Spicy

const styles = StyleSheet.create({})