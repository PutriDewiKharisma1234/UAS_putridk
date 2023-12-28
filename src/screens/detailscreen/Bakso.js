import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Bakso = () => {
  return (
    <ScrollView style={{backgroundColor: '#B3CDFF'}}>
    <View style={{backgroundColor: '#FFD3E5', height:70}}>
        <Text style={{fontSize: 35, color: '#FF579E', marginTop: 15, marginHorizontal: 30, fontWeight: 'bold'}}> Detail Resep </Text>
    </View>
    <View>
        <Image
        source={require('../image/baksotelur.jpg')}
        style={{height: 250, width: 360, }}
        />
    </View>
    <View style={{backgroundColor: '#F1EBED'}}>
        <Text style={{fontSize: 35, marginHorizontal: 10, marginTop: 5,fontWeight: 'bold', height: 50,}}>Bakso Telur Orek Sambal Jelotot</Text>
    </View>
    <Text style={{fontSize: 20, marginTop: 15, marginHorizontal: 10}}>
        *Bahan-Bahan:{"\n"}
        - 12 bakso sapi {"\n"}
        - 2-3 btr telur, digoreng orek {"\n"}
        - 3 lbr daun jeruk {"\n"}
        - cabe rawit, diiris (sesuai selera) {"\n"}
        - garam, gula, kaldu jamur {"\n"}
        - air secukupnya {"\n"}
        {"\n"}
        *Bumbu yang dihaluskan: {"\n"}
        - 6 bh bawang putih {"\n"}
        - 4 bh bawang merah {"\n"}
        - 10-12 bh cabe merah keriting {"\n"}
        {"\n"}
        *Cara Membuat:{"\n"}
        1. Tumis bumbu halus sampai harum, tambahkan rawit dan daun jeruk. {"\n"}
        Aduk-aduk sampai rata. {"\n"}
        2. Masukkan bakso, lalu tumis kembali. {"\n"}
        Kemudian tuang air secukupnya.
        3. Beri garam, gula, dan kaldu jamur, aduk kembali. {"\n"}
        Masak hingga sambal matang, koreksi rasa. {"\n"}
        4. Terakhir tambahkan telur goreng orek, aduk-aduk sampai bercampur rata dengan sambal.
    </Text>

    </ScrollView>
  )
}

export default Bakso

const styles = StyleSheet.create({})