function FAQ() {
  const items = [
    { q: "Quels types de sites web créez-vous ?", a: "Sites vitrines, landing pages, e-commerce, applications web… On s'adapte à votre besoin, qu'il soit simple ou complexe. Chaque site est pensé sur-mesure pour refléter votre identité et atteindre vos objectifs." },
    { q: "Combien coûte un projet avec Huble ?", a: "Chaque projet est unique. On propose un devis gratuit et personnalisé après un premier échange pour bien comprendre vos objectifs. Pas de surprise, tout est transparent dès le départ." },
    { q: "Quels sont vos délais de réalisation ?", a: "En général, entre 2 et 6 semaines selon la complexité du projet. On vous tient informé à chaque étape et on s'assure de respecter les deadlines fixées ensemble." },
    { q: "C'est quoi exactement vos automatisations ?", a: "On analyse vos processus quotidiens pour repérer les tâches répétitives, puis on met en place des outils (IA, workflows, intégrations) qui les font à votre place. Résultat : vous gagnez du temps et vous vous concentrez sur ce qui compte vraiment." },
    { q: "Comment se passe la collaboration ?", a: "Tout commence par un appel découverte gratuit. Ensuite : brief, proposition, création, retours, livraison. Simple et transparent." },
    { q: "Vous travaillez avec des entreprises de quelle taille ?", a: "TPE, PME, freelances, startups… On accompagne toute structure qui veut se digitaliser intelligemment." },
  ];
  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="section-subtitle">Tout ce que vous devez savoir avant de travailler avec nous.</p>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <div key={i} className={'faq-item' + (open === i ? ' active' : '')}>
              <button className="faq-question" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                {it.q}<span className="faq-icon" aria-hidden="true"></span>
              </button>
              <div className="faq-answer"><p>{it.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
