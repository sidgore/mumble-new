import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Picker,
  Icon,
  Footer,
  FooterTab,
  Toast,
  Spinner,
} from "native-base";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
} from "react-native";
import { countryCodes } from "../../utils/constants";

import axios from "axios";

import { colors } from "../../utils/colors";

import { sigupURL } from "../../utils/URL";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SignupScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const [countryCode, setCountryCode] = useState("+1");
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setIsLoading(false);
      return Toast.show({
        text: "Passwords do not Match!!",
        buttonText: "Okay",
        position: "bottom",
        type: "danger",
        buttonTextStyle: { color: "#008000" },
        buttonStyle: { backgroundColor: "#5cb85c" },
      });
    }
    const completePhoneNumber = countryCode + phoneNumber;
    const user = {
      phoneNumber: completePhoneNumber,
      password: password,
    };
    console.log(user);
    console.log(sigupURL);

    try {
      console.log("Inside Try Block");
      const result = await axios.post(sigupURL, user);
      await AsyncStorage.setItem("userToken", result.data.token);
      await navigation.navigate("Main");

      setIsLoading(false);
    } catch (e) {
      Toast.show({
        text: e.message,
        buttonText: "Okay",
        position: "bottom",
        type: "danger",
        buttonTextStyle: { color: "#008000" },
        buttonStyle: { backgroundColor: "#5cb85c" },
      });
      setIsLoading(false);
    }
  };

  const onValueChange = (value) => {
    setCountryCode(value);
  };

  if (isLoading) {
    return (
      <Container>
        <Content centerContent>
          <Spinner color="red" />
          <Text style={{ alignSelf: "center", color: "red" }}>Please Wait</Text>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content contentContainerStyle={styles.container} padder>
        <View style={styles.topContainer}>
          <Text style={styles.pleaseSignIn}>Please Sign Up</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.phoneNumberHeading}>My Number is</Text>

          <Form style={styles.formContainer}>
            <Picker
              mode="dropdown"
              iosHeader="Select your Country"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={countryCode}
              onValueChange={onValueChange}
              textStyle={{ color: colors.BACKGROUND_COLOR, fontWeight: "bold" }}
            >
              {countryCodes.map((country, key) => (
                <Picker.Item
                  key={key}
                  label={country.label}
                  value={country.value}
                />
              ))}
            </Picker>

            <Input
              style={styles.phoneNumberInput}
              value={phoneNumber}
              onChangeText={(value) => setPhoneNumber(value)}
              keyboardAppearance="light"
              keyboardType="phone-pad"
              maxLength={10}
            />
          </Form>

          <Form style={{ marginBottom: 20 }}>
            <Text style={styles.phoneNumberHeading}>Password</Text>

            <Item>
              <Input
                style={styles.passwordInput}
                value={password}
                onChangeText={(value) => setPassword(value)}
                keyboardAppearance="light"
                keyboardType="phone-pad"
                maxLength={10}
                secureTextEntry={true}
              />
            </Item>
          </Form>

          <Form>
            <Text style={styles.phoneNumberHeading}>Confirm Password</Text>

            <Item>
              <Input
                style={styles.passwordInput}
                value={confirmPassword}
                onChangeText={(value) => setConfirmPassword(value)}
                keyboardAppearance="light"
                keyboardType="phone-pad"
                maxLength={10}
                secureTextEntry={true}
              />
            </Item>
          </Form>
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={!(phoneNumber && password && confirmPassword)}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Create My Account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Content>
      <Footer style={{ backgroundColor: colors.purple }}>
        <FooterTab>
          <Button full>
            <Text style={{ color: "#ffffff", fontWeight: "500" }}>
              © 2020 Mumble
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default SignupScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },

  topContainer: { flex: 0.3, alignItems: "center", justifyContent: "center" },
  bottomContainer: { flex: 0.7 },

  pleaseSignIn: {
    color: colors.BACKGROUND_COLOR,
    fontWeight: "bold",
    fontSize: 24,
    backgroundColor: colors.black,
    padding: 10,
    borderRadius: 10,
    borderWidth: 10,
  },

  phoneNumberHeading: { color: colors.yellow, fontSize: 30, fontWeight: "600" },

  formContainer: {
    padding: 20,
    marginBottom: 20,
    flexDirection: "row",
  },

  buttonStyle: { alignItems: "center", justifyContent: "center" },

  phoneNumberInput: {
    color: "#1D3557",
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 1,
    textAlign: "center",
    borderBottomColor: colors.orange,
    borderBottomWidth: 1,
  },

  passwordInput: {
    color: "white",
    fontSize: 24,
    letterSpacing: 1,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: colors.BACKGROUND_COLOR,
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.9,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#353A39",
    textTransform: "uppercase",
  },
});
