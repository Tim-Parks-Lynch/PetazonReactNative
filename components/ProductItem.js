import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native"

const ProductItem = (props) => {
  return (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={props.onSelectProduct}>
        <View>
          <View style={{ ...styles.productRow, ...styles.productHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.productRow, ...styles.productDescription }}>
            <Text>{}</Text>
            <Text>{props.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  productItem: {
    height: 350,
    width: "100%",
    backgroundColor: "#ccc",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    // justifyContent: "flex-end", //Title at bottom
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(238,66,102,0.9)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  productRow: {
    flexDirection: "row",
  },
  productHeader: {
    height: "95%",
  },
  productDescription: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
})

export default ProductItem
