import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import WeightInput from "../components/WeightInput";

const ListScreen = ({route}) => {
  const selectedDrugs = route.params?.selectedDrugs ?? [];
  return (
    <FlatList
      data={selectedDrugs}
      renderItem={({item}) => <Text>{item.drugName}</Text>}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
