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
          <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" width="100"></img>
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          ID: 3
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Title: Mens Cotton Jacket
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Price: $55.99
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Description: great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Category: Men's Clothing
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Rating: 4.7
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Count: 500
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