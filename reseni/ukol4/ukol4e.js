/**
 * Ukol 4e
 * Odeber posledni prvke z pole. (pouzij funkci pop)
 * 
 * Vysledek:
 * ["Jana", "Pavla", "Klara","Veronika"]
 * ["Jana", "Pavla", "Klara"]
 */

let mojePole = ["Jana", "Pavla", "Klara","Veronika"];
console.log(mojePole);
mojePole.pop();

console.log(mojePole);

/**
 * Ukol 4f
 * Najdi na kterem prvku v poli se nachazi "Pavla" (pouzij .indexOf)
 * 
 * Vysledek:
 * 1
 */

 mojePole = ["Jana", "Pavla", "Klara","Veronika"];


 let pavlaIndex = mojePole.indexOf("Pavla");

 console.log("Pavla je na indexu: " + pavlaIndex)
 