import React, { Component } from "react";
import { Image, StyleSheet, ImageBackground, View } from "react-native";
import { BLUE, RED, LIGHT, GREEN, YELLOW } from "../../utils/colors";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

const SingleMumbleScreen = ({ navigation, route }) => {
  const { mumble } = route.params;

  const { imageURL, body, textColor = "black", owner } = mumble;

  const location = "Ypsi";
  const userName = "sidgore";
  const age = 30;
  const gender = "Male";

  return (
    <Container>
      <Content>
        <Card>
          <CardItem style={{ backgroundColor: BLUE }}>
            <Left>
              {/* <Thumbnail source={{ uri: profilePicture }} /> */}
              <Body>
                <Text style={styles.text}>{userName}</Text>
                <Text note style={styles.text}>
                  {location}
                </Text>
              </Body>
            </Left>
            <Right>
              <Text style={styles.text}>Age:{age}</Text>
              <Text style={styles.text}>Gender: {gender}</Text>
            </Right>
          </CardItem>

          <CardItem cardBody>
            <ImageBackground
              source={{ uri: imageURL }}
              style={{ height: 600, width: null, flex: 1 }}
              resizeMode="cover"
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    color: textColor,
                    fontWeight: "900",
                    textShadowColor: "black",
                    fontFamily: "Inter_Black",
                    textShadowRadius: 1,
                    textShadowOffset: { width: 3, height: 3 },
                  }}
                >
                  {body}
                </Text>
              </View>
            </ImageBackground>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

SingleMumbleScreen.navigationOptions = {
  title: "Mumbles",
  headerStyle: {
    backgroundColor: RED,
  },
  headerTintColor: GREEN,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const styles = StyleSheet.create({
  text: {
    color: YELLOW,
  },
});
export default SingleMumbleScreen;
