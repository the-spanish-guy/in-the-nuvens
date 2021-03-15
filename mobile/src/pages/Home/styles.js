import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const TEXT_COLOR = "#5F5C5C";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight,
  },

  title: {
    color: TEXT_COLOR,
    letterSpacing: 2,
    fontSize: 27.29,
  },
});
