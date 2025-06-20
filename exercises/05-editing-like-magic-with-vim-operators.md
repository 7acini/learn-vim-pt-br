# Editando Como Mágica com Operadores do Vim

No Vim você usa **comandos** para realizar ações no editor. Comandos são ações que têm efeito no seu editor. Existem muitos comandos diferentes para diversas finalidades. Anteriormente vimos como **movimentos** permitem navegar no **modo normal**.

**Operadores** são comandos que permitem realizar ações para alterar o conteúdo do editor.

> Lembre-se que você pode navegar neste arquivo usando hjkl:
>
> ```
>            ↑
>      ← h j k l →
>          ↓
> ```
>
> ou {} ou CTRL-U, CTRL-D

Você usa **operadores** em combinação com **contagens** e **movimentos** para definir o alcance do texto onde uma ação será aplicada:

```
   o que fazer (deletar, alterar...)
      /
     /      quantas vezes
    /         /
   v         v
{operador}{contagem}{movimento}
                    ^
                   /
                  /
           onde realizar
             a ação
```

Por exemplo, veja `d2w`. Ele diz ao Vim para **d**eletar **2** **p**alavras. Experimente!

```
  comece aqui
  /
 /
v
PROIBIDA A ENTRADA!
```

Agora tente remover `não` do texto abaixo:

> Lembre-se que você pode pular diretamente para a palavra "não" usando o movimento de busca /não (experimente, e aproveite qualquer oportunidade para praticar movimentos)

```
           remova isto
             /
            /
           v
Você não pode passar!!
```

Sim, você poderia fazer isso com `dw`. Interessante... Então todos os movimentos que você aprendeu antes, que eram super úteis por si só para navegar rapidamente em um arquivo, também podem ser usados para editar texto com a mesma velocidade.

Uau! Incrível, não é?

# Antes de começar: Desfazendo e refazendo

Vamos fazer muitas edições neste capítulo, então este é o lugar perfeito para aprender como desfazer e refazer coisas no Vim caso você cometa um erro (Não pense muito nisso, eu ainda cometo erros depois de 8 anos usando Vim). Então se você tentar algum comando e não funcionar como esperado. **NÃO ENTRE EM PÂNICO!**. Pressione `u` para desfazer e sua última alteração será revertida. Você pode continuar pressionando `u` se várias coisas derem errado. Se quiser refazer, digite `<CTRL-R>`.

```

       |￣￣￣￣￣￣￣￣￣|
       | NÃO ENTRE EM  |
       |   PÂNICO!     |
       | u PARA DESFAZER|
       | C-R PARA REFAZER|
       |＿＿＿＿＿＿＿＿＿|

```

## Praticando Delete: Obliterando os Florkins!!

Os cenários a seguir estão cheios de florkins. Uma espécie alienígena altamente invasiva e muito perigosa que se parece com gatinhos terrestres, mas não são nada como gatinhos. Bem... Eles são fofos, peludos e aconchegantes, mas por trás dessa fachada há um caçador mortal e sanguinário que pode devorar um blurkin adulto em menos de 3 segundos (e caso esteja se perguntando... florkins não são nada como flerkens).

```
     |￣￣￣￣￣￣￣￣￣|
     |  EU VOU DEVORAR|
     |  SUA ALMA!!    |
     |＿＿＿＿＿＿＿＿＿|
     (\__/)  ||
     (•ㅅ•)  ||
     / 　 づ
|￣￣￣￣￣￣￣￣￣|
|＿＿＿＿＿＿＿＿＿|
```

> Tente combinar o operador d com movimentos para obliterar esses florkins. Teste diferentes movimentos e veja qual funciona melhor. (se tiver dificuldade, dê uma olhada nas soluções no final - busque por /soluções, para voltar aqui digite <CTRL-O>)

```
  #1. comece aqui florkin vingador!
  Você consegue obliterar esses florkins com apenas um comando?
  /
 /
v
florkin
florkin
florkin
florkin
florkin
```

> Aviso: nenhum florkin, blurkin ou flerken foi machucado na criação destes exercícios. O comando `d` apenas envia essa fauna exótica para seu habitat natural no mundo inferior.

```
  #2. comece aqui!
  /
 /
v
-----=t--=v----'florkin'--------=
```

