function Contact() {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">Contact</span>
            <h2>Parlons de votre projet</h2>
            <p>Un café virtuel ? On est là pour discuter de vos idées et trouver la solution qui vous correspond.</p>
            <div className="contact-details">
              <a href="mailto:contacthuble@gmail.com" className="contact-detail">
                <span className="contact-detail-icon"><Icon name="mail" size={18} strokeWidth={2} color="#1A1A1A"/></span>
                contacthuble@gmail.com
              </a>
            </div>
          </div>

          {sent ? (
            <div className="contact-form" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--mint-darker)' }}>Message envoyé !</div>
              <p style={{ marginTop: '.5rem', color: 'var(--gray)', fontSize: '.95rem' }}>On vous répond sous 24h ouvrées.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Nom complet</label>
                  <input type="text" required placeholder="Votre nom"/>
                </div>
                <div className="form-group">
                  <label>Entreprise <span className="optional">(facultatif)</span></label>
                  <input type="text" placeholder="Nom de votre entreprise"/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required placeholder="votre@email.com"/>
                </div>
                <div className="form-group">
                  <label>Téléphone <span className="optional">(facultatif)</span></label>
                  <input type="tel" placeholder="06 12 34 56 78"/>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea required placeholder="Décrivez votre projet en quelques mots…"></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">Envoyer le message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
