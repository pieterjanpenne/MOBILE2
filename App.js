import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AllMeetupsScreen from "./AllMeetupsScreen";
import MeetupDetailsScreen from "./MeetupDetailsScreen";
import NewMeetupScreen from "./NewMeetupScreen";
import AboutScreen from "./AboutScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllMeetups" component={AllMeetupsScreen} />
        <Stack.Screen name="MeetupDetails" component={MeetupDetailsScreen} />
        <Stack.Screen name="NewMeetup" component={NewMeetupScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
