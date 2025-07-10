# Copiando e Colando

Vamos começar com alguns exercícios simples para que você possa se familiarizar com a cópia e colagem no Vim rapidamente. Começaremos focando no comando de yank (copiar) ou `y`.

> Lembre-se que você pode encontrar as soluções pesquisando por /Solutions. Para voltar use <CTRL-O>.

```bash
# 1. Expanda seu exército clonando seus minions mais mortais! Domine o mundo! Use
# `y` em combinação com os operadores que você aprendeu nos capítulos anteriores para
# copiar um minion mortal e `p` para colá-lo e assim cloná-lo para grande glória.

  comece aqui
  /
 /
v
orc orc orc orc orc orc orc
orc goblin orc orc goblin orc
dragão vermelho formiga barata
rei lich
rato aranha gigante rato
golem de terra
polvo "kraken" polvo
tubarão (cavaleiro da morte)
zumbi zumbi ghoul
```

Incrível! Muahahaha! (risada mais maligna) O mundo será nosso!! Muahahahaha!

Muito bem! Agora vamos praticar a colagem usando `p` e `P`.

```bash
# 2. Cerque seus inimigos com hordas de orcs!!! Experimente diferentes
# tipos de yank e colagem.

  comece aqui
  /
 /
v
orc orc orc orc orc orc
orc orc orc orc orc orc
orc orc orc orc orc orc

      orc
orc halfling orc <== cercado
      orc
============| |==========

(paladino)

       ooo  ^^^^^^^^^^ooo

     (mago)

^^^^^  ^^^ ^^ ^ ^ ^^^

(elfo arqueiro)

```

Ótimo trabalho! Ao fazer esses exercícios você deve ter percebido algumas coisas:

- O comportamento de `p` e `P` depende do que você copiou com o comando `y`:
  - Se você copiou caracteres (como `yaw`), quando usar os comandos de colar, você colará
    esses caracteres antes ou depois do cursor _na mesma linha_.
    **Copie caracteres e você colará caracteres**.
  - Se você copiou linhas (como `yy`), quando usar os comandos de colar, você colará linhas
    abaixo ou acima da linha atual. **Copie linhas e você colará linhas.**
- Você pode copiar ou duplicar linhas inteiras usando `yyp`

Agora vamos tentar os detalhes mais refinados de mover o cursor com `gp` e `gP`.

```bash
# 3. Ninjas são extremamente rápidos, furtivos e mortais. Portanto, precisamos
#   cercá-los de uma vez sem mover o cursor de sua localização.
#   Experimente com `P` e `gP` até acertar.

  comece aqui
  /
 /
v
orc orc orc orc orc orc
orc orc orc orc orc orc
orc orc orc orc orc orc

orc orc orc orc
     ninja <== cercado
orc orc orc orc
============| |==========

(ninja)

       ooo  ^^^^^^^^^^ooo

     (ninja)

^^^^^^  ^^^ ^^ ^ ^ ^^^^^
^^^ ^^^^^^^^^^^^^^^^^ ^^
```

Incrível, certo? O Vim realmente lhe dá muito controle sobre como copiar e colar coisas. E tem mais!

Vamos agora para recortar coisas. Assim como `y` permite copiar coisas no Vim, `d` e `c` recortam texto além de deletar e alterar. Vamos praticar recortar e colar.

```bash
# 4. Os mestres anões e gnomos de Ahknbar descobriram os segredos da
# teleportação. Usando os caminhos misteriosos do Vim, eles aprenderam a usar
# os comandos `d` e `p` para transportar qualquer coisa entre dois pontos.
# Tente!

  comece aqui
  /
 /
v
^^^^^^  ^^^ ^^ ^ ^ ^^^^^ ^^^^^^
^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^^
^^^                         ^^^
^^                           ^^
^     (anão) ====>   ( )     ^
^^^^  "anão" ====>   + +   ^^^
^^    gnomo ======>   " "    ^^
^^                            ^
^^                            ^
^^^^^^  ^^^ ^^ ^ ^ ^^^^^^^^^^^^
^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^^
```

