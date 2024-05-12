// Home.js
import { View,Text,StyleSheet, TextInput, Image, Button } from "react-native";
import React, {useState} from 'react';

export default function Home ({navigation}) {
    function myfunction() {
        return ("Hello");
    }
    const navToHint = () => navigation.navigate('Hint')
    const navToEmpty = () => navigation.navigate('Empty_cart')
    const navToCart = () => navigation.navigate('Shopping_cart')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 80, color: 'blue'}}></Text>
          <Text> </Text>
          <Image source={require('../../assets/shopping_bags_no_background.png')} style = {{height: 100, width: 100, objectFit: 'contain'}}></Image>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize:40, fontStyle: "italic"}} >
           Welcome to Fake Store!
          </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Button title='Product Categories' onPress={navToHint}>Add To Cart</Button>
          <Text> </Text>
          <Text> </Text>
          <Image source={require('../../assets/shopping_cart.png')} style = {{height: 100, width: 100, objectFit: 'contain'}}></Image>
          <Text> </Text>
          <Button title='View Cart' onPress={navToEmpty}>Add To Cart</Button>
          {/* <img src="./src/screens/shopping_cart.png" width="100"></img> */}
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
        </View>
        // <View style={{ flexDirection:"row" }}>

        // </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#65e0e0',
        justifyContent:'center',
        alignItems:'center',
        margin:20
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
      }
})