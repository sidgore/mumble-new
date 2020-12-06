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

import { setMumbleFontColor } from "../redux/actionsCreators/layout";
const Fontbox = ({ color, setMumbleFontColor }) => {
  return (
    <TouchableOpacity onPress={() => setMumbleFontColor(color)}>
      <View style={{ ...styles.fontBox, backgroundColor: color }}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fontBox: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 15,
  },
});

const mapDispatchToProps = { setMumbleFontColor };

export default connect(null, mapDispatchToProps)(Fontbox);
