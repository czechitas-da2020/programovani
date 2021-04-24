/** 
 * 3e)
 * Vytvor funkci, ktere predas jmeno a prijmeni a ona vrati objekt
 * s klicemi jmeno a prijmeni. 
 * 
 * let vysledek = vytvorOsobu("Tomas", "Jahoda")
 * console.log(vysledek); // {jmeno: "Tomas", prijmeni: "Jahoda"}
 */

function vytvorOsobu(prvniParametr, druhyParametr) {
    let mojeOsoba = {
        jmeno: prvniParametr,
        prijmeni: druhyParametr
    }

    return mojeOsoba;
}

let vysledek = vytvorOsobu("Tomas", "Jahoda");
console.log(vysledek);

// alerantivy

function vytvorOsobu2(prvniParametr, druhyParametr) {
    // Klidne bych nemusel vytvaret novou promenou a muzu vratit rovnou objekt
    // let mojeOsoba = {
    //     jmeno: prvniParametr,
    //     prijmeni: druhyParametr
    // }

    return {
        jmeno: prvniParametr,
        prijmeni: druhyParametr
    };
}
