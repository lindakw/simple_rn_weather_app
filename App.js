import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { API_KEY } from "./utils/APIKey";
import Weather from "./components/Weather";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState();
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [city, setCity] = useState("");
  const [editZip, setEditZip] = useState(false);
  const [zip, setZip] = useState("");

  //gets current longitude/latitude coordinates when app loads
  //sets long/lat states
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat, long]);

  //automatically fetches current weather with the long/lat states
  //sets state for temp, weatherConditions, city and isLoading
  // fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=imperial`
  // )
  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json);
  //     setTemp(json.main.temp);
  //     setWeatherCondition(json.weather[0].main);
  //     setCity(json.name);
  //     setIsLoading(false);
  //   });

  //function fetches weather data by zip
  //sets state for temp, weatherConditions, city and isLoading
  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setTemp(json.main.temp);
        setWeatherCondition(json.weather[0].main);
        setCity(json.name);
        setIsLoading(false);
      });
  };
  //ternary statements control what will be shown on page
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.zipContainer}>
          <Text style={styles.heading}>What's the weather today?</Text>
          {editZip ? (
            <TextInput
              placeholder="Zip Code"
              style={styles.zipInput}
              onChangeText={setZip}
              value={zip}
              onBlur={() => getWeather()}
            />
          ) : (
            <Pressable onPress={() => setEditZip(!editZip)}>
              <Text style={styles.zipInput}>Search for a zip code</Text>
            </Pressable>
          )}
        </View>
      ) : (
        <Weather weather={weatherCondition} temperature={temp} city={city} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  zipContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 15,
  },
  zipInput: {
    width: 150,
    height: 25,
    borderWidth: 1,
    paddingTop: 3,
    textAlign: "center",
    color: "lightgrey",
    alignSelf: "center",
  },
});
