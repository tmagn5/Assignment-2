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
          <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" width="100"></img>
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          ID: 19
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Title: Opna Women's Short Sleeve Moisture
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Price: $7.95
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Description: 100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Category: Women's Clothing
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Rating: 4.5
          </Text>
          <Text> </Text>
          <Text style={{fontSize:15}}>
          Count: 146
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