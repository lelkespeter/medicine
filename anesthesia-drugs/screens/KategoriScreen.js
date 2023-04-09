import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

import {GlobalStyles} from "../constants/appColors";
import LMCategory from "../constants/category";
import KategoriGridTile from "../components/output/KategoriGridTile";
import DRUGS from "../constants/data";

const KategoriScreen = () => {
  const matchedList = LMCategory.map((kategori) => {
    const matchedDrugs = DRUGS.filter(
      (lm) => lm.catId && lm.catId === kategori.catId
    );
    return {
      katNamn: kategori.catName,
      drugs: matchedDrugs.map((lm) => lm.drugName),
    };
  });
  return (
    <>
      <View style={styles.screenContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Choose which medicines to use</Text>
        </View>
        <FlatList
          data={matchedList}
          keyExtractor={(item, index) => item.catName + index}
          numColumns={2}
          renderItem={({item}) => (
            <View style={{flex: 1, flexDirection: "column", margin: 10}}>
              <Text style={{fontWeight: "bold", marginBottom: 5}}>
                {item.catName}
              </Text>
              {item.drugs.map((lm, index) => (
                <Text key={index}>{lm}</Text>
              ))}
            </View>
          )}
        />
      </View>
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
});
