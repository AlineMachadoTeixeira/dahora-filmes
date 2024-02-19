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

import { useFonts } from "expo-font"; /* Para fonte */
import * as SplashScreen from "expo-splash-screen"; /* Para fonte */
import { useCallback } from "react";

/* Manter a tela splash visível enquanto não programamos a ação de ocutar.    Para fonte */
SplashScreen.preventAutoHideAsync();

export default function App() {
  /* Para fonte */
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("./assets/fonts/Monoton-Regular.ttf"),
    NotoSans: require("./assets/fonts/NotoSans-VariableFont.ttf"),
  });

  /* Função atrelada ao hook useCallback. 
     Quando uma função está conectada ao useCallback, garantimos que a refereência dela é armazenada na memória somente uma vez.
     Para fonte  */
  const aoAtualizarLayout = useCallback(async () => {
    /* Se estiver tudo ok com o carregamento */
    if (fontsLoaded || fontError) {
      /* Escondemos a splashsreen */
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* onLayout={aoAtualizarLayout} Para fonte */}
      <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
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
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}
