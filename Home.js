// Home.js
import { View,Text,StyleSheet, TextInput, Image, Button } from "react-native";
import React, {useState} from 'react';
import Hint from "./Hint";
import Products from "./Products";
import Details from "./Details";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default function Home ({navigation}) {
    function myfunction() {
        return ("Hello");
    }
    const navToHint = () => navigation.navigate('Hint')
    const navToEmpty = () => navigation.navigate('Empty_cart')
    const navToCart = () => navigation.navigate('Shopping_cart')

    //vComment out all of that to fix code

    // return(
    //     <Stack.Navigator initialRouteName="Hint"
    //         screenOptions={{
    //             headerShown: false,
    //         }}>                                     
    //     <Stack.Screen name="Hint" component={Hint}/>
    //     <Stack.Screen name="Products" component={Products}/>
    //     <Stack.Screen name="Details" component={Details}/>
    //   </Stack.Navigator>
    // )

    //^Comment out all of that to fix code

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
          <View style = {styles.row}> 
            <Button style={styles.button} title='Product Categories' onPress={navToHint}>Products</Button>
            <View style={styles.button}>
            <Image source={require('../../assets/shopping_cart.png')} style = {{height: 100, width: 100, objectFit: 'contain'}}></Image>
            <Button title='View Cart' onPress={navToEmpty} >Add To Cart</Button>
            </View>
          </View>
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
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    button: {
        marginHorizontal: 10,
        alignItems: 'center'
    }
})