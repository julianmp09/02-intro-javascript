// Desestructuracion de Objetos

const persona = {
    nombre: "julian",
    edad: 26,
    clave:"programador",
};

// aplicacion de la Desestructuracion de Objetos

// const {nombre,edad,clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// Aplicando la desestructuracion con una funcion

const userContext = ({clave,nombre,edad,rango="junior"}) => {
    // console.log(nombre,edad,rango);
    return {
        nombreClave: clave,
        anios:edad,
        latIng: {
            lat: 14.52,
            ing: -14.00,
        }
    }
}

// Para llamar obejtos dentro de otros objeto en una desestructuracion hay que llamar al objeto y agregarle llaves para poder acceder 

const {nombreClave, anios, latIng:{lat, ing}} = userContext(persona);

console.log(nombreClave, anios);
console.log(nombreClave, anios, lat, ing);