```bash
# 5. Um grupo de corajosos anões empurrando os limites da teleportação acabou
# se teleportando para as profundezas da terra. Você poderia ser gentil
# o suficiente para resgatá-los?

  comece aqui
  /
 /
v
^^^^^^  ^^^ ^^ ^ ^ ^^^^^ ^^^^^^
^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^^
^^^ anão anão anão anão  ^^
^^^^^^  ^^^ ^^ ^ ^ ^^^^^^^^^^^^
^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^^

      o .        + .     +
o             o
                            o
============| |================
o        +       +
       + .                 +
                  +
```

Agora vamos tentar traduzir parte do que aprendemos para o mundo da programação e escrever código real. Uma prática comum ao escrever código e coleções de coisas é usar um item como modelo. Você escreve o código para esse item, copia, cola e depois modifica um pouco. Vamos tentar fazer isso com Vim e ver quanto tempo podemos economizar:

```typescript
// 6. Estamos desenvolvendo um novo jogo roguelike e vai ser incrível!! Incrível!!
// O jogo será uma mistura dos seus jogos favoritos, fantasia e ficção científica,
// e o jogador poderá escolher jogar com qualquer um dos seus personagens favoritos! O quê?!
// Adicione alguns dos seus personagens favoritos à tela de seleção de personagens.
// Use o que você aprendeu até agora para fazer isso da maneira mais rápida que puder.

//   comece aqui
//    /
//  /
// v
const characters = [
  new Character({ name: "Tanis", class: Classes.Archer, race: Race.HalfElf }),
];

characterSelectionScreen.add(characters);
```

Às vezes cometemos um erro de digitação e trocamos duas letras:

```typescript
// 7. Corrija esses erros de digitação, humano! Dica: você pode fazer isso com os comandos `x` e `p`
//    Lembrete: `x` é equivalente a `dl`

//   comece aqui
//    /
//  /
// v
conts charactres = [
  new Chaarcter({ name: "Tanis", clsas: Classes.Archer, raec: Race.HalfElf }),
];

characterSelectionScreen.add(characters);
```

E às vezes queremos mover coisas:

```typescript
// 8. Estranho... alguém colocou os membros da classe abaixo do construtor. Não é peculiar...
//    Vamos movê-los de volta para antes do construtor. Como sempre deveria ter sido...
//    Dica: Você pode combinar o comando `d` com um movimento para recortar todos os membros com um único comando?


//   comece aqui
//    /
//  /
// v
class Character {
  constructor({name, class, race}: CharacterStats) {
    this.name = name;
    this.class = class;
    this.race = race;
  }

  readonly name;
  readonly class;
  readonly race;

  // Outro código...
}
```

Excelente! Parabéns! Você aprendeu os fundamentos de copiar e colar no Vim! Wihooo! Com tudo o que você aprendeu até agora, você está pronto para ter uma experiência estelar copiando e colando coisas no VSCode com grande velocidade e precisão.

Ainda há mais por vir. **Registradores do Vim** e **colagem no modo Insert**. Ambos você usará com menos frequência que `y` e `p`, mas podem ser realmente úteis quando necessário.

## Registradores do Vim

**Registradores do Vim** são um recurso muito interessante no Vim que melhora a forma como você trabalha com cópia e colagem (entre outras coisas). Essencialmente, eles são como ter múltiplas áreas de transferência onde você pode copiar ou recortar coisas. Há vários registradores identificados por um caractere que realizam tarefas ligeiramente diferentes:

- O **registrador não nomeado** `"` é onde você copia e recorta coisas quando não especifica explicitamente um registrador. O registrador padrão, por assim dizer.
- Os **registradores nomeados** `a-z` são registradores que você pode usar explicitamente para copiar e recortar texto à vontade
- O **registrador yank** `0` armazena a última coisa que você yankou (copiou)
- Os **registradores de recorte** `1-9` armazenam as últimas 9 coisas que você recortou usando os comandos delete ou change

> O registrador yank (`0`) e os registradores de recorte (`1-9`) são oficialmente chamados de **registradores numerados**. Mas acho mais útil chamá-los de registradores yank e de recorte. Dessa forma, lembrar o que eles fazem fica muito mais fácil.

Por exemplo, `"ayas` copia uma sentença e a armazena no registrador `a`. Agora, se você quiser colá-la em outro lugar, pode digitar `"ap`. Alternativamente, usar a versão em maiúsculas de um registrador (ou seja, `A` em vez de `a`) anexa o que você copiar ou recortar nesse registrador.

