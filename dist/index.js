"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const Tabs_1 = __importDefault(require("./components/Tabs"));
const useGetWeather_1 = __importDefault(require("./hooks/useGetWeather"));
const ErrorItem_1 = __importDefault(require("./components/ErrorItem"));
const index = () => {
    const [loading, error, weather] = (0, useGetWeather_1.default)();
    if (weather && weather && !loading) {
        return (<react_native_1.View style={styles.bigView}>
        <Tabs_1.default weatherProp={weather}/>
      </react_native_1.View>);
    }
    return (<react_native_1.View style={styles.activityCont}>
      {error ? (<ErrorItem_1.default />) : (<react_native_1.ActivityIndicator size={"large"} color={"red"}/>)}
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    activityCont: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    bigView: {
        flex: 1,
    },
});
exports.default = index;
