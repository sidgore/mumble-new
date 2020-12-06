import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  AsyncStorage,
  InputAccessoryView,
  View,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addMyNewMumble } from "../../../redux/actions/mumblesAction";

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Textarea,
  Icon,
  Left,
  Body,
  Title,
  Right,
  Button,
} from "native-base";
import axios from "axios";
import { BLUE, RED, LIGHT, GREEN, YELLOW, colors } from "../../../utils/colors";

//common components
import { default as MyButton } from "../../../common/Button/Button";
import ScreenIndicator from "../../../common/ScreenIndicator";
import FontBox from "../../../common/FontBox";

const NewMumbleScreen1 = ({
  navigation,
  addMyNewMumble,
  mumbleFontColor,
  mumbleBackgroundColor,
}) => {
  const inputAccessoryViewID = "uniqueID";
  const [mumble, setMumble] = useState("");
  const onChangeText = (text) => {
    setMumble(text);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => <ScreenIndicator currentScreen={1} />,
      headerRight: () => (
        <Button
          iconRight
          light
          transparent
          onPress={() =>
            navigation.navigate("ChooseBackground", {
              mumbleBody: mumble,
            })
          }
          disabled={mumble.length ? false : true}
        >
          <Text style={{ color: colors.white, fontWeight: "bold" }}>Next</Text>
          <Icon name="arrow-forward" color={colors.white} />
        </Button>
      ),
    });
  }, [navigation, mumble]);

  return (
    <>
      <Container style={styles.container} keyboardDismissMode="interactive">
        <Content>
          <Form>
            <Textarea
              onChangeText={onChangeText}
              style={{ ...styles.input, color: mumbleFontColor }}
              rowSpan={10}
              bordered
              placeholder="Start Typing..."
              placeholderTextColor={RED}
              value={mumble}
              enablesReturnKeyAutomatically={true}
              keyboardAppearance="dark"
              inputAccessoryViewID={inputAccessoryViewID}
            />
          </Form>
          <MyButton
            title="Next"
            onPress={() =>
              navigation.navigate("ChooseBackground", {
                mumbleBody: mumble,
              })
            }
          />
        </Content>
      </Container>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <View style={styles.keyboardview}>
          <FontBox color="red" />
          <FontBox color="yellow" />
          <FontBox color="green" />
          <FontBox color="blue" />
          <FontBox color="pink" />
          <FontBox color="orange" />
          <FontBox color="brown" />
          <FontBox color="cyan" />
          <FontBox color="black" />
          <FontBox color="white" />
          <FontBox color="red" />
          <FontBox color="purple" />
          <FontBox color="red" />
          <FontBox color="violet" />
        </View>
      </InputAccessoryView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: colors.appBackground,
  },

  input: {
    fontSize: 40,
    color: colors.white,
    backgroundColor: colors.appBackground,
    borderRadius: 5,
    borderColor: YELLOW,
    fontFamily: "BlackOpsOne_400Regular",
  },
  keyboardview: {
    height: 40,
    backgroundColor: colors.appBackground,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.white,
    flexDirection: "row",
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  fontBox: { height: 30, width: 30, borderWidth: 1, borderColor: colors.black },
});

const mapStateToProps = (state /*, ownProps*/) => {
  // console.log("State is ", state.layout);
  return {
    mumbleFontColor: state.layout.mumbleFontColor,
    mumbleBackgroundColor: state.layout.mumbleBackgroundColor,
  };
};
export default connect(mapStateToProps)(NewMumbleScreen1);

//export default NewMumbleScreen1;
