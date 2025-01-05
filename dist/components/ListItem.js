"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const vector_icons_1 = require("@expo/vector-icons");
const WeatherType_1 = __importDefault(require("../utilities/WeatherType"));
const moment_1 = __importDefault(require("moment"));
const ListItem1 = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { date, temp1, item, dateTimeView } = styles;
    const weatherCondition = WeatherType_1.default[condition];
    return (<react_native_1.View style={[
            styles.item,
            { backgroundColor: weatherCondition.backgroundColor },
        ]}>
      <vector_icons_1.Feather name={weatherCondition.icon} size={50} color={"white"}/>

      <react_native_1.View style={dateTimeView}>
        <react_native_1.Text style={date}> {(0, moment_1.default)(dt_txt).format('dddd')}</react_native_1.Text>
        <react_native_1.Text style={date}> {(0, moment_1.default)(dt_txt).format('h:mm a')}</react_native_1.Text>
      </react_native_1.View>

      <react_native_1.Text style={temp1}>{`${Math.round(min)}°C/ ${Math.round(max)}°C`}</react_native_1.Text>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
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
    dateTimeView: {
        flex: 1,
        alignItems: "center",
        alignContent: "space-evenly",
        flexDirection: "column"
    }
});
exports.default = ListItem1;
