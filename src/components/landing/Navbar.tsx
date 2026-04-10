import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const links = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Preços", href: "#precos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">Nexus</span>{" "}
          <span className="text-foreground">CRM</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link to={"/nexus/dashboard"}>
            <Button variant="ghost" size="sm">
              Entrar
            </Button>
          </Link>

          <Link to={"/nexus/dashboard"}>
            <Button size="sm">  Começar grátis</Button>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" size="sm" className="w-full">
              Entrar
            </Button>
            <Button size="sm" className="w-full">
              Começar grátis
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
