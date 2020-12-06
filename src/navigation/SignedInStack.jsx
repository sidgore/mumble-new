import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import MumbleScreen from "../screens/MumbleMainStack/MumbleScreen";
import NewMumbleScreen1 from "../screens/MumbleMainStack/NewMumbleScreen";
import ChooseBackground from "../screens/MumbleMainStack/ChooseBackground";
import ProfileScreen from "../screens/MumbleMainStack/ProfileScreen";
import ColorsScreen from "../screens/MumbleMainStack/ColorsScreen";
import SingleMumbleScreen from "../screens/MumbleMainStack/SingleMumbleScreen";
import { colors, RED } from "../utils/colors";

const Stack = createStackNavigator();

const Mumble = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.BLUE,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
    }}
  >
    <Stack.Screen component={MumbleScreen} name="Mumbles" />
    <Stack.Screen component={SingleMumbleScreen} name="SingleMumble" />
  </Stack.Navigator>
);

const NewMumbleStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.BLUE,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
    }}
  >
    <Stack.Screen component={NewMumbleScreen1} name="WriteNewMumble" />
    <Stack.Screen component={ChooseBackground} name="ChooseBackground" />
  </Stack.Navigator>
);
const SignedInStack = createBottomTabNavigator();
const SignedInStackScreen = () => {
  return (
    <SignedInStack.Navigator
      tabBarOptions={{
        activeTintColor: colors.BLUE,
        activeBackgroundColor: colors.white,
        inactiveBackgroundColor: colors.BLUE,
        inactiveTintColor: colors.white,
        labelStyle: {
          fontSize: 12,
          fontFamily: "Roboto_medium",
        },
        style: {
          // Remove border top on both android & ios
          borderTopWidth: 1,
          borderTopColor: colors.activeDot,

          elevation: 0,
          shadowColor: "#5bc4ff",
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        },
      }}
      initialRouteName="SingleMumble"
    >
      <SignedInStack.Screen
        name="MumbleStack"
        component={Mumble}
        options={{
          tabBarLabel: "Mumbles",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <SignedInStack.Screen
        name="SingleMumble"
        component={NewMumbleStack}
        options={{
          tabBarLabel: "New Mumble",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <SignedInStack.Screen
        name="Logout"
        component={ProfileScreen}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="more" color={color} size={size} />
          ),
        }}
      />
      <SignedInStack.Screen
        name="Colors"
        component={ColorsScreen}
        options={{
          tabBarLabel: "Colors",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="more" color={color} size={size} />
          ),
        }}
      />
    </SignedInStack.Navigator>
  );
};
export default SignedInStackScreen;
