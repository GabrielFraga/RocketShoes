# RocketShoes
Pequena aplicação que demonstra um site e um app de vendas online


Para rodar essa aplicação, basta:

Instalar o JSON Server
```
npm install -g json-server
```

Acessar a pasta *backend* pelo terminal e executar o comando:
```
json-server server.json -p 3333
```
Isso iniciará a "API" de demonstração com alguns produtos localmente.


Inicie o site acessando *frontend* pelo terminal e executando os comandos:

```
yarn ou npm i

yarn start ou npm start

```

Para iniciar o app, será preciso ter o ambiente necessário para React Native instalado. Caso não possua, acesse este guia: https://docs.rocketseat.dev/ambiente-react-native/introducao

Defina as variáveis de ambiente. Para isso, abra o arquivo *.env* na pasta *mobile* e preecha os campos conforme seu ambiente.

A variável "APP_URL" deve ser preenchida com a url corresponde ao dispositivo utilizado (celular ou emulador).

Inicie o aplicativo xecutando os comandos:

```
yarn ou npm i

sudo react-native run-android

sudo react-native start
```

Caso o aplicativo apresente erros, pode ser necessário rodar os seguintes comandos em uma nova aba do terminal:

```
adb reverse tcp:8081 tcp:8081

adb reverse tcp:3333 tcp:3333
```
Após isso, feche e abra o app novamente.
