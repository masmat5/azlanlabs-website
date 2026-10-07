export default function Header() {
  return (
    <header className="site-header" id="top">
      <a className="brand" href="#top" aria-label="AzlanLabs home">
        <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3 4 29h6l2.2-5h7.6l2.2 5h6L16 3Zm0 12.5 2.6 5.9h-5.2L16 15.5Z" fill="currentColor" />
        </svg>
        <span>Azlan<b>Labs</b></span>
      </a>
      <nav className="nav" aria-label="Primary">
        <a href="#services">Services</a>
        <a href="#process">How I work</a>
        <a href="#work">Work</a>
        <a className="btn btn-small" href="#contact">Start a project</a>
      </nav>
    </header>
  );
}
