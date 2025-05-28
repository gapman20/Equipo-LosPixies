
const insertFooter = (footer) =>{
    footer.innerHTML = `
    
      <div class="footer-content">
        <div class="footer-brand">
          <img src="../../../public/images/PatitaOriental_Negro_Icono.png" alt="" srcset="" id="logo-footer"/>
        </div>
        <div class="footer-legal">
          <p>Términos y condiciones</p>
          <p class="copyright">© Patita Oriental. Todos los derechos reservados.</p>
        </div>
        <div class="logo-content">
            <a href=""><img class="logo-social-media" src="../../../public/images/icons8-whatsapp-50.png" alt="" srcset="" /></a>
            <a href="https://www.instagram.com/patitaoriental/"><img class="logo-social-media" src="../../../public/images/icons8-instagram-50.png" alt="" srcset="" /></a>
            <a href="https://www.facebook.com/PatitaOriental?locale=es_LA"><img class="logo-social-media" src="../../../public/images/icons8-facebook-nuevo-50.png" alt="" srcset="" /></a>
        </div>
      </div>
    
    `;
};

export default insertFooter;