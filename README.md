# Conversor de Moedas

Este é um simples aplicativo web para converter valores entre diferentes moedas. O aplicativo é desenvolvido usando JavaScript para a lógica de conversão e manipulação do DOM para atualizar os resultados na página HTML.

## Funcionalidades

- **Conversão de Moeda:** Permite converter um valor de uma moeda para outra selecionada pelo usuário.
- **Taxa de Câmbio:** Utiliza taxas de câmbio predefinidas para realizar a conversão.
- **Validação de Entrada:** Verifica se o valor inserido para conversão é válido e se as moedas de conversão são diferentes.

## Como usar

1. Insira o valor que deseja converter no campo de entrada.
2. Selecione a moeda de origem e a moeda de destino nas opções fornecidas.
3. Clique no botão de conversão para ver o resultado.

## Estrutura do Código

- **`converter()`:** Função principal que realiza a conversão com base nos valores inseridos e nas taxas de câmbio.
- **`atualizarResultados()`:** Função para atualizar os resultados na página HTML após a conversão.
- **`taxaDeCambio`:** Objeto contendo as taxas de câmbio para diferentes moedas.
- **`nomesMoedas`:** Objeto contendo os nomes das moedas correspondentes às abreviações.

## Configurações

As configurações do aplicativo estão incluídas diretamente no código. Aqui estão as taxas de câmbio e os nomes das moedas utilizadas:

```javascript
let taxaDeCambio = {
    'BRL': 1,
    'USD': 4.89, //1 real é igual a 0,20.
    'EUR': 5.37, //1 real é igual a 0,19.
    'GBP': 6.24 //1 real é igual a 0,16.
};

let nomesMoedas = {
    'BRL': 'Real Brasileiro',
    'USD': 'Dólar Americano',
    'EUR': 'Euro',
    'GBP': 'Libra Esterlina'
};
