# Aula3 + Aula4 + Aula5

## Renderizando com [EJS](https://ejs.co/)

### Instalando o necessário

- [Pacote do NPM](https://www.npmjs.com/package/express-ejs-layouts)
- [EJS language support](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support)

### O que é EJS

Rodar javascript para gerar páginas antes de enviar o html

### Usando o EJS

- `/routes/index.ts`: diz qual `.ejs` tem que rodar para qual rota, assim como
  colocar variáveis para renderizar
- `/views/layout.ejs`: usa para injetar o nome do projeto e um body com base na
  rota no html final
- `/views/index/*.ejs`: qual body tem que injetar na página

## Colocando CSS nos templates

1. Crie um `.css` na pasta `public`
2. Coloque um link de stylesheet com `href="public/nome.css"` do css no
   `layout.ejs`
3. Recarregue a página
