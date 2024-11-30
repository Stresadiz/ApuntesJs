/*
Eliminar duplicados: Dado un array de números, 
    usa Set para eliminar los elementos duplicados y devuelve un array con los elementos únicos.

Intersección de conjuntos: Dado dos arrays, usa Set para encontrar la intersección 
    (elementos comunes) entre ellos.

Unión de conjuntos: Dado dos arrays, usa Set para encontrar la unión 
    (todos los elementos únicos) de ambos arrays.

    //  1er Ejercicio

    let numsArray = [1, 2, 6, 8, 2, 5, 9, 1];
    let setArr = new Set(numsArray);
    let arrParsed = Array.from(setArr);
    
    console.log(arrParsed);

    Verificar elementos comunes: Dado dos arrays de números, 
    usa Set para determinar si tienen algún elemento en común.

let numsArray = [1, 2, 6, 8, 2, 5, 9, 1];
let numsTwoArray = [2, 3, 4, 5, 6, 1];

let a = new Set(numsArray);
let b = new Set(numsTwoArray);

let finalSet = new Set(
    Array.from(a).filter(x => b.has(x))
)

console.log(Array.from(finalSet));

    Colección de valores únicos: Crea un Set para almacenar una colección de valores únicos. 
    Implementa funciones para agregar, eliminar y verificar la existencia de un valor en el Set.

*/
let uniqueSet = new Set();
let option = "";
let value = "";
let valuesInput = []

do {
    option = prompt(`Ingrese una opcion: \n
                    1- Agregar al set \n
                    2- Eliminar del Set \n
                    3- Validar existencia en Set \n
                    4- Listar Set `);

} while (option != "" && value != "");

function addToSet(value) {
    console.log("El valor ingresado es " + value);
    valuesInput.push(value);
    
    if (uniqueSet.has(value)) {
        console.log("El valor ya existe en el set");
    } else{
        uniqueSet(value);
        console.log("Nuevo valor <<" + value + ">> agregado al set");
    }
}

function deleteFromSet(){

}
