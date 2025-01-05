"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const vector_icons_1 = require("@expo/vector-icons");
const ErrorItem = () => {
    return (<react_native_1.View style={styles.container}>
        <react_native_1.Text style={styles.errorText}> Sorry Something Went Wrong</react_native_1.Text>
        <vector_icons_1.Feather name={'frown'} size={100} color={'white'}/>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 10,
        textAlign: 'center'
    }
});
exports.default = ErrorItem;
