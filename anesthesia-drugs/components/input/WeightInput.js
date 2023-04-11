import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useContext} from "react";
import {WeightContext} from "../../screens/context/weight-context";

const WeightInput = () => {
  const {weight, weightInputHandler} = useContext(WeightContext);
  return (
    <>
      <View>
        <Text>Vikt (i kg)</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="decimal-pad"
          placeholder="weight in kg"
          value={weight}
          onChangeText={weightInputHandler}
        />
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
