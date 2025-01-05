"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const Feather_1 = __importDefault(require("@expo/vector-icons/Feather"));
const RowText_1 = __importDefault(require("../components/RowText"));
const WeatherType_1 = __importStar(require("../utilities/WeatherType"));
const CurrentWeather = ({ weatherData, cityData }) => {
    var _a, _b, _c, _d, _e, _f;
    const { country, name, population } = cityData;
    const { main: { temp, feels_like, temp_max, temp_min }, weather, } = weatherData; //destructuring weather api
    const weatherCondition = (_b = (_a = weather[0]) === null || _a === void 0 ? void 0 : _a.description) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    const weatherKey = WeatherType_1.weatherTypeMapping[weatherCondition];
    const { bodyWrapper, highLow, description, message, highLowWrapper, CurrWeather, feels, tempStyles, viewContainer, wrapper, } = styles;
    return (<react_native_1.SafeAreaView style={[
            wrapper,
            { backgroundColor: (_c = WeatherType_1.default[weatherKey]) === null || _c === void 0 ? void 0 : _c.backgroundColor },
        ]}>
      <react_native_1.StatusBar translucent/>

      <RowText_1.default viewStyles={bodyWrapper} message1Styles={description} message2Styles={message} message3styles={message} message1={country} message2={name} message3={population == 0
            ? "population: Cannot count people right now"
            : `population: ${population}`}/>
      <react_native_1.View style={viewContainer}>
        <Feather_1.default name={(_d = WeatherType_1.default[weatherKey]) === null || _d === void 0 ? void 0 : _d.icon} size={100} color="white"/>
        <react_native_1.Text style={tempStyles}>{`${temp}°C`}</react_native_1.Text>
        <react_native_1.Text style={feels}>{`Feels like ${feels_like}°C`} </react_native_1.Text>

        
        <RowText_1.default viewStyles={highLowWrapper} message1Styles={highLow} message2Styles={highLow} message1={`High: ${temp_max}°C | `} message2={`Low: ${temp_min}°C`}/>
      </react_native_1.View>

      <RowText_1.default viewStyles={bodyWrapper} message1Styles={description} message2Styles={message} message1={(_e = weather[0]) === null || _e === void 0 ? void 0 : _e.description} message2={(_f = WeatherType_1.default[weatherKey]) === null || _f === void 0 ? void 0 : _f.message}/>
    </react_native_1.SafeAreaView>);
};
const styles = react_native_1.StyleSheet.create({
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
        paddingTop: 35,
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
exports.default = CurrentWeather;
