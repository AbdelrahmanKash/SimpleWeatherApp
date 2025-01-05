export const weatherTypeMapping = {
  "clear sky": "Clear",
  "few clouds": "Clouds",
  "scattered clouds": "Clouds",
  "broken clouds": "Clouds",
  "shower rain": "Rain",
  "light rain": "Drizzle",
  "heavy rain": "Rain",
  rain: "Rain",
  thunderstorm: "Thunderstorm", // single mapping for thunderstorm
  lightning: "Thunderstorm", // additional description for thunderstorm
  storm: "Thunderstorm", // another description for thunderstorm
  snow: "Snow",
  mist: "Mist",
  fog: "Mist",
  drizzle: "Drizzle",
  haze: "Haze",
  // Add any other relevant descriptions
};

const weatherType = {
  Thunderstorm: {
    icon: "zap",
    message: "It could get noisy",
    backgroundColor: "#000000",
  },
  Drizzle: {
    icon: "cloud-rain",
    message: "It might rain a little",
    backgroundColor: "#36454f",
  },
  Rain: {
    icon: "umbrella",
    message: "You will need an umbrella",
    backgroundColor: "#0000ff",
  },
  Snow: {
    icon: "cloud-snow",
    message: "Time to build a snowman",
    backgroundColor: "#7f6065",
  },
  Clear: {
    icon: "sun",
    message: "Good day for some fresh air",
    backgroundColor: "#e47200",
  },
  Clouds: {
    icon: "cloud",
    message: "Kind of gloomy today",
    backgroundColor: "#363636",
  },
  Haze: {
    icon: "wind",
    message: "It might be a bit damp",
    backgroundColor: "#58586e",
  },
  Mist: {
    icon: "align-justify",
    message: "It might be hard to see",
    backgroundColor: "#3e3e37",
  },
};
export default weatherType