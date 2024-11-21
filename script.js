// Seleccionamos el botón y las imágenes
const mostrarAnimalesBtn = document.getElementById('mostrarAnimales');
const leonImagen = document.getElementById('leon');
const jaguarImagen = document.getElementById('jaguar');

// Evento al hacer clic en el botón
mostrarAnimalesBtn.addEventListener('click', function() {
    // Hacemos visibles las imágenes
    leonImagen.style.display = 'block';
    jaguarImagen.style.display = 'block';
});