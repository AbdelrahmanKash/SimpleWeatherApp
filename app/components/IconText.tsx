import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export const IconText = (props) => {
    const { iconName, iconColor,bodyText, bodyTextStyles } = props;
    const{textTheme, viewStyle} =styles 
    return (
      <View style= {viewStyle}>
        <FontAwesome name={iconName} size={50} color={iconColor} />
        <Text style={[textTheme , bodyTextStyles]}>{bodyText}</Text>
      </View>
    );
}

export const IconText2 = (props) =>{
    const {iconName, iconColor, bodyText, bodyTextStyles} = props
    const { textTheme, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Feather name={iconName} size={50} color={iconColor} />
        <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    textTheme:{
        fontWeight:"bold"
    },
    viewStyle:{
        alignItems:"center"
    }
})

