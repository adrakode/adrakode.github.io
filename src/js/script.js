///////////////////////////////////
// FUNCIONALIDAD FLECHA SCROLL
//////////////////////////////////
window.addEventListener('scroll', function() {
    // Capturamos el elemento de la flecha flotante
    let floating_arrow = document.getElementById('floating_arrow');

    // Si la posición de scroll supera cierto umbral, mostramos la flecha flotante
    if ((this.window.scrollY > 500) && (this.window.scrollY < 2800)) {
        floating_arrow.style.display = 'block'; // Mostrar la flecha flotante
    } else {
        floating_arrow.style.display = 'none'; // Ocultar la flecha flotante
    }
});

///////////////////////////////////
// FUNCIONALIDAD DEL ACORDEON
///////////////////////////////////
// Al cargar la página, verifica si los ítems del acordeón están activos y ajusta las flechas si es necesario
document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        toggleArrow(item); // Ajustar flechas inicialmente
    });
});

// Capturamos todos los elementos del acordeón
const accordionItems = document.querySelectorAll('.accordion-item');

// Añadimos evento de clic a cada ítem del acordeón
accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active'); // Alternar clase 'active'
        toggleArrow(item); // Ajustar la flecha según el estado
    });
});

// Función para cambiar la rotación de la flecha según el estado del ítem del acordeón
function toggleArrow(item) {
    const arrow = item.querySelector('.arrow');
    arrow.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
}

///////////////////////////////////////////////////
// FUNCIONALIDAD DEL HEADER COLOR SCROLL
///////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("main-header"); // Capturamos el header
    const logo = document.getElementById("logo"); // Capturamos el logo

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0 && window.innerWidth > 1025) {
            header.classList.add("scrolled"); // Añadir clase 'scrolled'
            logo.src = "img/logo/logoMain.png"; // Cambiar la imagen del logo
        } else if (window.innerWidth < 1025) {
            logo.src = "img/logo/logoMain.png"; // Cambiar la imagen del logo
        } else {
            header.classList.remove("scrolled"); // Quitar clase 'scrolled'
            logo.src = "img/logo/logoMainB.png"; // Cambiar la imagen del logo
        }
    });
});

///////////////////////////////////////////////////
// FUNCIONALIDAD DEL HEADER MENU HAMBURGUESA
///////////////////////////////////////////////////
// Capturamos los elementos del menú hamburguesa
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Función para mostrar/ocultar el menú
const toggleMenu = () => {
    if (navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu'); // Ocultar el menú
    } else {
        navMenu.classList.add('show-menu'); // Mostrar el menú
    }
};

// Función para cerrar el menú
const closeMenu = () => {
    navMenu.classList.remove('show-menu'); // Ocultar el menú
};

// Añadimos eventos de clic a los botones de abrir/cerrar menú
navToggle.addEventListener('click', toggleMenu);
navClose.addEventListener('click', toggleMenu);

// Cerramos el menú al hacer clic en un enlace del menú
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', closeMenu);
});

///////////////////////////////////////////////////
// Listener para recargar la página cuando cambia el tamaño de la ventana
///////////////////////////////////////////////////
window.addEventListener('resize', function() {
    window.location.reload(); // Recargar la página
});
