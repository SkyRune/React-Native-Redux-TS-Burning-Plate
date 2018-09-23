import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

export const style = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowColor: COLORS.shadow,
    shadowOffset: { height: 10, width: 0 },
  },
});