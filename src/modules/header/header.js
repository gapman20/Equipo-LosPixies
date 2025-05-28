const insertHeader = (headerElement) => {
  headerElement.classList.add("patita-header");
  headerElement.innerHTML = `
    <div class="header-container">
      <!-- Logo a la izquierda -->
      <a href="/index.html" class="logo">
        <img src="/public/images/PatitaOriental_Negro_Icono.png" alt="Logo Patita Oriental">
      </a>

      <!-- Menú al centro -->
      <nav>
        <ul class="navegacion">
          <li><a href="#">Menú</a></li>
          <li><a href="#">Menú Temático</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
        </ul>
      </nav>

      <!-- Iconos a la derecha -->
      <div class="iconos">
        <a href="#"><img src="/public/images/Perfil.jpg" alt="Perfil"></a>
        <a href="#"><img src="/public/images/Favoritos.jpg" alt="Favoritos"></a>
        <a href="#"><img src="/public/images/Carrito.jpg" alt="Carrito"></a>
      </div>
    </div>
  `;
};

export default insertHeader;

