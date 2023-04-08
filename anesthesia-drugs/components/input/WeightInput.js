import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

const WeightInput = () => {
  return (
    <>
      <View>
        <Text>Vikt (i kg)</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput />
      </View>
    </>
  );
};

export default WeightInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 0.5,
  },
});
