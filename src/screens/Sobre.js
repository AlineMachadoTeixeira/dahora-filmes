//atalho: rnfs
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";

import logoAPI from "../../assets/images/logo-tmdb.png";

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        {/* ScrollView para tela rola. Cima e baixo  showsVerticalScrollIndicator={false} para não aparecer a barrinha   */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={estilos.subtitulo}>Sobre o app Dá Horas Filmes</Text>

          <Text style={estilos.texto}>
            O <Text style={estilos.nomeApp}>Dá Horas Filmes</Text> é um
            aplicativo com a finalidade de permitir a busca por informações
            sobre filmes existentes na base de dados pública disponibilizada
            pelo site The Movie Database (TMDb).
          </Text>

          <View style={estilos.viewApi}>
            {/* onPress faz uma função para fazer a imagem ficar com link de navegação */}
            <Pressable
              onPress={() =>
                Linking.openURL("https://www.themoviedb.org/?language=pt-BR")
              }
            >
              <Image
                /*  resizeMode="contain" é para não corta a imagem, pois não é uadrada*/
                resizeMode="contain"
                source={logoAPI}
                style={estilos.imagemApi}
              />
            </Pressable>
          </View>

          <Text style={estilos.texto}>
            Ao localizar um filme, o usuário pode visualizar informações como
            título, data de lançamento, nota média de avaliação e uma breve
            descrição sobre o filme e, caso queira, salvar estas informações em
            uma lista no próprio aplicativo para visualização posterior.
          </Text>

          <Text style={estilos.texto}>
            O aplicativo poderá receber novos recursos conforme o feedback e
            demanda dos usuários.
          </Text>

          <Text style={estilos.texto}>Dá Horas Filmes &copy; 2024</Text>
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },

  subtitulo: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    marginVertical: 8,
    fontSize: 18,
  },

  texto: {
    marginVertical: 8,
  },

  nomeApp: {
    fontWeight: "bold",
    color: "#5351a6",
  },

  viewApi: {
    alignItems: "center",
    marginVertical: 8,
  },

  imagemApi: {
    width: 160,
  },
});
