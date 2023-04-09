import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

import {GlobalStyles} from "../constants/appColors";
import {LMCategory} from "../constants/kategorier";
import {DRUGS} from "../constants/mediciner";
import KategoriGridTile from "../components/KategoriGridTile";

function renderCategoryItem(itemData) {
  return <KategoriGridTile catName={itemData.item.catName} />;
}

const KategoriScreen = () => {
  //Mapping DRUGS with LMCategory

  const matchedList = LMCategory.map((kategori) => {
    const matchedDrugs = DRUGS.filter((lm) =>
      lm.catId.includes(kategori.catId)
    );
    return {
      catId: kategori.catId,
      catName: kategori.catName,
      styrka: matchedDrugs.styrka,
      drugs: matchedDrugs,
    };
  });

  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          data={matchedList}
          keyExtractor={(item) => item.catId}
          renderItem={({item}) => (
            <View style={{flex: 1, marginVertical: 5, marginHorizontal: 15}}>
              <View style={{flex: 1}}>
                <Text style={{fontWeight: "bold"}}>{item.catName}</Text>
              </View>
              {item.drugs.map((lm) => (
                <Pressable
                  style={{
                    flexDirection: "row",
                  }}
                  onPress={() => console.log("Presssed :", lm.drugName)}
                  key={lm.drugId}
                >
                  <View style={{marginRight: 3}}>
                    <Text>{lm.drugName}</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text>{lm.styrka}</Text>
                  </View>
                </Pressable>
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
