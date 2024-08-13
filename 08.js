function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
}

module.exports = esNumeroEntero;
function esNumeroEntero(numero) {
  return Number.isInteger(numero);
}
esNumeroEntero(3.3);

function esNumeroEntero(numero) {
  return typeof numero === 'number' && numero % 1 === 0;
}

esNumeroEntero(17.1);
