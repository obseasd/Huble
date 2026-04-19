function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
      </div>

      <div className="hero-shape" style={{ width: 120, height: 120, top: '15%', right: '12%', borderRadius: 32, transform: 'rotate(15deg)', animation: 'glassFloat1 8s ease-in-out infinite' }} aria-hidden="true" />
      <div className="hero-shape" style={{ width: 80, height: 80, bottom: '20%', left: '8%', borderRadius: '50%', animation: 'glassFloat2 10s ease-in-out infinite' }} aria-hidden="true" />
      <div className="hero-shape" style={{ width: 60, height: 60, top: '30%', left: '15%', borderRadius: 16, transform: 'rotate(-20deg)', animation: 'glassFloat3 7s ease-in-out infinite' }} aria-hidden="true" />
      <div className="hero-shape" style={{ width: 100, height: 100, bottom: '15%', right: '18%', borderRadius: '50%', background: 'rgba(162,219,182,0.15)', animation: 'glassFloat1 9s ease-in-out infinite reverse' }} aria-hidden="true" />
      <div className="hero-shape" style={{ width: 45, height: 45, top: '50%', right: '30%', borderRadius: 12, transform: 'rotate(45deg)', animation: 'glassFloat2 6s ease-in-out infinite' }} aria-hidden="true" />

      <div className="hero-content">
        <h1 className="hero-title">On simplifie. Vous brillez.</h1>
        <p className="hero-subtitle">Agence web française spécialisée en création digitale, identité sur les réseaux sociaux et automatisations intelligentes.</p>
        <div className="hero-ctas">
          <a href="#services" className="btn btn-primary">Découvrir nos services</a>
          <a href="#contact" className="btn btn-secondary">Nous contacter</a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <Icon name="chevrons-down" />
      </div>
    </section>
  );
}
window.Hero = Hero;
