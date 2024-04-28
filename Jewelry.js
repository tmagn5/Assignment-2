// Home.js
import { View,Text,StyleSheet, TextInput } from "react-native";

export default Jewelry = function ({navigation}) {
    const navToHome = () => navigation.navigate('Home')
    const navToProduct = () => navigation.navigate('Hint')
    const navtoJewelry_1 = () => navigation.navigate('Jewelry_1')
    const navtoJewelry_2 = () => navigation.navigate('Jewelry_2')
    const navtoJewelry_3 = () => navigation.navigate('Jewelry_3')
    const navtoJewelry_4 = () => navigation.navigate('Jewelry_4')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Jewelry</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoJewelry_1}>
          John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoJewelry_2}>
          Solid Gold Petite Micropave
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoJewelry_3}>
          White Gold Plated Princess
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoJewelry_4}>
          Pierced Owl Rose Gold Plated Stainless Steel Double
          </Text>
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
          <Text style={{fontSize:20, color:'green'}} onPress = {()=>navigation.navigate('Hint')}>
          </Text>
          <Text style={{fontSize:20, color:'red'}} onPress={navToProduct} multiline={true}>
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
        backgroundColor:'#956dfc',
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