import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function BuscarFilmes() {
  const [texto, setTexto] = useState("");
  const pesquisa = () => {
    if (pesquisa) {
      Alert.alert("");
    } else {
    }
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text>Localize um filme que você viu ou gostaria de de ver!</Text>
        <Text>Localize um filme que você viu ou gostaria de de ver!</Text>

        <View style={estilos.pesquisa}>
          <Ionicons name="film" size={40} color="#a471f9" />
          <TextInput style={estilos.input} placeholder="Digite o filme" />
        </View>
        <View>
          <Pressable
            style={estilos.botao}
            onPress={pesquisa}
            // onSubmitEditing
          >
            <Text style={estilos.textoBotao}>PROCURAR</Text>
          </Pressable>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },

  pesquisa: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  input: {
    height: 40,
    width: "85%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "80%",
    justifyContent: "space-evenly",
  },

  botao: {
    padding: 10,
    backgroundColor: "#a471f9",
  },

  textoBotao: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});
