const inputNum1 = document.getElementById('num1');
const inputNum2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');
const btnSoma = document.getElementById('btnSoma');

function soma(num1, num2){
    return num1 + num2;
}

btnSoma.addEventListener('click', () => {
    const num1 = Number(inputNum1.value);
    const num2 = Number(inputNum2.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = 'Por favor, insira números válidos.';
        return;
    }

    const somaResultado = soma(num1, num2);
    resultado.textContent = `Resultado: ${somaResultado}`;
});