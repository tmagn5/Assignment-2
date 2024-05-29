import { Text, StyleSheet, Image, Button, View } from "react-native";
import { useEffect, useState } from "react";
import { fetch_products, fetch_categories, fetch_details } from "../service/api";
// import { useDispatch } from "react-redux";
// import { add_to_cart } from "../redux/cartSlice";

// function myfunction() {
//   navToEmpty;
// }

const Details = ({route, navigation}) => {
    // const dispatch = useDispatch()
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
      <View style={styles.container}>
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
              <View style = {styles.row}> 
            <Button style={styles.button} title='Product Categories' onPress={navToHint}>Products</Button>
            <View style={styles.button}>
            <Image source={require('../../assets/shopping_cart.png')} style = {{height: 100, width: 100, objectFit: 'contain'}}></Image>
            <Button title='View Cart' onPress={navToEmpty} >Add To Cart</Button>
            </View>
            <Text style={{fontSize:20}} onPress={() => dispatch(add_to_cart(product))} borderWidth={50}>
          Add to Cart
      </Text>
          </View>
      <Text> </Text>
      <Text> </Text>
      {/* <Image source={require('../../assets/shopping_cart.png')} style = {{height: 100, width: 100, objectFit: 'contain'}}></Image> */}
      {/* <Text style={{fontSize:20}} onPress={() => dispatch(add_to_cart(product))} borderWidth={50}>
          Add to Cart
      </Text> */}
      <Text> </Text>
      {/* <Text style={{fontSize:20}} onPress={navToHint} borderWidth={50}>
          Products
      </Text> */}
      </View>
    )

}

const styles = StyleSheet.create({
row: {
  flexDirection: 'row',
  alignItems: 'flex-end',
},
button: {
  marginHorizontal: 10,
  alignItems: 'center'
},
image: {
  height:200, 
  width:200, 
  objectFit:'contain'
  // button: {width: 100}
}
})

export default Details

// const styles = StyleSheet.create({image: {height:200, width:200, objectFit:'contain'}})
  