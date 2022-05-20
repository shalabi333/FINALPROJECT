import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import WelcomeAlarm from "../screens/WelcomeAlarm";
import CreateAlarm from "../screens/CreateAlarm";

const Stack = createNativeStackNavigator();

function SetAlarm() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeAlarm"
        component={WelcomeAlarm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateAlarm"
        component={CreateAlarm}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
}

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SetAlarm"
      component={SetAlarm}
      options={{ headerShown: false, presentation: "modal" }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
