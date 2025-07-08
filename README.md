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
|   |   |-- PageController.js
|   |   |-- ProductsController.js
|   |   `-- RealTimeProductsController.js
|   |-- middlewares/      # Middlewares customizados
|   |-- model/           # Modelos de dados
|   |   |-- CartModel.js
|   |   `-- ProductModel.js
|   |-- public/          # Arquivos estáticos
|   |   |-- css/         # Estilos CSS
|   |   |-- images/      # Imagens do projeto
|   |   `-- uploads/     # Arquivos enviados pelos usuários
|   |-- routes/          # Definição das rotas
|   |   |-- pages/       # Rotas das páginas web
|   |   |-- carts.js
|   |   |-- products.js
|   |   `-- realTimeProducts.js
|   |-- utils/           # Utilitários e dados
|   |   |-- events.js
|   |   |-- products.json
|   |   |-- carts.json
|   |   `-- upload.js
|   `-- view/            # Templates Handlebars
|       |-- layouts/
|       |-- formDeleteProduct.handlebars
|       |-- formEditProduct.handlebars
|       |-- formProduct.handlebars
|       |-- home.handlebars
|       `-- realTimeProducts.handlebars
|-- app.js               # Configuração da aplicação Express
|-- server.js            # Servidor HTTP
|-- package.json         # Dependências e scripts
|-- .env                 # Variáveis de ambiente
|-- .env.example         # Exemplo de variáveis de ambiente
|-- .editorconfig        # Configuração do editor
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
- Formulário para editar produtos
- Formulário para deletar produtos
- Atualização em tempo real dos produtos
- Upload de imagens para produtos
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
- `GET /products/add` - Formulário para adicionar produto
- `GET /products/edit/:id` - Formulário para editar produto
- `GET /products/delete/:id` - Formulário para deletar produto

## Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Socket.io** - Comunicação em tempo real
- **Express Handlebars** - Template engine
- **Multer** - Upload de arquivos
- **Method Override** - Suporte a métodos HTTP PUT/DELETE
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
3. Configure as variáveis de ambiente copiando `.env.example` para `.env`
4. Execute em modo desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse a aplicação em `http://localhost:8080`

## Autor

**Nayara Nasaria Soares** - Projeto desenvolvido para o curso Programação Backend I da Coderhouse