# Rastreamento e persistência de Parâmetros UTM com Session Storage

Este guia prático te ensina a implementar um sistema simples e eficaz para rastrear a origem dos visitantes do seu site usando parâmetros UTM e o armazenamento temporário do navegador (Session Storage). Com ele, você saberá de onde seus usuários estão vindo, mesmo que naveguem por várias páginas ou fechem e reabram o navegador.


## O que são Parâmetros UTM?

Parâmetros UTM são pequenos trechos de texto adicionados ao final da URL do seu site. Eles servem para identificar a origem do tráfego, como campanhas de marketing, links em redes sociais ou e-mails. Exemplos de parâmetros UTM:

`utm_source`: Origem do tráfego (ex: google, facebook, newsletter)
`utm_medium`: Meio de divulgação (ex: cpc, social, email)
`utm_campaign`: Nome da campanha (ex: promocao_verao)

## Como Funciona
### Landing Page ou página com a UTM a ser rastreada:

O script `utm-capture.js` é executado quando o usuário acessa a página de entrada do seu site (por exemplo, uma página de destino de uma campanha de marketing). Ele captura os parâmetros UTM da URL e os parâmetros UTM são salvos no Session Storage do navegador do usuário.


### Outras Páginas:


O script `utm-persistence.js`  é executado em todas as outras páginas do seu site. (Recomendo que o carregue apenas em páginas que possuem um formulários que vão capturar esses dados da URL.) Ele verifica se existem parâmetros UTM salvos no Session Storage e se existirem, ele adiciona esses parâmetros à URL da página atual, sem recarregar a página.

Isso garante que os parâmetros UTM sejam mantidos em todas as páginas que o usuário visitar durante a sessão.



## Implementação
**Incluir os Scripts:**

Adicione os scripts `utm-capture.js` e `utm-persistence.js` (ou o código equivalente) na seção <head> do seu HTML, utilizando o atributo defer:

```html
<head>
    <script defer src="/utm-tracking/utm-capture.js"></script>
    <script defer src="/utm-tracking/utm-persistence.js"></script>
</head>
```


*Use o código com cuidado.*
