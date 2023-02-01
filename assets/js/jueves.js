let paises2 = [
"Afghanistan",
"Albania",
"Algeria",
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

//for y for each no modifica el arreglo original

//.map crea un nuevo arreglo

let nuevoArreglo = paises2.map(pais => {
    console.log(pais);
    return pais.toUpperCase(); /*Si estamos con un arreglo dentro de otro arrelgo
    nos dará error al colocar toUpperCase o cualquiera de estas funciones,
    mandará un mensaje diciendo que toUpperCase() no es una función. Para resolverlo solo hay que eliminar
    el arreglo que está dentro del otro arreglo. */
});

console.log("nuevoArreglo: ", nuevoArreglo); //este es el nuevo arreglo que imprime .map
console.log("paises2", paises); //este es el arreglo original

let edades = [18, 19, 25, 35, 40, 55, 34, 14, 17];

let nuevoArregloEdades = edades.map(edad => {
    if(edad >= 18){
        return edad + 1;
    }
    else{
        return edad;
    }
}); //Lo que hace este arreglo es agregar +1 a los valores que son mayores a 18.

console.log(edades);
console.log(nuevoArregloEdades);

let mayoriaEdad = edades.filter(edad => {
    if(edad >= 18){
        return edad;
    }
    else{
        return edad;
    }
});