# Movendo-se Extremamente Rápido com Movimentos do Vim

No Vim, você realiza ações usando **comandos**. Comandos são ações que têm efeito no seu editor. Existem muitos comandos diferentes para diversas finalidades. **Movimentos** são comandos usados para navegar no **modo normal** (você logo descobrirá que eles são capazes de muito mais).

É hora de praticar alguns movimentos básicos para navegar rapidamente pelo seu editor. Vamos lá!

> Lembre-se que você pode navegar neste arquivo usando hjkl:
> ```
>            ↑
>      ← h j k l →
>          ↓
> ```

## Movimento Horizontal Palavra por Palavra

Vamos começar com dois excelentes movimentos horizontais:

- `w` para avançar palavra por palavra
- `b` para retroceder palavra por palavra

Use `w` e `b` para ir até o final da seguinte frase e voltar.

```
 comece aqui
  /
 /
v
Hither came Conan, the Cimmerian, black-haired, sullen-eyed, sword in hand, a thief, a reaver, a slayer, with gigantic melancholies and gigantic mirth, to tread the jeweled thrones of the Earth under his sandaled feet.
```

Notou algo interessante ao mover palavra por palavra? O que aconteceu com `Conan,` e `Cimmerian,`? Como o Vim tratou essas vírgulas? Você esperava que `,` fosse parte de uma palavra diferente? Não? Gostaria de poder pular toda a extensão de `Cimmerian,` em um único salto?

Você pode! O Vim distingue entre **palavras** e **PALAVRAS**. Uma **palavra** no Vim é uma sequência de letras, dígitos e números, OU uma sequência de outros caracteres não-brancos.

Estas são todas palavras. Observe como `w` e `b` se comportam ao navegá-las:

```
estas são 4 palavras
e estas abaixo também
,,, ..... ((((( ,.(
```

