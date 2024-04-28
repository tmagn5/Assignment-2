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
          <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" width="100"></img>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          ID: 6
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Title: Solid Gold Petite Micropave
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Price: $168.00
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Description: Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.
          </Text>
          <Text></Text>
          <Text style={{fontSize:15}}>
          Category: Jewelry
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Rating: 3.9
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Count: 70
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