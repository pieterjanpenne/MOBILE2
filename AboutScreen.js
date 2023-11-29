// AboutScreen.js
import React from "react";
import { View, Text } from "react-native";
import CustomHeader from "./CustomHeader";

const AboutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} title="About" />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>About</Text>
        <Text style={{ marginVertical: 10 }}></Text>
        <Text>Version: 1.0.0</Text>
        {/* Add more information as needed */}
      </View>
    </View>
  );
};

export default AboutScreen;
