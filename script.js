// Lista de imágenes y descripciones
const juegos = [
    { imagen: "IMG/juego1.jpg", titulo: "R.E.P.O", descripcion: "es una experiencia de horror en línea cooperativa que te mantendrá al borde del asiento, donde tú y hasta cinco compañeros se zambullen en lugares escalofriantes para buscar artefactos extraños para un benefacto", precio: "$5.79" },
    { imagen: "IMG/juego2.jpg", titulo: "Schedule 1", descripcion: "Desde un pequeño traficante de drogas hasta un capo, fabrica y distribuye una amplia gama de drogas por la desaliñada ciudad de Hyland Point. Expande tu imperio con propiedades, negocios, empleados y mucho más.", precio: "$10.49" },
    { imagen: "IMG/juego3.jpg", titulo: "Kingdome Come: Deliverance 2", descripcion: "Un emocionante RPG de acción con mucha narrativa y un exuberante mundo abierto situado en la Europa medieval del siglo XV. No te pierdas la aventura medieval definitiva donde vivirás un viaje de proporciones épicas de la mano del joven Henry", precio: "$44.99" },
    { imagen: "IMG/juego4.jpg", titulo: "The Last of Us Part II", descripcion: "Es un videojuego de acción y aventura desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment. Es la secuela de The Last of Us (2013) y fue lanzado para PlayStation 4 en junio de 2020.", precio: "$59.99" },
    { imagen: "IMG/juego5.jpg", titulo: "Cyberpunk 2077", descripcion: "Es un videojuego de rol y acción desarrollado por CD Projekt Red. Ambientado en un mundo abierto en la megalópolis ficticia de Night City, el jugador asume el papel de V, un mercenario que busca un implante único que otorga la inmortalidad.", precio: "$29.99" },
];

let indiceActual = 0;
let intervaloCarrusel;

// Función para mostrar el slide
function mostrarSlide() {
    document.getElementById("slide").src = juegos[indiceActual].imagen;
    document.getElementById("titulo-juego").innerText = juegos[indiceActual].titulo;
    document.getElementById("descripcion-juego").innerText = juegos[indiceActual].descripcion;
    document.querySelector(".precio").innerText = juegos[indiceActual].precio;
}

// Función para cambiar juego y reiniciar intervalo
function cambiarSlide(direccion) {
    indiceActual += direccion;

    if (indiceActual >= juegos.length) {
        indiceActual = 0;
    } else if (indiceActual < 0) {
        indiceActual = juegos.length - 1;
    }

    mostrarSlide();
    reiniciarIntervalo();
}

// Función para reiniciar el intervalo automático
function reiniciarIntervalo() {
    clearInterval(intervaloCarrusel);
    intervaloCarrusel = setInterval(() => cambiarSlide(1), 3000); // cada 3 segundos
}

// Iniciar carrusel automáticamente
reiniciarIntervalo();



const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevenimos envío real por mailto

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

    // feedback positivo
    feedback.style.color = "limegreen";
    feedback.textContent = "¡Gracias por tu mensaje!";

    form.reset(); // borra el contenido
  });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }



  
  let currentAudio = null;
  let currentTimeout = null;

  
  function playDemo(id) {
    // Si ya hay un audio sonando, lo pausamos
    if (currentAudio && currentAudio.id !== id) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      clearTimeout(currentTimeout);
    }

    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
    currentAudio = audio;

    // Detener automáticamente después de 20 segundos
    clearTimeout(currentTimeout);
    currentTimeout = setTimeout(() => {
      audio.pause();
    }, 20000); // 20000 milisegundos = 20 segundos
  }

  function pauseDemo(id) {
    const audio = document.getElementById(id);
    audio.pause();
    if (currentAudio && currentAudio.id === id) {
      clearTimeout(currentTimeout);
    }
  }