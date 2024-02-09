/* rnfs escola esse antes de começar  e tire alguma coisas e mude outras */
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

import estilos from "./src/stylesheets/estilo"; /*  importando css */
import logo from "./assets/images/logo.png"; /* importando imagem */
import { Ionicons } from "@expo/vector-icons"; /* importando icone da https://icons.expo.fyi/Index */

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text>Dá Hora Filmes!</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="search" size={12} color="white" />
              Buscar Filmes
            </Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Text style={estilos.textoBotao}>
                <Ionicons name="star" size={12} color="gold" />
                Favoritos
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}