```
  #3. comece aqui!
  /
 /
v
-------'florkin'------------
----v--------v--------------
---v------v----vflorkin-----
------v-v-------------------
-----------{florkin}--------
---v--------v---------------
```

```
  #4. comece aqui!
  /
 /
v
florkin
florkin
florkin
pepino
```

Agora digite `ggdG` para deletar todo o documento. **Não! Não faça isso!** Eu ainda não te ensinei a desfazer (shhhh é `u`)

Então estivemos brincando com florkins, flerkens e blurkins, mas que tal tentar `d` com **código real**?!? Vamos fazer isso a seguir.

O trecho a seguir de um artigo semi sem sentido sobre Vim tem um erro de digitação com um `like` repetido dentro do botão. Vá em frente e remova-o usando uma combinação de movimentos e o operador `d`.

```
<article>
    <h1>Este é um artigo super legal sobre Vim</h1>
    <p>
        Vim é incrível. É muito bom. Maestria. Excelência. Vim. Vim.
        Bom. Uau. Não consigo sair do Vim.
    </p>
    <p>
        Muito bom. Que uau. Excelente. Produtividade. Uau. Artesanato.
    </p>
    <button>
    Eu gosto gosto do Vim
    </button>
</article>
```

Excelente! Uma das formas mais simples de remover o erro acima é `/li<ENTER>dw`. Foi isso que você fez? Independentemente disso, **pare um momento para refletir** sobre como você teria feito isso sem o Vim. Você teria usado o mouse, selecionado lentamente o texto e deletado? Você teria navegado com as setas? Como é a sensação de precisar apenas de alguns toques para obliterar aquele erro? Incrível, não é? Quando você se tornar competente usando Vim, você vai se sentir assim, **o. tempo. todo.**

> Tem dificuldade em lembrar todos os movimentos? Uma ótima maneira de lembrar os diferentes comandos é aproveitar mnemônicos, pois frequentemente os comandos serão a primeira letra de uma palavra que descreve o que eles fazem:
>
> - d para delete (deletar)
> - f para find (encontrar)
> - c para change (alterar)
> - t para until (até)
>
> e assim por diante. Se ainda sentir que precisa de uma revisão, dê uma olhada no Cheatsheet no painel lateral Aprenda Vim.

## Praticando dd e D (Sintaxe abreviada de operadores)

Quando você repete um operador como em `dd`, você faz com que ele opere em uma linha completa. Então `dd` permite deletar uma linha inteira de texto.

Bacana, não é? Agora deletar essas linhas de florkins se torna trivial. Basta digitar `dd` e eles desaparecem. Experimente:

```
  #5. comece aqui!
  /
 /
v
florkin florkin florkin florkin
gatinho
florkin florkin
gatinho
florkin
```

`D` também é muito útil, ele remove tudo do cursor até o final da linha (é equivalente a `d$` mas mais fácil de digitar). Tente combinar `dd` e `D` para mandar mais florkins para casa:

```
  #6. comece aqui!
  /
 /
v
florkin florkin florkin florkin
gatinho florkin florkin
florkin florkin
gatinho gatinho florkin
gatinho cachorrinho florkin
```

E agora vamos a um exemplo real de programação. O que é mais comum que duplicação de código? Nossa base de código ficou inchada ao longo dos anos e alguém criou uma função `sayHello` que é exatamente igual à função existente `salute`. Remova uma delas, pela glória do DRY!!

```javascript
  comece aqui!
  /
 /
v
const salute = (person) => console.log(`Hello ${person}!`);
const sayHello = (person) => console.log(`Hello ${person}!`);
```

Agora remova a mensagem verbosa no botão de chamada para ação abaixo para que ele diga apenas _Inscreva-se agora_:

```html
<button>
  Inscreva-se agora nesta newsletter incrível e receba mais conteúdo fantástico!
</button>
```

De novo! Maravilhe-se com a velocidade que você pode remover texto usando operadores e movimentos do Vim! ＼O／

> Mini-revisão: O comando d
>
> - d{movimento} - deleta texto coberto pelo movimento
>
>   - d2w => deleta duas palavras
>   - dt; => deleta até ;
>   - d/olá => deleta até olá
>
> - dd - deleta linha
> - D - deleta do cursor até o final da linha

## Praticando Change: Crescendo como Pessoa na Era do Vim

