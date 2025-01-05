import React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Text
} from "react-native";

import ListItem1 from "../components/ListItem";


const UpcomingWeather = ({ futureWeather }) => {

  const renderItem = ({ item }) => {
    return (
      <ListItem1
        condition={item?.weather?.[0]?.main} // Pass weather condition
        dt_txt={item?.dt_txt} // Pass date text
        min={item?.main?.temp_min} // Pass min temperature
        max={item?.main?.temp_max} // Pass max temperature
      />
    );
  };

  const { safeAreaCont, imageBackGround, List, textStyle } = styles;

  return (
    <SafeAreaView style={safeAreaCont}>
      <StatusBar translucent />

      <ImageBackground
        source={require("../../assets/images/starry-sky-1920-upcomingWeather.jpg")}
        resizeMethod="scale"
        style={imageBackGround}
      >
       <Text style={textStyle}> This displays weather data throughout different times of a single day for 5 upcoming days. </Text>
       
        <FlatList
          renderItem={renderItem}
          data={futureWeather}
          keyExtractor={(item) => item.dt.toString()}
          style={List}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaCont: {
    backgroundColor: "royal blue",
    flex: 1,
  },

  imageBackGround: {
    flex: 1,
  },
  List: {
    marginTop: 25,
  },
  textStyle: {
    
    marginTop: 35,
    marginStart: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    
  },
});
export default UpcomingWeather;
