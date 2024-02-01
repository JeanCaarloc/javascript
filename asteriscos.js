//definção da função
function escreverAsteriscos() {
    var tamanho=7;
    for (var i = 1; i <= tamanho; i++){
        var linha = '';
        for (var j = 1; j <= i; j++){
            linha += '*';
        }
        console.log(linha);
    }
}
var quantidadeDeRepeticoes = 1000;
function reproduzCincoVezes(){
    //chamada da função
    for(var aux = 1; aux<=quantidadeDeRepeticoes;aux++){
    escreverAsteriscos();
    }
}
reproduzCincoVezes();

//definção da função com um parâmetro
function escreverAsteriscos(tamanho) {
    var tamanho 
    for (var i = 1; i <= tamanho; i++){
        var linha = '';
        for (var j = 1; j <= i; j++){
            linha += '*';
        }
        console.log(linha);
    }
}
escreverAsteriscos(tamanho);
