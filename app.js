function somar(a,b) {
    return a + b;
}

function subtrair(a , b) {
    return a - b;
}

function multiplicar(a , b) {
    return a * b;
}

function dividir(a , b){
    if (b === 0){
        return 'Erro: divisão por zero';
    }
    return a / b;
}

let operação = "";
var n1 , n2;

menu: while(true){
    operação = prompt('Informe o tipo de operação desejado: "soma","subtracao","multiplicacao", "divisao", e "sair".').toLowerCase();

    switch(operação){
        case "soma":
             n1 = Number(prompt('Digite o primeiro número:'));
             n2 = Number(prompt('Digite o segundo número:'));
            alert(`Resultado: ${somar(n1,n2)}`);
            break;

        case "subtracao":
             n1 = Number(prompt('Digite o primeiro número:'));
             n2 = Number(prompt('Digite o segundo número:'));
            alert(`Resultado: ${subtrair(n1,n2)}`);
            break;
        case "multiplicacao":
             n1 = Number(prompt('Digite o primeiro número:'));
             n2 = Number(prompt('Digite o segundo número:'));
            alert(`Resultado: ${multiplicar(n1,n2)}`);
            break;

        case "divisao":
             n1 = Number(prompt('Digite o primeiro número:'));
             n2 = Number(prompt('Digite o segundo número:'));
            alert(`Resultado: ${dividir(n1,n2)}`);
            break;

        case "sair":
            alert ('Saindo...');
            break menu;

        default:
            alert('Opção inválida.')
    }        
}