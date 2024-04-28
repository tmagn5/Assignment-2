// Home.js
import { View,Text,StyleSheet, TextInput } from "react-native";
function myfunction() {
    return ("Hello");
}

export default Jewelry = function ({navigation}) {
    const navToHome = () => navigation.navigate('Home')
    const navtoJewelry = () => navigation.navigate('Jewelry')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Jewelry</Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" width="70"></img>
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          ID: 5
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Title: John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Price: $695.00
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Description: From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Category: Jewelry
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Rating: 4.6
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Count: 400
          </Text>
          <button onclick={myfunction()}>Add to Shopping Cart</button>
          <Text> </Text>
          <Text style={{fontSize:20, color:'green'}} onPress = {()=>navigation.navigate('Home')}>
          </Text>
          <Text style={{fontSize:20, color:'red'}} onPress={navtoJewelry} multiline={true}>
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