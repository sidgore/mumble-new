import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";

import SignedOutStackScreen from "./SignedOutStack";
import SignedInStackScreen from "./SignedInStack";
const AppStack = createStackNavigator();
const AppStackScreen = ({ userToken }) => {
  //   const [userToken, setUserToken] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  //   React.useEffect(() => {
  //     const retrieveAuth = async () => {
  //       try {
  //         const token = await AsyncStorage.getItem("userToken");
  //         setIsLoading(true);
  //         console.log("token", token);

  //         setUserToken(token);
  //       } catch (error) {
  //         // Error retrieving data
  //       }
  //     };
  //     retrieveAuth();

  //     //userToken(token);
  //   }, []);

  if (!isLoading) {
    return <AppLoading />;
  }

  return (
    <AppStack.Navigator headerMode="none">
      {userToken ? (
        <AppStack.Screen
          name="Main"
          component={SignedInStackScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <AppStack.Screen
          name="Auth"
          component={SignedOutStackScreen}
          options={{ headerShown: false }}
        />
      )}
    </AppStack.Navigator>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    userToken: state.userToken,
  };
};

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(AppStackScreen);
