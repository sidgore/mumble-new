import React, { useEffect, useState } from "react";
import { BLUE, RED, LIGHT, GREEN, YELLOW, colors } from "../../utils/colors";
import { connect } from "react-redux";
import { setAllUsersMumbles } from "../../redux/actions/mumblesAction";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  View,
  Dimensions,
  AsyncStorage,
} from "react-native";
import {
  Container,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
} from "native-base";
const { height, width } = Dimensions.get("window");
import axios from "axios";
import { getAllMumbles } from "../../utils/URL";
import { timeElapsed } from "../../utils/helpers";
import MumblePreview from "../../common/MumblePreview";

const MumbleScreen = (props) => {
  // const data = [
  //   {
  //     body: "Hello",
  //     textColor: "yellow",
  //     imageURL: "http://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  //     owner: "1321431245",
  //   },
  //   {
  //     body: "Hey",
  //     textColor: "red",
  //     imageURL: "http://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
  //     owner: "1321431245",
  //   },
  //   {
  //     body: "Hello",
  //     textColor: "red",
  //     imageURL: "http://homepages.cae.wisc.edu/~ece533/images/baboon.png",
  //     owner: "1321431245",
  //   },
  //   {
  //     body: "Hello",
  //     textColor: "yellow",
  //     imageURL: "http://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  //     owner: "1321431245",
  //   },
  //   {
  //     body: "Hello",
  //     textColor: "yellow",
  //     imageURL: "http://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  //     owner: "1321431245",
  //   },
  // ];

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      screenOptions: {
        headerStyle: {
          backgroundColor: colors.red,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
      },
    });
  }, [props.navigation]);
  const user = {
    userName: "sidgore",
    profilePicture: "https://sidgore.github.io/img/dp.png",
    age: 29,
    location: "Ypsilanti,MI,USA",
    gender: "Male",
    ratings: 5,
  };

  useEffect(() => {
    const fetchAllMumbles = async () => {
      const userToken = await AsyncStorage.getItem("userToken");

      const AuthStr = "Bearer ".concat(userToken);

      try {
        const response = await axios.get(getAllMumbles, {
          headers: { Authorization: AuthStr },
        });
        // alert(JSON.stringify(allMumbles));

        // console.log(response.data);
        props.setAllUsersMumbles(response.data);
      } catch (e) {
        console.log("Error is ", e);
      }
    };
    fetchAllMumbles();
  }, [props.navigation]);

  return (
    <Container style={styles.container}>
      <Content padder>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {props.allUsersMumbles.map((mumble, id) => {
            return (
              <TouchableHighlight
                onPress={() => {
                  navigation.navigate("SingleMumble", {
                    mumble: mumble,
                  });
                }}
                underlayColor="white"
              >
                <MumblePreview
                  key={id}
                  mumble={mumble}
                  navigation={props.navigation}
                />
              </TouchableHighlight>
            );
          })}
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    allUsersMumbles: state.mumbles.allUsersMumbles,
  };
};

const mapDispatchToProps = { setAllUsersMumbles };

export default connect(mapStateToProps, mapDispatchToProps)(MumbleScreen);

// MumbleScreen.navigationOptions = {
//   title: "Mumbles",
//   headerStyle: {
//     backgroundColor: "white",
//   },
//   headerTintColor: GREEN,
//   headerTitleStyle: {
//     fontWeight: "bold",
//   },
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
});