Vamos praticar usando os _registradores nomeados_ (`a-z`)!

```bash
# 9. Estamos preparando um ataque à cidade humana de Gonlor, orgulho dos Primeiros Humanos.
#    Recrutamos nossos guerreiros mais corajosos e ferozes das terras sagradas de Wordor que
#    juraram expulsar a praga humana desses terrenos sagrados.
#    Crie uma formação de batalha equilibrada alternando globins e orcs.
#    Dica: Pense em como você pode usar registradores para realizar esta tarefa

  comece aqui
  /
 /
v
goblin goblin globin goblin
orc orc orc orc goblin orc
orc goblin orc orc orc orc
.     + `
     .          ~ .
============| |==========
            | |
============| |==========
     +
o .      .      x .   +

   .   ooo  ^^^^^^^ ^ ooo
soldado soldado soldado soldado
     soldado soldado soldado
  +    arqueiro arqueiro arqueiro
       mago arqueiro arqueiro

^^^^^^  ^^^ ^^ ^ ^ ^^^^^| |^^
^^^ ^^^^^^^^^^^^^^^^^ ^^| |^^
```

O **registrador yank** permite que você acesse o que copiou por último via comando `y`. Isso é útil porque deletes e changes não sobrescrevem esse registrador como fazem com o registrador não nomeado. Isso é mais fácil de ilustrar com um exemplo:

```typescript
// 9. Houve uma confusão nos planos de batalha e nossa formação de goblins é feita de orcs,
//    e nossa formação de orcs é feita de goblins. Precisamos corrigir essa confusão e também
//    garantir que enviemos os goblins para a batalha primeiro.
//    Dica: Tente usar y e p e veja o que acontece

//   comece aqui
//     /
//   /
// v
class Orc {}
class Goblin {}
const goblins = [new Orc(), new Orc(), new Orc()];
const orcs = [new Goblin(), new Goblin(), new Goblin()];
// Gostaríamos de enviar os goblins primeiro para a batalha, porque são carne para canhão
// que cansará o inimigo antes dos verdadeiros guerreiros chegarem.
sendArmiesToBattle(orcs);
```

Viu o problema? No momento em que sobrescrevemos algum texto, automaticamente recortamos esse texto, o que pode sobrescrever sem querer o que estava em nossa área de transferência:

```
1. (no início)      => registrador não nomeado: vazio
2. `yiw` sobre orcs => registrador não nomeado: orcs
3. `viwp` sobre goblins => registrador não nomeado: goblins   AAaah?!
4. `viwp` sobre orcs    => registrador não nomeado: orcs
```

Isso pode ser uma surpresa se seu modelo mental para copiar e colar for: _Eu copio algo e colo várias vezes, o que está na minha área de transferência nunca muda até eu copiar novamente_. No Vim, dependendo de como você cola algo, pode substituir o que está em sua área de transferência (o registrador não nomeado).

Agora tente resolver o mesmo exercício novamente, mas procure uma oportunidade para usar o `registrador yank` (`0`). Lembre-se, o registrador yank sempre mantém a última coisa que você copiou com o comando `y`, não importa o quê.

```typescript
// 10. Houve uma confusão nos planos de batalha e nossa formação de goblins é feita de orcs,
//    e nossa formação de orcs é feita de goblins. Precisamos corrigir essa confusão e também
//    garantir que enviemos os goblins para a batalha primeiro.
//    Dica: Tente usar y e p e veja o que acontece. Você vê alguma oportunidade para facilitar
//    sua tarefa com o registrador yank.

