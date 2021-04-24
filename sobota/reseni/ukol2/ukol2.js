/**
 *  a)
 * Definuj promenou x, uloz do ni cislo. 
 * Pokud je cislo vetsi jak 10, tak do promene x uloz x * 10.
 * 
 * let x = 6;
 * // nejaky kod
 * console.log(x); // 6
 * 
 * let x = 12;
 * // nejaky kod
 * console.log(x); // 120
 */


 let x = 6;
 if(x > 10){
     x = x * 10;
 }
 
 console.log(x); 

/**
 * b)
 * Stejne jako 2a) ale presun svuj kod, ktery meni cislo do funkce! 
 * (Napoveda: funkce bude vracet hodnotu)
 */

 function zkontroluj(cislo){
    if(cislo > 10){
        return cislo * 10;
    } else {
        return cislo;
    }    
}

let y = 50;
y = zkontroluj(y);
console.log(y);

/**
 * c)
 * Napis funkci vetsi, ktera bude prijimat 2 parametry. 
 * Funkce VRATI vetsi z techto dvou parametru (napoveda: pouzij if) 
 * MUZES POUZIT JEN 1X RETURN  || POKUD SI POUZILA DRIVE 1X RETURN POUZIJ JEJ VICEKRAT
 * 
 * UVNITR FUNKCE NENI ZADNY CONSOLE.LOG
 * 
 * Ukazka:
 * let vysledek = vetsi(2,4);
 * console.log(vysledek); // 4 
 */

 function vetsi(a, b){
    let vysledek;

    if(a > b){
        vysledek = a; 
    } else {
        vysledek = b;
    }
    return vysledek;
}

console.log(vetsi(15,4));
console.log(vetsi(2,4));