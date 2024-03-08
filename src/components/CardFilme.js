// atalho rnfs
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme() {
  return (
    <View style={estilos.card}>
      <Image style={estilos.imagem} source={imagemAlternativa} />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>Nome do Filme</Text>
        <View style={estilos.botoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Leia mais</Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    marginVertical: 4,
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
    fontSize: 16,
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
