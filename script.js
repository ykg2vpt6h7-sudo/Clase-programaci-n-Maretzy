const canciones = [
  {
    nombre: "Luz de Noche",
    artista: "Nova"
  },
  {
    nombre: "Dream",
    artista: "Sky"
  },
  {
    nombre: "Sunset",
    artista: "Ocean"
  },
  {
    nombre: "Stars",
    artista: "Moon"
  }
];

let miPlaylist = [];

const lista = document.getElementById("listaCanciones");
const playlist = document.getElementById("playlist");
const buscar = document.getElementById("buscar");

function mostrarCanciones(cancionesMostrar) {
  lista.innerHTML = "";

  cancionesMostrar.forEach((cancion) => {
    const elemento = document.createElement("div");

    elemento.className = "cancion";

    elemento.innerHTML = `
      <div>
        <strong>${cancion.nombre}</strong>
        <span>${cancion.artista}</span>
      </div>

      <div>
        <button onclick="reproducir('${cancion.nombre}', '${cancion.artista}')">
          ▶
        </button>

        <button onclick="agregar('${cancion.nombre}')">
          +
        </button>
      </div>
    `;

    lista.appendChild(elemento);
  });
}

function reproducir(nombre, artista) {
  document.getElementById("reproduciendo").innerText =
    "🎧 Reproduciendo: " + nombre + " - " + artista;
}

function agregar(nombre) {
  const cancion = canciones.find(
    cancion => cancion.nombre === nombre
  );

  if (!miPlaylist.includes(cancion)) {
    miPlaylist.push(cancion);
  }

  mostrarPlaylist();
}

function eliminar(nombre) {
  miPlaylist = miPlaylist.filter(
    cancion => cancion.nombre !== nombre
  );

  mostrarPlaylist();
}

function mostrarPlaylist() {
  playlist.innerHTML = "";

  if (miPlaylist.length === 0) {
    playlist.innerHTML = "<p>Aún no agregas canciones.</p>";
    return;
  }

  miPlaylist.forEach((cancion) => {
    const elemento = document.createElement("div");

    elemento.className = "cancion";

    elemento.innerHTML = `
      <div>
        <strong>${cancion.nombre}</strong>
        <span>${cancion.artista}</span>
      </div>

      <button onclick="eliminar('${cancion.nombre}')">
        🗑
      </button>
    `;

    playlist.appendChild(elemento);
  });
}

buscar.addEventListener("input", function () {
  const texto = buscar.value.toLowerCase();

  const resultados = canciones.filter(
    cancion =>
      cancion.nombre.toLowerCase().includes(texto) ||
      cancion.artista.toLowerCase().includes(texto)
  );

  mostrarCanciones(resultados);
});

mostrarCanciones(canciones);