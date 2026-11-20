# K-Beauty E-Commerce Concept - Luna K-Beauty ✨

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

¡Hola! 👋 **Luna K-Beauty** es un concepto de diseño UI y maquetación front-end para una tienda en línea de cuidado de la piel coreano. El proyecto combina una estética moderna tipo *glass-skin* y botánica con una arquitectura CSS/Sass modular, carrito de compras interactivo, notificaciones *toast* y un menú lateral (*drawer*) optimizado para dispositivos móviles.

🔗 **Demo en vivo:** [Ver tienda Luna K-Beauty desplegada](https://e-commerce-ebac-luna-kbeauty.netlify.app/)

## ✨ Características Principales

* **Estética Moderna *Glass-Skin*:** Diseño limpio y responsivo enfocado en productos de skincare coreano (tónicos, sérums, bálsamos y cremas reparadoras) con banner promocional y catálogo visual.
* **Menú Lateral (*Sidebar / Drawer*) Móvil:** Navegación desplegable optimizada para pantallas táctiles con botón de apertura (`menu.png`) y cierre (`cross.png`).
* **Carrito Interactivo y Notificaciones *Toast*:** Gestión visual del carrito de compras (`_cart.scss`) con opción para añadir o eliminar artículos (`delete.png`) y avisos dinámicos en pantalla (`_toast.scss`) controlados desde `js/function.js`.
* **Arquitectura Sass Modular:** Estilos divididos en capas (`base/`, `components/` y `layouts/`) con variables, mixins y funciones compilados a `main.css`.

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico:** Estructura de secciones de comercio electrónico (`index.html`).
* **SASS / CSS3:** Arquitectura escalable con parciales (`_variables.scss`, `_mixins.scss`, `_functions.scss`), Flexbox y CSS Grid.
* **Vanilla JavaScript (ES6+):** Interactividad del menú lateral, carrito de compras y notificaciones *toast* (`js/function.js`).

## 📂 Estructura del Proyecto

```text
e-commerce-V1/
├── img/
│   ├── Logo_png.png
│   ├── balm2.jpeg
│   ├── banner.png
│   ├── blackteaeyepatch.jpeg
│   ├── blackteaserum.jpeg
│   ├── cart.png
│   ├── concentratedeyecream5.jpeg
│   ├── concentratedeyecream6.jpeg
│   ├── cross.png
│   ├── delete.png
│   ├── essence_toner.jpeg
│   ├── facebook.png
│   ├── instagram.png
│   ├── intensiverepaircream.jpeg
│   ├── lowphcleansingwater8.jpeg
│   ├── menu.png
│   ├── mist_toner_100.jpeg
│   ├── mist_toner_200.jpeg
│   ├── nutritioncream.jpeg
│   ├── tik-tok.png
│   └── whatsapp.png
├── js/
│   └── function.js             # Lógica del menú drawer, carrito y notificaciones toast
├── styles/
│   ├── base/
│   │   ├── _base.scss          # Reset y estilos generales
│   │   ├── _functions.scss     # Funciones personalizadas de Sass
│   │   ├── _mixins.scss        # Mixins reutilizables y breakpoints responsivos
│   │   └── _variables.scss     # Paleta de colores, tipografías y espaciados
│   ├── components/
│   │   ├── _buttons.scss       # Estilos de botones
│   │   ├── _cart.scss          # Panel y elementos del carrito de compras
│   │   ├── _inputs.scss        # Campos de entrada
│   │   ├── _sidebar.scss       # Menú lateral deslizable (drawer)
│   │   └── _toast.scss         # Alertas emergentes tipo toast
│   ├── layouts/
│   │   ├── _banner.scss        # Sección de banner promocional
│   │   ├── _footer.scss        # Pie de página y redes sociales
│   │   ├── _header.scss        # Barra de navegación superior
│   │   └── _products.scss      # Cuadrícula del catálogo de productos
│   ├── main.css                # Hoja de estilos compilada
│   ├── main.css.map            # Mapa de fuentes para depuración CSS
│   └── main.scss               # Archivo principal que importa todos los parciales
├── index.html                  # Página principal de la tienda
```

## 🚀 Instalación y Uso

Al ser un proyecto front-end estático con CSS ya compilado, puedes abrirlo directamente sin instalar dependencias:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/ernestzent/e-commerce-V1.git
   cd e-commerce-V1
   ```

2. **Visualiza el proyecto:**
   * Abre `index.html` directamente en tu navegador, **o**
   * Ejecútalo con la extensión **Live Server** de VS Code para recarga automática.

3. **Si deseas editar los archivos Sass (opcional):**
   * Modifica los parciales dentro de `styles/` y compila `styles/main.scss` hacia `styles/main.css` usando **Live Sass Compiler** o el CLI de Sass (`sass --watch styles/main.scss:styles/main.css`).

## 💡 Ejemplos de Uso

* **Navegación Móvil:** Reduce el ancho del navegador o abre las DevTools en vista celular y pulsa el ícono de menú para desplegar el *sidebar* lateral.
* **Interacción con el Carrito y *Toasts*:** Agrega productos de skincare desde la cuadrícula principal para ver las notificaciones *toast* y abre el panel del carrito para revisar o eliminar artículos en tiempo real.

## 🤝 Contribuciones

Las sugerencias de diseño UI/UX y mejoras front-end son bienvenidas:
1. Haz un *Fork* del repositorio.
2. Crea tu rama (`git checkout -b feature/filtro-tipo-piel`).
3. Guarda tus cambios (`git commit -m 'Agrega filtro por tipo de piel en catálogo'`).
4. Sube tu rama (`git push origin feature/filtro-tipo-piel`).
5. Abre un *Pull Request*.
