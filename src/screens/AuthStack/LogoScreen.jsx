import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  Button,
  List,
  ListItem,
  Left,
  Icon,
  Body,
  Right,
  Switch,
} from "native-base";

import { colors } from "../../utils/colors";

import backgroundImage from "../../../assets/background.png";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LogoScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>
          MUMB
          <Text style={{ fontStyle: "italic", fontWeight: "400" }}>LE</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Text style={styles.disclaimerText}>
          By tapping Create Account or Sign In, you agree to our Terms.Learn how
          we process your data in our Privacy Policy and Cookies Policy.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.disclaimerText}>Trouble Signing In?</Text>
    </ImageBackground>
  );
};

export default LogoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    resizeMode: "contain",
    borderColor: colors.orange,
  },

  logoContainer: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonsContainer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },

  title: {
    color: "yellow",
    fontSize: 50,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: colors.yellow,
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.9,

    borderColor: colors.appBackground,
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

  disclaimerText: {
    fontSize: 14,
    color: "#ffffff",
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 18,
    textAlign: "center",
    fontWeight: "500",
  },
});
