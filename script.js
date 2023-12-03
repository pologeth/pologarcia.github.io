const participantes = [
    { nombre: "Adrià", puntos: 3 },
    { nombre: "Aina", puntos: 1 },
    { nombre: "Alejandro", puntos: 4.5 },
    { nombre: "Anna De Sousa", puntos: 2 },
    { nombre: "Ari", puntos: 7.5 },
    { nombre: "Armand", puntos: 5 },
    { nombre: "Arnau", puntos: 4 },
    { nombre: "Arroyo", puntos: 1.5 },
    { nombre: "Auladell", puntos: 2.5 },
    { nombre: "Benito", puntos: 7.5 },
    { nombre: "Berta", puntos: 3.5 },
    { nombre: "Burgos", puntos: 3 },
    { nombre: "Cata", puntos: 1 },
    { nombre: "Choco", puntos: 6 },
    { nombre: "Coke", puntos: 4 },
    { nombre: "Eastwood", puntos: 2 },
    { nombre: "Eira", puntos: 7.5 },
    { nombre: "Eloy", puntos: 1.5 },
    { nombre: "Emi", puntos: 4 },
    { nombre: "Emma", puntos: 6.5 },
    { nombre: "Farrando", puntos: 3 },
    { nombre: "Fox", puntos: 3 },
    { nombre: "Garcés", puntos: 1 },
    { nombre: "Geri", puntos: 1 },
    { nombre: "George", puntos: 1 },
    { nombre: "Guim", puntos: 3.5 },
    { nombre: "Iria Uni", puntos: 1 },
    { nombre: "Jack", puntos: 1 },
    { nombre: "Jana", puntos: 5 },
    { nombre: "Júlia", puntos: 1 },
    { nombre: "Lluc", puntos: 3.5 },
    { nombre: "Lola", puntos: 1 },
    { nombre: "Mar", puntos: 2.5 },
    { nombre: "Mariona", puntos: 2.5 },
    { nombre: "Martina", puntos: 4 },
    { nombre: "Miqui", puntos: 6 },
    { nombre: "Oleguer", puntos: 3.5 },
    { nombre: "Pabs", puntos: 5.5 },
    { nombre: "Pacheco", puntos: 1.5 },
    { nombre: "Pauli", puntos: 6.5 },
    { nombre: "Pau G", puntos: 2 },
    { nombre: "Pere", puntos: 5.5 },
    { nombre: "Poki", puntos: 4.5 },
    { nombre: "Quim", puntos: 5.5 },
    { nombre: "Robert", puntos: 3 },
    { nombre: "Rovira", puntos: 7 },
    { nombre: "Ruben", puntos: 0.5 },
    { nombre: "Sancho", puntos: 3.5 },
    { nombre: "Sanma", puntos: 4.5 },
    { nombre: "Sofia", puntos: 2 },
    { nombre: "Trilles", puntos: 0 }
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


