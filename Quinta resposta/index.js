function inverterString(string) {
  var stringInvertida = "";

  for (var i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }
  return stringInvertida;
}

var textoOriginal = "Olá, mundo!";
var textoInvertido = inverterString(textoOriginal);
console.log("Texto Original:", textoOriginal);
console.log("Texto Invertido:", textoInvertido);
