import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { weatherConditions } from "../utils/WeatherConditions";

const Weather = ({ weather, temperature, city }) => {
  const temp = Math.floor(temperature);
  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color },
      ]}
    >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={72}
          name={weatherConditions[weather].icon}
          color={"#fff"}
        />
        <Text style={styles.tempText}>{temp}°</Text>
      </View>
      <Text style={styles.cityText}>Current weather in {city}</Text>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
      </View>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string,
};

export default Weather;
