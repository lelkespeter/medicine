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
import WeightInput from "../components/input/WeightInput";

function renderCategoryItem(itemData) {
  return <KategoriGridTile catName={itemData.item.catName} />;
}

const KategoriScreen = ({navigation}) => {
  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleDrugSelection = (lm) => {
    console.log("lm", lm);
    const selectedDrug = {
      drugId: lm.drugId,
      catId: lm.catId,
      drugName: lm.drugName,
      styrka: lm.styrka,
      recept: lm.recept,
      dosimG: lm.dosimG,
      dosIµG: lm.dosIµG,
      dosIµG_2: lm.dosIµG_2,
      dosIµG_3: lm.dosIµG_3,
      obs: lm.obs,
    };
    setSelectedDrugs((prevSelectedDrugs) => [
      ...prevSelectedDrugs,
      selectedDrug,
    ]);
    setChecked(true);
  };

  const naavigationToList = () => {
    navigation.navigate("Lista", {selectedDrugs});
  };

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
      <WeightInput />
      <View style={{flex: 1}}>
        <FlatList
          data={matchedList}
          keyExtractor={(item, index) => item.catId + index}
          numColumns={2}
          renderItem={({item}) => (
            <View style={{flex: 1, marginVertical: 7, marginHorizontal: 15}}>
              <View style={{flex: 1}}>
                <Text style={{fontWeight: "bold", fontSize: 17}}>
                  {item.catName}
                </Text>
              </View>
              {item.drugs.map((lm) => (
                <Pressable
                  style={{
                    flexDirection: "row",
                  }}
                  onPress={() => handleDrugSelection(lm)}
                  key={lm.drugId}
                >
                  <View style={{marginRight: 3}}>
                    <Text
                      style={
                        checked ? [styles.namn, {color: "green"}] : styles.namn
                      }
                    >
                      {lm.drugName}
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text>{lm.styrka}</Text>
                  </View>
                </Pressable>
              ))}
            </View>
          )}
        />
        <Button title="Skapa Lista" onPress={naavigationToList} />
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
  namn: {
    fontSize: 17,
  },
});