O comando `c` (**change**) deleta um pedaço de texto e então te leva para o **modo inserção** para que você possa continuar digitando, transformando o texto original em outra coisa. O operador change é como os comandos `d` e `i` combinados em um. **Esta dualidade o torna o operador mais útil**.

Vamos ilustrar o poder do comando `c` com um exemplo. Temos a seguinte variável que representa uma saudação cortês, mas estamos sem cortesia e queremos transformá-la em uma saudação apenas educada (em essência, mudar qualquer referência de `cortês` para `educado`).

Tente fazer isso com os comandos `d` e `i`:

```typescript
  comece aqui e use d + i
  /
 /
v
const saudacaoCortes = "Eu cordialmente saúdo você, boa pessoa.";
```

E agora tente alcançar o mesmo usando apenas o comando `c`. Não se preocupe se falhar, vou mostrar como fazer no próximo parágrafo:

```typescript
  comece aqui e use o comando c
  /
 /
v
const saudacaoCortes = "Eu cordialmente saúdo você, boa pessoa.";
```

Ótimo trabalho independente dos resultados! Tornar-se bom no Vim, como com qualquer coisa, é questão de prática. Então continue assim! :) Abaixo está uma forma de resolver nosso problema usando tanto `d` e `i`, quanto `c`:

```typescript
// d + i=> wdtSieducado<ESC>fcdwieducadamente<ESPACE><ESC>
// c => wctSeducado<ESC>fccweducadamente<ESPACE><ESC>
const saudacaoCortes = "Eu cordialmente saúdo você, boa pessoa.";
```

Como você pôde experimentar, usar `c` economiza um toque, o que já é ótimo por si só, mas há uma razão ainda mais convincente para usar `c` em vez de `d` quando você quer mudar coisas...

## O Operador Ponto

Um dos operadores mais incríveis do Vim é o operador ponto ou `.`. O operador ponto permite que você **repita sua última alteração**. Com um único toque `.` você pode repetir uma alteração completa que pode ser composta por quantos toques você puder imaginar.

Mas **o que exatamente é uma alteração?** Qualquer coisa que mude o conteúdo do seu editor:

- usar `d{movimento}` constitui uma alteração,
- usar `i{digitarAlgo}<ESC>` é outra alteração,
- usar `c{digitarAlgo}<ESC>` é mais uma alteração

Então, pela própria natureza de `d` e `c`, o comando `c` é mais repetível. Vamos ilustrar isso com o mesmo exemplo:

```typescript
  comece aqui
  /
 /
v
const saudacaoCortes = "Eu cordialmente saúdo você, boa pessoa.";
```

Em essência, queremos mudar `cordialmente` para `educadamente`, o que parece uma mudança completamente auto-contida e repetível. Em teoria, deveríamos ser capazes de fazer uma única mudança (`cordialmente` para `educadamente`) e então repeti-la com o operador `.` no lugar certo.

Tente e veja se consegue fazer isso com ambos `d` e `i`, e `c`:

```typescript
  comece aqui
  /
 /
v
const saudacaoCortes = "Eu cordialmente saúdo você, boa pessoa.";
```

Excelente trabalho! Você deve ter notado que usando `d` e `i` a mudança **não é repetível** porque a última alteração é ou deletar ou inserir e nunca a que você precisa. Isso ilustra como `c` é mais repetível que `d`.

Agora veja como as diferentes abordagens se comparam às versões anteriores sem o operador `.`:

```typescript
// d + i   => wdtSieducado<ESC>fcdwieducadamente<ESPACE><ESC>
// c       => wctSeducado<ESC>fccweducadamente<ESPACE><ESC>
// c e . => wcfSeducado<ESC>fc.
const saudacaoCortes = "Eu cordialmente saúdo você, boa pessoa.";
```

**Um segredo para se tornar mais eficaz na edição de texto com Vim é aprender como tornar suas alterações mais repetíveis.** Uma habilidade que você desenvolverá conforme pratica mais e mais o uso do Vim.

Uma forma ainda mais eficaz de resolver o problema que estamos enfrentando é combinar dois repetidores: movimentos de busca, change e o operador ponto.

```typescript
// Construindo o comando passo a passo:
// /co<ENTER>
// /co<ENTER>cfSeducado<ESC>
// /co<ENTER>cfSeducado<ESC>n.
const saudacaoCortes = "Eu cordialmente saúdo você, boa pessoa.";
```

