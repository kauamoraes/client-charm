import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-32 md:pt-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Novo: Automação com IA integrada
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Transforme seu time de vendas com o{" "}
            <span className="gradient-text">CRM que trabalha por você</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Gerencie pipeline, automatize follow-ups e feche mais negócios.
            O Nexus CRM foi criado para times de vendas de 5 a 50 pessoas
            que querem crescer sem perder o controle.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gradient-primary border-0 text-base font-semibold shadow-lg shadow-primary/25 hover:opacity-90">
              Começar grátis
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="text-base font-semibold">
              <Play size={18} />
              Ver demonstração
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Sem cartão de crédito · Setup em 2 minutos · Cancele quando quiser
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/10">
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/60" />
              <span className="h-3 w-3 rounded-full bg-green-400/60" />
              <span className="ml-4 text-xs text-muted-foreground">app.nexuscrm.com.br</span>
            </div>
            <div className="gradient-primary p-8 md:p-16">
              <div className="grid grid-cols-3 gap-4">
                {["Leads", "Em negociação", "Fechados"].map((label) => (
                  <div key={label} className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-xs font-medium text-white/70">{label}</p>
                    <p className="mt-1 text-2xl font-bold text-white">
                      {label === "Leads" ? "142" : label === "Em negociação" ? "38" : "27"}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {[85, 60, 40].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-white/40" style={{ width: `${w}%` }} />
                    </div>
                    <span className="text-xs font-medium text-white/70">{w}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
