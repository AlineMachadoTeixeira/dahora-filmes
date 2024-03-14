// atalho rnfs
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { Feather, Ionicons } from "@expo/vector-icons";

/* Hook necessario pois não estamos em uma tela com acesso à prop navigation */
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardFilme({ filme }) {
  /*  //poster_path é o nome dado pela api    
    Extraindo as informações do filme (titulo e imagem de capa) */
  const { title, poster_path } = filme;

  /* Acessar recursos de navegação */
  const navigation = useNavigation();

  const salvar = async () => {
    /* 1) Verificar/carregar os favoritos armazenados no AsyncStorage. Usamos o getItem do AsyncStorage para analisar se existe um armazenamento a const filmeFavoritos. Se não existir, será criado posteriormente*/
    const filmesFavoritos = await AsyncStorage.getItem("@favoritosaline");

    /* 2) Verificar/criar uma lista de filmes favoritos (dados) */

    /* 3) Verificar se já tem algum filme na lista */

    /* 4) Se o filme não estiver na lista, então vamos colocá-lo */

    /* 5) Usamos o asyncStorage  para gravar no armazenamento offline do dispositivo*/

    try {
    } catch (error) {
      console.log("Error: " + error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar o filme");
    }
  };

  return (
    <View style={estilos.card}>
      <Image
        /* Imagem ficou ruim user resizeMode testa as opções */
        resizeMode="cover"
        style={estilos.imagem}
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
            : imagemAlternativa
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>
        <View style={estilos.botoes}>
          <Pressable
            style={estilos.botao}
            /* Esse filme é do detalhe para puxa da api avaliação titulo descrição e etc */
            onPress={() => navigation.navigate("Detalhes", { filme })}
          >
            <Text style={estilos.textoBotao}>
              <Feather name="book-open" size={15} color="#a471f9" /> Leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="add-circle" size={15} color="#a471f9" /> Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    marginVertical: 8,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#a471f9",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagem: {
    height: 150,
    width: 100,
    flex: 1,
  },
  corpo: {
    flex: 2,
  },
  titulo: {
    backgroundColor: "#a471f9",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 14,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botao: {
    borderColor: "#a471f9",
    borderWidth: 1,
    padding: 8,
  },
  textoBotao: {
    color: "#a471f9",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
