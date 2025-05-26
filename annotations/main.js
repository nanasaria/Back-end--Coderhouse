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
*/
