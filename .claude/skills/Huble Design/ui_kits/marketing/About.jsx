function About() {
  const cards = [
    { icon: 'activity', label: '+150% croissance', angle: 0 },
    { icon: 'users', label: 'Clients satisfaits', angle: 90 },
    { icon: 'bolt', label: 'Rapide & fiable', angle: 180 },
    { icon: 'server', label: 'Livraison express', angle: 270 },
  ];
  const radius = 160;

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-label">Qui sommes-nous</span>
            <h2>Une équipe passionnée par le digital</h2>
            <p><strong>Huble</strong>, c'est une équipe de passionnés du digital basée en France. On croit que la technologie doit <strong>simplifier la vie</strong>, pas la compliquer.</p>
            <p>Notre approche : écouter, comprendre, puis construire des solutions qui font vraiment la différence. <strong>Pas de jargon, pas de superflu</strong> — juste des résultats concrets.</p>

            <div className="about-values">
              <div className="value-item">
                <div className="value-icon"><Icon name="leaf" size={24} strokeWidth={2}/></div>
                <h4>Simplicité</h4>
                <p>Des solutions claires, sans complexité inutile</p>
              </div>
              <div className="value-item">
                <div className="value-icon"><Icon name="bulb" size={24} strokeWidth={2}/></div>
                <h4>Innovation</h4>
                <p>Les dernières technologies au service de vos projets</p>
              </div>
              <div className="value-item">
                <div className="value-icon"><Icon name="activity" size={24} strokeWidth={2}/></div>
                <h4>Résultats</h4>
                <p>Des solutions qui impactent votre business</p>
              </div>
            </div>
          </div>

          <div className="about-visual" aria-hidden="true">
            <div className="about-blob"></div>
            <div className="about-orbit">
              {cards.map(c => {
                const rad = (c.angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                return (
                  <div key={c.angle} className="orbit-card" style={{ left: `calc(50% + ${x}px - 60px)`, top: `calc(50% + ${y}px - 50px)` }}>
                    <Icon name={c.icon} size={22} strokeWidth={1.8} color="var(--mint-darker)"/>
                    <span>{c.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
