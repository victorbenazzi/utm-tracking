# Rastreamento e persistência de Parâmetros UTM com Session Storage

Este guia explica como implementar a persistência de parâmetros UTM (Urchin Tracking Module) durante a sessão do usuário, utilizando o Session Storage do navegador. Isso permite rastrear a origem do usuário em diferentes páginas do seu site, mesmo após navegar pelas páginas.

## Como Funciona
### Landing Page ou página com a UTM a ser rastreada:

Ao carregar a landing page, o script `utm-capture.js` é executado.
Ele captura os parâmetros UTM da URL (ex: utm_source, utm_medium, utm_campaign). Os parâmetros UTM são armazenados no Session Storage do navegador.


### Outras Páginas:

Ao carregar qualquer outra página do site, o script `utm-persistence.js` é executado.
Ele recupera os parâmetros UTM armazenados no Session Storage. Se houver parâmetros UTM, eles são adicionados à URL atual da página, utilizando `addUtmParametersToUrl()`. A função `history.replaceState()` é usada para atualizar a URL sem recarregar a página.


## Implementação
**Incluir os Scripts:**

Adicione os scripts `utm-capture.js` e `utm-persistence.js` (ou o código equivalente) na seção <head> do seu HTML, utilizando o atributo defer:

```html
<head>
    <script defer src="/utm-tracking/utm-capture.js"></script>
    <script defer src="/utm-tracking/utm-persistence.js"></script>
</head>
```


**Use o código com cuidado.**
