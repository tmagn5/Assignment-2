// Home.js
import { View,Text,StyleSheet, TextInput } from "react-native";
import React, {useState} from 'react';
const image = new Image();
const url = 'https://fakestoreapi.com/'
image.src = "./src/screens/shopping_bags_no_background.png";
document.body.appendChild(image)
// const fetchAPI = async (url) => {
//     const data = await fetch(url)
//     const res await data.json()
//     const {url} = res.results
//     console.log('https://fakestoreapi.com/')
// }
export default Home = function ({navigation}) {
    function myfunction() {
        return ("Hello");
    }
    const navToHint = () => navigation.navigate('Hint')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 80, color: 'blue'}}></Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <img src="./src/screens/shopping_bags_no_background.png" width="100"></img>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize:40, fontStyle: "italic"}} >
           Welcome to Fake Store!
          </Text>
          <Text></Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize:20}} onPress={navToHint} borderWidth={50}>
           Product Categories
          </Text>
          <Text> </Text>
          <Text> </Text>
          <img src="./src/screens/shopping_cart.png" width="100"></img>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
        </View>
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