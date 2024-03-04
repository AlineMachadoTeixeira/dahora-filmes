/* rnfs escola esse antes de começar  e tire alguma coisas e mude outras */
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";
import BuscarFilmes from "./src/screens/BuscarFilmes";
import Resultados from "./src/screens/Resultados";

//Criação / inicialização do mecanismo Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#a471f9" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: "Conheça nosso App" }}
          />

          <Stack.Screen name="Privacidade" component={Privacidade} />

          <Stack.Screen
            name="BuscarFilmes"
            component={BuscarFilmes}
            options={{ title: "Qual filme quer pesquisar?" }}
          />

          <Stack.Screen name="Resultados" component={Resultados} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
