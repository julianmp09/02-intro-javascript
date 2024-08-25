// import {heroes} from './data/heroes';

// import {heroes} from './data/heroes';

// Se exportan sin las llaves {} cuando usamos el export default 
import heroes, {owners} from "../data/heroes";
console.log(owners);


// El metodo find  devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.Para buscar un unico valor va bien, para buscar mas valores es mejor usar filter.
export const getHeroeById = (id) =>{
    return heroes.find((el) =>el.id === id)
}

// console.log(getHeroeById(2));

// Metodo filter crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner)
}

// console.log(getHeroesByOwner("DC"));


