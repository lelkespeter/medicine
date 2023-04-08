import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

import {FontAwesome5} from "@expo/vector-icons";

const IconButton = () => {
  return (
    <Pressable>
      <FontAwesome5 name="clipboard-list" size={24} color="#fff" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
