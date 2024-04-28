// Home.js
import { View,Text,StyleSheet, TextInput } from "react-native";

export default Electronics = function ({navigation}) {
    const navToHome = () => navigation.navigate('Home')
    const navToProduct = () => navigation.navigate('Hint')
    const navtoElec_1 = () => navigation.navigate('Electronics_1')
    const navtoElec_2 = () => navigation.navigate('Electronics_2')
    const navtoElec_3 = () => navigation.navigate('Electronics_3')
    const navtoElec_4 = () => navigation.navigate('Electronics_4')
    const navtoElec_5 = () => navigation.navigate('Electronics_5')
    const navtoElec_6 = () => navigation.navigate('Electronics_6')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Electronics</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoElec_1}>
          WD 2TB Elements Portable External Hard Drive - USB 3.0
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoElec_2}>
          SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoElec_3}>
          Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoElec_4}>
          WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoElec_5}>
          Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoElec_6}>
          Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED
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
        backgroundColor:'#5dfc6d',
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