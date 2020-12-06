import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { colors } from "../../utils/colors";
const Button = ({ onPress = () => {}, title = "Default", width = 50 }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.yellow,
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    marginTop: 40,
    alignSelf: "center",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    shadowColor: colors.featureDot,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#353A39",
    textTransform: "uppercase",
  },
});
