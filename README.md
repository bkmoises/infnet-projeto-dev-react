# INFNET -  Projeto de Desenvolvimento de Aplicações Interativas com React

## Criticas de Cinema
- Autor: Moisés Reis de Andrade

---

## Instruções de Execução

Para executar a aplicação localmente, siga as etapas abaixo:

### Pré-requisitos

1. **Instalar o Node.js e npm**:
   O Node.js é necessário para executar a aplicação, e o npm (Node Package Manager) é instalado automaticamente com o Node.js. Siga os passos abaixo para instalar:

   - **Windows**:
     - Acesse a página oficial do [Node.js](https://nodejs.org/) e baixe o instalador para Windows.
     - Execute o instalador e siga as instruções na tela, certificando-se de marcar a opção para instalar o npm.

   - **macOS**:
     - Abra o Terminal e execute o seguinte comando para instalar o Node.js via Homebrew (caso não tenha o Homebrew, instale-o primeiro):
       ```bash
       brew install node
       ```

   - **Linux**:
     - Para distribuições baseadas em Debian/Ubuntu, execute:
       ```bash
       sudo apt update
       sudo apt install nodejs npm
       ```

   Após a instalação, você pode verificar se o Node.js e o npm foram instalados corretamente com os comandos:
   ```bash
   node -v
   npm -v
   ```

### Passo a Passo

1. **Clone o Repositório**:
   Abra o terminal e clone o repositório onde o projeto está armazenado:
   ```bash
   git clone https://github.com/bkmoises/infnet-projeto-dev-react
   cd infnet-projeto-dev-react
   ```

2. **Instale as Dependências**:
   Execute o seguinte comando para instalar todas as dependências necessárias, conforme especificado no `package.json`:
   ```bash
   npm install
   ```

3. **Inicie o Servidor JSON**:
   Para simular o backend da aplicação usando JSON Server, execute o comando:
   ```bash
   npx json-server --watch db.json --port 3000
   ```
   Este comando inicia o servidor JSON em `http://localhost:3000`, onde `data.json` é o arquivo que contém os dados fictícios.

4. **Inicie a Aplicação**:
   Em uma nova janela do terminal, inicie a aplicação React com o comando:
   ```bash
   npm run dev
   ```
   Isso executa a aplicação e você pode acessá-la em `http://localhost:5173` (ou outra porta, se configurada).

### Execução Opcional
Como alternativa, para executar o projeto de forma mais rápida, você pode usar o seguinte comando, que inicia tanto o servidor JSON quanto a aplicação React ao mesmo tempo:
```bash
npm run server
```
Esse comando deve estar configurado no seu `package.json` para facilitar a execução simultânea.

### Acesso
- Abra o navegador e navegue até `http://localhost:5173` para acessar a aplicação.

---
