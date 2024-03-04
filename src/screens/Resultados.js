//atalho: rnfs
import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";

/* Prop route
Prop especial e definida pelo React Navagation. Através dela que é possivel acessar valores passandos por meio de navegação entre telas */
export default function Resultados({ route }) {
  // capturando o parâmetro filme vindo de buscarFilmes
  const { filme } = route.params;
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você buscou por: {filme}</Text>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },

  texto: {
    marginVertical: 8,
  },
});
