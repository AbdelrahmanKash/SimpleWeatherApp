import { Text, View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import RowText from "../components/RowText";
import  weatherType ,{ weatherTypeMapping } from "../utilities/WeatherType";


const CurrentWeather = ({ weatherData, cityData }) => {
  const { country, name, population } = cityData;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData; //destructuring weather api

  const weatherCondition = weather[0]?.description?.toLowerCase();

  const weatherKey = weatherTypeMapping[weatherCondition];

  

  const {
    bodyWrapper,
    highLow,
    description,
    message,
    highLowWrapper,
    CurrWeather,
    feels,
    tempStyles,
    viewContainer,
    wrapper,
  } = styles;
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherKey]?.backgroundColor },
      ]}
    >
      <StatusBar translucent />

      <RowText
        viewStyles={bodyWrapper}
        message1Styles={description}
        message2Styles={message}
        message3styles={message}
        message1={country}
        message2={name}
        message3={
          population == 0
            ? "population: Cannot count people right now"
            : `population: ${population}`
        }
      />
      <View style={viewContainer}>
        <Feather name={weatherType[weatherKey]?.icon} size={100} color="white" />
        <Text style={tempStyles}>{`${temp}°C`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°C`} </Text>

        
        <RowText
          viewStyles={highLowWrapper}
          message1Styles={highLow}
          message2Styles={highLow}
          message1={`High: ${temp_max}°C | `}
          message2={`Low: ${temp_min}°C`}
        />
      </View>

      <RowText
        viewStyles={bodyWrapper}
        message1Styles={description}
        message2Styles={message}
        message1={weather[0]?.description}
        message2={weatherType[weatherKey]?.message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },

  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  CurrWeather: {
    fontSize: 50,
    alignSelf: "center",
    marginTop: 25,
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
    padding: 5,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 28,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    paddingTop:35,
    paddingLeft: 25,
    marginBottom: 40,
    
    alignItems: "flex-start",
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 25,
  },
});
export default CurrentWeather;
