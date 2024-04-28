// Home.js
import { View,Text,StyleSheet, TextInput } from "react-native";
import React, {useState} from 'react';
function myfunction() {
    return ("Hello");
}

export default Electronics = function ({navigation}) {
    const navToHome = () => navigation.navigate('Home')
    const navtoElec = () => navigation.navigate('Electronics')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Electronics</Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" width="100"></img>
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          ID: 9
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Title: WD 2TB Elements Portable External Hard Drive - USB 3.0
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Price: $64.00
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Description: USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Category: Electronics
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Rating: 3.3
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Count: 203
          </Text>
          <button onclick={myfunction()}>Add to Shopping Cart</button>
          <Text> </Text>
          <Text style={{fontSize:20, color:'green'}} onPress = {()=>navigation.navigate('Home')}>
          </Text>
          <Text style={{fontSize:20, color:'red'}} onPress={navtoElec} multiline={true}>
           Go Back
          </Text>
        </View>
    )
}

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
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
    }
)