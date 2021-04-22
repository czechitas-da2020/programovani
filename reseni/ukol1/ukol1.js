/**
 * 1a) Vypis na obrazovku "Ahoj Svete!"
 * 
 * 1aa) Text "Ahoj Svete!" si uloz do promene a vypis pouze tuto promenou. 
 */
 console.log("Ahoj Svete!");
 /**
  * 1b) 
  * Definuj si dve promene a vypis si jejich soucet.
  * let x = 5;
  * let y = 7;
  * 
  * Vysledek: 12
  * 
  * 2bb) Vypis si jejich soucet i s textem.
  * Vysledek: "Soucet je 12"
  */
 
 let x = 5;
 let y = 7;

 let vysledek = x + y;

 console.log("Soucet je " + vysledek);

 // a nebo muzeme take udelat 

 console.log("Soucet je " + (x+y));
 
 
 /**
  * 1c)
  * Definuj si dve promene, prirad jim nahodne cisla.
  * Vypis na obrazovku vsechny aritmeticke operace mezi temito cisly.
  */

let a = 5;
let b = 7;

let vysledekScitani = a + b;
let vysledekOdecitani = a - b;
let vysledekNasobeni = a * b;
let vysledekDeleni = a / b;

console.log(a + " + " + b + " =  " + vysledekScitani)
console.log(a + " - " + b + " =  " + vysledekOdecitani)
console.log(a + " * " + b + " =  " + vysledekNasobeni)
console.log(a + " / " + b + " =  " + vysledekDeleni)

// nebo

console.log(a + " + " + b + " =  " + (a+b))
console.log(a + " - " + b + " =  " + (a-b))
console.log(a + " * " + b + " =  " + (a*b))
console.log(a + " / " + b + " =  " + (a/b))

/**
 * 1d) 
 * Definuj si dve promene a prohod jejich obsah.
 */

let prvni = 8;
let druha = 9;
console.log(prvni, druha)

let prohozeni = prvni;

prvni = druha;
druha = prohozeni;

console.log(prvni, druha)