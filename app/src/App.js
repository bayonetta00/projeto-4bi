function sortearNumeros() {
    let numerosEscolhidos = [
        parseInt(document.getElementById('numero1').value),
        parseInt(document.getElementById('numero2').value),
        parseInt(document.getElementById('numero3').value),
        parseInt(document.getElementById('numero4').value),
        parseInt(document.getElementById('numero5').value),
        parseInt(document.getElementById('numero6').value)
    ];

    if (numerosEscolhidos.some(isNaN)) {
        alert("Por favor, insira todos os 6 números.");
        return;
    }

    let numerosSorteados = [];
    while (numerosSorteados.length < 6) {
        let num = Math.floor(Math.random() * 60) + 1; //precisa do +1, pois sem ele, ele apenas sorteia do 1 ao 59 bbs
        if (!numerosSorteados.includes(num)) {
            numerosSorteados.push(num);
        }
    }

    let acertos = numerosEscolhidos.filter(num => numerosSorteados.includes(num)).length;

    mostrarResultado(numerosSorteados, acertos);
}

function mostrarResultado(numerosSorteados, acertos) {
    document.getElementById('numerosSorteados').textContent = "Números sorteados: " + numerosSorteados.join(', ');
    document.getElementById('acertos').textContent = "Você acertou " + acertos + " número(s)";
}

document.getElementById('btnSortear').addEventListener('click', sortearNumeros);
