//atalho: rnfs
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";

import logo from "../../assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons"; /* importando icone da https://icons.expo.fyi/Index */

export default function Home({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilos.viewLogo}>
        <Image source={logo} style={estilos.logo} />
        <Text style={estilos.titulo}>Dá Hora Filmes!</Text>
      </View>
      <View style={estilos.viewBotoes}>
        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="search" size={12} color="white" />
            Buscar Filmes
          </Text>
        </Pressable>
        <Pressable style={estilos.botao}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="star" size={12} color="gold" />
              Favoritos
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={estilos.viewRodape}>
        <Pressable
          style={estilos.botaoRodape}
          onPress={() => navigation.navigate("Privacidade")}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="lock-closed" size={16} color="white" />
            Privacidade
          </Text>
        </Pressable>

        <Pressable
          style={estilos.botaoRodape}
          onPress={() => navigation.navigate("Sobre")}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="information-circle" size={16} color="white" />
            Sobre
          </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
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
    color: "#a471f9",
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
    backgroundColor: "#a471f9",
  },

  textoBotao: {
    fontFamily: "NotoSans",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  viewRodape: {
    width: "100%",
    backgroundColor: "#a471f9",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  botaoRodape: {
    padding: 16,
  },
});
