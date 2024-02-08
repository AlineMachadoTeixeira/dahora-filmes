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
            <Text style={estilos.textoBotao}>Buscar Filmes</Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Favoritos</Text>
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
