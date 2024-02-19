//atalho: rnfs -- para isso instalar a intenção  ES7+ React/Redux/React-Native snippets
import { SafeAreaView, StyleSheet } from "react-native";

import { useFonts } from "expo-font"; /* Para fonte */
import * as SplashScreen from "expo-splash-screen"; /* Para fonte */
import { useCallback } from "react";

/* Manter a tela splash visível enquanto não programamos a ação de ocutar.    Para fonte */
SplashScreen.preventAutoHideAsync();

export default function SafeContainer({ children }) {
  /* Para fonte */
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("../../assets/fonts/Monoton-Regular.ttf"),
    NotoSans: require("../../assets/fonts/NotoSans-VariableFont.ttf"),
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
    /*  onLayout={aoAtualizarLayout} Para fonte */
    <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
      {children}
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
