const footerLinks = [
  {
    title: "Produto",
    links: ["Funcionalidades", "Preços", "Integrações", "Changelog"],
  },
  {
    title: "Empresa",
    links: ["Sobre nós", "Blog", "Carreiras", "Contato"],
  },
  {
    title: "Legal",
    links: ["Privacidade", "Termos de uso", "LGPD"],
  },
];

const Footer = () => (
  <footer className="border-t border-border bg-muted/30 px-6 py-12">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <span className="text-lg font-bold tracking-tight">
            <span className="gradient-text">Nexus</span> CRM
          </span>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            O CRM inteligente para times de vendas que querem crescer com eficiência.
          </p>
        </div>
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 text-sm font-semibold">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nexus CRM. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
