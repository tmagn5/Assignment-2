// Home.js
import { useEffect, useState } from "react";
import { View,Text,StyleSheet, TextInput, Button, Image } from "react-native";
import { fetch_categories } from "../service/api";

export default Hint = function ({navigation}) {
    const navToHome = () => navigation.navigate('Home')
    const navToEmpty = () => navigation.navigate('Empty_cart')
    const navToCategory = (category) => navigation.navigate('Products', {
      category,
    });
    const [categories, setCategories] = useState([])
    useEffect (() => {

      async function loadCategories() {
        try {
          const categories = await fetch_categories()
            setCategories(categories)
        } catch (error) {
          console.error(error)
        }
      }

      loadCategories()
    }, [])
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Product Page</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          {categories.map((cat) => {
            <Text> </Text>
            return (
              <Text style={{fontSize:15}} onPress={() => navToCategory(cat)}>
                <Text> </Text>
              {cat}
              <Text> </Text>
              </Text>
 //             <Text>a</Text>
          )

          })}
          <Text style={{fontSize:20, color:'green'}} onPress = {()=>navigation.navigate('Home')}>
          </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          {/* <Button title='Go Back' onPress={navToHome}>Add To Cart</Button> */}
          <Image source={require('../../assets/shopping_cart.png')} style = {{height: 100, width: 100, objectFit: 'contain'}}></Image>
          <Text> </Text>
          <Button title='View Cart' onPress={navToEmpty}>Add To Cart</Button>
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