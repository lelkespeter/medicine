import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

const KategoriGridTile = ({catName}) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{catName}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default KategoriGridTile;

const styles = StyleSheet.create({});