Então:

1. primeiro buscamos `/co<ENTER>`
2. então descrevemos a mudança `cfSeducado<ESC>`
3. então repetimos o movimento `n` e a mudança `.`

Isso tem aproximadamente o mesmo número de toques que a solução anterior, mas é muito mais repetível, pois você poderia percorrer todo um arquivo com `n` e `N`.

Agora tente fazer o mesmo e transformar isso em uma saudação `brava`:

```typescript
   comece aqui
  /
 /
v
const saudacaoEducada = "Eu educadamente saúdo você, boa pessoa.";
```

> Incrível, não é? Espero que você tenha começado a despertar para uma das coisas mais impressionantes do Vim, que é sua capacidade de compor diferentes comandos juntos e as infinitas possibilidades que isso desbloqueia.
>
> Eu entendo completamente se você se sente sobrecarregado por todas as diferentes combinações de movimentos e operadores disponíveis, mas acredite em mim, com o tempo e prática isso vai desaparecer no fundo e se tornar segunda natureza enquanto você programa.

## Você Já é um Mestre em Change

Uma coisa ótima sobre o Vim é que sempre que você aprende um novo comando, como `c`, você praticamente já o entende. Por quê? Porque você pode combiná-lo com todos os movimentos que já conhece. Prove que estou certo e veja se consegue resolver estes exercícios onde continuaremos nossa missão de livrar nossa dimensão da ameaça florkin:

```
     |￣￣￣￣￣￣￣￣￣|
     |  VOCÊ NÃO    |
     |  PODE ME      |
     |  VENCER!!     |
     | SOU FORTE DEMAIS|
     |＿＿＿＿＿＿＿＿＿|
     (\__/)  ||
     (•ㅅ•)  ||
     / 　 づ
|￣￣￣￣￣￣￣￣￣|
|＿＿＿＿＿＿＿＿＿|
```

Use o que aprendeu para trocar o malvado `florkin` pelo fofo `gatinho`. Boa sorte!

> Lembre-se que se estiver curioso pode pular para o final para encontrar algumas soluções. Basta buscar por /soluções change. Você pode voltar aqui digitando <CTRL-O>.

```
  #7. comece aqui florkin vingador!
  Mude esses florkins para gatinhos!
  /
 /
v
florkin
florkin
florkin
florkin
florkin
```

> Há uma forma muito mais rápida de resolver isso com o comando :s. Mas isso é algo que guardaremos para depois. Vamos continuar praticando o comando c.

```
  #8. comece aqui!
  /
 /
v
-----=t--=v----'florkin'--------=
```

```
  #9. comece aqui!
  /
 /
v
-------'florkin'------------
----v--------v--------------
---v------v----vflorkin-----
------v-v-------------------
-----------{florkin}--------
---v--------v---------------
```

```
  #10. comece aqui!
  /
 /
v
florkin
florkin
florkin
pepino
```

Excelente! Ótimo trabalho! Espero que você tenha lembrado que os comandos abreviados como `dd` e `D` também se aplicam ao comando `c`. Se não lembrou, deixe isso ser uma revisão:

- `cc` muda uma linha completa
- `C` muda do cursor até o final da linha

Se você não os usou nos exercícios acima, volte e veja se algum deles simplifica alguns dos exercícios.

**Agora vamos para outra funcionalidade super poderosa do Vim: Objetos de Texto.**

## Objetos de Texto

Objetos de texto são pedaços estruturados de texto que descrevem partes em um documento: palavras, frases, parágrafos, blocos, (HTML) tags, etc. Você pode usá-los em combinação com operadores para alterar uma palavra, frase, parágrafo, etc.

Você constrói um objeto de texto usando estas partículas:

```
            |- `a` significa around (ao redor)
            |- `i` significa inner (interno)
           /
          /
         /
        {a|i}{objeto-de-texto}
                  /
                 /
                | w - word (palavra)
                | s - sentence (frase)
                | p - paragraph (parágrafo)
                | " - quotes (aspas)
```

E então você os combina com um operador assim:

```
{operador}{a|i}{objeto-de-texto}
```

Vamos experimentar. Imagine que você quer mudar o conteúdo (ou parte **i**nterna) desta string. Como você faria isso?

```typescript
   você está aqui!
  /
 /
v
const poema = "Rosas são vermelhas";
```

