// Añadimos el listener para detectar el scroll del usuario
window.addEventListener( 'scroll', function() {
    
    // Capturamos los elementos a modificar
    let header = document.getElementById( 'header' );
    let ul = document.getElementById( 'ul_navbar' );

    // Definimos la altura del usuario máximo antes del cambio de color
    let max_cap = 500;

    // Si el usuario pasa de la altura máxima, cambiamos de color
    if (window.scrollY > max_cap) {
        header.classList.add('bg_white');
        ul.classList.add('text_black');
    } else {
        header.classList.remove('bg_white');
        ul.classList.remove('text_black');
    }
} );