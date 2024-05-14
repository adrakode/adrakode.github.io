// Añadimos un listener para detectar el scroll del usuario
window.addEventListener('scroll', function() {
    
    // Capturamos los elementos a modificar
    let header = document.getElementById('header');
    let ul = document.getElementById('ul_navbar');
    let floating_arrow = document.getElementById('floating_arrow');
    let modButton = document.getElementById('nav_button'); 
    let logo = document.getElementById('logo'); 

    // Definimos la altura máxima del scroll antes del cambio de color
    let max_cap = 100;

    // Si la posición de scroll supera cierto umbral, mostramos una flecha flotante
    if (this.window.scrollY > 500)
        floating_arrow.style.display = 'block';
    else
        floating_arrow.style.display = 'none';

    // Si el usuario ha hecho scroll más allá del límite, cambiamos los estilos
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

///////////////////////////////////
// FUNCIONALIDAD DEL ACORDEON
///////////////////////////////////

// Al cargar la página, verifica si los ítems del acordeón están activos y ajusta las flechas si es necesario
document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        toggleArrow(item);
    });
});

// Al hacer clic en el acordeón, define el ítem como activo y muestra el contenido correspondiente
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        toggleArrow(item);
    });
});

// Función para cambiar la rotación de la flecha según el estado del ítem del acordeón
function toggleArrow(item) {
    const arrow = item.querySelector('.arrow');
    arrow.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
}



///////////////////////////////////
// FUNCIONALIDAD BOTON ALTERNAR
///////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    var toggleBtn = document.getElementById("toggle-btn");
    var header = document.getElementById("header");
    var div_black = document.getElementById('black');
    const toggleButton = document.getElementById('toggle-btn');
    const navBar = document.querySelector('nav');

    toggleBtn.addEventListener("click", function() {
        // Toggle para mostrar/ocultar el encabezado y la capa negra
        if (header.style.display === "none") {
            header.style.display = "block";
            div_black.style.display = 'block';
            
            document.body.classList.add('overflow-hidden'); // Evita el scroll cuando el menú está abierto
        } else {
            header.style.display = "none";
            div_black.style.display = 'none';
            document.body.classList.remove('overflow-hidden');
        }

        toggleButton.addEventListener('click', function() {
            navBar.classList.toggle('show'); // Agrega/elimina una clase para mostrar/ocultar el menú
        });
    
        // Cierra el menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navBar.classList.remove('show');
            });
        });
    });
});

// Listener para recargar la página cuando cambia el tamaño de la ventana
window.addEventListener('resize', function() {
    window.location.reload();
});