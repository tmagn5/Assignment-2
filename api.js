import {
    Platform
} from 'react-native'

const baseURL = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000'

export const fetch_categories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const data = await res.json()
    return data
}

export const fetch_products = async (category) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await res.json()
    return data
}

export const fetch_details = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    return data
}