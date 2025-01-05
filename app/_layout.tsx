import { Stack } from "expo-router";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

 const RootLayout =() => {
  return (
    <Stack screenOptions={{headerShown:false} }>
      <Stack.Screen name="index"  />
    </Stack>
  );
}
export default RootLayout