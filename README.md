# RemoptQr

Aplicativo Android em React Native para leitura de QR Code e exibicao de dados de Pokemon a partir da PokeAPI.

## Visao geral

- Fluxo simples: Home -> Scanner -> Resultado.
- Leitura de QR Code com a camera do dispositivo.
- Busca de dados do Pokemon por ID na PokeAPI.

## Funcionalidades

- Escaneamento de QR Code com moldura de guia.
- Consulta de Pokemon por ID via PokeAPI.
- Tela de resultado com imagem, nome e tipos.
- Botao para voltar a tela inicial.

## Tecnologias

- React Native 0.83
- React Navigation (Native Stack)
- react-native-vision-camera

## Requisitos

- Node.js >= 20
- Android Studio e SDK configurados
- Dispositivo Android ou emulador

## 📱 Ambiente de Desenvolvimento (Android Emulator)

Este projeto foi desenvolvido e testado utilizando o **Android Emulator** com a seguinte configuração:

- **Dispositivo:** Pixel 6  
- **Sistema Operacional:** Android 14 (API 34 – UpsideDownCake)  
- **Imagem do Sistema:** Google APIs Intel x86_64 Atom System Image  
- **ABI:** x86_64 (com tradução arm64-v8a)  
- **Serviços:** Google APIs  
- **Resolução:** 1080 x 2400  
- **Densidade:** 420 dpi  
- **Tamanho da Tela:** 6.4”  

> ⚠️ Recomenda-se utilizar um emulador com API 34 ou superior para garantir compatibilidade total com as funcionalidades do aplicativo, especialmente recursos de câmera.


## Como rodar em desenvolvimento

1) Instale as dependencias:

```sh
npm install
```

2) Inicie o Metro:

```sh
npm start
```

3) Em outro terminal, rode no Android:

```sh
npm run android
```

## Gerar APK (debug)

Dentro da pasta `android`:

```sh
./gradlew assembleDebug
```

Arquivo gerado:

`android/app/build/outputs/apk/debug/app-debug.apk`

## Gerar APK (release)

1) Crie um keystore (uma unica vez):

```sh
keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

2) Coloque o keystore em `android/app/`.

3) Em `android/gradle.properties`:

```properties
MYAPP_UPLOAD_STORE_FILE=my-release-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=...
MYAPP_UPLOAD_KEY_PASSWORD=...
```

4) Em `android/app/build.gradle`, configure `signingConfigs` e `buildTypes` (release).

5) Gere o APK:

```sh
./gradlew assembleRelease
```

Arquivo gerado:

`android/app/build/outputs/apk/release/app-release.apk`

## Permissoes Android

O app usa camera. A permissao esta em `android/app/src/main/AndroidManifest.xml`:

- `android.permission.CAMERA`

## Formato do QR Code

O QR Code deve conter um texto com o ID do Pokemon apos `: ` (dois caracteres, dois-pontos e espaco).

O app extrai o valor apos `: ` e consulta em:

- https://pokeapi.co/api/v2/pokemon/{id}

## Estrutura de pastas (principais)

```
src/
  screens/
    HomeScreen.tsx
    ScannerScreen.tsx
    ResultScreen.tsx
  services/
    pokeApi.ts
  components/
    PrimaryButton.tsx
```

## Scripts disponiveis

- `npm start` - inicia o Metro
- `npm run android` - roda no Android
- `npm run lint` - lint

## Observacoes

- Projeto focado apenas em Android.
- Caso o QR nao esteja no formato esperado, a consulta pode falhar.

## Licenca

Uso interno/educacional.