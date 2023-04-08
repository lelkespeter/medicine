import {StyleSheet} from "react-native";
import {GlobalStyles} from "./appColors";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary300,
  },
  ListContainer: {
    flex: 1,
    margin: 17,
    borderWidth: 2,
  },
  itemContainer: {
    flexDirection: "row",
  },
  styrka: {
    paddingLeft: 7,
  },
  textNamn: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 17,
    color: "white",
  },
});
