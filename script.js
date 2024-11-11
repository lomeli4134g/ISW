function mostrarSeccion(id) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    // Muestra la sección seleccionada
    const seccionActiva = document.getElementById(id);
    if (seccionActiva) {
        seccionActiva.classList.add('activa');
    }
}
// Crear fondo de partículas
const createParticles = () => {
    const particles = 100; // Número de partículas
    const background = document.getElementById('background-animation');
    
    for (let i = 0; i < particles; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posicionar aleatoriamente las partículas
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Añadir animación
        particle.style.animationDuration = `${2 + Math.random() * 4}s`; // Duración aleatoria
        particle.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio
        
        background.appendChild(particle);
        
        // Animar partículas en movimiento descendente
        setTimeout(() => {
            particle.style.transform = `translateY(100vh) translateX(${Math.random() * 50 - 25}vw)`; // Movimiento lateral aleatorio
        }, 0);
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

document.addEventListener('DOMContentLoaded', createParticles);
