import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { SumResults } from "./SumResults";
import bgImage from "../../media/images/circuit_board.jpg";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#006effcf",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 40,
    paddingHorizontal: 5,
  },
  titleText: {
    color: "white",
    fontSize: 30,
    fontFamily: "Audiowide-Regular",
  },
});

export const SumMain = (props) => {
  const { binaryStateObject } = props;
  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      imageStyle={styles.bgImage}
    >
      <View style={styles.mainContainer}>
        <View>
          <Text style={{ ...styles.titleText }}>Sum</Text>
        </View>
        <SumResults binaryStateObject={binaryStateObject} />
      </View>
    </ImageBackground>
  );
};
