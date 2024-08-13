//function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
//}

module.exports = esPositivo;
function esPositivo(num){
  if (num > 0) {
    console.log("es positivo"); 
  } else {
    console.log("es negativo");
  }
}

esPositivo(1);
esPositivo(-1);