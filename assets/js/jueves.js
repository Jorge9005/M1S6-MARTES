let paises2 = ["Afghanistan",
"Albania",
"Algeria",
["Uno", "Dos"],
"American Samoa",
"Andorra",
"Angola",
"Austria",
"Azerbaijan",
"Bahamas (the)",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Vanuatu",
"Venezuela (Bolivarian Republic of)",
"Viet Nam",
"Virgin Islands (British)",
"Virgin Islands (U.S.)",
"Wallis and Futuna",
"Western Sahara",
"Yemen",
"Zambia"
];

console.log(paises2);

for (let index = 0; index < paises2.length; index++) {
    const pais = paises2[index]; /*Si estamos imprimiendo varios elementos hablamos de un pluralismo,
    en este caso "paises", de preferencia el nombre de su variable o constante debería llamarse como su singular, en este caso "país"*/
    console.log(`${index + 1}. ${pais}`);
}

paises2.forEach(pais => { //las variables de arriba no impactan en este for each
    console.log(pais); //porque es como si usaramos void, se declaran las variables solo para esos void
});