// Objetos interables

const persona = {
    nombre: "julian",
    apellido: "martinez",
    // Podemos colocar objetos dentro de los mismos objetos
    direccion:{
        codigoPostal: 1832,
        localidad: "Lomas de Zamora",
        calle: "alevar 698"
    }
};

// console.table(persona); console.table sirve para imprimir en la consola del navegador los objetos en formato de tabla. Asi puede visualizar mejor el objeto y sus propiedades
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.direccion.codigoPostal);

// Objeto nuevo
// JS en el EMS6 incluyo lo que es el integrador scriper el cual esta representado con los tres puntos "..." y lo que hace es darno una copia del objeto ya creado anteriormente y asignar nuevos valores.
const persona2 = {...persona}; 
persona2.nombre = "nicole";
console.log(persona2);

