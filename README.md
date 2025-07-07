# Back-end--I

Projeto desenvolvido para o curso Programação Backend I da Coderhouse.

## Descrição

API REST para gerenciamento de produtos e carrinho de compras com interface web em tempo real, implementada com arquitetura MVC, WebSockets e armazenamento em arquivos JSON.

## Estrutura do Projeto

```
Back-end--I/
|-- src/
|   |-- controller/       # Controladores da aplicação
|   |   |-- CartController.js
|   |   |-- HomeController.js
|   |   |-- ProductsController.js
|   |   `-- realTimeProductsController.js
|   |-- middlewares/      # Middlewares customizados
|   |-- model/           # Modelos de dados
|   |   |-- CartModel.js
|   |   `-- ProductModel.js
|   |-- public/          # Arquivos estáticos
|   |-- routes/          # Definição das rotas
|   |   |-- carts.js
|   |   |-- home.js
|   |   |-- products.js
|   |   `-- realTimeProducts.js
|   |-- utils/           # Utilitários e dados
|   |   |-- events.js
|   |   `-- products.json
|   `-- view/            # Templates Handlebars
|       |-- layouts/
|       |   `-- main.handlebars
|       |-- formProduct.handlebars
|       |-- home.handlebars
|       `-- realTimeProducts.handlebars
|-- app.js               # Configuração da aplicação Express
|-- server.js            # Servidor HTTP
|-- package.json         # Dependências e scripts
|-- .env                 # Variáveis de ambiente
|-- .env.example         # Exemplo de variáveis de ambiente
`-- .gitignore           # Arquivos ignorados pelo Git
```

## Funcionalidades

### Produtos
- Listar todos os produtos
- Buscar produto por ID
- Adicionar novo produto
- Atualizar produto existente
- Deletar produto
- Visualização em tempo real com WebSockets

### Carrinho
- Criar novo carrinho
- Listar produtos do carrinho
- Adicionar produto ao carrinho

### Interface Web
- Página inicial com listagem de produtos
- Formulário para adicionar produtos
- Atualização em tempo real dos produtos
- Upload de arquivos
- Templates responsivos com Handlebars

## Endpoints da API

### Produtos
- `GET /api/products` - Lista todos os produtos
- `GET /api/products/:pid` - Busca produto por ID
- `POST /api/products` - Adiciona novo produto
- `PUT /api/products/:pid` - Atualiza produto
- `DELETE /api/products/:pid` - Remove produto

### Carrinho
- `POST /api/carts` - Cria novo carrinho
- `GET /api/carts/:cid` - Lista produtos do carrinho
- `POST /api/carts/:cid/product/:pid` - Adiciona produto ao carrinho

### Interface Web
- `GET /` - Página inicial
- `GET /realtimeproducts` - Página de produtos em tempo real

## Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Socket.io** - Comunicação em tempo real
- **Handlebars** - Template engine
- **Multer** - Upload de arquivos
- **ES6 Modules** - Sistema de módulos
- **File System** - Armazenamento em JSON
- **Nodemon** - Auto-reload em desenvolvimento
- **dotenv** - Gerenciamento de variáveis de ambiente

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`
4. Execute em modo desenvolvimento:
   ```bash
   npm run dev
   ```

## Autor

**Nayara Nasaria Soares** - Projeto desenvolvido para o curso Programação Backend I da Coderhouse