---
layout: post
title: Conversão Eletromecânica de Energia
date: 2025-07-14 22:38 -0300
categories: [estudos]
tags: [elétrica]
lang: pt-br
math: true
---

Essa é a matéria onde a engenharia começa a ficar perigosa, pois é agora que começamos a relacionar a energia elétrica em coisas que fazem realmente alguma coisa, inclusive pode ser fatal.

Uma das ideias mais legais que acho que conversão eletromecânica é a seguinte:

Você lembra quando usávamos a analogia entre gravitação universal e eletroestática ?

Em seguida, fomos para circuitos elétricos, que não são exatamente a mesma coisa, mas a ideia é fácil de compreender com base no que já sabemos sobre cargas elétricas

Cargas que geram campos elétricos e são o princípio fundamental da _força eletromotriz_ 

E aí chegamos nos circuitos magnéticos!
Que podemos usar analogia com os circuitos elétricos para entendê-los

Nos circuitos magnéticos existe uma _força magnetomotriz_ que é proporcional à corrente e o número de espiras que são feitas.

De forma similar, análogo à lei de Gauss para o campo elétrico existe a lei de Ampère para o campo magnético. Que diz que o campo em um percurso fechado é proporcional à corrente que passa por ele(podendo ser inclusive a mesma corrente passando em espiras), nesse caso, podemos dizer também que o rotacional é diferente de 0. 

$RI = \mathbb{F}_{em} \leftrightarrow \mathbb{F}_{mm} =\mathbb{R}\Phi_{mag} = NI$ 

Na prática, onde existe o circuito magnético ?

Em todo lugar! Basta fazer um monte de espiras! Só que isso também acontece com o circuito elétrico, basta ter uma tensão alta o suficiente e você terá os raios.

O que acontece com os circuitos elétricos? Usamos fios, que canalizam os elétrons para onde queremos que eles vão e assim seja possível fazer coisas úteis com eles...

A mesma coisa acontece com os circuitos magnéticos!!

Usamos materiais com permeabilidade magnética muito maior que a do ar.

E temos a relação entre permeabilidade magnética e condutividade.

$\mu_{magnética} \leftrightarrow \sigma{condutividadde}$  

Enfim, temos o seguinte isomorfismo

| $F_{em} = RI$        | $F_{mm} = \mathbb{R}\Phi_{mag}$             |
| -------------------- | ------------------------------------------- |
| $[F_{mm}]=[V]$       | $[F_{em}]=[A] . espiras$                    |
| $[R]=[\Omega]$       | $\mathbb{R} = [A.espiras]/[Wb]$ ou $H^{-1}$ |
| $[I] = [A]$          | $[\Phi_{mag}]= [Wb]$                        |
| $[\sigma_{ele}]=S/m$ | $\mu_{mag}=H/m$                             |

E já podemos fazer coisas úteis com isso!

Como por exemplo: 

## Um transformador!

Para começar podemos imaginar um transformador com permeabilidade infinita, isto é, sem perdas para o ambiente. Que concentre todas as linhas de campo magnético dentro dele.

Da mesma forma como corrente gera campo magnético, campo magnético gera corrente então ao alterar a proporção entre as espiras podemos também alterar a corrente que está sendo enviada!!

O tradicional é mostrar um indutor de N espiras, mas a finalidade principal desse indutor é ser usado para duas coisas:
- Para ser usado como transformador.
- Para ser usado como eletroímã quando não é o caso perfeitamente ideal.


