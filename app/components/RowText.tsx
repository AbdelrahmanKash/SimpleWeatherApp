import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

// Define an interface for the props
interface RowTextProps {
  viewStyles: ViewStyle;           // Style for the container
  message1Styles: TextStyle;       // Style for the first message
  message2Styles: TextStyle;       // Style for the second message
  message3styles?: TextStyle;      // Style for the third message (optional)
  message1: string;                // The first message
  message2?: string;                // The second message
  message3?: string;               // The third message (optional)
}

const RowText: React.FC<RowTextProps> = ({
  viewStyles,
  message1Styles,
  message2Styles,
  message3styles,
  message1,
  message2,
  message3,
}) => (
  <View style={viewStyles}>
    <Text style={message1Styles}>{message1}</Text>
    <Text style={message2Styles}>{message2}</Text>
    <Text style={message3styles}>{message3}</Text>
  </View>
);

export default RowText;
