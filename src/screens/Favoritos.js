//atalho: rnfs
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function Favoritos() {
  /* State para resistrar os dados carregandos do storage */
  const [listaFavoritos, setListaFavoritos] = useState([]);

  /* useEffect será disparado assim que o usuário entrar na tela Favoritos (portanto, somente uma vez ) */
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        /* Acessamos o storage criando previamente e guardamos as strings de dados */
        const dados = await AsyncStorage.getItem("@favoritosaline");

        /* Se houver dados, transformamos em objeto (JSON.parse) e atualizamos o state com a lista de favoritos */
        if (dados) {
          setListaFavoritos(JSON.parse(dados));
        }
      } catch (error) {
        console.error("Erro ao carregar os dados: " + error);
        Alert.alert("Erro", "Erro ao carregar os dados.");
      }
    };
    carregarFavoritos();
  }, []);

  //log no state
  console.log(listaFavoritos);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavorito}>
          <Text style={estilos.texto}>Quantidade: {listaFavoritos.length}</Text>

          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="trash-outline" size={16} /> Excluir favoritos
            </Text>
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return <Text key={filme.id}> {filme.title} </Text>;
          })}
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },

  texto: {
    marginVertical: 8,
  },
});
