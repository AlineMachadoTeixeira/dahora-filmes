/* rnfs escola esse antes de começar  e tire alguma coisas e mude outras */
import {
  Button,
  Image,
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
          <Button title="Buscar Filmes" />
          <Button title="Favoritos" />
        </View>
        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}
