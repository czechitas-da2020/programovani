/**
 * 4) bonus 1
 * Najdi na kterem indexu se v poli nachazi jmeno Klara
 * za pouziti FOR cyklu! (nepouzivej funkci indexOf)
 * 
 * Vysledek:
 * ["Jana", "Pavla" "Klara"]
 * Klara je na indexu 2 
 */

let pole=  ["Jana", "Pavla", "Klara"]

for(let i = 0; i < pole.length; i++){
        if(pole[i] == "Klara"){
            console.log("Klara je na indexu " + i)
        }
}

/**
 * Pokud to tak nemas, uprav kod tak aby jmeno "Klara", ktere hledame
 * v poli, slo jednoduse nahradit za jine jmeno. Tj abychom mohli 
 * jednoduse vyhledat jakekoliv jmeno v poli za zmeny jednoho radku.
 * 
 * Zaroven vypis krome indexu i poradi.
 * Vysledek:
 * ["Jana", "Pavla" "Klara"]
 * Pavla je na indexu 1, poradi 2
 */

 pole=  ["Jana", "Pavla", "Klara"]

 let hledanyPrvek = "Klara"

 for(let i = 0; i < pole.length; i++){
         if(pole[i] == hledanyPrvek){
             console.log(hledanyPrvek + " je na indexu " + i)
         }
 }

 // alternativa:


 pole =  ["Jana", "Pavla", "Klara"]

 hledanyPrvek = "Tomas";
 let hledanyIndex = -1;

 for(let i = 0; i < pole.length; i++){
         if(pole[i] == hledanyPrvek){
            hledanyIndex = i;
         }
 }

 if(hledanyIndex != -1) {
     console.log(hledanyPrvek + " je v poli na indexu " + hledanyIndex)
 } else {
     console.log("Prvek v poli neni ");
 }
