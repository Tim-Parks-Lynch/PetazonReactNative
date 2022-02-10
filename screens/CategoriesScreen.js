import React from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { CATEGORIES } from "../data/category-data"
import CategoryGridTile from "../components/CategoryGridTile"

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryItems", {
            categoryId: itemData.item.id,
          })
        }}
      />
    )
  }
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

//2nd Method
CategoriesScreen.navigationOptions = {
  headerTitle: "Pet Categories",
}

//1st Method
// CategoriesScreen.navigationOptions = {
//   headerTitle: "Pet Categories",
//   headerStyle: {
//     backgroundColor: Colors.primaryColor,
//   },
//   headerTintColor: "white",
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
})
export default CategoriesScreen

//kept for notetaking purposes
// const CategoriesScreen = (props) => {
//   const { navigation } = props
//   return (
//     <View style={styles.screen}>
//       <Text>The Categories Screen</Text>
//       <Button
//         title="Go to Category Items"
//         onPress={() => {
//           navigation.navigate("CategoryItems")
//         }} //navigation.replace('categoryItems') // jumps right to categoryItems and won't let you go back. //good for auth
//       />
//     </View>
//   )
// }
