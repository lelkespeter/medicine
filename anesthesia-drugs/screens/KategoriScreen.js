import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

import {GlobalStyles} from "../constants/appColors";
import {LMCategory} from "../constants/kategorier";
import {DRUGS} from "../constants/mediciner";

const KategoriScreen = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <Text>Kategorier</Text>
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
