import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function List() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {

    const response = await userApi.get(`${endpoint}products`)
  };

  return (
    <View>
      <Text>List of Products</Text>
    </View>
  )
}

const styles = StyleSheet.create({})