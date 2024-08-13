//function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
//}

module.exports = esImpar;
function esImpar(num){
  if (num % 2 === 0) {
    console.log(false);
  } else {
    console.log(true);
  }
}

esImpar (9);
esImpar(6);
