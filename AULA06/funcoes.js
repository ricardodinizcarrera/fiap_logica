//CRIAR UMA FUNÇÃO QUE RECEBA 2 VALORES
//EXIBIR QUAL DOS VALORES É O MAIOR E OS VALORES DEVEM SER PASSADOS POR PARÂMETRO
/*PROCEDIMENTO COM PARÂMETROS*/
function qualValorMaior(vNum1, vNum2) {
    let resultado;
    if (parseInt(vNum1) > parseInt(vNum2))
        resultado = `O valor ${vNum1} é maior do que o valor ${vNum2}`;
    else
        resultado = `O valor ${vNum2} é maior do que o valor ${vNum1}`;
    document.getElementById("divResultado").innerHTML = resultado;
}
/***************CALLBACK***************/
function mostrarMaiorCallBack(valor1, valor2, callback) {
    let resposta;
    if (parseInt(valor1) > parseInt(valor2))
    resposta = `O valor ${valor1} é maior do que o valor ${valor2}`;
    else
    resposta = `O valor ${valor2} é maior do que o valor ${valor1}`;

    callback(resposta);
}

function exibirResultado(retorno) {
    document.getElementById("divResultado").innerHTML = retorno;
}