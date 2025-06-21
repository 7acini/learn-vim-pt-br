# Primeiros Passos no Vim

Oh não!? Se você tentar digitar algo com esse cursor retangular estranho, nada acontece!? Ou coisas estranhas acontecem?!!?

щ（ﾟ Д ﾟ щ）

Ok. Respire fundo. Eu não quebrei seu editor. Ainda.

O Vim é um editor bem peculiar. Ele tem modos: um modo para navegar/editar, um modo para inserir texto e um modo para selecionar texto. Isso é bom! Dá ao Vim a capacidade de aproveitar ao máximo seu teclado, pois ele se concentra em apenas uma tarefa por vez.

O modo ativo agora (com o cursor retangular) é o **modo normal**. Nele, o Vim foca exclusivamente em navegar rapidamente pelo código e editar — duas das coisas mais comuns ao programar.

Vamos começar praticando o básico do movimento no modo normal: `hjkl`. Essas teclas permitem mover o cursor em todas as direções, um espaço por vez.

```
           ↑
     ← h j k l →
         ↓
```

Se parece estranho, imagine que está em um jogo. Descendo nas *Masmasmorras do Infinito* em busca de tesouros...

````
  ________________________________________
/ Domine as artes misteriosas do Vim      \
\ e colete o tesouro.                     /
  ----------------------------------------
         \   ^__^
          \  (oo)   Para um desafio maior,
             *()*   não olhe para o teclado.
            (____)

 comece aqui
  /
 /
@  pratique usando hjkl.
   Ah! E você não pode atravessar paredes.
   ======================================|
|  |#|               |##|          |   |#|
|  |#| ------------- |##|  |-----  |     |
|  |#|      |######| |##|  |####|      |-|
|  |#------ |######| ----  |####|----- |#|
|  |######| |######|       |########## ##|
|  |------| |-----#| ----  |---------- --|
|                |#| |##|            # ##|
|##################################### ##|
|#                                       |
|---| |----------------------============|
|~~~| |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
|---| |----------------------------------|
|                                        |
|=|===/?================================ |
|                                        |
|   o   o   o  o    o     o     o  o     |
|                                        |
|-=======================--$---==========#
                        |$$$$$|
                       tesouro
````

Eba! Parabéns! Agora você está rico e pode morar em um lindo palácio ASCII!

```
                                   |>>>
                                   |
                               _  _|_  _
                              |;|_|;|_|;|
                              \\.    .  /
                               \\:  .  /
                                ||:   |
                                ||:.  |
                                ||:  .|
                                ||:   |       \,/
                                ||: , |            /`\
                                ||:   |
                                ||: . |
 __                            _||_   |
    '--~~__            __ ----~    ~`---,
           ~---__ ,--~'                  ~~----_____-~'
```

Agora que aprendemos os movimentos mais básicos, vamos ver como fazer seu editor se comportar como você está acostumado: o **modo de inserção**. Nele, o Vim foca em inserir texto e código, como um editor comum.

- Pressione `i` para entrar no **modo de inserção**.
- Pressione `<ESC>`, `<CTRL-[>` ou `<CTRL-C>` para voltar ao **modo normal**.

Complete estas frases. Pratique usando `i` para entrar no **modo de inserção** e `<ESC>` (ou as outras opções) para voltar ao **modo normal**.

```
Quero aprender Vim porque...
Minha comida favorita é...
Eu morreria por um...
Se eu fosse para uma ilha deserta, levaria um...
```

Incrível! Ótimo trabalho!

> Uma dica valiosa para melhorar suas habilidades no teclado e no Vim é mapear sua tecla **CAPSLOCK** para **ESC** e **CTRL** ao mesmo tempo: **ESC** quando pressionada sozinha e **CTRL** quando combinada com outras teclas. Isso é ótimo porque a tecla CAPSLOCK fica na *home row*, perto da posição natural das suas mãos. No Mac, você pode fazer isso com o **Karabiner**, e muitos teclados mecânicos (como o *Ultimate Hacking Keyboard*) permitem essa configuração.
