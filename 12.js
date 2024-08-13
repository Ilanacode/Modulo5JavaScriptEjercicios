//function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
//

module.exports = tienenMismaLongitud;
function tienenMismaLongitud(str1, str2){
  console.log(str1.length);
  console.log(str2.length);
  if (str1.length === str2.length){
    console.log(true);
  } else {
    console.log(false);
  }
}

tienenMismaLongitud("hola", "hello");
tienenMismaLongitud("soyhenry", "henrysoy");

 