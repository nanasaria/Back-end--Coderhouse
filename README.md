# Back-end--I

Projeto desenvolvido para o curso Programação Backend I da Coderhouse.

## Descrição

API REST para gerenciamento de produtos e carrinho de compras, implementada com arquitetura MVC e armazenamento em arquivos JSON.

## Estrutura do Projeto

```
Back-end--I/
|-- src/
|   |-- controller/       # Controladores da aplicação
|   |   |-- CartController.js
|   |   `-- ProductsController.js
|   |-- middlewares/      # Middlewares customizados
|   |-- model/           # Modelos de dados
|   |   |-- CartModel.js
|   |   `-- ProductModel.js
|   |-- routes/          # Definição das rotas
|   |   |-- carts.js
|   |   `-- products.js
|   |-- utils/           # Arquivos de dados JSON
|   |   |-- carts.json
|   |   `-- products.json
|   `-- view/            # Camada de visualização
|-- app.js               # Configuração da aplicação Express
|-- server.js            # Servidor HTTP
|-- package.json         # Dependências e scripts
`-- .env                 # Variáveis de ambiente
```

## Funcionalidades

### Produtos
- Listar todos os produtos
- Buscar produto por ID
- Adicionar novo produto
- Atualizar produto existente
- Deletar produto

### Carrinho
- Criar novo carrinho
- Listar produtos do carrinho
- Adicionar produto ao carrinho

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

## Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
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