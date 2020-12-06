import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

//AuthStack Screens
import LogoScreen from "../screens/AuthStack/LogoScreen";
import LoginScreen from "../screens/AuthStack/LoginScreen";
import SignupScreen from "../screens/AuthStack/SignupScreen";
const SignedOutStack = createStackNavigator();
const SignedOutStackScreen = () => {
  return (
    <SignedOutStack.Navigator initialRouteName="LogoScreen" mode="modal">
      <SignedOutStack.Screen name="LogoScreen" component={LogoScreen} />
      <SignedOutStack.Screen name="Login" component={LoginScreen} />
      <SignedOutStack.Screen name="Signup" component={SignupScreen} />
    </SignedOutStack.Navigator>
  );
};
export default SignedOutStackScreen;
