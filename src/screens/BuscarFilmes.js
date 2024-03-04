import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Vibration,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function BuscarFilmes({ navigation }) {
  const [filme, setFilme] = useState("");

  /* Capturando e registrando em state o filme que o usuário deseja pesquisar */
  const filmeDigitado = (valorDigitado) => {
    /* valorDigitado(nome pode ser qualquer um)  é um parametro vindo do evento onChangeText*/
    setFilme(valorDigitado);
  };

  const buscarFilmes = () => {
    /* Se o state filme não foi definido/indicado/preenchido */
    if (!filme) {
      Vibration.vibrate(500); /* Faz o celular vibrar */
      return Alert.alert("Ops!, Você deve digitar um filme! 🎞");
    }

    /* Redirecionamento para tela de resultados passando o filme para ela  através do segundo parâmetro do método navigate. Não se esqueça de definir a prop navigation no componente linha 14*/
    navigation.navigate("Resultados", { filme });
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Star wars? Poderoso Chefão? Cruella?</Text>
        <Text style={estilos.texto}>
          Localize um filme que você viu ou gostaria de de ver!
        </Text>

        <View style={estilos.viewForm}>
          <Ionicons name="film" size={40} color="#a471f9" />
          <TextInput
            style={estilos.campo}
            placeholder="Digite o filme"
            placeholderTextColor="#a471f9"
            maxLength={40}
            autoFocus
            enterKeyHint="search" /* vira uma lupa a tecla ok ou seta de correto */
            onSubmitEditing={buscarFilmes}
            onChangeText={filmeDigitado}
          />
        </View>
        <View>
          <Pressable
            style={estilos.botao}
            onPress={buscarFilmes}
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

  viewForm: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  campo: {
    // flex: 0.98,
    marginVertical: 5,
    height: 40,
    width: "85%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#a471f9",
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
    color: "#fff",
  },

  texto: {
    marginVertical: 5,
  },
});
