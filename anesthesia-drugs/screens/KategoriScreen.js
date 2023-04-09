import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

import {GlobalStyles} from "../constants/appColors";
import LMCategory from "../constants/category";
import KategoriGridTile from "../components/output/KategoriGridTile";

function renderKategoriItem(itemData) {
  return <KategoriGridTile catName={itemData.item.catName} />;
}

const KategoriScreen = () => {
  return (
    <>
      <View style={styles.screenContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Välj vilka läkemedel du ska använda
          </Text>
        </View>
        <FlatList
          data={LMCategory}
          keyExtractor={(item) => item.catId}
          renderItem={renderKategoriItem}
        />
      </View>
    </>
  );
};

export default KategoriScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.forestgreen,
  },
  titleContainer: {
    marginTop: 13,
  },
  titleText: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
  },
});
