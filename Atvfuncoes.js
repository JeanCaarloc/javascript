var notas = [
    [['Alan'],[8],[5.5],[3.2],[3.5]],
    [['Alex'],[7],[6.5],[10],[0]],
    [['Alisson'],[2],[1.5],[8],[0]],
    [['David'],[5],[7],[8],[9]],
    [['Daniel'],[10],[10],[0],[5]]
];

//pegue o numero de notas 1
function calcularNumeroDeNotas(notas) {
    var tamanho = notas.length-1;

    return tamanho;
}

var resultado = calcularNumeroDeNotas(notas);
console.log('Número total de notas:', resultado);


//calcular a soma das notas 2

function calcularSomaDasNotas(notas) {
    var somaTotal = 0;

    for (var i = 0; i < notas.length; i++) {
        for (var j = 1; j < notas[i].length; j++) {
            for (var k = 0; k < notas[i][j].length; k++) {
                somaTotal += notas[i][j][k];
            }
        }
    }

    return somaTotal;
}

var soma = calcularSomaDasNotas(notas);
console.log('Soma total das notas:', soma);


//calcule a média 3 = 2/1

function mediaDasNotas(notas){

var notas = [
    [['Alan'],[8],[5.5],[3.2],[3.5]],
    [['Alex'],[7],[6.5],[10],[0]],
    [['Alisson'],[2],[1.5],[8],[0]],
    [['David'],[5],[7],[8],[9]],
    [['Daniel'],[10],[10],[0],[5]]
];
        
for (var i=0;i<notas.length;i++){ 
    acum=0;  
        for (var j=1;j<notas[0].length;j++){ 
                acum=acum+Number(notas[i][j]);
        }      
        console.log(notas[i][0]+" "+ (acum/(notas[0].length-1)));
        }
};
    
mediaDasNotas();