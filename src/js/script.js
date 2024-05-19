///////////////////////////////////
// FUNCIONALIDAD FLECHA SCROLL
//////////////////////////////////
window.addEventListener('scroll', function() {
    
    // Capturamos los elementos a modificar
    let floating_arrow = document.getElementById('floating_arrow');

    // Si la posición de scroll supera cierto umbral, mostramos una flecha flotante
    if ((this.window.scrollY > 500)&&(this.window.scrollY < 2800)){
        floating_arrow.style.display = 'block';
    }
    else{
        floating_arrow.style.display = 'none';
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

///////////////////////////////////////////////////
// FUNCIONALIDAD DEL HEADER COLOR SCROLL
///////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("main-header");
    const logo = document.getElementById("logo");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0 && window.innerWidth > 1025) {
            header.classList.add("scrolled");
            logo.src = "img/logo/logoMain.png";
        }else if (window.innerWidth < 1025) {
            logo.src = "img/logo/logoMain.png";
        } 
        else {
            header.classList.remove("scrolled");
            logo.src = "img/logo/logoMainB.png";
        }
        
    });
});
 

///////////////////////////////////////////////////
// FUNCIONALIDAD DEL HEADER MENU HAMBURGUESA
///////////////////////////////////////////////////
// Show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Toggle Menu
const toggleMenu = () => {
    if (navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    } else {
        navMenu.classList.add('show-menu');
    }
};

// Close Menu
const closeMenu = () => {
    navMenu.classList.remove('show-menu');
};

// Menu show
navToggle.addEventListener('click', toggleMenu);

// Menu hidden
navClose.addEventListener('click', toggleMenu);

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', closeMenu);
});

 
///////////////////////////////////////////////////
// Listener para recargar la página cuando cambia el tamaño de la ventana
///////////////////////////////////////////////////
window.addEventListener('resize', function() {
    window.location.reload();
});