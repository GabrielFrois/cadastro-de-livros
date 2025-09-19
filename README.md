# Cadastro de Livros
Projeto desenvolvido para a disciplina de Desenvolvimento Web III, com o objetivo de criar um sistema CRUD (Create, Read, Update, Delete) completo para o gerenciamento de livros, utilizando um backend robusto com Node.js e TypeScript conectado a um banco de dados MongoDB.

---

## Tecnologias Utilizadas
O projeto foi construído com as seguintes tecnologias e ferramentas:

### Backend:
- Node.js
- TypeScript
- Express
- MongoDB com Mongoose

### Frontend:
- HTML5
- CSS3
- JavaScript (ES6+) com fetch API

---

## Como Executar o Projeto
Para rodar a aplicação localmente, siga os passos abaixo:

### 1. Pré-requisitos:
- Ter o Node.js instalado.
- Ter o MongoDB instalado e rodando na sua máquina.

### 2. Clone o repositório:
```bash
git clone https://github.com/GabrielFrois/cadastro-de-livros.git
cd cadastro-de-livros
```

### 3. Instale as dependências:
```bash
npm install
```

### 4. Crie o banco de dados:
- Abra o MongoDB Compass (ou outro cliente de sua preferência).
- Crie um novo banco de dados chamado `crud_livros`.
- Dentro dele, crie uma coleção chamada `livros`.

### 5. Inicie o servidor:
- O comando `start` irá compilar o código TypeScript e iniciar o servidor.
```bash
npm start
```

### 6. Acesse a aplicação:
- Abra seu navegador e acesse: http://localhost:3000

---

## Funcionalidades
- **Cadastrar Livros:** Adicionar novos livros ao banco de dados informando título, autor e ano de publicação.
- **Listar Livros:** Visualizar todos os livros cadastrados em uma lista organizada.
- **Atualizar Livros:** Editar as informações de um livro já existente.
- **Excluir Livros:** Remover um livro do banco de dados.
- **Validação de Entrada:** O sistema impede a atualização de um livro se o ano fornecido não for um número válido.
