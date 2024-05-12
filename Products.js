import { Text, View, Button, Image } from "react-native";
import { useEffect, useState } from "react";
import { fetch_products, fetch_categories } from "../service/api";

const Products = ({route, navigation}) => {
    const navToDetail = (id) => navigation.navigate('Details', { id })
    const navToHint = () => navigation.navigate('Hint')
    const navToEmpty = () => navigation.navigate('Empty_cart')
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
      <View>
        {products.map((prod) => {
          return (
                <Text style={{fontSize:15}} onPress={() => navToDetail(prod.id)}>
                {prod.title}
                </Text>
          )
        })}
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        {/* <Button title='Go Back' onPress={navToHint}>Add To Cart</Button> */}
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Image source={require('../../assets/shopping_cart.png')} style = {{height: 100, width: 100, objectFit: 'contain'}}></Image>
        <Text style={{fontSize:20}} onPress={navToEmpty} borderWidth={50}>
          View Cart
        </Text>
        <Text> </Text>
        <Text style={{fontSize:20}} onPress={navToHint} borderWidth={50}>
          Products
        </Text>
      </View> 
    )
}
export default Products