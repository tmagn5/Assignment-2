import { Text, StyleSheet, Image, Button } from "react-native";
import { useEffect, useState } from "react";
import { fetch_products, fetch_categories, fetch_details } from "../service/api";

// function myfunction() {
//   navToEmpty;
// }

count = 0
const Details = ({route, navigation}) => {
    const navToEmpty = () => navigation.navigate('Empty_cart')
    const navToCart = () => navigation.navigate('Shopping_cart')
    const navToHint = () => navigation.navigate('Hint')
    const {id} = route.params
    console.log(id)
    const[product, setproduct] = useState(null)
    useEffect(() => {
        async function loadProducts() {
            try {
                const details = await fetch_details(id)
                setproduct(details)
            } catch (error) {
                console.error(error)
            }
        }
        loadProducts()
    }, [id])

    return(
      <>
      <Text>
        {product?.title}
      </Text>
      <Text>
        {product?.id}
      </Text>
      <Text>
        {product?.price}
      </Text>
      <Text>
        {product?.description}
      </Text>
      <Text>
        {product?.category}
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: product?.image,
        }}
      />
      {/* <Button title='Add to Cart' onPress={navToCart}{...count += 1}>Add To Cart</Button> */}
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Image source={require('../../assets/shopping_cart.png')} style = {{height: 100, width: 100, objectFit: 'contain'}}></Image>
      <Text style={{fontSize:20}} onPress borderWidth={50}>
          Add to Cart
      </Text>
      <Text> </Text>
      <Text style={{fontSize:20}} onPress={navToHint} borderWidth={50}>
          Products
      </Text>
      </>
    )

}

export default Details

const styles = StyleSheet.create({image: {height:200, width:200, objectFit:'contain'}})
  