//Explciacion de como funciona constructor Map() & Set() en Js

/*
    Map objects are collections of key-value pairs.
    A key in the Map may only occur once; it is unique in the Map's collection

    Syntaxis:
    const sayings = new Map();
    sayings.set("dog", "woof");
    sayings.set("cat", "meow");
    sayings.set("elephant", "toot");

    sayings.size; // 3

    sayings.get("dog"); // woof

    sayings.get("fox"); // undefined

    sayings.has("bird"); // false

    sayings.delete("dog");

    sayings.has("dog"); // false

    for (const [key, value] of sayings) {
        console.log(`${key} goes ${value}`);
    }

    //Otro Ejmeplo 

    let recipeMap = new Map([
        ['pepino', 500],
        ['tomates', 350],
        ['cebollas',    50]
    ]);

    // iterando sobre las claves (verduras)
    for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // pepino, tomates, cebollas
    }

    // iterando sobre los valores (precios)
    for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
    }

    // iterando sobre las entradas [clave, valor]
    for (let entry of recipeMap) { // lo mismo que recipeMap.entries()
    alert(entry); // pepino,500 (etc)
    }
    
    - Generar un mapa que muestre la cantidad de frrecuencia de palabras


let palabras = []
let stringDePalabras = "Integer quis mi vitae augue efficitur finibus vel eu purus. Proin in mauris ut velit facilisis convallis a ac metus. Aliquam sapien justo, varius id turpis sit amet, aliquet aliquam mi. Pellentesque vehicula urna sit amet mauris lacinia tincidunt. Ut sed varius neque, vel varius enim. Sed magna ligula, porta in laoreet ut, ornare sit amet ipsum. Sed porta elementum sem sit amet dictum. Nullam lorem massa, mollis eget urna ut, laoreet porta magna. Etiam libero metus, dignissim sed pulvinar at, egestas blandit lectus. Suspendisse ullamcorper eu velit at lacinia."

palabras = stringDePalabras.split(" ");

let mapOfEntries = new Map();

palabras.forEach(palabra => {
    let value = 1;
    if (mapOfEntries.has(palabra) != false) {
        value = Number(mapOfEntries.get(palabra)) + 1;
        mapOfEntries.delete(palabra)
    }

    mapOfEntries.set(palabra, value)
});

let maxValue = 0;
let palabramax = "";

for (const [key, value] of mapOfEntries) {
    if (value > maxValue) {
        maxValue = value;
        palabramax = key
    }
}

console.log(`El valor maximo lo tiene la palabra ${palabramax} con ${maxValue} apariciones`);

// Crea un Map para almacenar nombres de productos y sus respectivos precios. 
//Luego, implementa una función que devuelva el precio de un producto dado su nombre.

let mapOfProducts = new Map();

let product = ""
let value = 0.00

do {
    product = prompt("Ingrese el producto:");
    value = prompt("Ingrese el precio del producto");

    setProduct(product, value);
    console.log("-----------");
    findInMap();
} while (product != "");

function setProduct(product, value) {

    if (product != "" && Number(value) != NaN ) {
        if (!mapOfProducts.has(product)) {
            mapOfProducts.set(product, value);
        }
    }
}

function findInMap() {
    if (mapOfProducts.size > 0) {
        for(const[key, value] of mapOfProducts){
            console.log(`Product:${key} - Price:${value}`);
        }
    } else{
        console.log("El inventario está vacio");
        
    }
}
  
    -Usa Map para crear una agenda de contactos donde las claves sean nombres y los valores sean números de teléfono.
        Implementa una función para agregar, eliminar y buscar contactos.
*/

let contactsMap = new Map();

let option;
let options = [1, 2, 3]

do {
    option = prompt(`Ingrese una opcion del menu: \n 
                    1- Agregar contacto \n
                    2- Eliminar contacto \n
                    3- Buscar contacto \n
                    (Otros valores terminan el programa)`);
    
    if (Number(option) === options[0]) {
        let contact = prompt("Ingrese el nombre del contacto:");
        let contactNum = prompt("Ingrese el numero del contacto:");
        addNewContact(contact, contactNum)
    } else if (Number(option) === options[1]) {
        let contact = prompt("Ingrese el nombre del contacto a eliminar:")
        deleteContact(contact);
    } else if(Number(option) === options[2]){
        let contact = prompt("Ingrese el nombre del contacto a buscar: ");
        searchContact(contact)
    }

    listContacts();
    console.log(Number(option));
    console.log(options.includes(Number(option)));
    
    
} while (!isNaN(Number(option)) && options.includes(Number(option)));

function addNewContact(contact, num) {
    if (!contactsMap.has(contact)) {
        contactsMap.set(contact, num);
        alert("Contacto agregado!")
    } else{
        alert("El contacto ya existe!")
    }
}

function deleteContact(contact) {
    if (contactsMap.has(contact)) {
        contactsMap.delete(contact)
        alert("Contacto eliminado!")
    } else{
        alert("El contacto no existe!")
    }
}

function searchContact(contact) {
    if (contactsMap.has(contact)) {
        alert(`${contact} - ${contactsMap.get(contact)}`)
    } else{
        alert("El contacto no existe!")
    }
}

function listContacts() {
    for (const [key, value] of contactsMap) {
        console.log(`${key} - ${value}`);
    }
}