import {
  GitBranch,
  RefreshCcw,
  BarChart3,
  Users,
  Mail,
  Smartphone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: GitBranch,
    title: "Pipeline visual",
    desc: "Arraste e solte negócios entre etapas. Visualize todo o funil de vendas em um único painel intuitivo.",
  },
  {
    icon: RefreshCcw,
    title: "Automação de follow-ups",
    desc: "Nunca perca um follow-up. Configure sequências automáticas de e-mail e lembretes inteligentes.",
  },
  {
    icon: BarChart3,
    title: "Relatórios inteligentes",
    desc: "Dashboards em tempo real com métricas de conversão, previsão de receita e performance do time.",
  },
  {
    icon: Users,
    title: "Gestão de contatos",
    desc: "Histórico completo de interações, tags personalizadas e segmentação avançada de clientes.",
  },
  {
    icon: Mail,
    title: "Integração com e-mail",
    desc: "Conecte Gmail ou Outlook. Rastreie aberturas, cliques e responda direto do CRM.",
  },
  {
    icon: Smartphone,
    title: "App mobile",
    desc: "Acesse seus deals e contatos de qualquer lugar. Disponível para iOS e Android.",
  },
];

const Features = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="funcionalidades" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Tudo que seu time precisa,{" "}
            <span className="gradient-text">em um só lugar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ferramentas poderosas para gerenciar cada etapa do relacionamento com seus clientes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.title}
              className="group border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-xl bg-secondary p-3 text-primary">
                  <f.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
