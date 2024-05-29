import { Text, View, Button, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { fetch_products, fetch_categories } from "../service/api";

const Products = ({route, navigation}) => {
    const navToDetail = (id) => navigation.navigate('Details', { id })
    const navToHint = () => navigation.navigate('Hint')
    const navToEmpty = () => navigation.navigate('Empty_cart')
    const navToHome = () => navigation.navigate('Home')
    const {category} = route.params
    console.log(category)
    const[products, setproducts] = useState([])
    useEffect(() => {
        async function loadCategories() {
            try {
                const products = await fetch_products(category)
                setproducts(products)
            } catch (error) {
                console.error(error)
            }
        }
        loadCategories()
    }, [category])

    return (
      <View style={styles.container}>
        {products.map((prod) => {
          return (
                <Text style={{fontSize:15}} onPress={() => navToDetail(prod.id)}>
                {prod.title}
                </Text>
          )
        })}
        {/* <Button title='Go Back' onPress={navToHint}>Add To Cart</Button> */}
        {/* <Image source={require('../../assets/shopping_cart.png')} style = {{height: 100, width: 100, objectFit: 'contain'}}></Image>
        <Button title='View Cart' style={styles.button} onPress={navToEmpty} borderWidth={50}>
        </Button> */}
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <View style = {styles.row}> 
            <Button style={styles.button} title='Product Categories' onPress={navToHint}>Products</Button>
            <View style={styles.button}>
            <Image source={require('../../assets/shopping_cart.png')} style = {{height: 100, width: 100, objectFit: 'contain'}}></Image>
            <Button title='View Cart' onPress={navToEmpty} >Add To Cart</Button>
            </View>
          </View>
        {/* <Button title='Products' style={styles.button} onPress={navToHome} borderWidth={50}>
          Products
        </Button> */}
      </View> 
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#65e0e0',
    justifyContent:'center',
    alignItems:'center',
    margin:20
},
row: {
  flexDirection: 'row',
  alignItems: 'flex-end',
},
button: {
  marginHorizontal: 10,
  alignItems: 'center'
}
  // button: {width: 100}
})

export default Products