//function mayorQueCincuenta(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:
//}

module.exports = mayorQueCincuenta;
function mayorQueCincuenta(num){
  if (num > 50) {
    console.log(true);
  } else {
    console.log(false);
  }
}

mayorQueCincuenta(90);
mayorQueCincuenta(48);
