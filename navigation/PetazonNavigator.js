import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { Platform } from "react-native"

import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryItemsScreen from "../screens/CategoryItemsScreen"
import SingleProductsScreen from "../screens/SingleProductsScreen"
import Colors from "../constants/Colors"

const PetazonNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen, //This will be where your app starts // your home screen basically
    CategoryItems: CategoryItemsScreen,
    SingleProducts: SingleProductsScreen,
  },
  {
    // initialRouteName: "Categories", Where you app start, your home screen basically
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
)

export default createAppContainer(PetazonNavigator)
