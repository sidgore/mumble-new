import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { colors } from "../utils/colors";
import {
  ScrollView,
  StyleSheet,
  AsyncStorage,
  InputAccessoryView,
  View,
  TouchableOpacity,
} from "react-native";

import {
  setMumbleBackgroundColor,
  setMumbleBackgroundImage,
} from "../redux/actionsCreators/layout";
const BackgroundBox = ({
  color,
  setMumbleBackgroundColor,
  setMumbleBackgroundImage,
}) => {
  const handleTap = () => {
    console.log("clicked");
    setMumbleBackgroundColor(color);
    setMumbleBackgroundImage("");
  };
  return (
    <TouchableOpacity onPress={handleTap}>
      <View style={{ ...styles.fontBox, backgroundColor: color }}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fontBox: {
    height: 40,
    width: 40,
    margin: 2,
    borderRadius: 20,
  },
});

const mapDispatchToProps = {
  setMumbleBackgroundColor,
  setMumbleBackgroundImage,
};

export default connect(null, mapDispatchToProps)(BackgroundBox);
