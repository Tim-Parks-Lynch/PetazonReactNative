import React from "react"
import { ScrollView, View, Text, StyleSheet, Button, Image } from "react-native"
import { PRODUCTS } from "../data/products-data"

const SingleProductsScreen = (props) => {
  const { navigation } = props
  const prodId = navigation.getParam("productId")
  const selectedProduct = PRODUCTS.find((prod) => prod.id === prodId)
  console.log(selectedProduct)

  return (
    <ScrollView>
      <Image
        source={{ uri: selectedProduct.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View>
        <Text style={styles.description}>Description</Text>
        <View>
          <Text style={styles.words}>{selectedProduct.description}</Text>
        </View>
      </View>
      <View>
        <Button
          title={`Purchase ${selectedProduct.name}?`}
          color="#2A1E5C"
        ></Button>
      </View>
    </ScrollView>
  )
}

SingleProductsScreen.navigationOptions = (navigationData) => {
  const prodId = navigationData.navigation.getParam("productId")
  const selectedProduct = PRODUCTS.find((prod) => prod.id === prodId)
  return {
    headerTitle: selectedProduct.title,
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  description: {
    flexDirection: "column",
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  words: {
    flexDirection: "column",
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    fontFamily: "open-sans",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#2A1E5C",
  },
})

export default SingleProductsScreen
