## Exercícios para fazer em casa

### Crie uma branch com o seu nome; 
### Dentro da pasta *exercicios-casa* crie uma pasta com o seu nome, lá dentro coloque os seus exercicios da semana. Após terminado faça um pull request com a sua branch para o repositório da aula. 


#### 1. Use o DOM para realizar alterações na sua página:
- ETAPA1: Crie um documento HTML que contenha um `título` e um `artigo`, e dentro desse artigo deve haver pelo menos: `um parágrafo`, `uma imagem` e `um link <a>`. (O tema do artigo fica sob escolha da aluna); 
- ETAPA2: (OPCIONAL) Dê um estilo para o seu HTML; 
- ETAPA3: Crie uma variável para armazenar cada um dos seus elementos HTML no javascript;
- ETAPA4: Adicione uma `classe` para o seu elemento de parágrafo usando o DOM;
- ETAPA5: Crie ou modifique o `estilo` da sua imagem usando o DOM;     
- ETAPA6: Modifique o valor do atributo `href` do seu link utilizando o DOM;
- ETAPA7: Crie um novo elemento HTML utilizando o DOM e o adicione ao seu HTML. 

//criar 2 tags: h1, h2/ article
//dentro article -> 1 p, img, a
//criar um documento js pra armazenar essas variaveis
ex. const meuArtigo = document.querySelector(".article")
ex. const paragrafo = ...
paragrafo.setAttribute('class', 'meuParagrafo')
... imagem.style.border = '1px, solid, red'
createElement(p)


#### 2. Utilizando o mesmo HTML do exercício 1, diga(`mostrando com o console.log() ou console.dir()`): 
- Quem é o elemento `pai/mãe` do seu artigo? 
- Quem são os elementos `filhes` do seu artigo? 
- Qual elemento é o `próximo irmão` do elemento parágrafo?

#### 3. Utilizando o mesmo HTML do exercício 1, faça uma `função de evento` que aumente o tamanho da minha imagem quando eu passar o mouse por cima dela e que quando eu retirar o meu mouse de cima da imagem ela retorne ao tamanho original;

#### 4. Formulário: 
- ETAPA1: Crie um documento HTML com um pequeno formulário de login, contendo um `título` + os campos de input com etiquetas de `nome` e `senha` + um botão com o texto `entrar`.
- ETAPA2: Use o DOM com o javascript para selecionar os campos de input e o botão; 
- ETAPA3: Crie um novo elemento HTML usando o DOM, dê um valor para ele com o texto: `Sem permissão `, e adicione ele ao seu HTML;
- ETAPA4: Adicione um evento para que após a usuária clique no botão com o texto  `entrar`, o novo elemento tenha o seu texto de `Sem permissão` substituído por: `Olá + o nome da pessoa`; 
 