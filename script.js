const participantes = [
    { nombre: "Adrià", puntos: 9 },
    { nombre: "Aina", puntos: 3 },
    { nombre: "Alejandro", puntos: 6.5 },
    { nombre: "Anna De Sousa", puntos: 3 },
    { nombre: "Ari", puntos: 16 },
    { nombre: "Armand", puntos: 10 },
    { nombre: "Arnau", puntos: 8 },
    { nombre: "Arroyo", puntos: 4.5 },
    { nombre: "Auladell", puntos: 7.5 },
    { nombre: "Benito", puntos: 14.5 },
    { nombre: "Berta", puntos: 10.5 },
    { nombre: "Burgos", puntos: 6 },
    { nombre: "Cata", puntos: 3 },
    { nombre: "Choco", puntos: 12 },
    { nombre: "Coke", puntos: 7 },
    { nombre: "Eastwood", puntos: 4 },
    { nombre: "Eira", puntos: 8.5 },
    { nombre: "Eloy", puntos: 5.5 },
    { nombre: "Emi", puntos: 4 },
    { nombre: "Emma", puntos: 14 },
    { nombre: "Farrando", puntos: 5 },
    { nombre: "Fox", puntos: 7 },
    { nombre: "Garcés", puntos: 1 },
    { nombre: "Geri", puntos: 2 },
    { nombre: "George", puntos: 3 },
    { nombre: "Guim", puntos: 3.5 },
    { nombre: "Jack", puntos: 4 },
    { nombre: "Jana", puntos: 6 },
    { nombre: "Júlia", puntos: 5 },
    { nombre: "Lluc", puntos: 6.5 },
    { nombre: "Lola", puntos: 3 },
    { nombre: "Mar", puntos: 2.5 },
    { nombre: "Mariona", puntos: 5.5 },
    { nombre: "Martina", puntos: 6 },
    { nombre: "Miqui", puntos: 14 },
    { nombre: "Oleguer", puntos: 5.5 },
    { nombre: "Pabs", puntos: 8.5 },
    { nombre: "Pacheco", puntos: 4.5 },
    { nombre: "Paula", puntos: 3 },
    { nombre: "Pauli", puntos: 10.5 },
    { nombre: "Pau G", puntos: 4 },
    { nombre: "Pere", puntos: 10.5 },
    { nombre: "Poki", puntos: 6.5 },
    { nombre: "Quim", puntos: 8.5 },
    { nombre: "Robert", puntos: 6 },
    { nombre: "Rovira", puntos: 14 },
    { nombre: "Ruben", puntos: 1.5 },
    { nombre: "Sancho", puntos: 4.5 },
    { nombre: "Sanma", puntos: 5.5 },
    { nombre: "Sofia", puntos: 5 },
    { nombre: "Trilles", puntos: 2 }
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


