let carrito = [];

function agregarCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoList = document.getElementById("items-carrito");
    carritoList.innerHTML = ""; 

    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = producto;
        carritoList.appendChild(li);
    });
}

function realizarCompra() {
    if (carrito.length > 0) {
        alert("Compra realizada con éxito");
        carrito = []; 
        actualizarCarrito();
    } else {
        alert("Se han eliminado los productos del carrito.");
    }
}

function login(event) {
    event.preventDefault(); 

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    if (usuario === "admin" && contrasena === "1234") {
        // Si la sesion esta bien, oculta el login1 (anotar, queda solucionarlo)
        document.getElementById("login").style.display = "none"; 
        document.body.style.overflow = 'auto'; 
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

window.onload = function() {
    document.getElementById("login").style.display = "flex";
    document.body.style.overflow = 'hidden'; 
};