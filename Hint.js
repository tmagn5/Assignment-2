// Home.js
import { View,Text,StyleSheet, TextInput } from "react-native";

export default Hint = function ({navigation}) {
    const navToHome = () => navigation.navigate('Home')
    const navtoElec = () => navigation.navigate('Electronics')
    const navtoJewelry = () => navigation.navigate('Jewelry')
    const navtoMen = () => navigation.navigate('Mens_Clothing')
    const navtoWomen = () => navigation.navigate('Womens_Clothing')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Product Page</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoElec}>
          Electronics
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoJewelry}>
          Jewelry
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoMen}>
          Men's Clothing
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoWomen}>
          Women's Clothing
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
          <Text style={{fontSize:20, color:'green'}} onPress = {()=>navigation.navigate('Home')}>
          </Text>
          <Text style={{fontSize:20, color:'red'}} onPress={navToHome} multiline={true}>
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
        backgroundColor:'#f0cc97',
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