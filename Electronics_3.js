// Home.js
import { View,Text,StyleSheet, TextInput } from "react-native";
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
          <img src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" width="100"></img>
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          ID: 11
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Title: Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Price: $109.00 
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Description: 3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Category: Electronics
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Rating: 4.8
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Count: 319
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