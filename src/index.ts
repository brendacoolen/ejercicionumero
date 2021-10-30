let numeroingresado: number = Number(prompt("Ingresar numeros"));
let suma: number;
suma = 0;
while (numeroingresado >= 1 && numeroingresado <= 10) {
  suma += numeroingresado;
  numeroingresado = Number(prompt("Ingresar otro número"));
}
console.log(suma);