O Vim também tem o conceito de tipos especiais de palavras (com letras, dígitos e números) que incluem caracteres especiais como ., (, {, etc. Elas são chamadas de **PALAVRAS** no jargão do Vim. `Cimmerian,` e `Conan,` são duas **palavras** mas apenas uma **PALAVRA**. E assim como você pode mover palavra por palavra usando `w` e `b`, você pode usar as versões maiúsculas para mover **PALAVRA** por **PALAVRA**. Experimente!

- `W` para avançar PALAVRA por PALAVRA
- `B` para retroceder PALAVRA por PALAVRA

```
 comece aqui
  /
 /
v
Hither came Conan, the Cimmerian, black-haired, sullen-eyed, sword in hand...
```

_Percebeu a diferença?_

PALAVRAS são particularmente úteis para nós programadores porque código frequentemente contém muitas delas:

```
isto é uma PALAVRA: Iam_A_PALAVRA(PALAVRA)
esta chamada de função soma(2,3) também é uma PALAVRA
este array [1,2,3,4,5] é uma PALAVRA também
```

Agora tente combinar `wW` e `bB` no próximo exemplo:

```typescript
 comece aqui
  /
 /
v
function helloVimWorld() {
  console.log("Hello vim world");
}
// Muito original, Jaime. Sua avó ficaria orgulhosa.
```

**Em geral, movimentos por palavra permitem mudanças mais precisas enquanto movimentos por PALAVRA permitem navegação mais rápida**:

```
digite wwww ==> v   v v   v   v
              palavra. são duas palavras
              palavra. é uma PALAVRA
digite WWW  ==> ^     ^  ^   ^
```

Agora vamos tentar algo diferente:

- `e` para pular para o final de uma palavra
- `ge` para pular para o final da palavra anterior

Experimente!

```
 comece aqui
  /
 /
v
Hither came Conan, the Cimmerian, black-haired, sullen-eyed, sword in hand, a thief, a reaver, a slayer, with gigantic melancholies and gigantic mirth, to tread the jeweled thrones of the Earth under his sandaled feet.
```

Assim como `w` e `b`, `e` e `ge` têm equivalentes para PALAVRAS:

- `E` é como `e` mas opera em PALAVRAS
- `gE` é como `ge` mas opera em PALAVRAS

```
 comece aqui
  /
 /
v
Hither came Conan, the Cimmerian, black-haired, sullen-eyed, sword in hand...
```

## Movendo-se para um Caractere Específico

Movimentos de busca por caractere permitem mover-se horizontalmente com rapidez e precisão:

- Use `f{caractere}` (find) para mover para a próxima ocorrência de um caractere na linha.
- Use `F{caractere}` para encontrar a ocorrência anterior de um caractere

Por exemplo, `f(` leva você para a próxima ocorrência de `(`. Experimente!

```typescript
 comece aqui
  /
 /
v
function helloVimWorld() {
                      |
                      v agora tente voltar com F(
  console.log("Hello vim world");
}
// Muito original Jaime. Sua avó ficaria orgulhosa.
```

Navegue usando `f{caractere}` e `F{caractere}` e colete todas as letras no circuito abaixo:

```
-----------------f-------------------
------d------------------------------
--------------------------------X----
--o----------------------------------
------------------_------------------
----------------------------{--------
----)--------------------------------
```

Você pode claramente ver como `f` é mais rápido e preciso do que movimentos por palavra comparando-os neste exemplo:

```
digite f(   ==> v                        v
              const fireball = function(target){
digite wwww ==> ^     ^        ^ ^       ^
```

Além de `f`, o Vim também oferece o comando `t` (until):

- Use `t{caractere}` para mover o cursor logo antes da próxima ocorrência de um caractere (pense em `t{caractere}` como movendo seu cursor até aquele caractere).
- Novamente, você pode usar `T{caractere}` para fazer o mesmo que `t{caractere}` mas para trás

Se a diferença entre os comandos f e t ainda não está clara, aqui está um exemplo que compara ambos:

```
digite t(   ==> v                       v
              const fireball = function(target){
digite f(   ==> ^                        ^
```

Tente coletar todos os `$` neste outro circuito. Ficaremos tão ricos!!!

```
----------------$f-------------------
-----d$------------------------------
-------------------------------$X----
--o$----------------------------------
------------------$_------------------
----------------------------${--------
----)$--------------------------------
```

Depois de usar `f{caractere}` você pode digitar `;` para ir para a próxima ocorrência do caractere ou `,` para ir para a anterior. Você pode ver `;` e `,` como comandos para repetir a última busca por caractere.

Isso é legal porque evita que você digite a mesma busca repetidamente. Experimente você mesmo:

```
digite fdfdfd ==> v   v               v        v
                let damage = weapon.damage * d20();
                let damage = weapon.damage * d20();
digite fd;;   ==> v   v               v        v
```

## Movimento Horizontal Extremo

- `0`: Move para o primeiro caractere de uma linha
- `^`: Move para o primeiro caractere não-branco de uma linha
- `$`: Move para o final de uma linha
- `g_`: Move para o último caractere não-branco de uma linha

Experimente abaixo. Tente chegar a todos os extremos no trecho de código abaixo:

```typescript
 comece aqui
  /
 /
v                // Adicionei alguns espaços extras no final
function helloVimWorld() {
  console.log("Hello vim world");
}
// Muito original Jaime. Sua avó ficaria orgulhosa.
```

## Movimento Vertical

Começando com `k` e `j`, passamos para uma forma mais rápida de manobrar verticalmente com:

- `}` salta parágrafos inteiros para baixo
- `{` similarmente mas para cima
- `CTRL-D` permite mover metade da página para baixo rolando a página
- `CTRL-U` permite mover metade da página para cima também rolando

Suba e desce neste arquivo usando `{` e `}` primeiro. Depois compare com usar `CTRL-D` e `CTRL-U`. Use o `PARE` abaixo como marcador :D.

```
----------------------------
-----------   --------------
---------  PARE  -----------
----------     -------------
----------------------------
             |
             |
             v continue aqui
```

## Movimentos Verticais de Alta Precisão com Padrão de Busca

Para mover para qualquer lugar em um arquivo quando você tem um alvo em mente, a melhor opção é buscar usando:

- `/{padrão}` para buscar para frente
- `?{padrão}` para buscar para trás

Vamos testar a busca. Tenho me dedicado à agricultura ultimamente mas não sou muito bom nisso. O campo abaixo tem um monte de ervas daninhas e um solitário pepino. Tente usar busca para posicionar seu cursor exatamente no pepino. (E lembre-se que para executar uma busca você precisa pressionar `ENTER` no final do comando)

```
--------------------------
---v----------------v-----
-----------v---pepino---
-----v-----------v--------
--------------------------
```

> Para obter realce da busca. Você pode precisar atualizar a configuração do vscode vim. Abra suas configurações de usuário e certifique-se que a opção vim.hlsearch está habilitada. Agora quando você busca o texto correspondente é destacado no editor.

Incrível! `/pepino` te levou exatamente onde você precisava ir. Você não precisa digitar a palavra inteira, frequentemente 2 ou 3 caracteres são suficientes. Tente `/pep`:

```
--------------------------
---v----------------v-----
-----------v---pepino---
-----v-----------v--------
--------------------------
```

Muito mais rápido, certo? Se houver múltiplas ocorrências do mesmo padrão você pode pular rapidamente entre elas usando:

- `n` para ir para a próxima ocorrência
- `N` para ir para a ocorrência anterior

Digite `n` e você pula para a próxima ocorrência de `pep` (o Vim mantém sua última busca ativa)

```
--------------------------
---v--pepino------v-----
-----------v---pepino---
-----v-----------v--------
pepino------------------
```

Agora digite `N` para voltar para o topo do campo, depois `n` para frente até este brilhante `pepino`.

Você pode usar `?{padrão}` para buscar para cima. Usar `?` sem um padrão inverte a direção da busca atual. Ao inverter a direção `n` e `N` também invertem.

Tente digitar `?` e pressionar `ENTER`. E então volte para este mágico `pepino`.

O `{padrão}` em `/{padrão}` não precisa ser uma string literal. É uma expressão regular. Oh o poder supremo das expressões regulares!

Tente usar o seguinte comando de busca para encontrar títulos de segundo nível neste documento. Observe como quando você chega ao final ele volta para o topo. Passe por todo o documento até encontrar o próximo título.

- Digite `/## .*`

## Movendo-se Mais Rápido com Contagens

Contagens são números que permitem multiplicar o efeito de um comando:

```
{contagem}{comando}
```

Experimente você mesmo! Digite `2w` para avançar duas palavras:

```
digite wwww ==> v   v v   v   v
              palavra. são duas palavras
              palavra. são duas palavras
digite 3w2w ==>       ^       ^
```

Tente `5j` para pular 5 linhas abaixo`:

-x
0| <-- local de pouso
-x

Tente encontrar um array dentro de outro array:

```
digite f[;;  ==> vv    v
               [[1], [1, 2], [3]]
               [[1], [1, 2], [3]]
digite 3f[  ==>        ^
```

Tente pular para o segundo pepino com `2/pep`:

```
--------------------------
---v--pepino------v-----
-----------v---pepino---
-----v-----------v--------
pepino------------------
```

Legal, né?

Uma forma mais rápida de se mover é combinar contagens com `j` e `k`. Você pode habilitar números de linha relativos para ter uma ideia de quantas linhas precisa pular para cima ou para baixo (Você pode encontrar nas configurações de usuário em _line numbers_).

## Movimento Semântico

Além dos movimentos anteriores que não levam em conta o significado do seu código, o Vim oferece atalhos adicionais que consideram a semântica do código:

- Use `gd` para ir para a **d**efinição do que estiver sob seu cursor.
- Use `gf` para ir para um **a**rquivo em uma importação.

## E Mais Alguns Movimentos Úteis

Estes são mais alguns movimentos que podem ser úteis de vez em quando:

- Digite `gg` para ir para o topo do arquivo.
- Use `{linha}gg` para ir para uma linha específica.
- Use `G` para ir para o final do arquivo.
- Digite `%` para pular para o correspondente `({[]})`.

Tente voltar para o topo deste arquivo com `gg`, depois volte com `G`.

E agora pule entre estes dois colchetes correspondentes até você querer dormir:

```typescript
             comece aqui f[%
                 \
                  \
                   v
const bagOfFoods = [["pepino"], ["tomate", "batata"]];
```

E é isso! Dê um tapinha nas suas próprias costas. Você acabou de dominar os movimentos do Vim.