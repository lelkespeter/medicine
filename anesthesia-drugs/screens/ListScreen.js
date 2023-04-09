import {StyleSheet, Text, View} from "react-native";
import React from "react";
import WeightInput from "../components/WeightInput";

const ListScreen = () => {
  return (
    <View>
      <Text>Lista Läkemedlen</Text>
      <WeightInput />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
