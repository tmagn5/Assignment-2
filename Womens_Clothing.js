// Home.js
import { View,Text,StyleSheet, TextInput } from "react-native";

export default Electronics = function ({navigation}) {
    const navToHome = () => navigation.navigate('Home')
    const navToProduct = () => navigation.navigate('Hint')
    const navtoWomens_1 = () => navigation.navigate('Womens_Clothing_1')
    const navtoWomens_2 = () => navigation.navigate('Womens_Clothing_2')
    const navtoWomens_3 = () => navigation.navigate('Womens_Clothing_3')
    const navtoWomens_4 = () => navigation.navigate('Womens_Clothing_4')
    const navtoWomens_5 = () => navigation.navigate('Womens_Clothing_5')
    const navtoWomens_6 = () => navigation.navigate('Womens_Clothing_6')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Women's Clothing</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoWomens_1}>
          BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoWomens_2}>
          Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoWomens_3}>
          Rain Jacket Women Windbreaker Striped Climbing Raincoats
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoWomens_4}>
          MBJ Women's Solid Short Sleeve Boat Neck V
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoWomens_5}>
          Opna Women's Short Sleeve Moisture
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress={navtoWomens_6}>
          DANVOUY Womens T Shirt Casual Cotton Short
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
        backgroundColor:'#f872fc',
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