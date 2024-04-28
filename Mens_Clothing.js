// Home.js
import { View,Text,StyleSheet, TextInput } from "react-native";

export default Electronics = function ({navigation}) {
    const navToHome = () => navigation.navigate('Home')
    const navToProduct = () => navigation.navigate('Hint')
    const navtoMens_1 = () => navigation.navigate('Mens_Clothing_1')
    const navtoMens_2 = () => navigation.navigate('Mens_Clothing_2')
    const navtoMens_3 = () => navigation.navigate('Mens_Clothing_3')
    const navtoMens_4 = () => navigation.navigate('Mens_Clothing_4')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'light blue'}}>Men's Clothing</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoMens_1}>
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoMens_2}>
          Mens Casual Premium Slim Fit T-Shirts
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoMens_3}>
          Mens Cotton Jacket
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoMens_4}>
          Mens Casual Slim Fit
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
        backgroundColor:'#334a60',
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