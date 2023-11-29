// MeetupCard.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MeetupCard = ({ title, isFavorite, onToggleFavorite, onInfoPress }) => {
  return (
    <TouchableOpacity
      style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      onPress={onInfoPress}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={onInfoPress}>
            <Ionicons
              name="information-circle"
              size={24}
              color="cornflowerblue"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onToggleFavorite}>
            <Ionicons
              name={isFavorite ? "heart-dislike-outline" : "heart-outline"}
              size={24}
              color="indianred"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MeetupCard;
