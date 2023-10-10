// Datos de los participantes con sus nombres y puntajes
const participantes = [
    { nombre: "Adria Farrando", puntos: 3 },
    { nombre: "Albert Rovira", puntos: 4 },
    { nombre: "Alex Burgos", puntos: 2 },
    { nombre: "Alex Marin", puntos: 3 },
    { nombre: "Andrea Garcia", puntos: 1 },
    { nombre: "Anna de Sousa", puntos: 1 }, 
    { nombre: "Claudia Alcober", puntos: 3 },
    { nombre: "Clara Torner", puntos: 2 },
    { nombre: "Cristian Toledano", puntos: 1 },
    { nombre: "Dana Mowszet", puntos: 0 },
    { nombre: "Eric Ribert", puntos: 3 },
    { nombre: "Francis Quinn", puntos: 1 },
    { nombre: "Gael Benet", puntos: 3 },
    { nombre: "Gerard Garces", puntos: 0 },
    { nombre: "Guim Marques", puntos: 2 },
    { nombre: "Hanna Matas", puntos: 1 },
    { nombre: "Jack Daniels", puntos: 0 },
    { nombre: "Jan Benito", puntos: 4 },
    { nombre: "Jan Fornieles", puntos: 2 },
    { nombre: "Jan Cavalle", puntos: 4 },
    { nombre: "Joanma Garcia", puntos: 2 },
    { nombre: "Lola Torra", puntos: 2 },
    { nombre: "Majda Yelul", puntos: 1 },
    { nombre: "Marina Duytshe", puntos: 1 },
    { nombre: "Mario Pascual", puntos: 0 },
    { nombre: "Mar Macià", puntos: 5 },
    { nombre: "Marcos Marin", puntos: 1 },
    { nombre: "Marta Bisbal", puntos: 3 },
    { nombre: "Marta Fernandez", puntos: 2 },
    { nombre: "Miquel Barja", puntos: 4 },
    { nombre: "Natalia Perez", puntos: 3 },
    { nombre: "Olivia Hausman", puntos: 1 },
    { nombre: "Oriol Cliville", puntos: 3 },
    { nombre: "Pau Gomez", puntos: 1 },
    { nombre: "Pere Mayol", puntos: 1 }, 
    { nombre: "Pol Arroyo", puntos: 3 },
    { nombre: "Pol Sanmarti", puntos: 1 },
    { nombre: "Sara Homs", puntos: 3 }
];


function actualizarTabla() {
   
    participantes.sort((a, b) => b.puntos - a.puntos);

    const tabla = document.getElementById("tablaPuntuaciones");
    tabla.innerHTML = ""; 

    participantes.forEach((participante, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${participante.nombre}</td>
            <td>${participante.puntos}</td>
        `;

        if (index === 0) {
            fila.style.backgroundColor = "Green"; 
        } else if (index === 1) {
            fila.style.backgroundColor = "Blue"; 
        } else if (index === 2) {
            fila.style.backgroundColor = "Orange"; 
        }

        tabla.appendChild(fila);
    });
}


actualizarTabla();


