import React from "react";
import { View } from "react-native";
import { colors } from "../utils/colors";
const ScreenIndicator = ({ totalScreens, currentScreen }) => {
  console.log(totalScreens);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: currentScreen === 1 ? colors.RED : colors.black,
        }}
      />

      <View style={{ width: 120, borderTopWidth: 1 }}></View>
      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: currentScreen === 2 ? colors.RED : colors.black,
        }}
      />
      {/* <View style={{ width: 60, borderTopWidth: 1 }}></View> */}
      {/* <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: currentScreen === 3 ? colors.RED : colors.BLUE,
          }}
        /> */}
    </View>
  );
};
export default ScreenIndicator;
