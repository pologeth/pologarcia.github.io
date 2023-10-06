// Datos de los participantes con sus nombres y puntajes
const participantes = [
    { nombre: "Adria Farrando", puntos: 0 },
    { nombre: "Albert Rovira", puntos: 0 },
    { nombre: "Alex Burgos", puntos: 10 },
    { nombre: "Alex Marin", puntos: 0 },
    { nombre: "Andre Garcia", puntos: 0 },
    { nombre: "Anna de Sousa", puntos: 0 }, // Cambia el puntaje de Anna
    { nombre: "Claudia Alcober", puntos: 0 },
    { nombre: "Clara Torner", puntos: 0 },
    { nombre: "Cristian Toledano", puntos: 0 },
    { nombre: "Dana Mowszet", puntos: 0 },
    { nombre: "Eric Ribert", puntos: 0 },
    { nombre: "Francis Quinn", puntos: 5 },
    { nombre: "Gael Benet", puntos: 0 },
    { nombre: "Gerar Garces", puntos: 0 },
    { nombre: "Hanna Matas", puntos: 0 },
    { nombre: "Jack Daniels", puntos: 0 },
    { nombre: "Jan Benito", puntos: 0 },
    { nombre: "Jan Fornieles", puntos: 0 },
    { nombre: "Janc Cavalle", puntos: 0 },
    { nombre: "Juanma Garcia", puntos: 0 },
    { nombre: "Lola Torra", puntos: 0 },
    { nombre: "Majda Yelul", puntos: 0 },
    { nombre: "Marina Duytshe", puntos: 0 },
    { nombre: "Mario Pascual", puntos: 0 },
    { nombre: "Mar Macià", puntos: 0 },
    { nombre: "Marcos Marin", puntos: 0 },
    { nombre: "Marta Bisbal", puntos: 0 },
    { nombre: "Marta Fernandez", puntos: 0 },
    { nombre: "Miquel Barja", puntos: 0 },
    { nombre: "Natalia Perez", puntos: 0 },
    { nombre: "Olivia Hausman", puntos: 0 },
    { nombre: "Oriol Cliville", puntos: 0 },
    { nombre: "Pau Gomez", puntos: 0 },
    { nombre: "Pere Mayol", puntos: 0 }, // Cambia el puntaje de Pere
    { nombre: "Pol Arroyo", puntos: 0 },
    { nombre: "Pol Sanmarti", puntos: 0 },
    { nombre: "Sara Homs", puntos: 0 }
];

// Función para actualizar la tabla con los datos de los participantes y detectar cambios en los puntajes
function actualizarTabla() {
    // Ordena la lista de participantes por puntos de mayor a menor
    participantes.sort((a, b) => b.puntos - a.puntos);

    const tabla = document.getElementById("tablaPuntuaciones");
    tabla.innerHTML = ""; // Borra el contenido actual de la tabla

    participantes.forEach((participante, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${participante.nombre}</td>
            <td>${participante.puntos}</td>
        `;

        // Establece colores específicos para el primero, segundo y tercero
        if (index === 0) {
            fila.style.backgroundColor = "white"; // Primero (verde)
        } else if (index === 1) {
            fila.style.backgroundColor = "white"; // Segundo (azul)
        } else if (index === 2) {
            fila.style.backgroundColor = "white"; // Tercero (naranja)
        }

        tabla.appendChild(fila);
    });
}

// Llama a la función para cargar la tabla al cargar la página
actualizarTabla();


