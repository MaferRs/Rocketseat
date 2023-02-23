# Layout e evolução 

Layout tem a ver com a maneira que os elementos estão distribuidos na tela.

## Normal flow 

Ou flow Layout é a maneira que os elementos `block` e `inline` ficam na página.
 ```html
 <p> Texto block com <strong> inline </strong> dentro </p>
``` 


 ## Tables

 É a maneira de tableas onde a tag `table` recebe um display `table`
fazendo com que os elementos internos como `td` e `tr` possam 
ser usados para montar uma tabela. 


## Tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

``` html 
<div style="float: left"> 
     Esquerda
</div>
<div style="float: right"> 
    direita
</div>
<div style="clear: both"> 
    normal
</div>

 ```

 ## Flexbox

 a caixa se torna flex, fazendo com que os elementos internos possam receber melhor:

 -alinhamento
 -ordenação
 -tamanhos flexíveis.


# terminologia
-Flex container (caixa com itens)
    - itens
-nesting (elementos que vivem dentro de outro elemento, contém)


-axis (eixo)
    -main
        -start,end
    -cross
        -start,end

-flex sizing 
    -flexível
    -altera widht-height dos itens para preenchimento dos espaços do flex container.


# propriedades flex container

* direção dos itens
* multi linhas
* alinhamento
    * principal
    * cruzado
* espaços entre os itens

# direção dos itens

- flex é uma dimensão ( horizontal ou vertical)
- podemos mudar a direção com `flex-direction`
- valores: (row | row-reverse | column | column-reverse)


# flex-wrap

- podemos usar multi linhas.
- cada nova linha, um novo flex container

# flex-flow 

- shorthand
- flex-direction | flex-wrap

# justify content

- alinhamento dos elementos dentro do container
- distribuição dos elementos

# valores

- flex-start
- flex-end
- center 
- space-around
- space-between
- space-evenly

# align -items 
- alinhamento dos elementos no eixo cruzado

## valores
- stretch
- flex-start
- flex-end
- center

# gap 
- espaços entre os elementos

# valores 

unidades de medida
fixas: px, pt
flexíveis : %, em, rem


# propriedades para os itens

- flex-basis
- flex-grow (crescimento dentro do container em relação dos espaços vazios)
- flex-shrink(capacidade do item encolher dentro do container)
- flex
- order 