const participantes = [
    { nombre: "Adrià", puntos: 1 },
    { nombre: "Aina", puntos: 1 },
    { nombre: "Alejandro", puntos: 3.5 },
    { nombre: "Anna De Sousa", puntos: 2 },
    { nombre: "Ari", puntos: 3.5 },
    { nombre: "Armand", puntos: 4 },
    { nombre: "Arnau", puntos: 3 },
    { nombre: "Arroyo", puntos: 2 },
    { nombre: "Auladell", puntos: 1 },
    { nombre: "Benito", puntos: 4 },
    { nombre: "Berta", puntos: 2.5 },
    { nombre: "Burgos", puntos: 3 },
    { nombre: "Cata", puntos: 1 },
    { nombre: "Choco", puntos: 4.5 },
    { nombre: "Coke", puntos: 3.5 },
    { nombre: "Eastwood", puntos: 2 },
    { nombre: "Eira", puntos: 4 },
    { nombre: "Eloy", puntos: 1.5 },
    { nombre: "Emi", puntos: 4 },
    { nombre: "Emma", puntos: 3.5 },
    { nombre: "Fox", puntos: 1.5 },
    { nombre: "Garcés", puntos: 1 },
    { nombre: "George", puntos: 1 },
    { nombre: "Jack", puntos: 1 },
    { nombre: "Jana", puntos: 4 },
    { nombre: "Júlia", puntos: 1 },
    { nombre: "Lluc", puntos: 3.5 },
    { nombre: "Lola", puntos: 1 },
    { nombre: "Mar", puntos: 2 },
    { nombre: "Mariona", puntos: 2.5 },
    { nombre: "Martina", puntos: 2 },
    { nombre: "Miqui", puntos: 4.5 },
    { nombre: "Oleguer", puntos: 3.5 },
    { nombre: "Pabs", puntos: 2.5 },
    { nombre: "Pacheco", puntos: 1.5 },
    { nombre: "Pauli", puntos: 4 },
    { nombre: "Pau G", puntos: 1 },
    { nombre: "Pere", puntos: 4 },
    { nombre: "Poki", puntos: 4 },
    { nombre: "Quim", puntos: 3 },
    { nombre: "Robert", puntos: 3 },
    { nombre: "Rovira", puntos: 4 },
    { nombre: "Ruben", puntos: 0.5 },
    { nombre: "Sancho", puntos: 3.5 },
    { nombre: "Sanma", puntos: 3.5 },
    { nombre: "Sofia", puntos: 1.5 },
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


