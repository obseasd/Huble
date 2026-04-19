function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo" aria-label="Huble — Accueil">
              <img src="../../assets/logo-huble.svg" alt="Huble" width="130" height="44"/>
            </a>
            <p>Agence web française spécialisée en création digitale, identité sociale et automatisations intelligentes.</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <div className="footer-col-links">
              <a href="#services" className="footer-link">Services</a>
              <a href="#process" className="footer-link">Notre approche</a>
              <a href="#about" className="footer-link">À propos</a>
              <a href="#faq" className="footer-link">FAQ</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-col-links">
              <a href="mailto:contacthuble@gmail.com" className="footer-link">contacthuble@gmail.com</a>
              <a href="#contact" className="footer-link">Formulaire de contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom"><p>© 2026 Huble. Tous droits réservés.</p></div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
