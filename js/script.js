class Usuario {
    constructor(nombre, contrasena) {
        this.nombre = nombre;
        this.contrasena = contrasena;
    }
}

const usuarios = [
    new Usuario("usuario1", "contrasena1"),
    new Usuario("usuario2", "contrasena2"),
];

function verificarCredenciales(nombre, contrasena) {
    for (let usuario of usuarios) {
        if (usuario.nombre === nombre && usuario.contrasena === contrasena) {
            return true;
        }
    }
    return false;
}

function iniciarSesion() {
    let nombre = prompt("Por favor, ingresa tu nombre de usuario:");
    let contrasena = prompt("Por favor, ingresa tu contraseña:");

    if (verificarCredenciales(nombre, contrasena)) {
        alert("¡Inicio de sesión exitoso!");
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }
}

let usuario = {
    nombre: '',
    edad: 0,
};

let resultados = [];

function capturarDatos() {
    usuario.nombre = prompt("Ingresa tu nombre:");
    usuario.edad = parseInt(prompt("Ingresa tu edad:"), 10);
}

function procesarDatos() {
    let nuevaEdad = usuario.edad + 10;
    resultados.push(nuevaEdad);
}

function mostrarResultados() {
    alert(`Hola ${usuario.nombre}, tu edad en 10 años será: ${resultados[0]}`);
}


iniciarSesion();