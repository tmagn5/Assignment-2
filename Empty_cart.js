// Home.js
import { View,Text,StyleSheet, TextInput, Button, Image, FlatList } from "react-native";
import React, {useState} from 'react';
// import { useSelector } from "react-redux";
import { cartSelector } from "../redux/cartSlice";
import { countSelector } from "../redux/cartSlice";
function myfunction() {
    return ("Hello");
}

export default Electronics = function ({navigation}) {
    // const cart = useSelector(cartSelector)
    // const count = useSelector(countSelector)
    // console.log(cart)

    const navToHome = () => navigation.navigate('Home')
    const navtoElec = () => navigation.navigate('Electronics')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Shopping Cart</Text>
          <Text style={{fontSize:15}}>
          {/* {count === 0 && 'Your cart is empty'} */}
          </Text>
          <FlatList 
              style={styles.list} 
              // data={cart} 
              keyExtractor={(item, index)=>`${item.id}${index}`}
              renderItem={({item})=>{
            return (
              <View style={styles.listItem}>
                <Text style={{fontSize:15}} onPress>
                {item.title}</Text>
                <Text>{item.id}</Text>
                <Text>{item.price}</Text>
                <Text>{item.description}</Text>
                <Image
                  style={styles.image}
                  source={{
                  uri: item?.image,
                }}

                />
            </View>  
            )
          }} />
          {/* {cart.map((prod) => {
          return (
            <>
                <Text style={{fontSize:15}} onPress>
                {prod.title}</Text>
                <Text>{prod.id}</Text>
                <Text>{prod.price}</Text>
                <Text>{prod.description}</Text>
                <Image
        style={styles.image}
        source={{
          uri: prod?.image,
        }}
                />
            </>  
          )
        })} */}
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize:20, color:'green'}} onPress = {()=>navigation.navigate('Home')}>
          </Text>
          <Button title='Go Back' onPress={navToHome}>Go Back</Button>
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
    },
    image: {
      height: 100,
      width: 100,
    },
    list: {
      flex: 1,
      backgroundColor: 'blue',
    },
    listItem: {
      backgroundColor: 'red',
      padding: 10,
    }
    }
)