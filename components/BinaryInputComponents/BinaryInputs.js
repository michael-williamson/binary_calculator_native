import React from "react";
import { View, StyleSheet } from "react-native";
import { SingleBinaryInput } from "./SingleBinaryInput";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

const outputInputBinary = (
  binaryStateObject,
  setBinaryStateObject,
  name,
  correspondingValueName
) => {
  const compArray = [];
  for (let i = 7; i >= 0; i--) {
    const flowDiagram = `flowDiagram${i + 1}`;
    const currentValue = binaryStateObject[flowDiagram][name];
    const correspondingValue =
      binaryStateObject[flowDiagram][correspondingValueName];
    const carry = binaryStateObject[flowDiagram].carry;
    compArray.push(
      <SingleBinaryInput
        key={i}
        setBinaryStateObject={setBinaryStateObject}
        currentValue={currentValue}
        correspondingValue={correspondingValue}
        carry={carry}
        flowDiagram={flowDiagram}
        name={name}
        powerOfTwo={Math.pow(2, i)}
      />
    );
  }
  return compArray;
};

export const BinaryInputs = (props) => {
  const {
    binaryStateObject,
    setBinaryStateObject,
    binaryState1,
    binaryState2,
  } = props;
  return (
    <View style={styles.mainContainer}>
      {outputInputBinary(
        binaryStateObject,
        setBinaryStateObject,
        binaryState1,
        binaryState2
      )}
    </View>
  );
};