Imagino que você possa ter feito o seguinte:

1. Pulou para o `R` em Rosas com `fR`
2. Mudou o conteúdo da string usando `ci"`. Por exemplo `ci"O céu é azul<ESC>`

E essa seria uma excelente forma de resolver isso no Vim. Mas há algumas maneiras de melhorar.

Primeiramente, operadores com objetos de texto se aplicam a todo o objeto de texto independentemente de onde seu cursor está posicionado:

```typescript
      Tente ci" em qualquer lugar aqui e veja que funciona
                     /
                    /
             ---------------
const poema = "Rosas são vermelhas";
```

Então qualquer lugar incluindo as próprias aspas é válido para aplicar um operador com o objeto de texto. Isso é realmente maravilhoso porque significa que comandos com objetos-de-texto são mais repetíveis que comandos com movimentos regulares. Aqui vai um exemplo:

```
Vamos mudar florkin para gatinho mais uma vez
Tente usar:
  1. cw e .
  1. ciw e .

  você está aqui
  /
 /
v
florkin
florkin
```

Você notou alguma diferença? Com `ciw` você pode fazer o seguinte `ciwgatinho<ESC>j.` enquanto com `cw` você precisa corrigir o curso e mover o cursor para o começo da próxima linha `ciwgatinho<ESC>0j.`. Por que isso é necessário? Porque `cw` funciona do cursor até o começo da próxima palavra, enquanto `ciw` funciona na palavra interna sob o cursor. É por isso que operadores com objetos de texto são mais repetíveis que movimentos regulares, porque são mais resistentes a onde o cursor está posicionado, desde que esteja em qualquer lugar em um objeto de texto.

Em segundo lugar, objetos de texto com aspas `"`, `'` e crase são especiais. Eles têm um comportamento de busca para frente de modo que **você nem precisa estar em cima do próprio objeto de texto**. Tente `ci"` desde o começo da linha abaixo:

```typescript
   Digite ci" diretamente do início
  /
 /
v
const poema = "Rosas são vermelhas";
```

**Não é incrível? Só por isso o Vim merece um lugar no VSCode.**

> Este comportamento de busca para frente só se aplica a aspas. Para os outros objetos de texto você precisa ter o cursor em cima do próprio objeto de texto para aplicar uma mudança. Há um plugin no Vim vanilla que estende este comportamento para os outros objetos de texto que é muuuito legal, mas ainda não foi portado para o VSCodeVim.

### a vs i

Vamos focar agora em entender a diferença entre `a` (around/ao redor) e `i` (inner/interno). Tente **d**eletar esses florkins usando objetos de texto construídos com ambos `a` e `i` e veja o que acontece:

