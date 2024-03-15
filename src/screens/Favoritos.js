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

export default function Favoritos({ navigation }) {
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
  // console.log(listaFavoritos);

  const excluirTodosFavoritos = async () => {
    Alert.alert(
      "Excluir TODODS?",
      "Tem certeza que deseja excluir TODOS os favoritos",
      [
        /* propriedade style (aparência do botão) SOMENTE no IOS que faz a diferencia deixa azul e vermelho */
        {
          text: "Cancelar",
          style: "cancel", // cancela, pois está em duvida se quer apagar
        },

        {
          text: "Sim, manda ver",
          style: "destructive", // confirma que vai apagar
          onPress: async () => {
            //Removemos nossos storage de favoritos
            await AsyncStorage.removeItem("@favoritosaline");

            //Atualizamos o state para sejam removidos da tela
            setListaFavoritos([]);
          },
        },
      ]
    );
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavorito}>
          <Text style={estilos.texto}>Quantidade: {listaFavoritos.length}</Text>

          <Pressable
            onPress={excluirTodosFavoritos}
            style={estilos.botaoExcluirFavorito}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="trash-outline" size={16} /> Excluir favoritos
            </Text>
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return (
              <View key={filme.id} style={estilos.item}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Detalhes", { filme });
                  }}
                  style={estilos.botaoFilme}
                >
                  <Text style={estilos.titulo}>{filme.title}</Text>
                </Pressable>

                <Pressable style={estilos.botaoExcluir}>
                  <Text>
                    <Ionicons name="trash" size={16} color="white" />
                  </Text>
                </Pressable>
              </View>
            );
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

  viewFavorito: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  texto: {
    marginVertical: 8,
  },

  botaoExcluirFavorito: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 4,
  },

  textoBotao: {
    color: "red",
  },

  item: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee8fc",
    marginBottom: 8,
    borderRadius: 4,
    alignItems: "center",
  },

  botaoFilme: {
    felx: 1,
  },

  titulo: {
    fontSize: 14,
  },

  botaoExcluir: {
    backgroundColor: "darkred",
    padding: 4,
    borderRadius: 4,
  },
});
