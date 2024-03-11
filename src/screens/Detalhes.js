// atalho rnfs
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function Detalhes({ route }) {
  const { filme } = route.params;

  const {
    title,
    overview,
    release_date,
    vote_average,
    backdrop_path, // da para fazer assim backdrop_path: imagem  para usar um apelido para a imagem
  } = filme;

  console.log(filme);

  const formataData = (data) => {
    /* "Quebramos (split)" a data em pedaço (ano, mes, dia) */
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ImageBackground
          style={estilos.imagemFundo}
          source={
            backdrop_path
              ? { uri: `https://image.tmdb.org/t/p/original/${backdrop_path}` }
              : imagemAlternativa
          }
        >
          {/* Título filme... */}
          <Text style={estilos.titulo}> {title}</Text>
        </ImageBackground>
        <View style={estilos.conteudo}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            {/* Avaliação... */}
            <Text style={[estilos.texto, estilos.avaliacao]}>
              Avaliação: {vote_average.toFixed(2)}
            </Text>
            {/* Lançamento... */}
            <Text style={[estilos.texto, estilos.lancamento]}>
              Lançamento:
              {release_date ? formataData(release_date) : " Indispinível"}
            </Text>
            {/* Descrição... */}
            <Text style={[estilos.texto, estilos.descricao]}>
              {overview || (
                <Text style={{ fontStyle: "italic" }}>
                  "Filme sem descrição"
                </Text>
              )}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: "100%",
  },
  imagemFundo: {
    height: 200,
    justifyContent: "center",
  },
  titulo: {
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "white",
    fontFamily: "NotoSans",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  conteudo: {
    padding: 16,
    flex: 1 /* Apenas para garantir a ocupação do espaço em caso de texto muito grande */,
  },
  texto: {
    paddingVertical: 4,
    fontSize: 16,
  },

  avaliacao: {
    color: "blue",
  },
  lancamento: {
    color: "darkblue",
    fontSize: 14,
  },
  descricao: {
    color: "gray",
  },
});
