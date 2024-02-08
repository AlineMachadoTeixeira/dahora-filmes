import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    backgroundColor: "green",
    flex: 3,
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    backgroundColor: "orange",
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "80%",
    justifyContent: "space-evenly",
  },
  viewRodape: {
    width: "80%",
    backgroundColor: "red",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default estilos;
