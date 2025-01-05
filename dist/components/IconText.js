"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconText2 = exports.IconText = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const vector_icons_1 = require("@expo/vector-icons");
const FontAwesome_1 = __importDefault(require("@expo/vector-icons/FontAwesome"));
const IconText = (props) => {
    const { iconName, iconColor, bodyText, bodyTextStyles } = props;
    const { textTheme, viewStyle } = styles;
    return (<react_native_1.View style={viewStyle}>
        <FontAwesome_1.default name={iconName} size={50} color={iconColor}/>
        <react_native_1.Text style={[textTheme, bodyTextStyles]}>{bodyText}</react_native_1.Text>
      </react_native_1.View>);
};
exports.IconText = IconText;
const IconText2 = (props) => {
    const { iconName, iconColor, bodyText, bodyTextStyles } = props;
    const { textTheme, viewStyle } = styles;
    return (<react_native_1.View style={viewStyle}>
        <vector_icons_1.Feather name={iconName} size={50} color={iconColor}/>
        <react_native_1.Text style={[textTheme, bodyTextStyles]}>{bodyText}</react_native_1.Text>
      </react_native_1.View>);
};
exports.IconText2 = IconText2;
const styles = react_native_1.StyleSheet.create({
    textTheme: {
        fontWeight: "bold"
    },
    viewStyle: {
        alignItems: "center"
    }
});
