/**
 * Pouzij predchozi funkci pro vytvoreni dvou promenych.
 * let osoba1 = vytvorOsobu("Karel", "Polivka");
 * let osoba2 = vytvorOsobu("tomas", "boruvka");
 * console.log(osoba1); // {jmeno: "Karel", prijmeni: "Polivka"}
 * console.log(osoba2); // {jmeno: "tomas", prijmeni: "boruvka"}
 */

function vytvorOsobu(prvniParametr, druhyParametr) {
    let mojeOsoba = {
        jmeno: prvniParametr,
        prijmeni: druhyParametr
    }

    return mojeOsoba;
}

let osoba1 = vytvorOsobu("Lukas", "Jahoda");
let osoba2 = vytvorOsobu("Tomas", "Knedlicek");
// console.log(osoba1);
// console.log(osoba2);

/**
 * Vytvor si pole z osoba1 a osoba2
 * let mojePole = [osoba1, osoba2]
 * console.log(mojePole)
 * 
 * Vypis prijmeni z objektu na indexu 1 v poli. // boruvka
 */
let mojePole = [osoba1, osoba2];
console.log(mojePole[1].prijmeni)

console.log(console)