//   comece aqui
//     /
//   /
// v
class Orc {}
class Goblin {}
const goblins = [new Orc(), new Orc(), new Orc()];
const orcs = [new Goblin(), new Goblin(), new Goblin()];
// Gostaríamos de enviar os goblins primeiro para a batalha, porque são carne para canhão
// que cansará o inimigo antes dos verdadeiros guerreiros chegarem.
sendArmiesToBattle(orcs);
```

> Os comandos yank e paste não são os melhores para substituir mais de duas variáveis. Quando você precisa fazer mais de uma substituição, é melhor usar o comando :s. Aprenderemos mais sobre isso nos próximos capítulos.

Os **registradores de recorte** (`1-9`) dão acesso às últimas 9 coisas que você deletou ou alterou. Isso é ótimo quando você deleta algo por engano ou quando há algum texto que você deletou antes e de repente percebe que precisa dele (Eu preciso daquele código de volta!!).

```bash
# 11. Retirada! Nossas tropas foram dizimadas pelos humanos malvados!
#     Transporte essas tropas pelo rio de volta para a segurança de Wordor. Você
#     deve levar todas as tropas de uma vez antes de começar a colocá-las
#     do outro lado do rio. Caso contrário, nossos inimigos verão nossa retirada e atacarão
#     em força.
#     Dica: como você pode usar os **registradores de recorte** para resolver este exercício?

  comece aqui
  /
 /
v
goblin

orc orc orc goblin orc
orc goblin orc orc orc orc

trolloc
  trolloc

       lich
ghoul esqueleto

.     + `
     .          ~ .
============| |==========
            | |
============| |==========
     +
o .      .      x .   +
```
Aqui está a tradução das demais linhas do arquivo, mantendo toda a formatação e termos técnicos originais:

Ótimo trabalho! Você agora é um **verdadeiro mestre** dos registradores do Vim. Eu me curvo diante de você.

> Sabia? A qualquer momento, você pode usar o comando `:reg` para ver o que está em seus registradores. Ou pode digitar `:reg {registrador}` para inspecionar o conteúdo de um registrador específico.

## Colagem no Modo Insert

Vamos para a última parte desta seção sobre copiar e colar. Só mais um pouco e você pode fazer uma pausa merecida (você pode fazer uma pausa quando quiser, aliás :D).

Você pode não ter notado, mas até agora só estivemos copiando e colando coisas do _Modo Normal_. Embora você passe a maior parte do tempo copiando/colando coisas do _Modo Normal_, às vezes também é útil colar algo quando você está no _Modo Insert_. É assim que se faz: você digita `CTRL-R` + `{registrador}`, ou seja, CTRL + R (R de **R**egistrador) seguido do nome do registrador:

- `CTRL-R` + `a` cola do registrador nomeado `a`
- `CTRL-R` + `0` cola do registrador yank `0`
- `CTRL-R` + `9` cola do registrador de recorte `9`

```bash
# 12. A praga humana continua nos expulsando de nossas terras ancestrais. Devemos fugir
#     para o desconhecido. Ajude nosso povo a embarcar nos navios que nos levarão
#     para segurança. Nós voltaremos.
#     Dica: Problemas para colar uma linha à direita de outra palavra? Tente colar
#     no Modo Insert.
#     Bônus: Para tornar ainda mais emocionante e brincar com as diferentes alternativas
#     de cópia e colagem, tente criar uma fila de monstros em ordem de tamanho
#     <TROLL ogro orc orc orc goblin>
#     Conhecedores de monstros podem debater se o Ogro natural
#     das montanhas Krag é igual ou maior em tamanho que um Troll, mas neste
#     caso o Troll é muito maior porque está em letras maiúsculas TROLL como em
#     TROLL enorme.

  comece aqui
  /
 /
v  ~~~~~ . .. ~~~~~ . `~~~~~~ ~~~~~~                ~~~~
---------            ~~~~~~~ `~~~~~~ ~~~~ ~~~~~~ .           ~~
    ogro
          \_________ ~~~         `~~~~~~       ~~~ ~~~~~~ .        ~~
                    \______
                           \  ~~~~~ ~~~       `~~~~ .      ~~~
orc orc orc
                            | ~~~~ ~~~~~~~
                            |            ~~~~~~  ~~~~~ `~~~ ~ ~ ~~~~
                            |              _____~~~~~
                            |             /  o  \        ~~~~~~~~~
                            |  `~~~~~    |       | . ~~~~~~~~~
                            |            |   o   | ~~~~ .   ~~ ~ ~ ~ ~ ~~~~~
mova suas tropas            |            |       | ~~~ .   ~ ~ ~ ~ ~ ~ .
para formar uma linha       ==============       | . ~~~~~
aqui => goblin
                            ==============       |
                            |        ~~  |   o   | ~~~~ ~~~ ~~~~  ~~~
                            |   ~~~~     |       | ~~  ~~~~~       ~~~~
                            |            |   o   |
                           _|            |       | .  ~~~~ ~ ~ ~~~~~
                         _/  ~~~~~        \+++++/ .
                  TROLL /
            /\_        / . ~~~~~~~~~~
           /   \______/ ~~~~~ .    ~~~~~~~~~~~~ . ~ ~ ~~~~~~~ .       ~
          /
_________/ .  ~~~~~ ~~~~~ .       ~~~~~~ .     ~~~~~~ .     ~~~~~~ . ~~~~~
```

