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
          <Text style={{fontSize:15}}>
          <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" width="100"></img>
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          ID: 16
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Title: Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Price: $29.95
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Description: 100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Category: Women's Clothing
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Rating: 2.9
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Count: 340
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