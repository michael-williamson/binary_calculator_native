import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from "react-native";
import { HeaderMain } from "./components/HeaderComponents/HeaderMain";
import { BinaryInputsMain } from "./components/BinaryInputComponents/BinaryInputsMain";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { binaryUnitStateObject } from "./components/helperFunctions.js";
import { SumMain } from "./components/SumComponents/SumMain";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [binaryStateObject, setBinaryStateObject] = useState(
    binaryUnitStateObject()
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <HeaderMain />
        <BinaryInputsMain
          binaryStateObject={binaryStateObject}
          setBinaryStateObject={setBinaryStateObject}
        />
        <SumMain
          binaryStateObject={binaryStateObject}
          setBinaryStateObject={setBinaryStateObject}
        />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
