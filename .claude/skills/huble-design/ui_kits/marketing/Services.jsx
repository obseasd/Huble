function Services() {
  const items = [
    {
      icon: 'site',
      title: 'Création & amélioration de sites web',
      desc: "Sites vitrines, e-commerce ou sur-mesure. On crée des expériences web performantes, esthétiques et pensées pour convertir vos visiteurs en clients.",
      features: ['Design responsive sur tous les écrans', 'SEO optimisé pour Google', 'Performance et temps de chargement rapide'],
    },
    {
      icon: 'share',
      title: 'Identité réseaux sociaux',
      desc: "On construit votre présence en ligne de A à Z : charte visuelle, stratégie de contenu et templates prêts à publier pour marquer les esprits.",
      features: ['Charte graphique complète', 'Templates personnalisés et réutilisables', 'Stratégie éditoriale et calendrier'],
    },
    {
      icon: 'bolt',
      title: 'Automatisations & IA',
      desc: "On audite vos processus pour identifier les tâches répétitives et mettre en place des automatisations intelligentes. Plus de productivité, moins de friction.",
      features: ['Audit complet de vos processus', 'Chatbots & assistants IA sur-mesure', 'Workflows automatisés et intégrations'],
    },
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Ce qu'on fait</span>
          <h2 className="section-title">Nos services</h2>
          <p className="section-subtitle">Des solutions digitales complètes pour propulser votre entreprise vers le succès.</p>
        </div>
        <div className="services-grid">
          {items.map((it) => (
            <div key={it.icon} className="service-card">
              <div className="service-icon"><Icon name={it.icon} size={28}/></div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <ul className="service-features">
                {it.features.map(f => (
                  <li key={f}><span className="tick"><Icon name="check" size={12} strokeWidth={3}/></span>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
