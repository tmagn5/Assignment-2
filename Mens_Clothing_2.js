// Home.js
import { View,Text,StyleSheet, TextInput } from "react-native";
function myfunction() {
    return ("Hello");
}

export default Electronics = function ({navigation}) {
    const navToHome = () => navigation.navigate('Home')
    const navtoMen = () => navigation.navigate('Mens_Clothing')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Men's Clothing</Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" width="100"></img>
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          ID: 2
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Title: Mens Casual Premium Slim Fit T-Shirts
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Price: $22.30
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Description: Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Category: Men's Clothing
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Rating: 4.1
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Count: 259
          </Text>
          <button onclick={myfunction()}>Add to Shopping Cart</button>
          <Text> </Text>
          <Text style={{fontSize:20, color:'green'}} onPress = {()=>navigation.navigate('Home')}>
          </Text>
          <Text style={{fontSize:20, color:'red'}} onPress={navtoMen} multiline={true}>
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