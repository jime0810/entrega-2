// aca declaro las variables
const usuarios = [
    new Usuario("usuario1", "contrasena1"),
    new Usuario("usuario2", "contrasena2"),
];

let usuario = {
    nombre: '',
    edad: 0,
};

let resultados = [];

class Usuario {
    constructor(nombre, contrasena) {
        this.nombre = nombre;
        this.contrasena = contrasena;
    }
}

// converti la funcion flecha como se me aconsejo
const verificarCredenciales = (nombre, contrasena) => {
    return usuarios.some(usuario => usuario.nombre === nombre && usuario.contrasena === contrasena);
};

const iniciarSesion = () => {
    const nombre = prompt("Por favor, ingresa nombre de usuario:");
    const contrasena = prompt("Por favor, ingresa contraseña:");

    if (verificarCredenciales(nombre, contrasena)) {
        alert("¡Inicio de sesión exitoso!");
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }
};

const capturarDatos = () => {
    usuario.nombre = prompt("Ingresa tu nombre:");
    usuario.edad = parseInt(prompt("Ingresa tu edad:"), 10);
};

const procesarDatos = () => {
    const nuevaEdad = usuario.edad + 10;
    resultados.push(nuevaEdad);
};

const mostrarResultados = () => {
    alert(`Hola ${usuario.nombre}, tu edad en 10 años será: ${resultados[0]}`);
};

iniciarSesion();