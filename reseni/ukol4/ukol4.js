/**
 * Ukol 4a
 * 
 * Vytvor pole obsahujici jmena Jana, Pavla, Klara a vypis jej 
 * na obrazovku.
 * 
 * Vysledek: ["Jana", "Pavla", "Klara"]
 */

let mojePole = ["Jana", "Pavla", "Klara"];

console.log(mojePole);


/**
 * Ukol 4b
 * Vypis pouze prvek na druhe pozici.
 * 
 * Vysledek: Pavla
 */

 mojePole = ["Jana", "Pavla", "Klara"];

 console.log(mojePole[1]);

/**
 * Ukol 4c
 * Vypis delku pole.
 * 
 * Vysledek: 3
 */

 console.log(mojePole.length);

/**
 * Ukol 4d
 * Pridej do pole jmeno Veronika(funkce push) a vypis delku pole
 * pred a po pridani. 
 * 
 * Vysledek:
 * ["Jana", "Pavla", "Klara"]
 * 3
 * ["Jana", "Pavla", "Klara","Veronika"]
 * 4
 */

mojePole.push("Veronika");

console.log(mojePole);