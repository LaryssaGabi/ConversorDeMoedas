function converter() {
    let valorConverter = Number(document.getElementById("valor").value);
    let moedaPara = document.querySelector('.moeda-para').value;
    let moedaDe = document.querySelector('.moeda-de').value;
    let taxaDeCambio = {
        'BRL': 1,
        'USD': 4.89, //1 real é igual a 0,20.
        'EUR': 5.37,//1 real é igual a 0,19.
        'GBP': 6.24 //1 real é igual a 0,16.
    };

    let nomesMoedas = {
        'BRL': 'Real Brasileiro',
        'USD': 'Dólar Americano',
        'EUR': 'Euro',
        'GBP': 'Libra Esterlina'
    };

    let valorConvertido = 0;

    // Verifica se o valor é válido
    if (isNaN(valorConverter) || valorConverter <= 0) {
        alert("Digite um valor válido para a conversão.");
        return;
    }

    // Verificar se as moedas de conversão são iguais
    if (moedaDe === moedaPara) {
        alert("A conversão só pode ser realizada se as moedas informadas forem divergentes.");
        return;
    }

    valorConvertido = valorConverter * taxaDeCambio[moedaDe] / taxaDeCambio[moedaPara];

    atualizarResultados(valorConverter, valorConvertido, moedaDe, moedaPara, nomesMoedas);
}

// Função para atualizar os resultados na página
function atualizarResultados(valorConverter, valorConvertido, moedaDe, moedaPara, nomesMoedas) {
    // Formatar os valores numéricos
    let formatoMoedaDe = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: moedaDe });
    let formatoMoedaPara = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: moedaPara });

    // Atualiza os valores na página HTML
    document.querySelector('.resultado-item-de .logo').src = `./src/img/${moedaDe.toLowerCase()}.png`;
    document.querySelector('.resultado-item-de .moeda-nome').textContent = nomesMoedas[moedaDe];
    document.querySelector('.resultado-item-de .moeda-valor').textContent = formatoMoedaDe.format(valorConverter);

    document.querySelector('.resultado-item-para .logo').src = `./src/img/${moedaPara.toLowerCase()}.png`;
    document.querySelector('.resultado-item-para .moeda-nome').textContent = nomesMoedas[moedaPara];
    document.querySelector('.resultado-item-para .moeda-valor').textContent = formatoMoedaPara.format(valorConvertido);
}












