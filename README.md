# Back-end--Coderhouse

Projeto desenvolvido para o curso de Programação Backend da Coderhouse.

## Estrutura do Projeto

A estrutura completa do projeto é organizada da seguinte forma:

```
Back-end--I/
|-- src/                  # Código-fonte principal da aplicação
|   |-- controller/       # Controladores que gerenciam a lógica de negócios
|   |-- model/            # Modelos que representam os dados e interagem com o banco
|   |-- view/             # Visualizações que apresentam os dados ao usuário
|   |-- routes/           # Rotas que mapeiam URLs para controladores
|
|-- app.js                # Ponto de entrada da aplicação
|-- package.json          # Dependências e scripts do projeto
|-- package-lock.json     # Versões exatas das dependências
|-- .gitignore            # Arquivos ignorados pelo Git
|-- .editorconfig         # Configurações de formatação do editor
```

### Componentes da Arquitetura MVC

- **Model**: Responsável pela manipulação, validação e regras de negócio dos dados
- **View**: Responsável pela apresentação dos dados e interface com o usuário
- **Controller**: Intermediário entre Model e View, processa requisições e retorna respostas
- **Routes**: Define os endpoints da API e direciona as requisições para os controladores apropriados

### Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript server-side
- **Express**: Framework web para criação de APIs e aplicações web
- **Nodemon**: Utilitário para reiniciar automaticamente o servidor durante o desenvolvimento
- **dotenv**: Gerenciamento de variáveis de ambiente