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

import { connect } from "react-redux";
import { setUserToken } from "../../redux/actionsCreators/tokenAction";
import { countryCodes } from "../../utils/constants";

import axios from "axios";

import { colors } from "../../utils/colors";

import { loginURL } from "../../utils/URL";

const windowWidth = Dimensions.get("window").width;

const LoginScreen = ({ navigation, route, setUserToken }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const [countryCode, setCountryCode] = useState("+1");
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("6692546905");
  const [password, setPassword] = useState("123456");

  const handleSubmit = async () => {
    setIsLoading(true);
    const completePhoneNumber = countryCode + phoneNumber;
    const user = {
      phoneNumber: completePhoneNumber,
      password: password,
    };

    try {
      const response = await axios.post(loginURL, user);
      console.log("token", response.data.token);

      await AsyncStorage.setItem("userToken", response.data.token);
      setUserToken(response.data.token);

      setIsLoading(false);
    } catch (e) {
      Toast.show({
        text: "Wrong phone number or password!",
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
      <Container backgroundColor={colors.appBackground}>
        <Content
          contentContainerStyle={{
            backgroundColor: colors.appBackground,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner color={colors.yellow} size="large" />
          <Text style={{ alignSelf: "center", color: colors.white }}>
            Loading...
          </Text>
        </Content>
      </Container>
    );
  }

  return (
    <Container style={{ backgroundColor: colors.appBackground }}>
      <Content contentContainerStyle={styles.container} padder>
        <View style={styles.topContainer}>
          <Text style={styles.pleaseSignIn}>Please Sign In</Text>
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
              textStyle={{
                color: colors.white,
                fontWeight: "bold",
                fontSize: 18,
              }}
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
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Content>
      <Footer style={{ backgroundColor: colors.black }}>
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

// const mapStateToProps = (state) => {
//   return {
//     allUsersMumbles: state.mumbles.allUsersMumbles,
//   };
// };

const mapDispatchToProps = { setUserToken };

export default connect(null, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },

  topContainer: { flex: 0.3, alignItems: "center", justifyContent: "center" },
  bottomContainer: { flex: 0.7 },

  pleaseSignIn: {
    color: colors.white,
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
    color: colors.invalidInputPink,
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
    backgroundColor: colors.yellow,
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
    color: colors.black,
    textTransform: "uppercase",
  },
});
