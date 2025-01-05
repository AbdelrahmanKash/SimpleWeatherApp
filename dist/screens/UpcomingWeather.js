"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ListItem_1 = __importDefault(require("../components/ListItem"));
const UpcomingWeather = ({ futureWeather }) => {
    const renderItem = ({ item }) => {
        var _a, _b, _c, _d;
        return (<ListItem_1.default condition={(_b = (_a = item === null || item === void 0 ? void 0 : item.weather) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.main} // Pass weather condition
         dt_txt={item === null || item === void 0 ? void 0 : item.dt_txt} // Pass date text
         min={(_c = item === null || item === void 0 ? void 0 : item.main) === null || _c === void 0 ? void 0 : _c.temp_min} // Pass min temperature
         max={(_d = item === null || item === void 0 ? void 0 : item.main) === null || _d === void 0 ? void 0 : _d.temp_max} // Pass max temperature
        />);
    };
    const { safeAreaCont, imageBackGround, List, textStyle } = styles;
    return (<react_native_1.SafeAreaView style={safeAreaCont}>
      <react_native_1.StatusBar translucent/>

      <react_native_1.ImageBackground source={require("../../assets/images/starry-sky-1920-upcomingWeather.jpg")} resizeMethod="scale" style={imageBackGround}>
       <react_native_1.Text style={textStyle}> This displays weather data throughout different times of a single day for 5 upcoming days. </react_native_1.Text>
       
        <react_native_1.FlatList renderItem={renderItem} data={futureWeather} keyExtractor={(item) => item.dt.toString()} style={List}/>
      </react_native_1.ImageBackground>
    </react_native_1.SafeAreaView>);
};
const styles = react_native_1.StyleSheet.create({
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
exports.default = UpcomingWeather;
