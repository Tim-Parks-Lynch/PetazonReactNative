import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { CATEGORIES } from "../data/category-data"
import { PRODUCTS } from "../data/products-data"
import ProductItem from "../components/ProductItem"

const CategoryItemsScreen = (props) => {
  const renderProduct = (itemData) => {
    return (
      <ProductItem
        title={itemData.item.name}
        price={itemData.item.price}
        image={itemData.item.imageUrl}
        description={itemData.item.description}
        onSelectProduct={() => {
          props.navigation.navigate("SingleProducts", {
            productId: itemData.item.id,
          })
        }}
      />
    )
  }
  const { navigation } = props
  const categoryId = navigation.getParam("categoryId")
  const displayedProducts = PRODUCTS.filter(
    (product) => product.categoryIds.indexOf(categoryId) >= 0
  )

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={displayedProducts}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProduct}
      />
    </View>
  )
}

CategoryItemsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId")

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId)

  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default CategoryItemsScreen
