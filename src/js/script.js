// Añadimos el listener para detectar el scroll del usuario
window.addEventListener( 'scroll', function() {
    
    // Capturamos los elementos a modificar
    let header = document.getElementById( 'header' );
    let ul = document.getElementById( 'ul_navbar' );
    let floating_arrow = document.getElementById( 'floating_arrow' );
    let modButton = document.getElementById( 'nav_button' ); 
    let logo = document.getElementById( 'logo' ); 

    // Definimos la altura del usuario máximo antes del cambio de color
    let max_cap = 100;

    if( this.window.scrollY > 500 )
        floating_arrow.style.display = 'block';
    else
        floating_arrow.style.display = 'none';

    // Si el usuario pasa de la altura máxima, cambiamos de color
    if (window.scrollY > max_cap) {
        header.classList.add('bg_white');
        ul.classList.add('text_black');
        modButton.classList.add('btn_black');
        logo.src = 'img/logo/logoMain.png';
    } else {
        header.classList.remove('bg_white');
        ul.classList.remove('text_black');
        modButton.classList.remove('btn_black');
        logo.src = 'img/logo/logoMainB.png';
    }
});

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const arrow = item.querySelector('.arrow');
        arrow.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var toggleBtn = document.getElementById("toggle-btn");
    var header = document.getElementById("header");
    var div_black = document.getElementById( 'black' );

    toggleBtn.addEventListener("click", function() {
        if (header.style.display === "none") {
            header.style.display = "block";
            div_black.style.display = 'block';
            
            document.body.classList.add( 'overflow-hidden' );
        } else {
            header.style.display = "none";
            div_black.style.display = 'none';
            document.body.classList.remove( 'overflow-hidden' );
        }
    });
});
