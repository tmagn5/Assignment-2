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
          <img src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" width="100"></img>
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          ID: 12
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Title: WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Price: $114
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Description: Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty
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
          Count: 400
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