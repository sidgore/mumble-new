import React from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { deleteUserToken } from "../../redux/actionsCreators/tokenAction";
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
  Item,
  Label,
  Input,
  List,
  ListItem,
} from "native-base";

import { BLUE, RED, LIGHT, GREEN, YELLOW, colors } from "../../utils/colors";

const ProfileScreen = ({ navigation, deleteUserToken }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    deleteUserToken();
  };
  return (
    <Container style={styles.container}>
      <Content
        padder
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
      >
        <View style={styles.headerContainer}>
          <Thumbnail
            source={{
              uri:
                "https://www.clipartmax.com/png/small/364-3643767_about-brent-kovacs-user-profile-placeholder.png",
            }}
          />
          <Button
            danger
            style={{ alignSelf: "center", marginTop: 10 }}
            onPress={handleLogout}
          >
            <Text>Log Out</Text>
          </Button>
          <Text style={styles.header}>PROFILE</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Item
            floatingLabel
            rounded
            style={{ margin: 5, padding: 5 }}
            bordered
          >
            <Label
              style={{ margin: 10, color: colors.white, fontWeight: "bold" }}
            >
              Phone Number
            </Label>
            <Input
              style={{ color: colors.invalidInputPink, fontWeight: "bold" }}
              value="+16692546905"
              editable={false}
            />
          </Item>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  headerContainer: {
    flex: 0.3,

    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: { flex: 0.7 },
  header: {
    fontSize: 30,
    fontFamily: "BlackOpsOne_400Regular",
    marginTop: 20,
    color: colors.yellow,
  },
});

// const mapStateToProps = (state) => {
//   return {
//     allUsersMumbles: state.mumbles.allUsersMumbles,
//   };
// };

const mapDispatchToProps = { deleteUserToken };

export default connect(null, mapDispatchToProps)(ProfileScreen);
