import {StyleSheet, Text, View} from "react-native";
import React, {useContext} from "react";

import {WeightContext} from "../../context/weight-context";

const SelectedDrugsList = ({item}) => {
  const {weight} = useContext(WeightContext);
  const strength = item.styrka.charAt(item.styrka.length - 5);
  const numStrength = parseFloat(item.styrka);
  const w = +weight;

  return (
    <>
      <View>
        <View style={{flexDirection: "row"}}>
          <View>
            <Text style={{fontWeight: "bold", fontSize: 17}}>
              {item.drugName}
            </Text>
          </View>
          <View style={{paddingLeft: 7}}>
            <Text style={{fontSize: 17}}>{item.styrka}</Text>
          </View>
        </View>
        <View>
          {strength === "m" && item.dosimG !== 0 && item.dosIµG !== "" ? (
            <Text>dos att ge: {(item.dosIµG * w).toFixed(2)} µg</Text>
          ) : strength === "m" && item.dosimG !== 0 ? (
            <Text>dos att ge: {(item.dosimG * w).toFixed(2)} mg</Text>
          ) : strength === "µ" && item.dosIµG !== "" ? (
            <Text>dos att ge: {(item.dosIµG * w).toFixed(2)} µg</Text>
          ) : null}
        </View>
        <View>
          {strength === "m" && item.dosimG !== 0 && item.dosIµG !== "" ? (
            <Text>
              ge: {((item.dosIµG * w) / (numStrength * 1000)).toFixed(2)} ml
              {item.drugName} {item.styrka}
            </Text>
          ) : strength === "m" && item.dosimG !== 0 ? (
            <Text>
              ge: {((item.dosimG * w) / numStrength).toFixed(2)} ml
              {item.drugName} {item.styrka}
            </Text>
          ) : strength === "µ" && item.dosIµG !== "" ? (
            <Text>
              ge: {((item.dosIµG * w) / numStrength).toFixed(2)} ml
              {item.drugName} {item.styrka}
            </Text>
          ) : null}
        </View>
        <View>{item.recept ? <Text>{item.recept}</Text> : null}</View>
        <View>
          {item.obs ? <Text style={{color: "#9b095c"}}>{item.obs}</Text> : null}
        </View>
      </View>
    </>
  );
};

export default SelectedDrugsList;

const styles = StyleSheet.create({});
