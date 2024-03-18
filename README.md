https://nextjs.org/

React native
https://reactnative.dev/
https://reactnative.dev/docs/components-and-apis
https://expo.dev/

## Como usar:

- CMD do node
- Entra na pasta mobile
  Pode entrar assim:
  C:\Users\aline.mteixeira2>cd\ entre
  C:\>cd mobile entre
  C:\mobile>

- Depois :
- npx create-expo-app nome-do-meu-app
- se pedir para confirma dar proceed(y) y
  espere instalar

- cd nome-do-meu-app entre
- `npx expo start` -`npm start`

baixe o aplicativo no seu celular chamado: expo go e tive a foto do QR code que apareceu no terminal (pode fazer uma conta)

se o aplicativo cair digite no terminal a letra r

se vc sair com ctrl C e querer entrar novamente. Digite npx expo start ou npm start

Npx significa  instalar e executar

#### Instalando o axios

Axios é um cliente HTTP baseado-em-promessas para o node.js e para o navegador.

Pare o node antes de intalação

- npm install axios

#### Para usar emulador no navegador

- Android Studio
- Android SDK
- Java JDK
- Imagem Android para emuladpr

#### Para abrir emulador no navegador

- Android Studio
- `npm start` ou `npx expo start`
- depois a letra `a`

#### Para parar o emulador no navegador

- ctrl C
- para voltar `npm start` e a letra `a`

# DaHora Filmes

Exemplo de app nativo multiplataforma criando com React Native e Expo.

## Branch 2

### Utilização de fonts adicionais

- Dowload dos arqyuvos de font (formato TFF ou OTF)
- Colocação na pasta `assets\fonts`
- Instalação das libs `expo-fonts` e `expo-splash-screen`
- Importação das fontes com auxílio dos hooks useFonts e useCallback.
- Aplicação das fontes usando regras de StyleSheet.

#### Fonte

- Para fonte precisa instalar no node.js - npx expo install expo-font
- e para usar precisa instalar - npx expo install expo-splash-screen

**Pegar fontes**

- no site https://fonts.google.com/
- escolhe a fonte e baixe no seu computador
- coloque na pasta que fonts na assets

#### Biblioteca de icons

- https://docs.expo.dev/guides/icons/
- faz a instalação no terminal node. Antes pare se tiver rodando
- npm install @expo/vector-icons

- site de icons https://icons.expo.fyi/Index

- site para fontes https://docs.expo.dev/versions/latest/sdk/font/
- sie para fazer a fonte funcionar https://docs.expo.dev/versions/latest/sdk/splash-screen/

## Branch 3

- Criação das telas básicas: Sobre e Privacidade
- Componentes `ScrollView` para conteúdos maiores que a tela com suporte à rolagem
- Componente `Linking` para criação de link para a web.

## Branch 4

Para gerenciar os recursos de navegação é necessário usar uma biblioteca de navegação.

As mais conhecidas são a **React Navigation** **Expo Router**.

Atualmente (Fevereiro/2024) a mais usada e considerada padrão é a **React Navigation**

### Site oficial:

- React Navigation: https://reactnavigation.org/
- Expo Router: https://docs.expo.dev/router/introduction/

### Como usar o React Navigation com navegação Stack

#### Dependências

React Navigation: `npm install @react-navigation/native`

Dependencia para navegação:
`npx expo install react-native-screens react-native-safe-area-context`

Mecanismo de navegação Stack: `npm install @react-navigation/native-stack`

#### Configurações

No `App.js` importamos o `NavigationContainer` e o `createNativeStackNavigator`, em seguida os configuramos para determinar o `Stack.Navigator` e as telas `Stack.Screen` e seus componentes correspondentes (no momento, apenas `Home`, `Privacidade` e `Sobre`).

Em `Home`, configure os botões para navegar para as telas usando a prop `navigation` e o método `navigate`.

## Branche 05

### Solução: recursos utilizados

- componete/Recursos nativos: `TextInput`, `Vibration` e `Alert`
- Eventos:
  - `onChageText` no `TextInput` para captura em tempo real do nome do filme digitando e atualização no `state` usando a função `filmesDigitado`
  - `onSubmitEditing` no `TextInput` para acionamento da função `buscarFilmes`

