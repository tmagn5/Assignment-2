// Home.js
import { View,Text,StyleSheet, TextInput, Image } from "react-native";
import React, {useState} from 'react';
//import count from "./src/screens/Details"
function myfunction() {
    return ("Hello");
}

export default Electronics = function ({navigation}) {
    const navToHome = () => navigation.navigate('Home')
    const navtoElec = () => navigation.navigate('Electronics')
    const navToDetail = () => navigation.navigate('Details')
    // const {id} = route.params
    // console.log(id)
    // const[product, setproduct] = useState(null)
    // useEffect(() => {
    //     async function loadProducts() {
    //         try {
    //             const details = await fetch_details(id)
    //             setproduct(details)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     loadProducts()
    // }, [id])
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Electronics</Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Item added to cart
          </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          {/* <Image
            style={styles.image}
            source={{
              uri: product?.image,
            }}
          /> */}
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <button onclick={myfunction()}>Add to Shopping Cart</button>
          <Text> </Text>
          <Text style={{fontSize:20, color:'green'}} onPress = {()=>navigation.navigate('Home')}>
          </Text>
          <Text style={{fontSize:20, color:'red'}} onPress={navToDetail} multiline={true}>
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