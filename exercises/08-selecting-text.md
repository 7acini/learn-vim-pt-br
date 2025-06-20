# Selecionando Texto

O *Modo Visual* é o equivalente no Vim de arrastar o mouse e selecionar partes arbitrárias de texto. Vamos experimentar as três formas diferentes de selecionar texto no Modo Visual:

- `v` para modo visual caractere por caractere
- `V` para modo visual linha por linha
- `C-V` para modo visual em bloco

Agora use todos os acima no seguinte exercício:

```
// #1. Tente selecionar algum texto usando v, V e C-V no
// texto a seguir. Combine estes com `hjkl` e outros
// movimentos para realizar sua seleção após entrar
// no Modo Visual.
// Exemplo: (vll2lwbww)

"É melhor seguir em frente sem um objetivo,
do que ter um objetivo e ficar parado,
e certamente é melhor do que ficar parado
sem um objetivo."
    - A Torre da Andorinha (The Witcher #4)
```

Legal, né? **A melhor parte é que você pode combinar o Modo Visual com todos os movimentos que aprendeu nos capítulos anteriores para selecionar texto à vontade**. O próximo passo é fazer algo com essa seleção. E você adivinhou: é aí que os operadores entram.

Enquanto no *Modo Normal* aplicamos um operador usando:

```
 ação a executar
  /
 /
{operador}{contagem}{movimento}
          ---------------
             /
            /
        trecho de texto sobre o qual
        aplicar essa ação
```

No *Modo Visual* aplicamos um operador de forma oposta. Primeiro selecionamos algum texto visualmente, depois aplicamos o operador:

```
entrar no Modo Visual
    /
   /                  ação a aplicar
  /                         /
---------                  /
{v|V|C-V}{contagem}{movimento}{operador}
         ---------------
           /
          /
   trecho de texto sobre o qual
   aplicar uma ação
```

Agora que temos alguma base de como o *Modo Visual* funciona, vamos testá-lo e retocar partes do exemplo anterior. Tente realizar estas alterações tanto do *Modo Normal* quanto do *Modo Visual* para perceber a diferença.

> Lembre-se que você pode encontrar as soluções pesquisando por /Solutions. Para voltar use <CTRL-O>.

```
// #2. Complete estas transformações usando tanto
// *Modo Normal* quanto *Modo Visual*.
//
// 1. Remover "É"
// 2. melhor => Melhor
// 3. parado, => parado.
// 4. apague tudo depois disso

 comece aqui
  /
 /
v
"É melhor seguir em frente sem um objetivo,
do que ter um objetivo e ficar parado,
e certamente é melhor do que ficar parado
sem um objetivo."
    - A Torre da Andorinha (The Witcher #4)
```

Agora vamos focar no **Modo Visual em Bloco**, também conhecido como **Visual Block**, que é bastante especial. O Visual Block é útil quando você quer fazer coisas com um bloco de texto e é particularmente prático quando você quer adicionar algo antes ou depois de um bloco de texto. Selecione um bloco de texto com Visual Block e:

- Digite `I` para entrar no *Modo de Inserção* e *adicionar* algo no início de todas as linhas do bloco.
- Digite `A` para fazer o mesmo, mas desta vez *acrescentar* algo no final de todas as linhas do bloco.

Experimente!

```
#3. Transforme a seguinte lista em uma lista ordenada HTML usando C-V em combinação com I e A

  comece aqui
  /
 /
v
- comprar farinha, sal e ovos
- misturar duas xícaras de farinha e um pouco de sal
- colocar um punhado de farinha em uma superfície plana
- Fazer uma espécie de vulcão com a farinha
- Quebrar 3 ovos.
- Os ovos são a lava no vulcão
- Lentamente combinar farinha e ovos até formar uma massa
- Sove a massa
- Deixe descansar
```

Legal, né? Visual-block é o multi-cursor do Vim (mais ou menos). Não hesite em verificar a solução abaixo e comparar com o que você fez.

> No VSCodeVim (diferente do Vim) você também pode aproveitar o uso de I e A para adicionar antes e depois de uma seleção Visual quando usa o modo visual linha por linha. Então o acima também se aplica ao usar V. Experimente!

# Soluções

```
// #2. Complete estas transformações usando tanto
// *Modo Normal* quanto *Modo Visual*.
//
// 1. Remover "É"
// Modo Normal: ldtb
// Modo Visual: lvtbd
// 2. melhor => Melhor
// Modo Normal: ~
// Modo Visual: v~
// 3. parado, => parado.
// Modo Normal: /,<ENTER>ncl.<ESC>
// Modo Visual: /,<ENTER>vc.<ESC>
// 4. apague tudo depois disso
// Modo Normal: jdd..
// Modo Visual: jVjjd

 comece aqui
  /
 /
v
"É melhor seguir em frente sem um objetivo,
do que ter um objetivo e ficar parado,
e certamente é melhor do que ficar parado
sem um objetivo."
    - A Torre da Andorinha (The Witcher #4)
```

```
#3. Transforme a seguinte lista em uma lista ordenada HTML usando C-V em combinação com I e A

  comece aqui
  /
 /
v C-V8jc<li><ESC>C-V8j$A</li><ESC>O<ol>o</ol>
- comprar farinha, sal e ovos
- misturar duas xícaras de farinha e um pouco de sal
- colocar um punhado de farinha em uma superfície plana
- Fazer uma espécie de vulcão com a farinha
- Quebrar 3 ovos.
- Os ovos são a lava no vulcão
- Lentamente combinar farinha e ovos até formar uma massa
- Sove a massa
- Deixe descansar
```
