let articulos = [
    { id: 1, nombre: "Camisetas de selecciones", precio: 50 },
    { id: 2, nombre: "Camisetas de clubes", precio: 50 },
    { id: 3, nombre: "Camiseta retro", precio: 80 }
];

function Bienvenida() {
    let Nombre;
    let articuloSeleccionado;
    let precio;

    do {
        Nombre = prompt("¿Cuál es tu nombre?");
        if (!Nombre) {
            alert("Ingresa un nombre válido");
            continue;
        }

        alert("¡Bienvenido " + Nombre + " a nuestra tienda!");

        let menuOptions = articulos
            .map(articulo => `${articulo.id}. ${articulo.nombre}`)
            .join("\n");

        alert("Selecciona alguna opción:\n" + menuOptions);

        articuloSeleccionado = menu();
        if (!articuloSeleccionado) {
            alert("Artículo no válido. Intenta de nuevo.");
            continue;
        }

        precio = obtenerPrecio(articuloSeleccionado);

        alert(`Recibo de compra:\nNombre: ${Nombre}\nArtículo: ${articuloSeleccionado.nombre}\nPrecio: $${precio} USD`);

        
        mostrarResumen();

        
        const continuarCompra = confirm("¿Desea comprar algún otro producto?");
        if (!continuarCompra) {
            break; 
        }

    } while (Nombre && articulos.some(articulo => articulo.id === articuloSeleccionado.id));

    alert("Gracias por tu compra. ¡Que la disfrutes!");
}

function menu() {
    let idSeleccionado = parseInt(prompt("¿Cuál artículo deseas?"));
    let articulo = articulos.find(a => a.id === idSeleccionado);

    if (articulo) {
        alert("Has escogido " + articulo.nombre);
        return articulo;
    } else {
        return undefined;
    }
}

function obtenerPrecio(articulo) {
    return articulo.precio;
}

function mostrarResumen() {

    const resumen = articulos.map(articulo => 
        `${articulo.id}. ${articulo.nombre} - $${articulo.precio}`
    ).join("\n");

    alert("Artículos disponibles:\n" + resumen);
}

Bienvenida();
