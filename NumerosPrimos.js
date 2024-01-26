function EstruturaDeRepetição(){
    var valorInicial = 2;
    var valorFinal = 50;
    var valorInicial=Number(document.getElementById("valorInicial").value);
    var valorFinal=Number(document.getElementById("valorFinal").value);
    var contador = valorInicial;
    var acumulador = 0;

    while(contador<=valorFinal){
        acumulador+=contador;
        contador++;
    }
    console.log(acumulador);
    document.write(acumulador);
}