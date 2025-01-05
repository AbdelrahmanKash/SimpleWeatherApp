"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UpcomingWeather_1 = __importDefault(require("../screens/UpcomingWeather"));
const City_1 = __importDefault(require("../screens/City"));
const CurrentWeather_1 = __importDefault(require("../screens/CurrentWeather"));
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const vector_icons_1 = require("@expo/vector-icons");
const expo_linear_gradient_1 = require("expo-linear-gradient");
const Tab = (0, bottom_tabs_1.createBottomTabNavigator)();
const Tabs = ({ weatherProp }) => {
    return (<Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "black",
            tabBarBackground: () => (<expo_linear_gradient_1.LinearGradient colors={["beige", "lightblue"]} // Gradient colors
             start={{ x: 0, y: 0 }} // Start of gradient (left)
             end={{ x: 0, y: 1 }} // End of gradient (right)
             style={{ flex: 1 }}/>),
        }}>
        <Tab.Screen name={"Current Weather"} options={{
            tabBarLabelStyle: { fontWeight: "bold" },
            headerShown: false,
            tabBarIcon: ({ focused }) => (<vector_icons_1.Feather name={"droplet"} size={25} color={focused ? "tomato" : "black"}/>),
        }}>
          {() => (<CurrentWeather_1.default weatherData={weatherProp === null || weatherProp === void 0 ? void 0 : weatherProp.list[0]} cityData={weatherProp === null || weatherProp === void 0 ? void 0 : weatherProp.city}/>)}
        </Tab.Screen>

        <Tab.Screen name={"Upcoming Weather"} options={{
            tabBarLabelStyle: { fontWeight: "bold" },
            headerShown: false,
            tabBarIcon: ({ focused }) => (<vector_icons_1.Feather name={"clock"} size={25} color={focused ? "tomato" : "black"}/>),
        }}>
          {() => <UpcomingWeather_1.default futureWeather={weatherProp === null || weatherProp === void 0 ? void 0 : weatherProp.list.slice(1)}/>}
        </Tab.Screen>
        <Tab.Screen name={"City Data"} options={{
            tabBarLabelStyle: { fontWeight: "bold" },
            headerShown: false,
            tabBarIcon: ({ focused }) => (<vector_icons_1.Feather name="home" size={25} color={focused ? "tomato" : "black"}/>),
        }}>
          {() => <City_1.default cityData={weatherProp === null || weatherProp === void 0 ? void 0 : weatherProp.city}/>}
        </Tab.Screen>
      </Tab.Navigator>);
};
exports.default = Tabs;
