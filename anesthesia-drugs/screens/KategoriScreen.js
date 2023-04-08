import {StyleSheet, Text, View} from "react-native";
import React from "react";

import {GlobalStyles} from "../constants/appColors";

const KategoriScreen = () => {
  return (
    <>
      <View style={styles.screenContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Välj vilka läkemedel du ska använda
          </Text>
        </View>
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
    color: "white",
    textAlign: "center",
  },
});
