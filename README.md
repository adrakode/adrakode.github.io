## Manual de Usuario para el Sitio Web AdraKode

### Índice

1. [Introducción](#introducción)
2. [Estructura del Código](#estructura-del-código)
3. [Componentes Principales](#componentes-principales)
    - [Header](#header)
    - [Hero](#hero)
    - [Sección de Juegos](#sección-de-juegos)
    - [Sección de Productos](#sección-de-productos)
    - [Sección de Personajes](#sección-de-personajes)
    - [Sección Quiénes Somos](#sección-quiénes-somos)
    - [Footer](#footer)
4. [CSS y Estilos](#css-y-estilos)
5. [JavaScript y Funcionalidades](#javascript-y-funcionalidades)
6. [Media Queries y Responsividad](#media-queries-y-responsividad)

### Introducción

Este manual tiene como objetivo guiarte a través de la estructura y funcionalidad del sitio web AdraKode. El sitio está diseñado para ofrecer una experiencia de usuario atractiva y funcional, con varias secciones que muestran juegos, planes de suscripción, personajes, y más.

### Estructura del Código

El código HTML está estructurado de manera organizada con comentarios que indican las diferentes secciones del sitio web. Cada sección está claramente delineada y es fácilmente identificable.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Metadatos y enlaces a hojas de estilo y fuentes -->
</head>
<body>
    <!-- Header -->
    <!-- Hero -->
    <!-- Sección de Juegos -->
    <!-- Sección de Productos -->
    <!-- Sección de Personajes -->
    <!-- Sección Quiénes Somos -->
    <!-- Footer -->
    <script src="js/script.js"></script>
</body>
</html>
```

### Componentes Principales
### Header

El header contiene el menú de navegación principal, incluyendo enlaces a diferentes secciones del sitio web y un botón de login.

```html
<header class="main-header" id="main-header">
    <nav class="main-nav container-header">
        <a href="#" class="main-nav__logo"><img src="img/logo/logoMainB.png" alt="Logo" id="logo"></a>
        <div class="main-nav__menu" id="nav-menu">
            <ul class="main-nav__list">
                <li class="main-nav__item"><a href="#inicio" class="main-nav__link">Inicio</a></li>
                <li class="main-nav__item"><a href="#nuestros_juegos" class="main-nav__link">Juegos</a></li>
                <li class="main-nav__item"><a href="#productos" class="main-nav__link">Planes</a></li>
                <li class="main-nav__item"><a href="#personajes_menu" class="main-nav__link">Personajes</a></li>
                <li class="main-nav__item"><a href="#quienes_somos" class="main-nav__link">Quienes Somos</a></li>
            </ul>
            <div class="main-nav__close" id="nav-close"><i class="ri-close-line"></i></div>
        </div>
        <div class="main-nav__actions">
            <a href="clientes/login.html"><i class="ri-user-line main-nav__login" id="login-btn"></i></a>
            <div class="main-nav__toggle" id="nav-toggle"><i class="ri-menu-line"></i></div>
        </div>
    </nav>
</header>
```

### Hero

La sección hero es una introducción visual al sitio web, con un mensaje de bienvenida y botones para ver más información o iniciar sesión.

```html

<section class="hero" id="inicio">
    <div class="hero-content">
        <h1 class="max-width">Explora, Conquista y Alcanza tu Cima</h1>
        <p class="max-width">
            Sumérgete en un mundo lleno de posibilidades y peligros. Inspirado en Elden Ring, Dark Souls y más, AdraKode te desafía a descubrir tu verdadero destino.
        </p>
        <div class="hero-buttons">
            <button class="hero-button primary"><a href="#quienes_somos">Ver más</a></button>
            <button class="hero-button secondary">
                <a href="clientes/login.html">Iniciar sesión<span class="arrow">→</span></a>
            </button>
        </div>
    </div>
</section>
```

### Sección de Juegos

Esta sección muestra una selección de juegos disponibles en la plataforma AdraKode.

```html

<div class="content-box" id="nuestros_juegos">
    <h1 class="title col_black">NUESTROS JUEGOS</h1>
    <p class="centered_text">Explora nuestra colección cuidadosamente seleccionada y descubre tu próximo juego favorito en Adrakode</p>
    <div class="containerflip">
        <div class="card">
            <div class="face front">
                <img src="img/juegos/juego1.png" alt="">
                <h3>Eclipse of Eldoria</h3>
            </div>
            <div class="face back">
                <h3>Eclipse of Eldoria</h3>
                <p>"Eclipse of Eldoria" te lleva a un mundo de magia y misterio...</p>
                <div class="card_link"><a href="#">Más información</a></div>
            </div>
        </div>
        <!-- Más tarjetas de juegos -->
    </div>
</div>

```

### Sección de Productos

Aquí se presentan los diferentes planes de suscripción disponibles para los usuarios.

```html

<div class="content-box personajes" id="productos">
    <h1 class="title col_black">PRODUCTOS</h1>
    <p class="centered_text">Accede a todos nuestros títulos RPG por suscripción...</p>
    <div class="planes">
        <div class="plan">
            <h3>Plan gratuito</h3>
            <h1>0€/mes</h1>
            <span class="mod_button btn_black"><a href="clientes/login.html">Empieza gratis</a></span>
            <ul>
                <li>Acceso a un juego en modo offline</li>
                <li>Actualizaciones regulares del juego</li>
                <!-- Más características -->
            </ul>
        </div>
        <!-- Más planes -->
    </div>
</div>

```

### Sección de Personajes

Esta sección destaca a los personajes clave en los juegos de AdraKode.

```html

<div class="content-box personajes" id="personajes_menu">
    <h1 class="title col_black">DESCRUBRE LOS PERSONAJES</h1>
    <p class="centered_text">Desde valientes héroes hasta astutos villanos...</p>
    <div class="containerflip">
        <div class="card">
            <div class="face front">
                <img src="img/personajes/personaje1.jpg" alt="">
                <h3>Ryder Swiftwind</h3>
            </div>
            <div class="face back">
                <h3>Ryder Swiftwind</h3>
                <p>Ryder Swiftwind es un audaz y carismático aventurero...</p>
            </div>
        </div>
        <!-- Más tarjetas de personajes -->
    </div>
</div>

```

### Sección Quiénes Somos

Una sección que describe la historia, misión y compromiso de AdraKode.

```html

<div class="content-box" id="quienes_somos">
    <h1 class="title col_black">QUIENES SOMOS</h1>
    <div class="accordion">
        <div class="accordion-item active">
            <div class="accordion-header">
                <div class="icon" style="background-image: url('icon/desplazarse.png');"></div>
                <h4>NUESTRA HISTORIA</h4>
                <div class="arrow"></div>
            </div>
            <div class="accordion-content">
                <p>En AdraKode, nuestra pasión es crear experiencias de juego inolvidables...</p>
            </div>
        </div>
        <!-- Más items del acordeón -->
    </div>
</div>

```

### Footer

El footer proporciona enlaces adicionales y detalles sobre la empresa.

```html

<footer class="footer">
    <div class="footer-content">
        <div class="logo"><img src="img/logo/logoMainB.png" alt="Adrakode Logo"></div>
        <div class="about-us">
            <h2>Sobre nosotros</h2>
            <p>En Adrakode, somos apasionados por los videojuegos...</p>
        </div>
        <div class="social">
            <h2>Síguenos</h2>
            <div class="social-icons">
                <a href="#"><img src="icon/facebook-f.svg" alt="Facebook"></a>
                <a href="#"><img src="icon/instagram.svg" alt="Instagram"></a>
                <a href="#"><img src="icon/x-twitter.svg" alt="Twitter"></a>
                <a href="#"><img src="icon/youtube.svg" alt="YouTube"></a>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>&copy; 2024 <strong>AdraKode</strong> - Todos los Derechos Reservados.</p>
    </div>
</footer>

```

### CSS y Estilos

El archivo CSS define el estilo visual del sitio web. A continuación, se presentan algunos de los estilos más relevantes.

```css
/* Reset y estilo base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth; /* Al hacer scroll, tenga animación */
    transition: 1.5s ease; /* Transiciones suaves */
}

/* ...otros estilos... */

```

### JavaScript y Funcionalidades

El archivo JavaScript (script.js) añade funcionalidades interactivas al sitio web, tales como el acordeón, el menú de navegación, y el cambio de color del header al hacer scroll.

```js
///////////////////////////////////
// FUNCIONALIDAD FLECHA SCROLL
//////////////////////////////////
window.addEventListener('scroll', function() {
    let floating_arrow = document.getElementById('floating_arrow');

    if ((this.window.scrollY > 500) && (this.window.scrollY < 2800)) {
        floating_arrow.style.display = 'block'; // Mostrar la flecha flotante
    } else {
        floating_arrow.style.display = 'none'; // Ocultar la flecha flotante
    }
});
```

### Media Queries y Responsividad

El archivo CSS incluye media queries para asegurar que el sitio web sea responsive y se vea bien en diferentes tamaños de pantalla.

```css

/* Dispositivos pantallas grandes */
@media screen and (min-width: 1025px) {
    /* Estilos específicos para pantallas grandes */
}

/* Dispositivos tablets */
@media screen and (max-width: 1025px) {
    .content-box {
        width: 70%;
    }

    #toggle-btn {
        display: block;
        border: 0px;
        background-color: transparent;
        width: 30px;
        position: fixed;
        z-index: 200000;
        margin: 10px;
        top: 100;
        left: 100;
    }
}

/* Responsive Login & Register */
@media (max-width: 768px) {
    .login_logo {
        width: 70px;
        height: auto;
    }
}

/* Dispositivos móviles */
@media screen and (max-width: 576px) {
    .content-box {
        width: 90%;
    }
}

```