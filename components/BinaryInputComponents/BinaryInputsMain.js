import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BinaryInputs } from "./BinaryInputs";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "darkgray",
    paddingVertical: 34,
    flex: 1,
  },
  contentContainer: {
    shadowRadius: 50,
    shadowOpacity: 100,
    elevation: 50,
  },

  additionSymbolText: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export const BinaryInputsMain = (props) => {
  const { binaryStateObject, setBinaryStateObject } = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <BinaryInputs
          binaryStateObject={binaryStateObject}
          setBinaryStateObject={setBinaryStateObject}
          binaryState1="binaryStateA"
          binaryState2="binaryStateB"
        />
        <Text style={styles.additionSymbolText}>+</Text>
        <BinaryInputs
          binaryStateObject={binaryStateObject}
          setBinaryStateObject={setBinaryStateObject}
          binaryState1="binaryStateB"
          binaryState2="binaryStateA"
        />
      </View>
    </View>
  );
};
