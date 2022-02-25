import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    alignSelf: "stretch",
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tempText: {
    fontSize: 72,
    color: "#fff",
    marginLeft: 10,
  },
  cityText: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
  bodyContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 60,
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
});

export default styles;
