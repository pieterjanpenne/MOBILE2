import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Modal, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateToScreen = (screenName) => {
    setMenuVisible(false);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigateToScreen("AllMeetups")}>
            <Text style={styles.menuItem}>All Meetups</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen("About")}>
            <Text style={styles.menuItem}>About</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity onPress={toggleMenu}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  menu: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    marginTop: 50,
    marginLeft: 20,
    width: 200,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default CustomHeader;
