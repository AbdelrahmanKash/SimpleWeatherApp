import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  View,
} from "react-native";

import { IconText, IconText2 } from "../components/IconText";

const City = ({ cityData }) => {
  const { country, name, population, sunrise, sunset } = cityData;

  let sunriseStamp = sunrise;
  let sunsetStamp = sunset;

  // Step 2: Convert to milliseconds (JavaScript uses milliseconds)
  let date1 = new Date(sunriseStamp * 1000);
  let date2 = new Date(sunsetStamp * 1000);

  let sunriseHours = date1.getHours();
  let sunriseMinutes = date1.getMinutes();

  let sunsetHours = date2.getHours();
  const SSH1 = sunsetHours % 12;
  let sunsetMinutes = date2.getMinutes();

  // Step 4: Format time as a string (HH:MM:SS)
  let sunriseTime = `${sunriseHours
    .toString()
    .padStart(2, "0")}:${sunriseMinutes.toString().padStart(2, "0")}`;
  let sunsetTime = `${SSH1.toString().padStart(2, "0")}:${sunsetMinutes
    .toString()
    .padStart(2, "0")}`;

  // Step 3: Convert to a readable format
  // let sunriseTime = date1.toLocaleString(); // This converts to a readable string
  // let sunsetTime = date2.toLocaleString();
  // Step 4: Display the result

  const {
    safeAreaCon,
    cityName,
    cityCountryText,
    countryName,
    imageBackG,
    populationText,
    populationWrapper,
    rowLayout,
    setRiseWrapper,
    sunRiseText,
  } = styles;
  return (
    <SafeAreaView style={safeAreaCon}>
      <StatusBar translucent />

      <ImageBackground
        source={require("../../assets/images/cityBackground.jpg")}
        style={imageBackG}
      >
        <Text style={[cityName, cityCountryText]}>{name}</Text>
        <Text style={[countryName, cityCountryText]}>{country}</Text>

        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"users"}
            iconColor={"black"}
            bodyText={
              population == 0
                ? "population: Cannot count people right now"
                : `population: ${population}`
            }
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[setRiseWrapper, rowLayout]}>
          <IconText2
            iconName={"sunrise"}
            iconColor={"black"}
            bodyText={`${sunriseTime} AM`}
            bodyTextStyles={sunRiseText}
          />
          <IconText2
            iconName={"sunset"}
            iconColor={"black"}
            bodyText={`${sunsetTime} PM`}
            bodyTextStyles={sunRiseText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaCon: {
    flex: 1,
  },
  imageBackG: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityCountryText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",

    marginTop: 35,
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  setRiseWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  sunRiseText: {
    fontSize: 25,
    margin: 5,
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default City;
