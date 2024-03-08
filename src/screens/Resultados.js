//atalho: rnfs
import { FlatList, StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";

/* Prop route
Prop especial e definida pelo React Navagation. Através dela que é possivel acessar valores passandos por meio de navegação entre telas */
export default function Resultados({ route }) {
  /* State para gerenciar os resultados da busca na API */
  const [resultados, setResultados] = useState([]);

  // capturando o parâmetro filme vindo de buscarFilmes
  const { filme } = route.params;

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get("/search/movie", {
          params: {
            include_adult: false,
            language: "pt-BR",
            query: filme,
            api_key: apiKey,
          },
        });
        /* Adicionando os resultados ao state */
        setResultados(resposta.data.results);
      } catch (error) {
        console.error("Deu ruim: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você buscou por: {filme}</Text>

        <View style={estilos.viewFilmes}></View>
        <FlatList
          //Prop data apontando para state contendo os dados para FlatList
          data={resultados}
          //Extraindo a chave/key de cada registro/item/filme único
          keyExtractor={(item) => item.id}
          //Prop que irá renderizar cada item/filme em um camponente
          renderItem={({ item }) => {
            return <Text>{item.title}</Text>;
          }}
        />
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

  viewFilmes: {
    marginVertical: 8,
  },
});