> Lembre-se que você pode desfazer simplesmente digitando `u`. Então tente ci(, depois digite u, então ca(, e assim por diante.

```

parênteses:       ------------(florkin)------
colchetes:       ---[florkin]---------------
chaves:          {florkin}......{florkin}...
aspas:           Um "florkin" não é um gato.
Uma palavra:     Um florkin não é um gato.
Uma frase:       florkin florkin florkin florkin

```

Então *i*nner significa que se aplica à parte interna de um objeto de texto, enquanto *a*round significa que se aplica ao objeto de texto completo incluindo delimitadores (no caso de `(`, `{`, `"`, etc) ou espaços em branco no caso de palavras, frases e parágrafos.

### Brincando com Objetos de Texto

Ok, agora que você entende os fundamentos de objetos de texto, vamos praticar usando operadores com objetos de texto com alguns exemplos de código e texto. Vamos lá!

```javascript
// #11. Alguém mudou este código mas esqueceu de atualizar
// o logger quando ocorre um erro. Você pode atualizar a
// mensagem logada para refletir o que o código está fazendo
// e ser "atualizando" em vez de "buscando"?

  comece aqui
  /
 /
v
try {
  await this.server.update(muffinsComidos);
} catch (e) {
  this.logger.error("erro buscando muffins: ", e);
  throw e;
}
```

```javascript
// #12. Por algum motivo esta função de saudação só funciona
// com florkins, atualize para que funcione com pessoas
// em vez disso.

  comece aqui
  /
 /
v
const oi = (florkin) => console.log(`oi ${florkin}!`);
```

```javascript
// #13. Este método cria personagens em um jogo roguelike.
// O inventário inicial está muito poderoso e está desbalanceando
// o jogo. Faça o inventário inicial ser uma simples, porém confiável toalha.
// E não entre em pânico.

  comece aqui
  /
 /
v
function criarPersonagem(nome) {
  const inventarioInicial = ["espada +2", "escudo", "manto da invisibilidade"];
  return {
    nome,
    inventario: inventarioInicial,
    stats: gerarStatsAleatorios(),
  };
}
```

```javascript
// #14. O stat de força do Conan não pode ser nada menor
// que Infinito. Atualize o método abaixo para sempre retornar
// Infinito.

  comece aqui
  /
 /
v
class Conan extends Barbaro {
  // código, código, código...
  get forca() {
    return this.stats.forca + this.inventario.getModsForca();
  }
}
```

```
// #15. Esta é a documentação do FizzBuzzJS, um framework
// JavaScript completamente fictício que permite construir
// aplicações web modernas rápidas e ultra performáticas,
// também conhecidas como PUMAW. Como ele não existe,
// por favor delete-o.

  comece aqui
  /
 /
v
Um modelo FizzBuzzJS:
- Gerencia o estado de uma porção da sua aplicação
- Notifica quando o estado muda através de eventos para que consumidores do
  modelo possam se atualizar
- É muito bonito

```

> Se tiver dificuldade em chegar na frase certa abaixo, tente usar `gj` em vez de `j`, quando você prefixa `g` antes de `j` e `k` você pode navegar por linhas quebradas (e não apenas linhas).

```
// #16. Um florkin hackeou a documentação do React e introduziu
// uma referência ao framework FizzBuzzJS. Encontre e delete antes
// que alguém note. O futuro da humanidade está em suas mãos.

  comece aqui
  /
 /
v
React torna indolor a criação de UIs interativas. Projete views simples para cada estado na sua aplicação, e o React atualizará e renderizará eficientemente apenas os componentes certos quando seus dados mudarem. Mas nunca tão rápido quanto o FizzBuzzJS o framework JS florkin. Submetam-se humanos fracos. Views declarativas tornam seu código mais previsível e fácil de debugar.

```

```html
<!--
  #17. Atualize todas as espécies perigosas abaixo para gatinhos

  comece aqui
  /
 /
v  -->
<ul>
  <li>florkin</li>
  <li>florkin</li>
  <li>blurkin</li>
  <li>florkin</li>
  <li>flerken</li>
</ul>
```

```html
<!--
  #18. Corrija todas as classes abaixo para que representem
       com precisão o nível de perigo das espécies listadas.

  comece aqui
  /
 /
v  -->
<ul>
  <li class="mortal">gatinho</li>
  <li class="inofensivo">florkin</li>
  <li class="inofensivo">blurkin</li>
  <li class="inofensivo">florkin</li>
  <li class="inofensivo">humano</li>
</ul>
```

Ótimo trabalho! Sinta o domínio do Vim correndo em suas veeeeias!!!

```
       ____________________
      | PODER ILIMITADO!!! |
       --------------------
            /
            \
            ↖(^▽^)↗
```

## Outros Operadores

Além de `d` e `c` estes são outros operadores úteis:

- `y` (yank): Copiar no jargão do Vim
- `p` (put): Colar no jargão do Vim
- `g~` (switch case): Muda letras de minúsculas para maiúsculas e vice-versa. Alternativamente, use `gu` para deixar algo em minúsculas e `gU` para deixar em maiúsculas
- `>` (shift right): Adiciona indentação
- `<` (shift left): Remove indentação
- `=` (format code): Formata código

`y` e `p` é como você copia e cola coisas no Vim. Como `d` e `c`, `y` pode ser combinado com movimentos e objetos de texto para copiar qualquer texto que desejar:

```html
<!--
  #19. Clone o florkin no item de lista abaixo e
  crie um exército maligno de florkins! Muahahaha.
  Dica: (É uma linha... com o que você aprendeu até agora...
  como você copiaria uma linha?)

  comece aqui!
   /
 /
v      -->
<ul>
  <li class="perigoso">florkin</li>
</ul>
```

Há um capítulo inteiro onde vamos nos aprofundar em copiar e colar, então vamos para os últimos operadores `g~`, `>`, `<` e `=`. O texto abaixo está erroneamente indentado e tem alguns problemas com caixa de letras. Você pode consertar?

> Formatação é menos problemática se você está usando um formatador como o prettier. Mas pode ser útil em situações onde nenhum formatador está disponível.

```
<ul>
  <LI>que</LI>
    <li>que</li>
        <li>que</li>
    <li>que</li>
  <lI>que</lI>
</ul>
```

## Mais Operadores Abreviados

- `x` é equivalente a `dl` e deleta o caractere sob o cursor
- `X` é equivalente a `dh` e deleta o caractere antes do cursor
- `s` é equivalente a `ch`, deleta o caractere sob o cursor e te coloca em modo inserção
- `r` permite que você substitua um único caractere por outro. Muito útil para corrigir erros de digitação.
- `~` para alternar caixa de um único caractere

Um bom caso de uso para `x` é trocar um par de caracteres quando você comete um erro de digitação. Você remove (e recorta) um caractere com `x` e imediatamente o cola depois do cursor com `p`. Experimente!

```
  #20. Você pode consertar estes erros de digitação?

  Comece aqui!
  /
 /
v
Eu sou realyl feliz!
```

> Ah... Eu esqueci de te contar? `d`, `c`, `x` e `s` além de remover e alterar também recortam (então qualquer coisa que você remove ou altera fica disponível na sua área de transferência). Vamos nos aprofundar nisso no próximo capítulo sobre copiar e colar.

## Celebre!

Este foi um capítulo muuuuito longo cheio de exercícios. **Parabéns por chegar ao fim! Ótimo trabalho!** Agora você tem um entendimento muito melhor dos movimentos e operadores do Vim. Só um pouco mais de prática e você estará arrasando em pouco tempo.

```
|￣￣￣￣￣￣￣￣￣￣￣|
|  TRABALHO       |
|  INCRÍVEL!     |
|  CELEBRE !     |
|＿＿＿＿＿＿＿＿＿＿＿|

      ヽ(^o^)ノ
```

# Soluções para alguns exercícios

## Soluções Delete

```
  #1. comece aqui florkin vingador!
  Você consegue obliterar esses florkins com apenas um comando?
  /
 /
v (d4j oblitera todos os florkins de uma vez)(5dd)
florkin
florkin
florkin
florkin
florkin
```

```
  #2. comece aqui!
  /
 /
v (ffdt')
-----=t--=v----'florkin'--------=
```

```
  #3. comece aqui!
  /
 /
v (/fldt'ndt-ndt})
-------'florkin'------------
----v--------v--------------
---v------v----vflorkin-----
------v-v-------------------
-----------{florkin}--------
---v--------v---------------
```

```
  #4. comece aqui
  /
 /
v (d/pe<ENTER>)
florkin
florkin
florkin
pepino
```

```
  #5. comece aqui!
  /
 /
v (ddjddjdd) (ddj.j.)
florkin florkin florkin florkin
gatinho
florkin florkin
gatinho
florkin
```

```
  #6. comece aqui!
  /
 /
v (ddjwDjdd2wDjhD)
gatinho florkin florkin
florkin florkin
gatinho gatinho florkin
gatinho cachorrinho florkin
```

## Soluções Change

```
  #7. comece aqui florkin vingador!
  Mude esses florkins para gatinhos!
  /
 /
v (cwgatinho<ESC>jb.jb.jb.jb.)(ccgatinho<ESC>j.j.j.j.)
florkin
florkin
florkin
florkin
florkin
```

```
  #8. comece aqui!
  /
 /
v (ffct'gatinho<ESC>)
-----=t--=v----'florkin'--------=
```

```
  #9. comece aqui!
  /
 /
v (/fl<ENTER>cfngatinho<ESC>n.n.)
-------'florkin'------------
----v--------v--------------
---v------v----vflorkin-----
------v-v-------------------
-----------{florkin}--------
---v--------v---------------
```

```
  #10. comece aqui!
  /
 /
v (ccgatinho<ESC>j.j.)
florkin
florkin
florkin
pepino
```

```javascript
// #11. Alguém mudou este código mas esqueceu de atualizar
// o logger quando ocorre um erro. Você pode atualizar a
// mensagem logada para refletir o que o código está fazendo
// e ser "atualizando" em vez de "buscando"?

  comece aqui
  /
 /
v (/re<ENTER>ciwatualizando<ESC>)
try {
  await this.server.update(muffinsComidos);
} catch (e) {
  this.logger.error("erro buscando muffins:", e);
  throw e;
}
```

```javascript
// #12. Por algum motivo esta função de saudação só funciona
// com florkins, atualize para que funcione com pessoas
// em vez disso.

  comece aqui
  /
 /
v (ffciwpessoa<ESC>;.)
const oi = (florkin) => console.log(`oi ${florkin}!`);
// você pode ficar tentado a usar ci( mas neste caso ciw é mais repetível
```

```javascript
// #13. Este método cria personagens em um jogo roguelike.
// O inventário inicial está muito poderoso e está desbalanceando
// o jogo. Faça o inventário inicial ser uma simples, porém confiável toalha.
// E não entre em pânico.

  comece aqui
  /
 /
v (/[<ENTER>ci["toalha"<ESC>)
function criarPersonagem(nome) {
  const inventarioInicial = ["espada +2", "escudo", "manto da invisibilidade"];
  return {
    nome,
    inventario: inventarioInicial,
    stats: gerarStatsAleatorios(),
  };
}
```

```javascript
// #14. O stat de força do Conan não pode ser nada menor
// que Infinito. Atualize o método abaixo para sempre retornar
// Infinito.

  comece aqui
  /
 /
v // (3jci{return Infinito;<ESC>)
  // (/ret<ENTER>wCInfinito;<ESC>)
  // (/ret<ENTER>wct;Infinito<ESC>)
class Conan extends Barbaro {
  // código, código, código...
  get forca() {
    return this.stats.forca + this.inventario.getModsForca();
  }
}
```

```
// #15. Esta é a documentação do FizzBuzzJS, um framework
// JavaScript completamente fictício que permite construir
// aplicações web modernas rápidas e ultra performáticas,
// também conhecidas como PUMAW. Como ele não existe,
// por favor delete-o.

  comece aqui
  /
 /
v (dap)
Um modelo FizzBuzzJS:
- Gerencia o estado de uma porção da sua aplicação
- Notifica quando o estado muda através de eventos para que consumidores do
  modelo possam se atualizar
- É muito bonito

```

> Se tiver dificuldade em chegar na frase certa abaixo, tente usar `gj` em vez de `j`, quando você prefixa `g` antes de `j` e `k` você pode navegar por linhas quebradas (e não apenas linhas).

```
// #16. Um florkin hackeou a documentação do React e introduziu
// uma referência ao framework FizzBuzzJS. Encontre e delete antes
// que alguém note. O futuro da humanidade está em suas mãos.

  comece aqui
  /
 /
v (/Bu<ENTER>2das)
React torna indolor a criação de UIs interativas. Projete views simples para cada estado na sua aplicação, e o React atualizará e renderizará eficientemente apenas os componentes certos quando seus dados mudarem. Mas nunca tão rápido quanto o FizzBuzzJS o framework JS florkin. Submetam-se humanos fracos. Views declarativas tornam seu código mais previsível e fácil de debugar.

```

```html
<!--
  #17. Atualize todas as espécies perigosas abaixo para gatinhos

  comece aqui
  /
 /
v (jcitgatinho<ESC>j.jj.) -->
<ul>
  <li>florkin</li>
  <li>florkin</li>
  <li>blurkin</li>
  <li>florkin</li>
  <li>flerken</li>
</ul>
```

```html
<!--
  #18. Corrija todas as classes abaixo para que representem
       com precisão o nível de perigo das espécies listadas.

  comece aqui
  /
 /
v (jjci"mortal<ESC>jj.) -->
<ul>
  <li class="mortal">gatinho</li>
  <li class="inofensivo">florkin</li>
  <li class="inofensivo">blurkin</li>
  <li class="inofensivo">florkin</li>
  <li class="inofensivo">humano</li>
</ul>
```

```html
<!--
  #19. Clone o florkin no item de lista abaixo e
  crie um exército maligno de florkins! Muahahaha.

  comece aqui!
   /
 /
v (jyy5p)     -->
<ul>
  <li class="perigoso">florkin</li>
</ul>
```

```
  #20. Você pode consertar estes erros de digitação?

  Comece aqui!
  /
 /
v (fyxp;xp)
Eu sou realyl feliz!
```
