import React, { useState, useEffect } from "react";
import { StyleSheet, AsyncStorage, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Camera } from "expo-camera";
import { Entypo } from "@expo/vector-icons";

import { Container, Content, Text, Icon, Button } from "native-base";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { setMumbleBackgroundImage } from "../../redux/actionsCreators/layout";
import { colors, colorArray } from "../../utils/colors";

// common components
// import Button from "../../../common/Button/Button";
import MumblePreview from "../../common/MumblePreview";
import ScreenIndicator from "../../common/ScreenIndicator";
import BackgroundBox from "../../common/BackgroundBox";
import { postNewMumble } from "../../utils/URL";

const ChooseBackground = ({
  route,
  navigation,
  addMyNewMumble,
  mumbleFontColor,
  setMumbleBackgroundImage,
  mumbleBackgroundImage,
}) => {
  const getPermissionAsync = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  const _pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setMumbleBackgroundImage(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    getPermissionAsync();
  });

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const inputAccessoryViewID = "uniqueID";
  const { mumbleBody } = route.params;
  const [mumble, setMumble] = useState("");

  const onChangeText = (text) => {
    setMumble(text);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          iconLeft
          light
          transparent
          onPress={() => navigation.navigate("WriteNewMumble")}
        >
          <Icon name="arrow-back" />
          <Text style={{ color: colors.white, fontWeight: "bold" }}>Back</Text>
        </Button>
      ),
      headerTitle: (props) => <ScreenIndicator currentScreen={2} />,
      headerRight: () => (
        <Button
          bordered
          success
          onPress={() => navigation.navigate("ChooseBackground")}
        >
          <Text style={{ color: colors.white, fontWeight: "bold" }}>Post</Text>
        </Button>
      ),
    });
  }, [navigation]);

  const handlePost = async () => {
    // await AsyncStorage.removeItem("userToken");
    const userToken = await AsyncStorage.getItem("userToken");

    const AuthStr = "Bearer ".concat(userToken);

    const input = { body: mumble, imageURL: "https://picsum.photos/320/600" };

    try {
      const res = await axios({
        url: postNewMumble,
        method: "post",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        data: JSON.stringify(input),
      });

      // alert(JSON.stringify(allMumbles));

      addMyNewMumble(res.data);
      console.log(res.data);
      // setMumbles((data) => data.concat(response.data));
    } catch (e) {
      console.log("Erroe is ", e);
    }
    console.log("Pressed", userToken);
  };

  const mumbleObject = { body: mumbleBody, imageURL: mumbleBackgroundImage };
  console.log("Mumble Object", mumbleObject);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Container style={styles.container}>
      <Content>
        <View style={styles.previewContainer}>
          <MumblePreview mumble={mumbleObject} />
        </View>

        <View style={styles.colorPallete}>
          {colorArray.map((color, key) => (
            <BackgroundBox key={key} color={color} />
          ))}
          <BackgroundBox color="black" />
          <BackgroundBox color="brown" />
          <BackgroundBox color="blue" />
          <BackgroundBox color={colors.RED} />
        </View>
        <View
          style={{
            flex: 0.3,
            padding: 2,
          }}
        >
          <TouchableOpacity style={styles.imageButton} onPress={_pickImage}>
            <Entypo
              name="folder-images"
              size={60}
              color={colors.invalidInputPink}
            />
          </TouchableOpacity>
        </View>
        {/* <Button title="Post" onPress={handlePost} /> */}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: colors.appBackground,
    flex: 1,
  },
  previewContainer: {
    flex: 0.4,
    alignItems: "center",
  },

  colorPallete: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: colors.yellow,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    padding: 5,
  },
  imageButton: {
    backgroundColor: colors.appBackground,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});

const mapStateToProps = (state /* , ownProps */) => {
  return {
    mumbleBackgroundImage: state.layout.mumbleBackgroundImage,
  };
};

const mapDispatchToProps = { setMumbleBackgroundImage };

export default connect(mapStateToProps, mapDispatchToProps)(ChooseBackground);

// export default ChooseBackground;
