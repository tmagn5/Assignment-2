const image = new Image();
image.src = "./src/screens/Electronics_1.jpg";
document.body.appendChild(image)
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useState,useEffect } from 'react';
import Home from "./src/screens/Home";
import Hint from "./src/screens/Hint";
import Electronics from "./src/screens/Electronics";
import Jewelry from "./src/screens/Jewelry";
import Mens_Clothing from "./src/screens/Mens_Clothing"
import Womens_Clothing from './src/screens/Womens_Clothing';
import Electronics_1 from "./src/screens/Electronics_1";
import Electronics_2 from "./src/screens/Electronics_2";
import Electronics_3 from "./src/screens/Electronics_3";
import Electronics_4 from "./src/screens/Electronics_4";
import Electronics_5 from "./src/screens/Electronics_5";
import Electronics_6 from "./src/screens/Electronics_6";
import Jewelry_1 from "./src/screens/Jewelry_1";
import Jewelry_2 from "./src/screens/Jewelry_2";
import Jewelry_3 from "./src/screens/Jewelry_3";
import Jewelry_4 from "./src/screens/Jewelry_4";
import Mens_Clothing_1 from "./src/screens/Mens_Clothing_1";
import Mens_Clothing_2 from "./src/screens/Mens_Clothing_2";
import Mens_Clothing_3 from "./src/screens/Mens_Clothing_3";
import Mens_Clothing_4 from "./src/screens/Mens_Clothing_4";
import Womens_Clothing_1 from "./src/screens/Womens_Clothing_1";
import Womens_Clothing_2 from "./src/screens/Womens_Clothing_2";
import Womens_Clothing_3 from "./src/screens/Womens_Clothing_3";
import Womens_Clothing_4 from "./src/screens/Womens_Clothing_4";
import Womens_Clothing_5 from "./src/screens/Womens_Clothing_5";
import Womens_Clothing_6 from "./src/screens/Womens_Clothing_6";
const Stack = createStackNavigator()
const url = 'https://fakestoreapi.com/'

export default function App() {
  // const [address,setAddress]=useState('')
  // const [displayName, setDisplayName]=useState('')
  // const [longitude,setLongitude]=useState('')
  // const [latitude,setLatitude] = useState('')
  const [info,setInfo] = useState({})
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hint" component={Hint}/>
        <Stack.Screen name="Electronics" component={Electronics}/>
        <Stack.Screen name="Jewelry" component={Jewelry}/>
        <Stack.Screen name="Mens_Clothing" component={Mens_Clothing}/>
        <Stack.Screen name="Womens_Clothing" component={Womens_Clothing}/>
        <Stack.Screen name="Electronics_1" component={Electronics_1}/>
        <Stack.Screen name="Electronics_2" component={Electronics_2}/>
        <Stack.Screen name="Electronics_3" component={Electronics_3}/>
        <Stack.Screen name="Electronics_4" component={Electronics_4}/>
        <Stack.Screen name="Electronics_5" component={Electronics_5}/>
        <Stack.Screen name="Electronics_6" component={Electronics_6}/>
        <Stack.Screen name="Jewelry_1" component={Jewelry_1}/>
        <Stack.Screen name="Jewelry_2" component={Jewelry_2}/>
        <Stack.Screen name="Jewelry_3" component={Jewelry_3}/>
        <Stack.Screen name="Jewelry_4" component={Jewelry_4}/>
        <Stack.Screen name="Mens_Clothing_1" component={Mens_Clothing_1}/>
        <Stack.Screen name="Mens_Clothing_2" component={Mens_Clothing_2}/>
        <Stack.Screen name="Mens_Clothing_3" component={Mens_Clothing_3}/>
        <Stack.Screen name="Mens_Clothing_4" component={Mens_Clothing_4}/>
        <Stack.Screen name="Womens_Clothing_1" component={Womens_Clothing_1}/>
        <Stack.Screen name="Womens_Clothing_2" component={Womens_Clothing_2}/>
        <Stack.Screen name="Womens_Clothing_3" component={Womens_Clothing_3}/>
        <Stack.Screen name="Womens_Clothing_4" component={Womens_Clothing_4}/>
        <Stack.Screen name="Womens_Clothing_5" component={Womens_Clothing_5}/>
        <Stack.Screen name="Womens_Clothing_6" component={Womens_Clothing_6}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  return (
    <View style={styles.container}>
      <TextInput value={address}
        onChangeText={setAddress}
        placeholder='Please input an address such as Brisbane,AU'
        onSubmitEditing={checkAddress}
        />
        <Text>Name: {displayName}</Text>
        <Text>Longitude: {longitude}</Text>
        <Text>Latitude: {latitude}</Text>
        <Text>Sunrise: {info.sunrise}</Text>
        <Text>Sunset: {info.sunset}</Text>
        <Text>Timezone: {info.timezone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});