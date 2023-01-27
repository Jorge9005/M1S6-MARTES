console.log("Entro index.js");

let paises = ["Afghanistan",
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

//let nombre = "Jorge";
//console.log(`Hola, mi nombre es ${nombre}`);
//let nombre2 = "Pedro";
//console.log(`Hola, mi nombre es ${nombre2}`);

function saludarMensaje(name){
    return `Hola, mi nombre es ${name}, buenos días`;
}

console.log(saludarMensaje("Jorge"));
console.log(saludarMensaje("Pedro"));

let nombres = [
    "Jesus",
    "Pedro",
    "Emmanuel",
    "Adriana",
    "Andres"
];

console.log('nombres: ', nombres);
console.log(nombres[0]);

let numeros = [1, 2, 3, 4];

console.log(numeros);
console.log(numeros[1]);
console.log(`La cantidad de elementos presentes en nombres es: ${nombres.length}`);
console.log(`La cantidad de elementos presentes en numeros es: ${numeros.length}`);

console.log(paises); //Aquí no aparece "Mexico porque aún no lo definíamos"

paises.pop(); //Elimina el último valor del arreglo
paises.push("Mexico"); //Agrega un valor al final del arreglo
paises.unshift("Canada"); //Agrega un valor al inicio del arreglo
paises.shift(); //Elimina el primer valor del arreglo
paises.splice(10,5); /*El "10" indica la posición en el array y a partir de ahí
empezará a borrar, el "5" indica cuando valores va a borrar*/

/*Una vez que eliminemos valores de nuestro array, se reflejará también en la consola del navegador,
pero si antes de hacer el cambio teníamos un console log con el mismo array pero sin modificar,
al momento de desplegarlo tomará en cuenta esta última función y no nos aparecerá el valor que eliminamos,
una recomendación para que esto no pase sería imprimir un console.table del array*/

paises.splice(17, 1, "Test"); //Aquí estamos reemplazando un valor en esa posición
paises[16] = "Narnia"; //Este también se usa para reemplazar valores
paises.sort(); //Esto ordena alfabéticamente los elementos, todos deben estar en mayúsculas o minúculas

console.log(paises); //Aquí ya aparece

console.warn("Esto es un warning");
console.error("esto es un mensaje de error");
console.table(paises);

console.log(paises[12][0]);