Ótimo trabalho! Isso é cópia e colagem suficiente para uma vida inteira. Agora tudo que você precisa é de mais prática. Divirta-se!

## Soluções

```bash
# 1. Expanda seu exército clonando seus minions mais mortais! Domine o mundo! Use
# `y` em combinação com os operadores que você aprendeu nos capítulos anteriores para
# copiar um minion mortal e `p` para colá-lo e assim cloná-lo para grande glória.

  comece aqui
  /
 /
v /re<ENTER>y2wPjyyp3jyi"P/(<ENTER>yi(P
orc orc orc orc orc orc orc
orc goblin orc orc goblin orc
dragão vermelho formiga barata
rei lich
rato aranha gigante rato
golem de terra
polvo "kraken" polvo
tubarão (cavaleiro da morte)
zumbi zumbi ghoul
```

```bash
#  2. Cerque seus inimigos com hordas de orcs!!! Experimente diferentes
#  tipos de yank e colagem.

  comece aqui
  /
 /
v
orc orc orc orc orc orc
orc orc orc orc orc orc
orc orc orc orc orc orc

      orc
orc halfling orc <== cercado
      orc

============| |==========

(paladino)

       ooo  ^^^^^^^^^^ooo

     (mago)

^^^^^  ^^^ ^^ ^ ^ ^^^

(elfo arqueiro)

```

```bash
#3. Ninjas são extremamente rápidos, furtivos e mortais. Portanto, precisamos
#   cercá-los de uma vez sem mover o cursor de sua localização.
#   Experimente com `P` e `gP` até acertar.

  comece aqui
  /
 /
v /jyy(n<ENTER>gPpngPp
orc orc orc orc orc orc
orc orc orc orc orc orc
orc orc orc orc orc orc

orc orc orc orc
     ninja <== cercado
orc orc orc orc
============| |==========

(ninja)

       ooo  ^^^^^^^^^^ooo

     (ninja)

^^^^^^  ^^^ ^^ ^ ^ ^^^^^
^^^ ^^^^^^^^^^^^^^^^^ ^^
```

```bash
# 4. Os mestres anões e gnomos de Ahknbar descobriram os segredos da
# teleportação. Usando os caminhos misteriosos do Vim, eles aprenderam a usar
# os comandos `d` e `p` para transportar qualquer coisa entre dois pontos.
# Tente!

  comece aqui
  /
 /
v .  /d<ENTER>di(f(pndi"f+p/g<ENTER>dwf"p
^^^^^^  ^^^ ^^ ^ ^ ^^^^^ ^^^^^^
^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^^
^^^                         ^^^
^^                           ^^
^     (anão) ====>   ( )     ^
^^^^  "anão" ====>   + +   ^^^
^^    gnomo ======>   " "    ^^
^^                            ^
^^                            ^
^^^^^^  ^^^ ^^ ^ ^ ^^^^^^^^^^^^
^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^^
```

```bash
# 5. Um grupo de corajosos anões empurrando os limites da teleportação acabou
# se teleportando para as profundezas da terra. Você poderia ser gentil
# o suficiente para resgatá-los?

  comece aqui
  /
 /
v /d<ENTER>ddjp
^^^^^^  ^^^ ^^ ^ ^ ^^^^^ ^^^^^^
^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^^
^^^ anão anão anão anão  ^^
^^^^^^  ^^^ ^^ ^ ^ ^^^^^^^^^^^^
^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^^

      o .        + .     +
o             o
                            o
============| |================
o        +       +
       + .                 +
                  +
```

