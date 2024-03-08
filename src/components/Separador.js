// atalho rnfs

import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Separador() {
  return (
    <View style={estilos.viewSeparador}>
      {/* Usou icone desse site -->  https://icons.expo.fyi/Index/MaterialCommunityIcons/movie-roll    e importou da linha 4 */}
      <MaterialCommunityIcons name="movie-roll" size={12} color="#a471f9" />
      <MaterialCommunityIcons name="movie-roll" size={12} color="#a471f9" />
      <MaterialCommunityIcons name="movie-roll" size={12} color="#a471f9" />
    </View>
  );
}

const estilos = StyleSheet.create({
  viewSeparador: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
