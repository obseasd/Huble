function Process() {
  const steps = [
    { n: 1, title: 'Découverte', desc: "On échange pour comprendre votre entreprise, vos objectifs et vos besoins spécifiques." },
    { n: 2, title: 'Proposition', desc: "On vous présente une solution personnalisée avec un devis clair et détaillé." },
    { n: 3, title: 'Création', desc: "On conçoit et développe votre projet en vous tenant informé à chaque étape." },
    { n: 4, title: 'Livraison', desc: "On livre, on forme, et on reste disponible pour le suivi et les ajustements." },
  ];
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Comment on travaille</span>
          <h2 className="section-title">Notre approche</h2>
          <p className="section-subtitle">Un processus simple et transparent, du premier échange à la livraison.</p>
        </div>
        <div className="process-steps">
          {steps.map(s => (
            <div key={s.n} className="process-step">
              <div className="process-number">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Process = Process;
