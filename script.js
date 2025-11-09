// ---------------------------
// CARRUSEL
// ---------------------------
const juegos = [
    { imagen: "IMG/juego1.jpg", titulo: "R.E.P.O", descripcion: "es una experiencia...", precio: "$5.79" },
    { imagen: "IMG/juego2.jpg", titulo: "Schedule 1", descripcion: "Desde un pequeño...", precio: "$10.49" },
    { imagen: "IMG/juego3.jpg", titulo: "Kingdome Come: Deliverance 2", descripcion: "Un emocionante RPG...", precio: "$44.99" },
    { imagen: "IMG/juego4.jpg", titulo: "The Last of Us Part II", descripcion: "Es un videojuego...", precio: "$59.99" },
    { imagen: "IMG/juego5.jpg", titulo: "Cyberpunk 2077", descripcion: "Es un videojuego...", precio: "$29.99" },
];

let indiceActual = 0;
let intervaloCarrusel;

function mostrarSlide() {
    document.getElementById("slide").src = juegos[indiceActual].imagen;
    document.getElementById("titulo-juego").innerText = juegos[indiceActual].titulo;
    document.getElementById("descripcion-juego").innerText = juegos[indiceActual].descripcion;
    document.querySelector(".precio").innerText = juegos[indiceActual].precio;
}

function cambiarSlide(direccion) {
    indiceActual += direccion;

    if (indiceActual >= juegos.length) indiceActual = 0;
    if (indiceActual < 0) indiceActual = juegos.length - 1;

    mostrarSlide();
    reiniciarIntervalo();
}

function reiniciarIntervalo() {
    clearInterval(intervaloCarrusel);
    intervaloCarrusel = setInterval(() => cambiarSlide(1), 3000);
}

reiniciarIntervalo();

// ---------------------------
// FORMULARIO CONTACTO
// ---------------------------
const form = document.getElementById("contactForm");
if (form) {
    const feedback = document.getElementById("formFeedback");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            feedback.style.color = "orange";
            feedback.textContent = "Por favor, completá todos los campos.";
            return;
        }

        if (!validateEmail(email)) {
            feedback.style.color = "red";
            feedback.textContent = "El correo electrónico no es válido.";
            return;
        }

        feedback.style.color = "limegreen";
        feedback.textContent = "¡Gracias por tu mensaje!";
        form.reset();
    });
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// ---------------------------
// AUDIO DEMOS
// ---------------------------
let currentAudio = null;
let currentTimeout = null;

function playDemo(id) {
    if (currentAudio && currentAudio.id !== id) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        clearTimeout(currentTimeout);
    }

    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
    currentAudio = audio;

    clearTimeout(currentTimeout);
    currentTimeout = setTimeout(() => audio.pause(), 20000);
}

function pauseDemo(id) {
    const audio = document.getElementById(id);
    audio.pause();
    if (currentAudio && currentAudio.id === id) {
        clearTimeout(currentTimeout);
    }
}

// ---------------------------
// MENÚ DESPLEGABLE
// ---------------------------
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("menu-abierto");
}
