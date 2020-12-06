import React from "react";
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
  Item,
  Label,
  Input,
  List,
  ListItem,
} from "native-base";

import { colors } from "../../utils/colors";

const ColorsScreen = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <Content
        padder
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
      >
        <View
          style={{
            backgroundColor: colors.activeDot,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>activeDot</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.appBackground,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>appBackground</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.black,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>black</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.cancelNextBackground,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>cancelNextBackground</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.darkGrey,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>darkGrey</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.errorOrange,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>errorOrange</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.featureDot,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>featureDot</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.grey,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>grey</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.greyText,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>greyText</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.inactiveDot,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>inactiveDot</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.invalidInputPink,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>invalidInputPink</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.invalidInputRed,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>invalidInputRed</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.lightGrey,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>lightGrey</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.nextButtonGrey,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>nextButtonGrey</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.orange,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>orange</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.outageGrey,
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
          }}
        >
          <Text>outageGrey</Text>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  row: {
    flex: 0.1,
  },
});

export default ColorsScreen;
