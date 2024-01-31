//declara e inicializa a matriz
matriz = [[1, 2],[3, 4]];

//insere um elemento no final da matriz
matriz.push([5, 6]);

//remover um elemento no final da matriz
matriz.pop();

//inserir um elemento no início da matriz
matriz.unshift([0, 0]);

//remover um elemento no início da matriz
matriz.shift();

//transformar a matriz em [1,2,5][3]
matriz[0].push(5);
matriz[1].pop();

//imprime a matriz
console.log(matriz);

//varre a matriz
for (var i=0;i<2;i++){
    for (var j=0;j<2;j++){
        //operação que quero que seja feita a todos os índices da matriz
    }
}


/*
EXEMPLO PRÁTICO QUE ALEX ME PEDIU NA AULA (OBRIGADO, ALEX!)
*/

//calculo das médias dos alunos
var algoritmos = [
    [['Alan'],[8],[5.5],[3.2]],
    [['Alex'],[7],[6.5],[10]],
    [['Alisson'],[2],[1.5],[8]]
];

//insere um novo aluno
algoritmos.push([['David'],[5],[7],[8]]);
algoritmos.push([['Daniel'],[10],[10],[0]]);

//varre a matriz e calculas médias
for (var i=0;i<algoritmos.length;i++){ //varre todos os índices da matriz (vetor externo)
    acum=0; //limpa a nota 
    for (var j=1;j<algoritmos[0].length;j++){ //varre os índices do vetor que está na posição i (vetor interno) 
        acum=acum+Number(algoritmos[i][j]);
    }
    //calcula e escreve o resultado da média
    console.log(algoritmos[i][0]+" "+ (acum/(algoritmos[0].length-1)));
}



