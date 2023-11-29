// AllMeetupsScreen.js
import React, { useState, useEffect } from "react";
import { View, FlatList, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MeetupCard from "./MeetupCard";
import CustomHeader from "./CustomHeader";

const AllMeetupsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [meetupsData, setMeetupsData] = useState([
    { id: "1", title: "Meetup 1", isFavorite: false },
    { id: "2", title: "Meetup 2", isFavorite: true },
    // Add more meetups as needed
  ]);

  useEffect(() => {
    const newMeetup = route.params?.newMeetup;
    if (newMeetup) {
      setMeetupsData((prevMeetups) => [...prevMeetups, newMeetup]);
    }
  }, [route.params?.newMeetup]);

  const toggleFavorite = (meetupId) => {
    const updatedMeetups = meetupsData.map((meetup) =>
      meetup.id === meetupId
        ? { ...meetup, isFavorite: !meetup.isFavorite }
        : meetup
    );
    setMeetupsData(updatedMeetups);
  };

  const handleInfoPress = (meetupId) => {
    navigation.navigate("MeetupDetails", { meetupId, meetupsData });
  };

  return (
    <View>
      <CustomHeader navigation={navigation} title="All Meetups" />
      <FlatList
        data={meetupsData}
        renderItem={({ item }) => (
          <MeetupCard
            title={item.title}
            isFavorite={item.isFavorite}
            onToggleFavorite={() => toggleFavorite(item.id)}
            onInfoPress={() => handleInfoPress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Add New Meetup"
        onPress={() => navigation.navigate("NewMeetup")}
      />
    </View>
  );
};

export default AllMeetupsScreen;
