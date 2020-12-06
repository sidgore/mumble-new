if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
import { StatusBar } from "expo-status-bar";
import React from "react";
import * as Font from "expo-font";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AppLoading } from "expo";
import { Inter_900Black } from "@expo-google-fonts/inter";
import { Aclonica_400Regular } from "@expo-google-fonts/aclonica";
import { BlackOpsOne_400Regular } from "@expo-google-fonts/black-ops-one";

import configureStore from "./src/redux/store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { Root } from "native-base";

const { store, persistor } = configureStore();

//AppStack
import AppStackScreen from "./src/navigation/AppStack";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Inter_Black: Inter_900Black,
      Aclonica_400Regular: Aclonica_400Regular,
      BlackOpsOne_400Regular: BlackOpsOne_400Regular,
      ...Ionicons.font,
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer theme={MyTheme}>
            {Platform.OS === "ios" && <StatusBar />}
            <Root>
              <AppStackScreen />
            </Root>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
