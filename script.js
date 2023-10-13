
const participantes = [
    { nombre: "Adria Farrando", puntos: 13 },
    { nombre: "Albert Rovira", puntos: 15 },
    { nombre: "Alex Burgos", puntos: 12 },
    { nombre: "Alex Marin", puntos: 11 },
    { nombre: "Andrea Garcia", puntos: 9 },
    { nombre: "Anna de Sousa", puntos: 2 }, 
    { nombre: "Claudia Alcober", puntos: 6 },
    { nombre: "Clara Torner", puntos: 10 },
    { nombre: "Cristian Toledano", puntos: 2 },
    { nombre: "Eric Ribert", puntos: 4 },
    { nombre: "Francis Quinn", puntos: 4 },
    { nombre: "Gael Benet", puntos: 17 },
    { nombre: "Guim Marques", puntos: 7 },
    { nombre: "Hanna Matas", puntos: 10 },
    { nombre: "Jack Daniels", puntos: 3 },
    { nombre: "Jan Benito", puntos: 12 },
    { nombre: "Jan Fornieles", puntos: 8 },
    { nombre: "Jan Cavalle", puntos: 11 },
    { nombre: "Joanma Garcia", puntos: 10 },
    { nombre: "Lola Torra", puntos: 4 },
    { nombre: "Majda Yelul", puntos: 9 },
    { nombre: "Marina Duytshe", puntos: 3 },
    { nombre: "Mar Macià", puntos: 9 },
    { nombre: "Marcos Marin", puntos: 15 },
    { nombre: "Marta Bisbal", puntos: 15 },
    { nombre: "Marta Fernandez", puntos: 6 },
    { nombre: "Miquel Barja", puntos: 17 },
    { nombre: "Natalia Perez", puntos: 14 },
    { nombre: "Olivia Hausman", puntos: 2 },
    { nombre: "Oriol Cliville", puntos: 13 },
    { nombre: "Pau Gomez", puntos: 12 },
    { nombre: "Pere Mayol", puntos: 7 }, 
    { nombre: "Pol Arroyo", puntos: 18 },
    { nombre: "Pol Sanmarti", puntos: 10 },
    { nombre: "Sara Homs", puntos: 15 }
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


