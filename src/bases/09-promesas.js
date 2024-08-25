import {getHeroeById} from "./bases/08-import-export-funciones-con-arreglos";

// El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.


// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         reject("No se pudo encontrar el heroe");
//     }, 2000)
// });

// promesa.then((heroe)=>{
//     console.log("heroe", heroe);
// })
// .catch(err => console.warn(err))

const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            // funcion if sugar syntax
            heroe ? resolve(heroe) : reject("No se pudo encontrar el heroe");
        }, 2000)
    });  
}

getHeroeByIdAsync(30)
.then(heroe => console.log("heroe", heroe))
.catch(err => console.log(err));