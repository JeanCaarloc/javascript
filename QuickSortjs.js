var vetor = [235, 14, 1, 133, 23, 43, 21, 435, 200, 37];
var trocas = 0;

var quickSort = function(X, IniVet, FimVet) {
  var i = IniVet;
  var j = FimVet;
  var pivo = X[Math.floor((IniVet + FimVet) / 2)];
  var aux;

  while (i <= j) {
    while (X[i] < pivo) {
      i++;
    }

    while (X[j] > pivo) {
      j--;
    }

    if (i <= j) {
      // Troca de posição
      aux = X[i];
      X[i] = X[j];
      X[j] = aux;

      i++;
      j--;

      trocas++;
    }
  }

  if (IniVet < j) {
    quickSort(X, IniVet, j);
  }

  if (i < FimVet) {
    quickSort(X, i, FimVet);
  }
};

// Chamando o Quick Sort para ordenar o vetor
quickSort(vetor, 0, vetor.length - 1);

// Exibindo o vetor ordenado e a contagem de trocas
console.log("Vetor Ordenado:", vetor);
console.log("Número de Trocas:", trocas);