## Branche 06

- Cadastro na API TheMovieDB
- Criação de uma chave de API (API Key)
- Configuração de varfikável ambiente através do arquivo `.env` contendo a API Key via Expo (arquivo ENV são ignorados no versionamento/.gitignore, poís são arquivos que outras pessoas não possam ver )

#### Consumo de dados da API

- Instalação da lib **Axios**
- Configuração/exportação do `services/api-movidedb.js` contendo a programação básica de acesso à API para uso em diferentes partes do app.

#### Exibição dos resultados

- Utilização do componente FlatList para listagem dinâmica dos resultados
- Criação do componente CardFilme com uso de prop (filme) com carregamento do title e do poster_path (imagem) de cada filme.

## Branche 07

- Loading usando `ActivityIndicador`
- Em `Resultados`, aplicamos à `FlatList` componentes personali para caso de não haver filmes na busca (`NaoEncontrado\ListEmptyComponent`) e para separar cada elemento da `Flatlist`(`separador\ItemSeparatorComponent`)
- Em `CardFilme` colocamos uma condicional para carregamento de imagem alternativa caso algum filme não tenha imagem, e também ´icones nos botões.

## Branche 08

- criação da tela `Detalhe` e adição dela à `Stack` em `App.js`
- Em `cardFilme`, utilização do hook `useNavigation` para funcionalidade de navegação do botão **Leia mais**
- Em `App.js` na `Stack.Screen Datalhes`, adicionamos uma prop `options` configurada para exibir um `Button` responsável por permitir a navegação direta para `Home`.

## Branche 09

### REcurso nativo/lib: AsyncStorage

`AsyncStorage` é uma lib mantida pela equipe do Expo que permite armazenar dados **offline** em formato de `string` no dispositivo do usuário. É uma lib semelhante à API Web `localStorage` usada em sites.

## Branche 10

### Roteiro geral para o build usando o Expo EAS

1. Acessar a sua conta Expo e criar um projeto no Expo EAS: https://expo.dev
2. instalar o eas-cli
3. Adicionar o id do projeto ao aplicativo (isso modificará o arquivo `app.json`)
4. Varificar a conta logada: `npx eas whoami`

- 4.1. Se não estiver logado, use: `npx eas login`
- 4.2 Se tiver logado e quiser deslogar (ou trocar de usuário), use `eas logout`

5. configure o build (compilação) `eas build:configure` se der erro `npx eas build:configure`
6. escolha Android e dê enter. Isso criará um arquivo chamado `eas.json` mude esse arquivo/pasta
7. É necessário modificar o segmaento `preview` dentro do `eas.json`, adcionar o código abaixo

```json
"developmentClient" : true,
    "android" : {
        "buildType": "apk",
        "gradleCommand": ":app:assembleRelease"
    },
```

8. Analisar os pacotes do projeto e outros possíveis problema: `npx -y expo-doctor`. Se sinalizar pacotes desatualizados, execute: `npx expo install --fix`. Se sinalizar outros problemas (nas imagens por exemplo), corrija.

9. Adicionar ao `eas.json` dentro de `preview` a API key de acordo com o conteúdo do arquivo `.env`:

```json
"env": {
  "EXPO_PUBLIC_NOME_ENV": "VALOE"
}  //isso está na pasta  eas.json linha 18
```

10. Iniciar o processo de build/compilação: `eas build --profile preview`

## Dica

Instale a extensão **ES7+ React** no VS Code para facilitar a programação de componentes

https://encycolorpedia.pt/search?upload=70418cc38d78aef11636c06c25fe4cf632d96c9ab9f48f63e0

Analisar: npx expo-doctor@latest

Atualizar: npx expo install --fix

Fazer novo build: eas build --profile preview

#### Fazer teste localmente depois que já fez a Branche 10

npm start

coloque o letra S (antes era a letra A )

depois use o qr-code

escolha expo ro no seu celular

Dica pode fazer o build no final.
