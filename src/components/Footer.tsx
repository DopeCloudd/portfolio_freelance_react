export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-muted/50 to-background border-t"
    >
      <section className="container py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
        <div className="space-y-4">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl tracking-tight"
          >
            VALENTIN LEROUGE
          </a>
          <p className="text-sm text-muted-foreground max-w-xs">
            Développement web, création de sites et automatisations fiables pour
            gagner du temps et booster votre visibilité.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Navigation</h3>
          <nav className="grid gap-2 text-sm">
            <a
              rel="noreferrer noopener"
              href="#creation"
              className="opacity-70 hover:opacity-100"
            >
              Création
            </a>
            <a
              rel="noreferrer noopener"
              href="#automations"
              className="opacity-70 hover:opacity-100"
            >
              Automatisations
            </a>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-70 hover:opacity-100"
            >
              Services
            </a>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-70 hover:opacity-100"
            >
              Tarifs
            </a>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-70 hover:opacity-100"
            >
              FAQ
            </a>
          </nav>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Réseaux</h3>
          <nav className="grid gap-2 text-sm">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-70 hover:opacity-100"
            >
              LinkedIn
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-70 hover:opacity-100"
            >
              Github
            </a>
          </nav>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Légal</h3>
          <nav className="grid gap-2 text-sm">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-70 hover:opacity-100"
            >
              Mentions légales
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-70 hover:opacity-100"
            >
              Politique de confidentialité
            </a>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-70 hover:opacity-100"
            >
              À propos
            </a>
          </nav>
        </div>
      </section>

      <section className="border-t">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-muted-foreground">
            © 2024 Valentin Lerouge. Tous droits réservés.
          </p>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="mailto:contact@valentin-lerouge.fr"
            className="text-primary hover:underline"
          >
            contact@valentin-lerouge.fr
          </a>
        </div>
      </section>
    </footer>
  );
};
