import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import SelectedDrugsList from "../components/output/SelectedDrugsList";

const ListScreen = ({route}) => {
  const selectedDrugs = route.params?.selectedDrugs ?? [];
  return (
    <FlatList
      data={selectedDrugs}
      keyExtractor={(item, index) => item.drugId + index}
      renderItem={({item}) => <SelectedDrugsList item={item} />}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
