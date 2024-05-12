const image = new Image();
//image.src = "./src/screens/Electronics_1.jpg";
//document.body.appendChild(image)
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useState,useEffect } from 'react';
import Home from "./src/screens/Home";
import Hint from "./src/screens/Hint";
import Products from './src/screens/Products';
import Details from './src/screens/Details';
import Empty_cart from './src/screens/Empty_cart';
import Shopping_cart from './src/screens/Shopping_cart';
// import { Provider } from "react-redux";
// import Counter from "./features/counter/Counter";

const Stack = createStackNavigator()
const url = 'https://fakestoreapi.com/'

export default function App() {
  const [info,setInfo] = useState({})
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hint" component={Hint}/>
        <Stack.Screen name="Products" component={Products}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="Empty_cart" component={Empty_cart}/>
        <Stack.Screen name="Shopping_cart" component={Shopping_cart}/>
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