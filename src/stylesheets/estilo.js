import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },
  viewLogo: {
    backgroundColor: "green",
    flex: 0.7,
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    backgroundColor: "orange",
    flex: 0.4,
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  viewRodape: {
    backgroundColor: "red",
    color: "red",
    flex: 0.2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default estilos;
