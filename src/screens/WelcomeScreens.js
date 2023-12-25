import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const welcome = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#B3CDFF'}}>
      <Image
        source={require('./image/logoawal.png')}
        style={{height: 300, width: 250, marginHorizontal: 60}}
      />
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FF8FBE', textAlign: 'center'}}>
        Selamat datang di
      </Text>
      <Text style={{fontSize: 35, fontWeight: 'bold', color: '#FF579E', textAlign: 'center'}}>
        Masakan Putri
      </Text>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FF8FBE', textAlign: 'center'}}>
        Jelajahi berbagai resep lezat {"\n"} 
        dan temukan inspirasi {"\n"}
        memasak anda. {"\n"}
        Buatlah pengalaman {"\n"}
        kuliner anda tak terlupakan. {"\n"}
      </Text>
      <TouchableOpacity style={{backgroundColor:'#FEB8D6', borderRadius: 50, alignItems: 'center', marginHorizontal: 90}}>
        <Text style={{fontSize: 30, color:'#FFFFFF'}}> Ayo Masak!!! </Text>
      </TouchableOpacity>
    </View>
  )
}

export default welcome

const styles = StyleSheet.create({})