
# Angular Blog

Este projeto foi criado como parte de um estudo e aprendizado seguindo um tutorial da Diome. Durante o curso, fiz ajustes e apliquei os conhecimentos adquiridos para melhorar a aplicação.

## O que foi feito

- A aplicação foi construída utilizando **Angular 17**.
- Estudo das **novas diretivas** do Angular 17, como `@for` e `@if`.
- Utilização de **dados mockados** para simular uma API e exibir informações.
- A aplicação está sendo **rodada com Docker Compose** na porta `8082`.

## Desenvolvimento e Execução

A aplicação foi configurada para rodar em um servidor de desenvolvimento local utilizando **Docker Compose**, facilitando o processo de build e execução.

Para rodar a aplicação, use:

```bash
docker-compose up --build
```

A aplicação estará disponível em `http://localhost:8082`.

## Funcionalidades

- A aplicação utiliza **dados mockados** para exibir conteúdo como posts de um blog.
- Utiliza as novas **diretivas** `@for` e `@if` do Angular 17 para manipulação de loops e condicionais diretamente no template.

## Build

Para gerar a versão de produção da aplicação, execute:

```bash
ng build
```

Os artefatos da build serão armazenados no diretório `dist/`.

## Testes

Execute os testes unitários com o comando:

```bash
ng test
```

Para rodar os testes end-to-end:

```bash
ng e2e
```

## Mais informações

Se precisar de mais detalhes sobre o projeto ou do Angular CLI, use:

```bash
ng help
```

Ou consulte a [Angular CLI Overview and Command Reference](https://angular.io/cli).
