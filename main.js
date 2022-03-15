// Pro výpis do stránky můžeš použít funkci vypisText('text');
// Její kód je přiložen na konci tohoto souboru.
// Nebo můžeš pomocí console.log('text'); vypisovat do konzole prohlížeče.


// Úkol 1 - Založ nové pole se seznamem jmen (alespoň 5)
// Vypiš jeho obsah do stránky - JavaScript spojí pole automaticky do řetězce

let pole = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Veronika"
]
pole;
console.log(pole);
vypisText(pole);

// Úkol 2 - Vypiš třetí jméno v pořadí
// Nezapomeň, že pole se čísluje od 0

pole[2];
vypisText(pole[2]);



// Úkol 3 - Kolik jmen je v poli?
// Pole má vlastnost pole.length

pole.length;
vypisText(pole.length);



// Úkol 4 - Vypiš znovu seznam jmen, ALE...
// Tentokrát použij cyklus .forEach() a před každé jméno přidej
// číslo indexu, na kterém se jméno nachází
// 0. Alena
// 1. Jana
// 2. Marie
// atd.



function vypisJmenaSPoradim(ele, idx){
vypisText(idx + '. ' + ele)
}
pole.forEach(vypisJmenaSPoradim);




// Úkol 5 - přidej na konec pole další jméno
// pole.push()
// pole.unshift()
// Doplněný seznam jmen vypiš (jednoduše jako v příkladu 1)


pole.push('Posledni Pani');
vypisText(pole[5]);


// Úkol 6 - odeber z pole první a poslední jméno a vypiš
// obě jména a pak i výsledné pole
// pole.shift()
// pole.pop()

pole[0];
pole[5];
vypisText(pole[0]);
vypisText(pole[5]);

pole.shift()
pole.pop()
vypisText(pole);

// *********************************************
function vypisText(txt) {
    document.querySelector('#vystup').innerText += txt + '\n';
    pole[0];
}


// function vypisTextSIndexem(element, index) {
//     document.querySelector('#vystup').innerText += index + '. ' + element + '\n
// }