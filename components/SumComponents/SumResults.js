import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    color: "white",
  },
  allTextStyle: {
    color: "white",
    fontFamily: "Audiowide-Regular",
    textAlign: "center",
  },

  baseFormContainer: {},
  baseFormLabels: {
    color: "orange",
    paddingBottom: 10,
    fontSize: 18,
  },
  baseFormNumber: {
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 2,
  },
});

export const SumResults = (props) => {
  const { binaryStateObject } = props;
  const [binaryString, setBinaryString] = useState("");
  useEffect(() => {
    const arr = [];
    let carry = binaryStateObject.flowDiagram9.carry ? 1 : 0;
    arr.push(carry);
    for (let i = 8; i >= 1; i--) {
      let sum = binaryStateObject[`flowDiagram${i}`].sum ? 1 : 0;
      arr.push(sum);
    }
    setBinaryString(arr.join(""));
  }, [binaryStateObject]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.baseFormContainer}>
        <Text style={{ ...styles.allTextStyle, ...styles.baseFormLabels }}>
          Binary Form:
        </Text>
        <Text style={{ ...styles.allTextStyle, ...styles.baseFormNumber }}>
          {binaryString}
        </Text>
      </View>

      <View style={styles.baseFormContainer}>
        <Text style={{ ...styles.allTextStyle, ...styles.baseFormLabels }}>
          Base 10 Form:
        </Text>
        <Text style={{ ...styles.allTextStyle, ...styles.baseFormNumber }}>
          {parseInt(binaryString, 2).toString()}
        </Text>
      </View>
    </View>
  );
};
