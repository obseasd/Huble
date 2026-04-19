function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Notre approche' },
    { href: '#about', label: 'À propos' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label="Huble — Accueil">
          <img src="../../assets/huble.png" alt="Huble" height="38"/>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm">Nous contacter</a>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;
