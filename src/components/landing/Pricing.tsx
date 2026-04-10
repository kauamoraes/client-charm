import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Starter",
    price: "R$ 97",
    desc: "Para times iniciando com CRM",
    popular: false,
    features: [
      "Até 5 usuários",
      "1.000 contatos",
      "Pipeline básico",
      "Relatórios essenciais",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Pro",
    price: "R$ 197",
    desc: "Para times em crescimento acelerado",
    popular: true,
    features: [
      "Até 25 usuários",
      "Contatos ilimitados",
      "Automação de follow-ups",
      "Relatórios avançados",
      "Integração com e-mail",
      "API de integração",
      "Suporte prioritário",
    ],
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    desc: "Para operações de grande escala",
    popular: false,
    features: [
      "Usuários ilimitados",
      "Contatos ilimitados",
      "Automação com IA",
      "SSO & segurança avançada",
      "Gerente de sucesso dedicado",
      "SLA garantido",
      "Onboarding personalizado",
    ],
  },
];

const Pricing = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="precos" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Planos que <span className="gradient-text">cabem no seu crescimento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece grátis por 14 dias. Sem surpresas, sem contratos longos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col border-border/50 ${
                plan.popular
                  ? "scale-[1.02] border-primary/40 shadow-xl shadow-primary/10"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  Mais popular
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.desc}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.price.startsWith("R$") && (
                    <span className="text-muted-foreground">/mês</span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="flex flex-1 flex-col">
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-semibold ${
                    plan.popular
                      ? "gradient-primary border-0 shadow-lg shadow-primary/25 hover:opacity-90"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === "Sob consulta" ? "Falar com vendas" : "Começar grátis"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
