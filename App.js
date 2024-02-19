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
import SafeContainer from "./src/components/SafeContainer";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <SafeContainer>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text style={estilos.titulo}>Dá Hora Filmes!</Text>
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
                gap: 2,
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
          <Pressable style={estilos.botaoRodape}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="lock-closed" size={16} color="white" />
              Privacidade
            </Text>
          </Pressable>

          <Pressable style={estilos.botaoRodape}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="information-circle" size={16} color="white" />
              Sobre
            </Text>
          </Pressable>
        </View>
      </SafeContainer>
    </>
  );
}
