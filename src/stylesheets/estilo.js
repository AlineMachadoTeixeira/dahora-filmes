import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  viewLogo: {
    flex: 3,
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 144,
    height: 144,
  },

  titulo: {
    fontFamily: "Monoton-Regular",
    fontSize: 28,
    color: "#5a51a6",
  },

  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "80%",
    justifyContent: "space-evenly",
  },

  botao: {
    padding: 16,
    backgroundColor: "#5451a6",
  },

  textoBotao: {
    fontFamily: "NotoSans",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  viewRodape: {
    width: "100%",
    backgroundColor: "#5451a6",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  botaoRodape: {
    padding: 16,
  },
});

export default estilos;
