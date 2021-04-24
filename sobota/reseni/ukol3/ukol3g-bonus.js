/**
 * Uprav predchozi funkci vytvorOsobu tak, ze ji predas
 * rok narozeni a ona vypocita  a pridat vek. (neres mesice, jen roky
 * aktulani rok 2021 muzes definovat "natvrdo")
 * 
 * console.log(vytvorOsobu("Tomas", "Zidlicka", 1999))
 * // {jmeno: "Tomas", prijmeni: "Zidlicka", vek: 22, datumNarozeni: 1999}
 * 
 */

function vytvorOsobu(prvniParametr, druhyParametr, datumNarozeni) {
    let mojeOsoba = {
        jmeno: prvniParametr,
        prijmeni: druhyParametr,
        datumNarozeni: datumNarozeni,
        vek: 2021 - datumNarozeni
    }

    return mojeOsoba;
}

let osoba = vytvorOsobu("Roman", "Bedar", 1945);
console.log(osoba);