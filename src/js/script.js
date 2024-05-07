// Añadimos el listener para detectar el scroll del usuario
window.addEventListener( 'scroll', function() {
    
    // Capturamos los elementos a modificar
    let header = document.getElementById( 'header' );
    let ul = document.getElementById( 'ul_navbar' );
    let floating_arrow = document.getElementById( 'floating_arrow' );

    // Definimos la altura del usuario máximo antes del cambio de color
    let max_cap = 775;

    if( this.window.scrollY > 0 )
        floating_arrow.style.display = 'block';
    else
        floating_arrow.style.display = 'none';

    // Si el usuario pasa de la altura máxima, cambiamos de color
    if (window.scrollY > max_cap) {
        header.classList.add('bg_white');
        ul.classList.add('text_black');
    } else {
        header.classList.remove('bg_white');
        ul.classList.remove('text_black');
    }
} );