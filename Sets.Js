/*
Eliminar duplicados: Dado un array de números, 
    usa Set para eliminar los elementos duplicados y devuelve un array con los elementos únicos.

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

    let uniqueSet = new Set();
    let option = "";
    let value = "";
    let valuesInput = []
    
    do {
        resetValues()
        
        option = prompt(`Ingrese una opcion: \n
        1- Agregar al set \n
        2- Eliminar del Set \n
        3- Validar existencia en Set \n
        4- Listar Set `);
        
        if (Number(option) === 1) {
            value = prompt("Ingrese el valor a añadir al Set");
            if (value!= "") {
                addToSet(value)
            }
        } else if (Number(option) === 2) {
            value = prompt("Ingrese el valor a eliminar del Set");
            if (value!= "" && validateExist(value)) {
                deleteFromSet(value)
            }
        } else if (Number(option) === 3) {
            value = prompt("Ingrese el valor a buscar");
            if (value!= "") {     
            checkIfExist(value);
        }
    } else if (Number(option) === 4) {
        listSet();
    }
    
} while (option != "" || value != "");

function addToSet(value) {
    console.log("El valor ingresado es " + value);
    valuesInput.push(value);
    
    if (uniqueSet.has(value)) {
        console.log("El valor ya existe en el set");
    } else{
        uniqueSet.add(value);
    console.log("Nuevo valor <<" + value + ">> agregado al set");
}
}

function deleteFromSet(value){
    uniqueSet.delete(value);
    console.log("El valor <<" + value + ">> fue eliminado");
    
}

function checkIfExist(value) {
    if (validateExist(value)) {
        console.log("El valor <<" + value + ">> existe en el Set");
    } else{
        console.log("El valor no existe en el set");
}
}

function validateExist(value){
    return uniqueSet.has(value);
}
function listSet() {
    console.log("Listado de Set:");
    
    if (uniqueSet.size > 0) {
        for (const value of uniqueSet) {
            console.log("Valor: " + value);
        }
    } else{
        console.log("El set se encuentra vacio");
}

if (valuesInput.length > 0) {
    console.log("Los valores historicos ingresados son:");
    
    valuesInput.forEach(valueH => {
        console.log("- " + valueH);
    });
} else{
    console.log("No hay valores historicos ingresados");
}

}

function resetValues() {
    option = "";
    value = "";
}

    
Intersección de conjuntos: Dado dos arrays, usa Set para encontrar la intersección 
    (elementos comunes) entre ellos.

let arrOne = [1, 2, 4, 6, 8, 10]
let arrTwo = [1, 1, 4, 4, 2, 2, 5, 2, 7, 8]

let fSet = new Set(arrOne);
let sSet = new Set(arrTwo);

let setIntersec = new Set(Array.from(fSet).filter(x => sSet.has(x)));

console.log(setIntersec);

    
Unión de conjuntos: Dado dos arrays, usa Set para encontrar la unión 
    (todos los elementos únicos) de ambos arrays.
*/

let fSet = new Set([1, 2, 4, 6, 8, 10]);
let sSet = new Set([1, 1, 4, 4, 2, 2, 5, 2, 7, 8]);

let setIntersec = new Set();

fSet.forEach(e => {
    setIntersec.add(e);
});

sSet.forEach(e=>{
    setIntersec.add(e)
})

console.log(setIntersec);
