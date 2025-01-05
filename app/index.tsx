import { ActivityIndicator, View, StyleSheet } from "react-native";
import Tabs from "./components/Tabs";
import useGetWeather from "./hooks/useGetWeather";
import { WeatherResponse } from "./hooks/useGetWeather";
import ErrorItem from "./components/ErrorItem";
const index = () => {
  const [loading, error, weather] = useGetWeather();

  if (weather && (weather as WeatherResponse) && !loading) {
    return (
      <View style={styles.bigView}>
        <Tabs weatherProp={weather} />
      </View>
    );
  }
  return (
    <View style={styles.activityCont}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"red"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  activityCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bigView: {
    flex: 1,
  },
});

export default index;
