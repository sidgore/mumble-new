import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { connect } from "react-redux";
import { Card, CardItem, Text, Button, Icon } from "native-base";
import { timeElapsed } from "../utils/helpers";
import { BLUE, RED, LIGHT, GREEN, YELLOW, colors } from "../utils/colors";
const MumblePreview = ({
  mumble = {
    body: "Default Mumble",

    imageURL: "",
  },
  mumbleBackgroundColor,
  mumbleFontColor,
}) => {
  const { imageURL = "", body, createdAt = Date.now() } = mumble;

  return (
    <Card
      style={{
        width: 193,
        borderWidth: 1,
        borderColor: colors.yellow,
        height: 300,
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowColor: colors.white,
      }}
    >
      {imageURL.length > 0 ? (
        <CardItem cardBody>
          <ImageBackground
            source={{ uri: imageURL }}
            style={{ height: 270, width: null, flex: 1 }}
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
                  ...styles.mumbleFontStyle,
                  color: mumbleFontColor,
                }}
              >
                {body}
              </Text>
            </View>
          </ImageBackground>
        </CardItem>
      ) : (
        <CardItem cardBody>
          <View
            style={{
              backgroundColor: mumbleBackgroundColor,
              height: 270,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...styles.mumbleFontStyle,
                color: mumbleFontColor,
              }}
            >
              {body}
            </Text>
          </View>
        </CardItem>
      )}

      <View style={styles.cartFooterContainer}>
        <View style={styles.likesContainer}>
          <Icon
            size={5}
            name="heart"
            style={{ color: colors.white, fontSize: 10, marginRight: 5 }}
          />
          <Text
            style={{ color: colors.white, fontSize: 10, fontWeight: "600" }}
          >
            12
          </Text>
        </View>
        <View style={styles.commentsContainer}>
          <Icon
            active
            name="chatbubbles"
            style={{ color: BLUE, fontSize: 10, marginRight: 5 }}
          />
          <Text style={{ color: BLUE, fontSize: 10, fontWeight: "600" }}>
            4
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <Icon
            active
            name="time"
            style={{ color: colors.white, fontSize: 10, marginRight: 5 }}
          />
          <Text
            style={{ color: colors.white, fontSize: 10, fontWeight: "600" }}
          >
            {timeElapsed(createdAt)}
          </Text>
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  cartFooterContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: RED,

    alignItems: "center",
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.white,
  },
  likesContainer: {
    flex: 0.25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  commentsContainer: {
    flex: 0.25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  timeContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mumbleFontStyle: {
    fontSize: 24,
    color: "white",
    fontWeight: "900",
    textShadowColor: "black",
    fontFamily: "Inter_Black",
    textShadowRadius: 1,
    textShadowOffset: { width: 3, height: 3 },
    textAlign: "center",
  },
});
const mapStateToProps = (state /*, ownProps*/) => {
  // console.log("State is ", state.layout);
  return {
    mumbleFontColor: state.layout.mumbleFontColor,
    mumbleBackgroundColor: state.layout.mumbleBackgroundColor,
  };
};

export default connect(mapStateToProps)(MumblePreview);
