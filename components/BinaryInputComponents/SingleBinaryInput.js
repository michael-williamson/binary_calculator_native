import React, { useEffect } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  binaryText: {
    width: "90%",
    backgroundColor: "orange",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
  },
  powerOfTwoText: {
    fontFamily: "Audiowide-Regular",
    color: "#1976d2",
    fontSize: 20,
  },
});

export const SingleBinaryInput = (props) => {
  const {
    setBinaryStateObject,
    flowDiagram,
    currentValue,
    correspondingValue,
    name,
    carry,
    powerOfTwo,
  } = props;

  useEffect(() => {
    let xOR = false;
    let firstAND = false;
    let sum = false;
    let secondAND = false;
    xOR =
      (currentValue && correspondingValue) ||
      (currentValue === false && correspondingValue === false)
        ? false
        : true;
    firstAND = currentValue && correspondingValue;
    if (xOR === false && carry) {
      sum = true;
    } else if (carry === false) {
      sum = xOR;
    }
    secondAND = xOR && carry;
    let carryNext = firstAND || secondAND;
    setBinaryStateObject((prev) => {
      return {
        ...prev,
        ...{ [flowDiagram]: { ...prev[flowDiagram], sum: sum } },
        ...{
          [`flowDiagram${parseInt(prev[flowDiagram].index) + 1}`]: {
            ...prev[`flowDiagram${parseInt(prev[flowDiagram].index) + 1}`],
            carry: carryNext,
          },
        },
      };
    });
  }, [
    currentValue,
    correspondingValue,
    carry,
    flowDiagram,
    setBinaryStateObject,
  ]);

  const handleChange = (event) => {
    setBinaryStateObject((prev) => {
      return {
        ...prev,
        ...{ [flowDiagram]: { ...prev[flowDiagram], [name]: event } },
      };
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.powerOfTwoText}>{powerOfTwo}</Text>
      <Text
        style={{
          ...styles.binaryText,
          backgroundColor: currentValue ? "#1976d2" : "orange",
        }}
      >
        {currentValue ? 1 : 0}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#1976d2" }}
        thumbColor={currentValue ? "#1976d2" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleChange}
        value={currentValue}
      />
    </View>
  );
};
