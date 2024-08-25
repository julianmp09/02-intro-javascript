const saludar = (nombre) => {
    return `Hola, ${nombre} `
}

console.log(saludar("julian"));

// Podemos retonar de fomra implicita las funciones felchas de la siguiente manera.

// Cuando solo nuestra funcion devulve un return, lo podemos hacer asi:

const saludar2 = () => `Hola mundo`;
console.log(saludar2());

// Cuando solo nuestra funcion devulve un objeto, usamos parentesis:

const getUser = () => ({
    uid: "ABC123",
    username: "El_papa_de_los_helados123",
})
console.log(getUser());

// Tarea
const getUsuarioActivo = (nombre) => ({
    uid: "ABC567",
    username: nombre,
});

const usuarioActivo = getUsuarioActivo("julian");
console.log(usuarioActivo);
