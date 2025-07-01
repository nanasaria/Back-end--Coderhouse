/*
Introdução ao ES9

O ECMAScript 9 (ES9) introduziu funcionalidades como o 
método finally para promessas e os operadores rest e
spread para facilitar a gestão de erros e a manipulação de
objetos e arrays.

Método Finally
Método executa independentemente se uma promessa foi resolvida
ou rejeitada. Método útil para tarefas de limpeza, como
fechar conexões, liberar recursos ou parar animações.

Operadores rest e spread
Os operadores rest (...) e spread (...) simplificam a 
manipulação de arrays e objetos em JavaScript.

Operador rest: É usado dentro de uma função para reunir
todos os argumentos que não estão explicitamente definidos
como parâmetros da função. Ele os agrupa em um único array.
Ex:

function somar(...numeros) { }

Nesse caso, agrupa todos os argumentos passados par a função
somar em um array chamado numeros.

Operador spread: Expande os elementos de um array ou as 
propriedades de um objeto em outro contexto. Útil para
clonar arrays e objetos, combinar múltiplos arrays ou
objetos, ou passar múltiplos elementos de um array como
argumentos para uma função. Por exemplo: [...numeros, 4, 5].

Inovações introduzidas no ES10
Uma das inovações mais notáveis estão dynamic import e 
array.flat, que abordam problemas comuns no carregamento de 
módulos e na manipulação de arrays complexos.

Dynamic Import (Importação Dinâmica): Permite carregar módulos
de forma assíncrona e sob demanda, ou seja, apenas quando 
são necessários.

Uso: Pode-se usar a importação dinâmica em qualquer bloco de
código, permitindo que as aplicações carreguem apenas o
código necessário no momento exato.

Exemplo: 
import('./module.js')
.then(module => { module.funcion(); })
.catch(error => { 
    console.error('Erro ao carregar o módulo:', error); 
});

Vantagens:
- Melhora o desempenho ao reduzir o carregamento inicial da 
aplicação.
- Facilita a divisão de código (code-splitting), o que é bom
para aplicações grandes e complexas.

    O que é code splitting?
    Code-splitting é uma técnica de otimização no 
    desenvolvimento front-end que consiste em dividir o 
    código JavaScript em arquivos menores (chamados chunks) 
    que são carregados sob demanda, ao invés de enviar todo o 
    código da aplicação de uma vez quando o usuário acessa a 
    página.
    No back-end, embora não se utilize code-splitting da mesma 
    forma, é possível fazer o carregamento sob demanda de 
    módulos (lazy-loading) para reduzir o tempo de 
    inicialização ou economizar memória, carregando 
    determinados módulos apenas quando forem necessários.

- Permite carregar funcionalidades opcionais apenas quando 
necessárias, resultando em um uso mais eficiente dos
recursos.

Array.flat: O método array.flat() é uma função que simplifica
a estrutura de arrays aninhados, convertendo-os em array
plano.

Uso: array.flat() pode ser usado como um argumento opcional
que indica a profundidade na qual o array deve ser achatado.
O valor padrão é 1.

Exemplo:
const arr = [1, 2, [3, 4, [5, 6]]]; 
const flattened = arr.flat(2);
Resultado: [1, 2, 3, 4, 5, 6]

Vantagens:
- Simplifica a manipulação de dados complexos em aplicações
que trabalham com arrays aninhados.
- Torna o código mais legível e fácil de manter.
- Permite que os desenvolvedores lidem com estruturas de
dados de maneira mais eficiente.

Novas funcionalidades no ES10:
Trim
O método trim() é usado para remover os espaços em branco 
que estão no início e no final de uma string. Não afeta
os espaços que estão no meio da string. Existem também:
- trimStart: Remove apenas os espaços no início da string.
- trimEnd: Remove apenas os espaços no final da string.

Flat
O método flat() é usado para "achatar" um array, ou seja
para reduzir a profundidade dos arrays aninhados 
(arrays dentro de arrays). Este método cria um novo array
onde os elementos dos sub-arrays foram mesclados de acordo
com a profundidade especificada.

Novidades no ES11

Operador Nullish (??)
É uma ferramenta que facilita a atribuição de valores padrão
apenas quando um valor é null ou undefined. Este operador
se diferencia do operador lógico OR (||), que considera
"falsy" outros valores como 0, "" (string vazia) ou false.
O operador nullish garante que os valores padrão sejam 
atribuídos apenas na ausência de um valor significativo 
(null ou undefined).

Variáveis Privadas em Classes
Variáveis privadas são declaradas usando o prefixo #. As
variáveis privadas em classes garantem que os atributos
e métodos marcados com # sejam acessíveis apenas dentro
da classe.

Programação Síncrona e Assíncrona

Sincronismo
O sincronismo refere-se a um modelo de execução no qual as 
tarefas são processadas em sequência, ou seja, uma após
a outra. Em um ambiente síncrono, o código é executado
linha por linha e cada operação deve ser concluída antes
que a próxima possa começar.

Assincronismo
O assincronismo, por outro lado, permite que as múltiplas
tarefas sejam executadas ao mesmo tempo, sem precisar 
esperar que uma tarefa termine antes de iniciar a próxima.
Quando a tarefa assíncrona termina, uma função é executada 
para lidar com o resultado da operação, sem bloquear o 
fluxo principal do programa.

Callbacks e seu Uso

Callback é uma função que é passada como argumento para outra
função e é invocada dentro dessa função para completar alguma
ação específica.

Estrutura de um Callback
Uma função é passada como parâmetro para outra função 
e é executada quando a tarefa principal dessa função 
é concluída.

Gestão de Eventos com JavaScript
Eventos permitem que os desenvolvedores interajam com o 
usuário e respondam às suas ações dentro de uma página web.
Os eventos são ações ou ocorrências que acontecem no navegador,
como clicar em um botão, mover o mouse ou pressionar uma tecla.

Compreender os Tipos de Eventos
Alguns dos eventos mais comuns:

Eventos de mouse: Como click, dblclick, mouseover, mouseout, etc.
Eventos de teclado: Como keydown, keyup, keypress.
Eventos de formulário: Como submit, change, input.
Eventos de janela: Como load, resize, scroll.

O contexto de this nos Eventos

Quando se gerencia um evento no JavaScript, o contexto de this
dentro do manipulador de eventos normalmente se refere
ao elemento que disparou o evento.

Introdução aos Servires Web
Um servidor web é essencial na arquitetura de aplicações web
modernas e utiliza o protocolo HTTP. A principal função é lidar 
com requisições de clientes e devolver respostas.

Protocolo HTTP
Esse protocolo é o padrão que define como as mensagens são 
formatadas entre cliente e servidor. 
O cliente (navegador) envia uma requisição HTTP ao servidor 
e o servidor ao terminar de processar a solicitação retorna 
uma resposta HTTP com o conteúdo solicitado.

Estrutura da Requisição HTTP
- Método HTTP: Define a ação a ser realizada 
               (GET, POST, PUT, DELETE...)

- URL: Endereço do recurso solicitado.

- Cabeçalhos: Informações sobre a requisição, como tipo de
              conteúdo aceito ou detalhes de autenticação.

- Corpo: Contém dados a serem enviados pro servidor.

Estrutura de uma resposta HTTP
- Código de status: Um número que indica o resultado da 
                    requisição.

- Cabeçalhos: Informações sobre a resposta, como o tipo
              de conteúdo (Content-Type), a data ou a 
              configuração de cache.

- Corpo: O conteúdo do recurso solicitado, como HTML,
         JSON, imagens, etc


Papel do Servidor na Arquitetura Cliente-Servidor
Nessa arquitetura, o cliente requisita e o servidor lida
com as requisições retornando respostas. O servidor não
retorna apenas recursos solicitados, mas pode realizar
autenticações de usuários, processar dados e se comunicar
com bancos de dados.

Framework Express.js
Express.js é um framework minimalista e flexível para 
facilitar a criação de servidores e aplicações web.

Para o Express reconhecer JSON, precisamos incluir o
middleware que reconhece e processa os JSONs encaminhados.
Exemplo: app.use(express.json())

Benefícios
- Simplificar a gestão de rotas e middlewares.
- Rotas para lidar com diferentes tipos de requisições HTTP.
- Uso de middleware.
- Sintaxe clara e concisa.
- Gerenciamento de cookies.
- Tratamento de arquivos estáticos.

Módulo HTTP Nativo x Express
Ao usar o módulo nativo, é necessário escrever muitas linhas
de código para gerenciar rotas, lidar com requisições e 
processar respostas.

Classificação dos Códigos de Status HTTP
1xx: Informativos: Indicam que a solicitação foi recebida e 
está sendo processada. Exemplo: 100 Continue.

2xx: Sucesso: Indicam que a solicitação foi concluída com 
sucesso. 
200 OK: É o código de sucesso mais comum. Indica que a 
solicitação foi processada corretamente e o servidor 
retorna o recurso solicitado.
201 Created: Indica que uma solicitação POST resultou na 
criação de um novo recurso.


3xx: Redirecionamento: Indicam que é necessária uma ação 
adicional por parte do cliente para concluir a solicitação.
301 Moved Permanently: Indica que o recurso solicitado foi 
movido permanentemente para uma nova URL.
302 Found: Indica que o recurso solicitado está temporariamente 
em uma localização diferente.


4xx: Erros do Cliente: Indicam que houve um problema com a 
solicitação enviada pelo cliente.
400 Bad Request: Indica que a solicitação não pôde ser 
processada devido a um erro do cliente, como uma sintaxe 
incorreta.
401 Unauthorized: Indica que a autenticação é necessária e 
que o cliente não forneceu credenciais válidas.
403 Forbidden: Indica que o servidor entende a solicitação, 
mas se recusa a autorizá-la.
404 Not Found: Um dos códigos de erro mais comuns. Indica 
que o servidor não conseguiu encontrar o recurso solicitado. 
Isso geralmente ocorre quando a URL está incorreta ou o 
recurso foi removido.


5xx: Erros do Servidor: Indicam que o servidor falhou ao 
processar uma solicitação válida.
500 Internal Server Error: Indica que ocorreu um erro 
genérico no servidor enquanto tentava processar a 
solicitação. Este código é um "catch-all" para erros 
imprevistos no servidor.

502 Bad Gateway: Indica que um servidor que atuava como 
gateway ou proxy recebeu uma resposta inválida do servidor 
upstream.
503 Service Unavailable: Indica que o servidor não está 
disponível temporariamente, geralmente devido a manutenção 
ou sobrecarga.

Importância dos Códigos de Status HTTP
Os códigos HTTP são cruciais para a gestão de respostas e 
requisições. Elas permitem que problemas sejam identificados,
melhoram a experiência do usuário e garantem a comunicação 
entre o cliente e o servidor.

- Diagnóstico: Códigos de erro como 404 ou 500 são úteis 
para identificar e solucionar problemas em aplicações.

- Redirecionamento e Manutenção: Códigos como 301 e 503 
permitem gerenciar redirecionamentos e períodos de 
manutenção de maneira adequada.

- Segurança: Códigos como 401 e 403 ajudam a proteger 
recursos restritos, assegurando que apenas os usuários 
autorizados possam acessá-los.

Métodos de Requisição HTTP
Os métodos de requisição HTTP são as ações que um cliente
pode solicitar que o servidor realize sobre um recurso.

Principais métodos:
- Get: Utilizado para solicitar dados de um servidor.
       Apenas leitura.

- Post: Utilizado para enviar dados ao servidor. 
        Para criar novos recursos ou realizar uma ação.

- Put: Utilizado para atualizar um recurso existente no 
       servidor.

- Delete: Utilizado para deletar um recurso específico
          no servidor.

Conceitos Básicos de uma API REST
REST (Representational State Transfer) -> Arquitetura 

O que é uma API?
Uma API (Interface de Programação de Aplicações) é um 
conjunto de regras e definições que permite diferentes 
aplicações ou serviços se comunicarem.

O que é uma API REST?
REST é uma arquitetura utilizada para projetar APIs que
permitem a comunicação cliente-servidor através de HTTP.

Princípios Básicos das APIs REST:
- Cliente-Servidor: Separação de cliente e servidor.

- Stateless (Sem Estado): Cada solicitação de um cliente 
deve conter as informações necessárias para entender e
processar a solicitação. O servidor não armazena o 
estado da sessão.

- Uso de HTTP e seus métodos

- Recursos Identificáveis: Os recursos são identificados
através de URLs. Cada recurso tem sua própria URL, o que
facilita o acesso e manipulação dos dados.

- Representações de Recursos: Os recursos são representados
em diferentes formatos, geralmente JSON.

Como funcionam as APIs REST
Em uma API REST, o cliente envia uma solicitação HTTP para 
uma URL específica que representa um recurso. O servidor 
processa a solicitação e retorna uma resposta com os dados 
solicitados ou uma mensagem indicando o sucesso ou falha 
da operação.

Estrutura e Características de uma API REST
Uma API REST deve cumprir com certos princípios e 
características para ser considerada RESTful.

1. Arquitetura Cliente-Servidor

2. Stateless (Sem Estado)
O servidor não deve armazenar nenhuma informação sobre o 
estado da sessão entre diferentes solicitações.

3. Cacheable
As respostas devem ser armazenáveis em cache sempre que
possível. Isso significa que o servidor deve indicar ao
cliente se uma resposta pode ser armazenada em cache e
por quanto tempo. O uso de cache reduz a carga no servidor 
e melhora a eficiência e velocidade da API.

4. Interface Uniforme
A API deve seguir regras e convenções padrão que a tornem
previsível e fácil de usar.

Componentes de uma Interface Uniforme:
Identificação de Recursos: Cada recurso na API deve ter 
uma URL única e acessível.

Representações de Recursos: Os recursos podem ser 
representados em diferentes formatos, como JSON ou XML. 

Métodos HTTP: Os métodos HTTP padrão como GET, POST, PUT 
e DELETE são utilizados para realizar operações sobre os 
recursos.

Mensagens Autodescritivas: Cada solicitação e resposta deve 
conter todas as informações necessárias para que o cliente 
e o servidor se compreendam sem a necessidade de manter 
estado.

Exemplos de Estruturação Correta de uma API REST
- Rotas Claras e Descritivas
- Uso consistente de Métodos HTTP
- Respostas Estruturadas e Coerentes.

Motores de Templates
Um motor de templates é uma ferramenta usada para gerar
documentos HTML dinâmicos com base em dados. Os motores
de templates permitem injetar conteúdo dinâmico em páginas
HTML estáticas, tornando os sites mais interativos.

Importância dos Motores de Templates
Usando um motor de templates, os desenvolvedores podem 
separar a lógica de negócios do código HTML.

Diferenças entre Motores de Templates e Frameworks
Front-end

Motores de Template
Funcionalidade: Os motores de template são ferramentas
usadas no servidor para gerar HTML dinâmico.

Uso principal: Aplicações que precisam gerar conteúdo 
HTML dinâmico no servidor antes de enviá-lo ao cliente. 

Frameworks Front-end:
Funcionalidade: Criação de interfaces dinâmicas diretamente
no navegador.
Uso Principal: Aplicações de página única (SPA) onde tem 
muita interação do usuário.

Utilidade em Diferentes Contextos

Contextos onde os Motores de Templates são Úteis:
- Aplicações web tradicionais: Onde o conteúdo deve ser 
servido completamente pelo servidor.

- SEO e acessibilidade: Páginas geradas no servidor com
motores de template são mais facilmente indexadas pelos
motores de busca e podem ser mais acessíveis.

Ambientes de desempenho limitado: Onde se prefere minimizar
a carga no cliente e lidar com a maior parte da lógica no
servidor.

Contextos onde os Frameworks Front-end são Preferíveis:
- Aplicações de página única
- Aplicações com alta interatividade.

Manipulação handlebars

Variáveis dinâmicas:
{{}} Duas chaves -> Renderiza o valor da variável fazendo 
                    escape automático de HTML. Ou seja, se
                    tiverem tags ou caracteres HTML, elas 
                    serão convertidas para entidades HTML.

{{{}}} Três chaves -> Renderiza o valor da variável sem 
                      fazer escape de HTML. Ou seja, se
                      houverem tags ou caracteres HTML,
                      elas não serão convertidas.

Uso de Estruturas de Controle no Handlebars

{{#if}}: Condicionais no Handlebars
Essa estrutura é utilizada para avaliar condições dentro de
um template. Se a condição for verdadeira, o bloco de código
dentro da estrutura é renderizado. Se a condição for falsa,
o conteúdo dentro de {{#else}} (se presente) é renderizado.

{{#each}}: Iteração no Handlebars
Estrutura usada para iterar sobre listas ou arrays de dados.
Útil para gerar elementos repetitivos em uma página, como
uma lista de produtos.

Como funciona
Iteração sobre uma Lista: {{#each}} percorre cada elemento de
um array, e para cada elemento, renderiza o conteúdo dentro do
bloco de código.

Acesso aos Dados: Dentro do bloco de {{#each}}, é possível 
acessar as propriedades de cada elemento e exibi-las no
template. 

Dentro do bloco {{#each}} também pode ser acessado o índice
atual da iteração usando @index.

É possível combinar as estruturas condicionais.

Routers

Para criar uma rota, utiliza-se o método router() 
do Express.

Vantagens de Usar Routers no Express
- Organização do Código
- Modularidade
- Manutenção
- Escalabilidade

Websockets

O que são?
Websocket é um protocolo de comunicação que permite estabelecer
uma conexão bidirecional e persistente entre o cliente e o
servidor sobre uma única conexão TCP.

Diferenças entre WebSockets e HTTP

Modelo de Comunicação
HTTP -> Baseado em modelo de solicitação-resposta.
WebSockets -> Utiliza um canal de comunicação aberto, onde 
tanto o cliente quando o servidor enviam dados.

Persistência da Conexão
HTTP -> Cada interação requer abrir e fechar uma conexão.
WebSockets -> A conexão é estabelecida uma vez e se mantém
aberta, permitindo uma conexão contínua e eficiente.

Direcionalidade da Comunicação
HTTP -> Comunicação unidirecional, onde o cliente solicita 
e o servidor responde.
WebSockets -> Comunicação bidirecional, onde tanto o cliente
quanto o servidor podem iniciar a transmissão de dados.

Importância dos WebSockets em Aplicações em Tempo Real
WebSockets são essenciais para aplicações em tempo real, como
chats, jogos online, etc. Esse protocolo é ideal quando a 
aplicação precisa que o servidor possa enviar dados ao cliente
a qualquer momento.

Características Principais dos WebSockets
- Conexão Persistente;
- Baixo Overhead;
- Comunicação Bidirecional;

Comparação Direta entre HTTP e WebSockets
Modelo
HTTP: Solicitação-Resposta
WebSockets: Comunicação Bidirecional

Persistência
HTTP: Não
WebSockets: Sim

Conexão
HTTP: É fechada após cada resposta
WebSockets: Permanece aberta

Uso Ideal
HTTP: Carregamento de páginas web, APIs
WebSockets: Aplicações em tempo real (chats, jogos, etc.)

Implementação de WebSockets em Servidores Express
*/
