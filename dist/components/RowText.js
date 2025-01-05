"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const RowText = ({ viewStyles, message1Styles, message2Styles, message3styles, message1, message2, message3, }) => (<react_native_1.View style={viewStyles}>
    <react_native_1.Text style={message1Styles}>{message1}</react_native_1.Text>
    <react_native_1.Text style={message2Styles}>{message2}</react_native_1.Text>
    <react_native_1.Text style={message3styles}>{message3}</react_native_1.Text>
  </react_native_1.View>);
exports.default = RowText;
