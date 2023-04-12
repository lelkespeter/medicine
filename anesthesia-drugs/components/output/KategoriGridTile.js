import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

const KategoriGridTile = ({catName}) => {
  return (
    <View style={styles.gridOuter}>
      <View style={styles.innerContainer}>
        <Text>{catName}</Text>
      </View>
    </View>
  );
};

export default KategoriGridTile;

const styles = StyleSheet.create({
  gridOuter: {
    flex: 1,
    // margin: 16,
    marginTop: 33,
    marginHorizontal: 17,
    height: 150,
    borderRadius: 7,
    elevation: 4,
    // backgroundColor: "green",
    // shadowColor: "green",
    // shadowOpacity: 0.25,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 8,
  },
  innerContainer: {
    flex: 1, //takes all the space you can get, but only inside the parent container.
    padding: 13,
    alignItems: "center",
  },
});
