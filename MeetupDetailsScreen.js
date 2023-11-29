// MeetupDetailsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const MeetupDetailsScreen = () => {
  const route = useRoute();
  const { meetupId, meetupsData } = route.params;

  const meetupDetails = meetupsData.find((meetup) => meetup.id === meetupId);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Title:</Text>
        <Text>{meetupDetails.title}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Address:</Text>
        <Text>{meetupDetails.address}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Description:</Text>
        <Text>{meetupDetails.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default MeetupDetailsScreen;
