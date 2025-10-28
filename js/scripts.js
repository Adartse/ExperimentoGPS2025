// scripts.js

// 🔹 Carga de fragmentos (header y footer)
async function cargarFragmento(id, archivo) {
    try {
        const contenedor = document.getElementById(id);
        if (!contenedor) return;

        const respuesta = await fetch(archivo);
        if (!respuesta.ok) throw new Error(`Error al cargar ${archivo}`);

        const contenido = await respuesta.text();
        contenedor.innerHTML = contenido;
    } catch (error) {
        console.error(`❌ No se pudo cargar el fragmento: ${error.message}`);
    }
}

// 🔹 Detectar ruta correcta automáticamente
function obtenerRutaBase() {
    // Obtiene la profundidad del HTML actual
    const profundidad = window.location.pathname.split("/").length - 2; 
    // Construye una ruta base relativa
    return "../".repeat(profundidad);
}

// 🔹 Cargar header y footer una vez que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    const base = obtenerRutaBase();
    cargarFragmento("header-placeholder", `${base}componentes/header.html`);
    cargarFragmento("footer-placeholder", `${base}componentes/footer.html`);
});

// 🔹 Funciones de navegación
function siguienteEjercicio(destino) {
    window.location.href = destino;
}

function volver(destino) {
    window.location.href = destino;
}

function irInicio() {
    const base = obtenerRutaBase();
    window.location.href = `${base}index.html`;
}

// 🔹 Función para redirigir según selección (para index.html)
function redirigir() {
    const radios = document.getElementsByName('opcion');
    let seleccion = null;

    for (const radio of radios) {
        if (radio.checked) {
            seleccion = radio.value;
            break;
        }
    }

    if (seleccion === 'transcripcion') {
        window.location.href = 'transcripciones/transcripcion_ejer_clase01.html';
    } else if (seleccion === 'leia') {
        window.location.href = 'leias/LEIA_ejer_clase01.html';
    } else {
        alert('Por favor selecciona una opción.');
    }
}

