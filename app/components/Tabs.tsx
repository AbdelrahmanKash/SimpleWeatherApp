import React from "react";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import CurrentWeather from "../screens/CurrentWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const Tab = createBottomTabNavigator();
const Tabs = ({weatherProp}) => {

  
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "black",
          tabBarBackground: () => (
            <LinearGradient
              colors={["beige", "lightblue"]} // Gradient colors
              start={{ x: 0, y: 0 }} // Start of gradient (left)
              end={{ x: 0, y: 1 }} // End of gradient (right)
              style={{ flex: 1 }}
            />
          ),
        }}
      >
        <Tab.Screen
          name={"Current Weather"}
          options={{
            tabBarLabelStyle: { fontWeight: "bold" },
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"droplet"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        >
          {() => (
            <CurrentWeather
              weatherData={weatherProp?.list[0]}
              cityData={weatherProp?.city}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name={"Upcoming Weather"}
          options={{
            tabBarLabelStyle: { fontWeight: "bold" },
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"clock"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        >
          {() => <UpcomingWeather futureWeather={weatherProp?.list.slice(1)} />}
        </Tab.Screen>
        <Tab.Screen
          name={"City Data"}
          options={{
            tabBarLabelStyle: { fontWeight: "bold" },
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        >
          {() => <City cityData={weatherProp?.city} />}
        </Tab.Screen>
      </Tab.Navigator>
    );
}

export default Tabs