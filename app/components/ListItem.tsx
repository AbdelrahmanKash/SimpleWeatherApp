import React from "react";
import { View , Text, StyleSheet} from "react-native";
import { Feather } from "@expo/vector-icons";
import  weatherType  from '../utilities/WeatherType';
import moment from "moment";

const ListItem1 = (props) => {

 const {dt_txt,min ,max, condition} = props

  const { date, temp1, item, dateTimeView } = styles;

  const weatherCondition = weatherType[condition];
   
  return (
    <View
      style={[
        styles.item,
        { backgroundColor: weatherCondition.backgroundColor },
      ]}
    >
      <Feather name={weatherCondition.icon} size={50} color={"white"} />

      <View style={dateTimeView}>
        <Text style={date}> {moment(dt_txt).format('dddd')}</Text>
        <Text style={date}> {moment(dt_txt).format('h:mm a')}</Text>
      </View>

      <Text style={temp1}>{`${Math.round(min)}°C/ ${Math.round(max)}°C`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5
  },
  temp1: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  date: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  dateTimeView:{
    flex:1,
    alignItems:"center",
    alignContent:"space-evenly",
    flexDirection:"column"
  }
});

export default ListItem1