```typescript
// 6. Estamos desenvolvendo um novo jogo roguelike e vai ser incrível!! Incrível!!
// O jogo será uma mistura dos seus jogos favoritos, fantasia e ficção científica,
// e o jogador poderá escolher jogar com qualquer um dos seus personagens favoritos! O quê?!
// Adicione alguns dos seus personagens favoritos à tela de seleção de personagens.
// Use o que você aprendeu até agora para fazer isso da maneira mais rápida que puder.

//   comece aqui
//    /
//  /
// v jyypci"Conan<ESC>fAcwBarbarian<ESC>fHcwHuman<ESC>
const characters = [
  new Character({ name: "Tanis", class: Classes.Archer, race: Race.HalfElf }),
];

characterSelectionScreen.add(characters);
```

```typescript
// 7. Corrija esses erros de digitação, humano! Dica: você pode fazer isso com os comandos `x` e `p`
//    Lembrete: `x` é equivalente a `dl`

//   comece aqui
//    /
//  /
// v /t<ENTER>xpfrxp/a<ENTER>nhxpnlxp
conts charactres = [
  new Chaarcter({ name: "Tanis", clsas: Classes.Archer, raec: Race.HalfElf }),
];


characterSelectionScreen.add(characters);
```

```typescript
// 8. Estranho... alguém colocou os membros da classe abaixo do construtor. Não é peculiar...
//    Vamos movê-los de volta para antes do construtor. Como sempre deveria ter sido...
//    Dica: Você pode combinar o comando `d` com um movimento para recortar todos os membros com um único comando?


//   comece aqui
//    /
//  /
// v /re<ENTER>dap?co<ENTER>P
class Character {
  constructor({name, class, race}: CharacterStats) {
    this.name = name;
    this.class = class;
    this.race = race;
  }

  readonly name;
  readonly class;
  readonly race;

  // Outro código...
}
```

```bash
# 9. Estamos preparando um ataque à cidade humana de Gonlor, orgulho dos Primeiros Humanos.
#    Recrutamos nossos guerreiros mais corajosos e ferozes das terras sagradas de Wordor que
#    juraram expulsar a praga humana desses terrenos sagrados.
#    Crie uma formação de batalha equilibrada alternando globins e orcs.
#    Dica: Pense em como você pode usar registradores para realizar esta tarefa

  comece aqui
  /
 /
v "ayawdd"byaw2ddO<ESC>"ap"bp"ap"bp.....
goblin goblin globin goblin
orc orc orc orc goblin orc
orc goblin orc orc orc orc
.     + `
     .          ~ .
============| |==========
            | |
============| |==========
     +
o .      .      x .   +

   .   ooo  ^^^^^^^ ^ ooo
soldado soldado soldado soldado
     soldado soldado soldado
  +    arqueiro arqueiro arqueiro
       mago arqueiro arqueiro

^^^^^^  ^^^ ^^ ^ ^ ^^^^^| |^^
^^^ ^^^^^^^^^^^^^^^^^ ^^| |^^
```

```typescript
// 9. Houve uma confusão nos planos de batalha e nossa formação de goblins é feita de orcs,
//    e nossa formação de orcs é feita de goblins. Precisamos corrigir essa confusão e também
//    garantir que enviemos os goblins para a batalha primeiro.
//    Dica: Tente usar y e p e veja o que acontece

//   comece aqui
//     /
//   /
// v  /orcs<ENTER>yiwkviwpjviwpnviwp => oh não! São orcs, esse é o problema que eu estava tentando ilustrar! :)
class Orc {}
class Goblin {}
const goblins = [new Orc(), new Orc(), new Orc()];
const orcs = [new Goblin(), new Goblin(), new Goblin()];
// Gostaríamos de enviar os goblins primeiro para a batalha, porque são carne para canhão
// que cansará o inimigo antes dos verdadeiros guerreiros chegarem.
sendArmiesToBattle(orcs);
```

```typescript
// 10. Houve uma confusão nos planos de batalha e nossa formação de goblins é feita de orcs,
//    e nossa formação de orcs é feita de goblins. Precisamos corrigir essa confusão e também
//    garantir que enviemos os goblins para a batalha primeiro.
//    Dica: Tente usar y e p e veja o que acontece. Você vê alguma oportunidade para facilitar
//    sua tarefa com o registrador yank.

