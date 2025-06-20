# Operando Rapidamente em Resultados de Busca

Vamos começar com o exemplo deste capítulo e nos tornar implacáveis caçadores de pepinos. Os pepinos te veem e tremem de medo!

Para o primeiro exercício, usaremos uma combinação de:

- `n` para ir para o próximo item correspondente a uma busca (como repetir uma busca)
- `.` para repetir a última alteração

```
#1. Destrua todos os pepinos!! Use o comando `d` em combinação com `/`, `n` e `.`

  comece aqui
  /
 /
v
pepino cenoura alface
repolho cenoura alface pepino
pepino pepino cenoura
couve pepino couve
```

> Lembre-se que você pode encontrar as soluções pesquisando por /Solutions. Para voltar use <CTRL-O>.

Agora vamos tentar o mesmo exemplo com o operador `gn`:

```
#2. Agora use `gn`. Não vou te dizer como. Você precisa se esforçar para lembrar da leitura do capítulo ou simplesmente tentar coisas como um louco exterminador de pepinos

  comece aqui
  /
 /
v
pepino cenoura alface
repolho cenoura alface pepino
pepino pepino cenoura
couve pepino couve
```

Legal, né?

## Soluções

```
#1. Destrua todos os pepinos!! Use o comando `d` em combinação com `/`, `n` e `.`

  comece aqui
  /
 /
v (/pe<ENTER>dawn.n..n.)
pepino cenoura alface
repolho cenoura alface pepino
pepino pepino cenoura
couve pepino couve
```

```
#2. Agora use `gn`. Não vou te dizer como. Você precisa se esforçar para lembrar da leitura do capítulo ou simplesmente tentar coisas como um louco exterminador de pepinos

  comece aqui
  /
 /
v /pepino<ENTER>dgn4.              => isso não alcança exatamente o mesmo resultado
v /(pepino | pepino)<ENTER>dgn4. => isso alcança o mesmo resultado usando regex
pepino cenoura alface
repolho cenoura alface pepino
pepino pepino cenoura
couve pepino couve
```