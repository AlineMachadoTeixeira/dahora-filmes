// atalho rnfs
import { Image, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import imagem404 from "../../assets/images/pipoca-nao-encontrada.png";

const ListaVazia = () => {
  return (
    <View style={estilos.viewVaziar}>
      <Text style={estilos.titulo}>
        Ops! Não localizamos nenhum filme!{" "}
        <Entypo name="emoji-sad" size={20} color="#a471f9" />{" "}
      </Text>
      <Image resizeMode="cover" style={estilos.imagem} source={imagem404} />
    </View>
  );
};

export default ListaVazia;

const estilos = StyleSheet.create({
  viewSeparador: {
    // marginVertical: 8,
    // flexDirection: "",
    flexDirection: "row",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 16,
    color: "#a471f9",
    alignSelf: "center",
  },

  imagem: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
});