//   comece aqui
//     /
//   /
// v  /goblins<ENTER>yiwjviwpkviwp/orcs<ENTER>viw"0p
class Orc {}
class Goblin {}
const goblins = [new Orc(), new Orc(), new Orc()];
const orcs = [new Goblin(), new Goblin(), new Goblin()];
// Gostaríamos de enviar os goblins primeiro para a batalha, porque são carne para canhão
// que cansará o inimigo antes dos verdadeiros guerreiros chegarem.
sendArmiesToBattle(orcs);
```

```bash
# 11. Retirada! Nossas tropas foram dizimadas pelos humanos malvados!
#     Transporte essas tropas pelo rio de volta para a segurança de Wordor. Você
#     deve levar todas as tropas de uma vez antes de começar a colocá-las
#     do outro lado do rio. Caso contrário, nossos inimigos verão nossa retirada e atacarão
#     em força.
#     Dica: como você pode usar os **registradores de recorte** para resolver este exercício?

  comece aqui
  /
 /
v    /ddj3dap/o<ENTER>"2p"1p
goblin

orc orc orc goblin orc
orc goblin orc orc orc orc

trolloc
  trolloc

       lich
ghoul esqueleto

.     + `
     .          ~ .
============| |==========
            | |
============| |==========
     +
o .      .      x .   +



^^^^^^  ^^^ ^^ ^ ^ ^^^^^| |^^
^^^ ^^^^^^^^^^^^^^^^^ ^^| |^^
```

```bash
# 12. A praga humana continua nos expulsando de nossas terras ancestrais. Devemos fugir
#     para o desconhecido. Ajude nosso povo a embarcar nos navios que nos levarão
#     para segurança. Nós voltaremos.
#     Dica: Problemas para colar uma linha à direita de outra palavra? Tente colar
#     no Modo Insert.
#     Bônus: Para tornar ainda mais emocionante e brincar com as diferentes alternativas
#     de cópia e colagem, tente criar uma fila de monstros em ordem de tamanho
#     <TROLL ogro orc orc orc goblin>
#     Conhecedores de monstros podem debater se o Ogro natural
#     das montanhas Krag é igual ou maior em tamanho que um Troll, mas neste
#     caso o Troll é muito maior porque está em letras maiúsculas TROLL como em
#     TROLL enorme.

  comece aqui
  /
 /
v  /o<ENTER>dw/goA <ESC>p?or<ENTER>dd<C-O>A <C-R>"dd/trdw<C-O>A <ESC>p
   ~~~~~ . .. ~~~~~ . `~~~~~~ ~~~~~~                ~~~~
---------            ~~~~~~~ `~~~~~~ ~~~~ ~~~~~~ .           ~~
    ogro
          \_________ ~~~         `~~~~~~       ~~~ ~~~~~~ .        ~~
                    \______
                           \  ~~~~~ ~~~       `~~~~ .      ~~~
orc orc orc
                            | ~~~~ ~~~~~~~
                            |            ~~~~~~  ~~~~~ `~~~ ~ ~ ~~~~
                            |              _____~~~~~
                            |             /  o  \        ~~~~~~~~~
                            |  `~~~~~    |       | . ~~~~~~~~~
                            |            |   o   | ~~~~ .   ~~ ~ ~ ~ ~ ~~~~~
mova suas tropas            |            |       | ~~~ .   ~ ~ ~ ~ ~ ~ .
para formar uma linha       ==============       | . ~~~~~
aqui => goblin
                            ==============       |
                            |        ~~  |   o   | ~~~~ ~~~ ~~~~  ~~~
                            |   ~~~~     |       | ~~  ~~~~~       ~~~~
                            |            |   o   |
                           _|            |       | .  ~~~~ ~ ~ ~~~~~
                         _/  ~~~~~        \+++++/ .
                  TROLL /
            /\_        / . ~~~~~~~~~~
           /   \______/ ~~~~~ .    ~~~~~~~~~~~~ . ~ ~ ~~~~~~~ .       ~
          /
_________/ .  ~~~~~ ~~~~~ .       ~~~~~~ .     ~~~~~~ .     ~~~~~~ . ~~~~~
```
