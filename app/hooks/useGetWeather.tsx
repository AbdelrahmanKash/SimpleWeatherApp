import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

export interface City {
  country: string
  name: string; // City name
  population: number; // Population
  lon: number;
  lat: number;
}
export interface WeatherForecastList {
  dt: number; // UNIX timestamp for the forecast time
  dt_txt: string; // Date/time of the forecast in string format
  main: {
    temp: number; // Temperature in Kelvin 
    feels_like: number; // Feels Like Temperature in Kelvin 
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string; // Weather description, e.g., "clear sky"
  }[];
}

export interface WeatherResponse {
  list: WeatherForecastList[]; // An array of forecast data
  City: City; //City data
}

const useGetWeather = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const weather_Api_Key = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
  //fetching api
  const fetchWeatherData = async () => {
    
    try {
      setLoading(true);
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weather_Api_Key}&units=metric`
      );
      const data: WeatherResponse = await resp.json();
      setWeather(data);
    } catch (e) {
      setError("could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  // getting location/lat and lon
  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }
      let location1 = await Location.getCurrentPositionAsync({});
      setLatitude(location1.coords.latitude);
      setLongitude(location1.coords.longitude);
    };
    fetchLocation();
  }, []);

  //calling the api once lat and lon are acquired
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      fetchWeatherData(); // Call the function once location is set
    }
  }, [latitude, longitude]);

  

  return [loading, error, weather];
};
export default useGetWeather