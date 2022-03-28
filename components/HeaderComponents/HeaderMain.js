import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import bgImage from "../../media/images/ones_zeros.jpg";
import calculatorIcon from "../../media/images/calculator_icon.png";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  headerContentContainer: {
    width: "95%",
    backgroundColor: "#006effcf",
    borderColor: "#f1f1f1",
    borderWidth: 5,
    borderStyle: "solid",
    borderRadius: 50,
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
  headerText: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 35,
    color: "orange",
    textShadowColor: "black",
    textShadowRadius: 10,
    textShadowOffset: { width: 5, height: 5 },
    textAlign: "center",
    fontFamily: "Audiowide-Regular",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  iconContainerText: {
    color: "white",
  },
  bgImage: {
    borderRadius: 81,
  },
});

export const HeaderMain = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        imageStyle={styles.bgImage}
      >
        <View style={styles.headerContentContainer}>
          <Text style={styles.headerText}>Binary Calculator</Text>
          <View style={styles.iconContainer}>
            <Text style={{ ...styles.headerText, ...styles.iconContainerText }}>
              1
            </Text>
            <Image source={calculatorIcon} />
            <Text style={{ ...styles.headerText, ...styles.iconContainerText }}>
              0
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
