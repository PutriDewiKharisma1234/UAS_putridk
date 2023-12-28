import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#B3CDFF'}}>
      <View style={{backgroundColor: '#EFEEEE', borderRadius: 50, marginHorizontal: 40,marginTop: 25,alignItems: 'center',}}>
        <Text style={{fontSize: 30}}>Selamat Mencoba</Text>
      </View>

      <TouchableOpacity style={{backgroundColor: '#F0EEEE', marginTop: 30, marginHorizontal: 20,}}
      onPress={() => navigation.navigate('Bakso')}>
        <View style={{ flexDirection:'row', }}>
          <Image
          source={require('./image/baksotelur.jpg')}
          style={{height: 120, width: 120, marginHorizontal: 10, marginTop: 10, marginBottom: 10}}
          />
          <Text style={{marginTop:20, marginHorizontal: 10, fontWeight:'bold', fontSize:15, textAlign: 'center'}}> 
          {"\n"}
          Bakso Telur Orek Sambal Jelotot
          {"\n"}
          {"\n"}
          {"\n"}
          Resep dan panduan memasak {"\n"}
          mudah dan lezat ala rumahan </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F0EEEE', marginTop: 15, marginHorizontal: 20,}}
      onPress={() => navigation.navigate('Kentang')}>
        <View style={{ flexDirection:'row', }}>
          <Image
          source={require('./image/sambalgoreng.jpg')}
          style={{height: 120, width: 120, marginHorizontal: 10, marginTop: 10, marginBottom: 10}}
          />
          <Text style={{marginTop:20, marginHorizontal: 10, fontWeight:'bold', fontSize:15, textAlign: 'center'}}> 
          {"\n"}
          Sambal Goreng Kentang {"\n"}
          Ati Ampela {"\n"}
          {"\n"}
          Resep dan panduan memasak {"\n"}
          mudah dan lezat ala rumahan </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F0EEEE', marginTop: 15, marginHorizontal: 20,}}
      onPress={() => navigation.navigate('Spicy')}>
        <View style={{ flexDirection:'row', }}>
          <Image
          source={require('./image/spicychicken.jpg')}
          style={{height: 120, width: 120, marginHorizontal: 10, marginTop: 10, marginBottom: 10}}
          />
          <Text style={{textAlign: 'center',marginTop:20, marginHorizontal: 10, fontWeight:'bold', fontSize:15}}> 
          {"\n"}
          Spicy Chicken Wings
          {"\n"}
          {"\n"}
          {"\n"}
          Resep dan panduan memasak {"\n"}
          mudah dan lezat ala rumahan </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F0EEEE', marginTop: 15, marginHorizontal: 20,}}
      onPress={() => navigation.navigate('Capcay')}>
        <View style={{ flexDirection:'row', }}>
          <Image
          source={require('./image/capcay.jpg')}
          style={{height: 120, width: 120, marginHorizontal: 10, marginTop: 10, marginBottom: 10}}
          />
          <Text style={{textAlign: 'center',marginTop:20, marginHorizontal: 10, fontWeight:'bold', fontSize:15}}> 
          {"\n"}
          Tumis Capcay
          {"\n"}
          {"\n"}
          {"\n"}
          Resep dan panduan memasak {"\n"}
          mudah dan lezat ala rumahan </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F0EEEE', marginTop: 15, marginHorizontal: 20,}}
      onPress={() => navigation.navigate('Terong')}>
        <View style={{ flexDirection:'row', }}>
          <Image
          source={require('./image/terongbalado.jpg')}
          style={{height: 120, width: 120, marginHorizontal: 10, marginTop: 10, marginBottom: 10}}
          />
          <Text style={{textAlign: 'center',marginTop:20, marginHorizontal: 10, fontWeight:'bold', fontSize:15}}> 
          {"\n"}
          Terong Balado
          {"\n"}
          {"\n"}
          {"\n"}
          Resep dan panduan memasak {"\n"}
          mudah dan lezat ala rumahan </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F0EEEE', marginTop: 15, marginHorizontal: 20,}}
      onPress={() => navigation.navigate('Tempe')}>
        <View style={{ flexDirection:'row', }}>
          <Image
          source={require('./image/osengtempe.jpg')}
          style={{height: 120, width: 120, marginHorizontal: 10, marginTop: 10, marginBottom: 10}}
          />
          <Text style={{textAlign: 'center',marginTop:20, marginHorizontal: 10, fontWeight:'bold', fontSize:15}}> 
          {"\n"}
          Oseng Tempe
          {"\n"}
          {"\n"}
          {"\n"}
          Resep dan panduan memasak {"\n"}
          mudah dan lezat ala rumahan </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F0EEEE', marginTop: 15, marginHorizontal: 20,}}
      onPress={() => navigation.navigate('Sop')}>
        <View style={{ flexDirection:'row', }}>
          <Image
          source={require('./image/sopdaging.jpg')}
          style={{height: 120, width: 120, marginHorizontal: 10, marginTop: 10, marginBottom: 10}}
          />
          <Text style={{textAlign: 'center',marginTop:20, marginHorizontal: 10, fontWeight:'bold', fontSize:15}}> 
          {"\n"}
          Sop Daging
          {"\n"}
          {"\n"}
          {"\n"}
          Resep dan panduan memasak {"\n"}
          mudah dan lezat ala rumahan </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F0EEEE', marginTop: 15, marginHorizontal: 20,}}
      onPress={() => navigation.navigate('Jagung')}>
        <View style={{ flexDirection:'row', }}>
          <Image
          source={require('./image/dadarjagung.jpg')}
          style={{height: 120, width: 120, marginHorizontal: 10, marginTop: 10, marginBottom: 10}}
          />
          <Text style={{textAlign: 'center',marginTop:20, marginHorizontal: 10, fontWeight:'bold', fontSize:15}}> 
          {"\n"}
          Dadar Jagung
          {"\n"}
          {"\n"}
          {"\n"}
          Resep dan panduan memasak {"\n"}
          mudah dan lezat ala rumahan </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F0EEEE', marginTop: 15, marginHorizontal: 20,}}
      onPress={() => navigation.navigate('Perkedel')}>
        <View style={{ flexDirection:'row', }}>
          <Image
          source={require('./image/perkedelkentang.webp')}
          style={{height: 120, width: 120, marginHorizontal: 10, marginTop: 10, marginBottom: 10}}
          />
          <Text style={{textAlign: 'center',marginTop:20, marginHorizontal: 10, fontWeight:'bold', fontSize:15}}> 
          {"\n"}
          Perkedel Kentang
          {"\n"}
          {"\n"}
          {"\n"}
          Resep dan panduan memasak {"\n"}
          mudah dan lezat ala rumahan </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#F0EEEE', marginTop: 15, marginHorizontal: 20,}}
      onPress={() => navigation.navigate('Teri')}>
        <View style={{ flexDirection:'row', }}>
          <Image
          source={require('./image/sambalteri.jpg')}
          style={{height: 120, width: 120, marginHorizontal: 10, marginTop: 10, marginBottom: 10}}
          />
          <Text style={{textAlign: 'center',marginTop:20, marginHorizontal: 10, fontWeight:'bold', fontSize:15}}> 
          {"\n"}
          Sambal Teri Kemangi
          {"\n"}
          {"\n"}
          {"\n"}
          Resep dan panduan memasak {"\n"}
          mudah dan lezat ala rumahan </Text>
        </View>
      </TouchableOpacity>

      

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})