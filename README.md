# webdriverio-practice
Projeto de estudo com ferramenta webdriverio para automação Web. Para a criação do projeto foi utilizado o comando `npx wdio config` que realiza a configuração inicial do projeto perguntando ao usuário sobre algumas opções que ele gostaria de usar no seu projeto, como frameworks, reporters e o page object model.

## Instalação
Para instalar o projeto deve-se ir até o diretório onde o projeto foi clonado e instalar via `npm install` para que o NPM tome conta da instalação das dependencias

## Execução
Para rodar os testes deve ser utilizado o comando `npx wdio wdio.config.js`.

## Framework e Report
Como framework Mocha pois eu ainda não o conhecia e gostei da experiência adquirida com essa atividade. O framework é simples e semântico permitindo descrever as funcionalidades testadas de forma fácil e muito legível
Para o report foi escolhido o spec report por conta da simplicidade. O reporter imprime de forma concisa e visual os resultados da execução dos testes ao final da mesma

## Casos de teste
```
Feature: Busca

  Background:
    Dado que estou na página inicial

  Scenario: Resultado de Busca Semântico
    Quando eu realizo uma busca por um produto
    Então eu devo ver produtos relacionados com os termos que utilizei
    
  Scenario: Resultado para Busca Inválida
    Quando eu realizo uma busca utilizando um termo de busca inválido
    Então eu devo ver um aviso dizendo que não foram encontrados resultados para a minha busca
```

```
Feature: Adicionar ao carrinho

  Background:
    Dado que estou na página inicial

  Scenario: Resultado de Busca Semântico
    Dado que ainda não realizei nenhuma ação no site
    Quando eu navego para a página de carrinhi
    Então eu devo ver um aviso de que meu carrinho está vazio
    
  Scenario: Fluxo sem garantia extendida
    Quando eu realizo uma busca por um produto
    E escolho o primeiro produto da lista de resultados
    E adiciono esse produto ao carrinho
    Então eu devo ser redirecionado ao carrinho
    E o produto adicionado deve ser vizível no meu carrinho
    
  Scenario: Fluxo com garantia extendida
    Quando eu realizo uma busca por um produto aplicável para garantia extendida
    E escolho o primeiro produto da lista de resultados
    E adiciono esse produto ao carrinho
    Então eu devo ser redirecionado para página de garantia extendida
    E ao clicar em continuar eu devo ser redirecionado para o carrinho
```
