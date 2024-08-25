// Desestrucutracion de arreglos
const personajes = ["naruto", "sasuke", "sakura"];

// Trucazo! Para querer renombrar un variable podemos apretar F2 en el nombre y lo cambiamos y hara los cambios para todos

const [p1] = personajes;

console.log(p1);

// Como los arreglos funcionan por medio de posiciones, si queremos obtener el unico valor de un arreglo entonces usamos un espacio en blanco y una coma para que JS lo omita.

const [, p2] = personajes;
console.log(p2);

// No es bueno tener tanto espacios vacios para desestruturar, pureba con esto

 const retornarArreglos = () => {
    return ["abc", 123];
 }

 const [letras, numeros] = retornarArreglos();
 console.log(letras, numeros);

 // tarea
const tarea = (valor) =>{
    return [ valor, () => {console.log("Hola mundo!")
    }];
}

const [nombre, setNombre] = tarea( "Goku" );
console.log(nombre);
setNombre();

 
