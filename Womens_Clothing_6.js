// Home.js
import { View,Text,StyleSheet, TextInput } from "react-native";
function myfunction() {
    return ("Hello");
}

export default Electronics = function ({navigation}) {
    const navToHome = () => navigation.navigate('Home')
    const navtoWomen = () => navigation.navigate('Womens_Clothing')
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Women's Clothing</Text>
          <Text> </Text>
          <Text style={{fontSize:15}} onPress>
          <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" width="100"></img>
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          ID: 20
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Title: DANVOUY Womens T Shirt Casual Cotton Short
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Price: $12.99
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Description: 95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Category: Women's Clothing
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Rating: 3.6
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Count: 145
          </Text>
          <button onclick={myfunction()}>Add to Shopping Cart</button>
          <Text> </Text>
          <Text style={{fontSize:20, color:'green'}} onPress = {()=>navigation.navigate('Home')}>
          </Text>
          <Text style={{fontSize:20, color:'red'}} onPress={navtoWomen} multiline={true}>
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