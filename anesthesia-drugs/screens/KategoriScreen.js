import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {useState} from "react";

import {GlobalStyles} from "../constants/appColors";
import {LMCategory} from "../constants/kategorier";
import {DRUGS} from "../constants/mediciner";
import KategoriGridTile from "../components/output/KategoriGridTile";

function renderCategoryItem(itemData) {
  return <KategoriGridTile catName={itemData.item.catName} />;
}

const KategoriScreen = () => {
  return (
    <>
      <FlatList
        data={LMCategory}
        keyExtractor={(item) => item.catId}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </>
  );
};

export default KategoriScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    // backgroundColor: GlobalStyles.colors.forestgreen,
  },
  titleContainer: {
    marginTop: 13,
  },
  titleText: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
  },
  namn: {
    fontSize: 17,
  },
});
