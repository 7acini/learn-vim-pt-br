# Inserindo Texto

Até agora focamos muito no *Modo Normal* e não demos muita atenção ao *Modo de Inserção*. Vamos remediar isso porque há muito mais no *Modo de Inserção* do Vim do que você imagina.

A flexibilidade proporcionada pelas várias formas de entrar no *Modo de Inserção* é lendária:

- `i` permite *i*nserir texto antes do cursor
- `a` permite *a*crescentar texto após o cursor
- `I` permite *i*nserir texto no início da linha
- `A` permite *a*crescentar texto no final da linha

```javascript
           você está aqui
               /
              /
             v
       const status = "I'm in awe"
      ^     ^ ^                   ^
      |     | |                   |
      I     i a                   A
```

- `o` permite *o*brir uma nova linha abaixo da linha atual
- `O` permite *o*brir uma nova linha acima da linha atual

> Esses dois comandos são alguns dos meus favoritos. É tão comum e útil adicionar uma nova linha abaixo ou acima da linha de código atual!

```javascript
           você está aqui
               /
              /
   O ->      v
       const status = "I'm in awe"
   o ->
```

Com todos esses comandos você pode basicamente entrar no modo de inserção em qualquer lugar. Vamos testá-los!

> Você pode encontrar todas as soluções no final deste arquivo. Basta pesquisar por /solutions. Para voltar aqui digite <CTRL-O>.

```
  #1. Esta frase está faltando muita pontuação, você poderia usar seu conhecimento recém-adquirido e adicionar alguma pontuação? (veja se consegue usar tanto a quanto A)
  /
 /
v
I like potatos onions bacon milk and chocolate
```

```javascript
// #2. Adicione pelo menos quatro heroínas a mais!
// Tente usar tanto o quanto O.

const heroines = [
  "Malin Gonzalez Lejon", // <-- Minha esposa <3<3<3
  "Wonder woman",
  "Red Sonja",
  "Captain Marvel",
  "Tika Waylan", // <-- você está aqui
  "Cara Dune",
  "Laurana Kanan",
  "Nona Grey",
];
```

```javascript
// #3. Adicione uma condição adicional de filtro
// para verificar que as batatas
// não estão verdes. Batatas saborosas devem estar
// bem maduras.

  comece aqui
  /
 /
v
const tastyPotatos = bagsOfPotatos
  .flatmap((bag) => bag.potatos)
  .filter((potato) => !potato.isRotten);
```

O próximo mapeamento útil para entrar no *Modo de Inserção* é `gi`. `gi` permite que você volte ao último local onde fez uma alteração.

> `gi` no VSCodeVim se comporta de forma diferente do Vim. Enquanto no Vim você volta ao último lugar onde saiu do Modo de Inserção, no VSCodeVim você entra no modo de inserção onde fez sua última alteração.

```
// #4. Digite seu primeiro nome, depois mova o cursor até o local de pouso e volte para digitar seu sobrenome com gi

  comece aqui
  /
 /
v
My name is


      =
      =
     ===
=====   =====
     ===
      =
      =
```

> Observe como frequentemente `g` é usado como modificador de outros comandos. Quando você vê `g` antes de um comando comum, pode esperar que o comando fará algo similar ao comando original: Por exemplo, `gi` permite ir ao último lugar onde você saiu do Modo de Inserção (`i`), `ge` faz o reverso de `e`, etc...

# Removendo coisas no Modo de Inserção

De longe, a forma mais comum de remover coisas ao usar Vim é usando os comandos `d` ou `c` do *Modo Normal*, porém, às vezes é útil remover algum texto diretamente do *Modo de Inserção* e continuar digitando. Exemplo mais comum? Quando você comete um erro de digitação! :D Sempre que isso acontecer, qualquer um desses atalhos pode ajudar:

- `CTRL-H` permite remover o último caractere digitado (mnemônico _h_ que em _hjkl_ move o cursor um espaço para a esquerda)
- `CTRL-W` permite remover a última palavra digitada (mnemônico *w*ord - palavra)
- `CTRL-U` permite remover a última linha digitada (mnemônico *u*ndo this line - desfazer esta linha)

Vamos testar:

```
// 5#. Tente repetir estas frases seguintes e use CTRL-H, CTRL-W para corrigir
// erros de digitação. Quando chegar ao final, digite CTRL-U.

 comece aqui!
  /
 /
v
supercalifragilisticusespialidosus
(boa sorte!)

tres tristres trapezistas con tres trapos troceados hacen trampas truculentas
(muita, muita boa sorte)

Sju sjösjuka sjömän sköttes av sjuttiosju sköna sjuksköterskor på det sjunkande skeppet Shanghai.
(não tem como digitar isso sem errar)
(Ok. Talvez se você for sueco)
```

> Na realidade, esses comandos afetam caracteres atrás do cursor, mas "última palavra digitada", "última linha digitada", etc é mais fácil de entender. Ou pelo menos é o que eu acho :D

Ótimo trabalho! Para o ato final, tente sair do *Modo de Inserção* usando estes três comandos e veja qual parece melhor para você:

- `<ESC>`
- `CTRL-C`
- `CTRL-[`

```
***********
**** i ****
***********
```

> DICA QUENTE: Existem algumas ferramentas e teclados mecânicos que permitem mapear CAPS LOCK para ESC e CTRL AO MESMO TEMPO! O CAPS LOCK pode se comportar como ESC quando pressionado sozinho, ou CTRL quando pressionado em combinação com outras teclas. ESTA É A MELHOR FORMA DE USÁ-LO COM VIM :D. Ter tanto ESC quanto CTRL na home row É A MELHOR experiência que um usuário de Vim pode desejar. Eu conheço duas formas de conseguir isso:
>
> 1. No Mac você pode usar [karabiner-elements](https://karabiner-elements.pqrs.org/)
> 2. O [UHK](https://ultimatehackingkeyboard.com/) e outros teclados mecânicos permitem remapear completamente seu teclado e alcançar o combo ESC/CTRL da destruição
>
> Se descobrir mais formas. Por favor me avise! https://www.twitter.com/Vintharas

## Soluções

```
  #1. Esta frase está faltando muita pontuação, você poderia usar seu conhecimento recém-adquirido e adicionar alguma pontuação?
  /
 /
v (fsa,e.e.A.)
I like potatos onions bacon milk and chocolate
```

```javascript
// #2. Adicione pelo menos quatro heroínas a mais!
// Tente usar tanto o quanto O.

// (o"Alguém"<ESC>O"outra"<ESC>)
const heroines = [
  "Wonder woman",
  "Red Sonja",
  "Captain Marvel",
  "Tika Waylan", // <-- você está aqui
  "Cara Dune",
  "Laurana Kanan",
  "Nona Grey",
];
```

```javascript
// #3. Adicione uma condição adicional de filtro
// para verificar que as batatas
// não estão verdes. Batatas saborosas devem estar
// bem maduras.

  comece aqui
  /
 /
v (2jo.filter((batata)=> !batata.isGreen))
const tastyPotatos = bagsOfPotatos
  .flatmap((bag) => bag.potatos)
  .filter((potato) => !potato.isRotten);
```

```
// #4. Digite seu primeiro nome, depois mova o cursor até o local de pouso e volte para digitar seu sobrenome com gi

  comece aqui
  /
 /
v (AJaime<ESC>/x<ENTER>gi)
My name is


      =
      =
     ===
===== x =====
     ===
      =
      =
```
