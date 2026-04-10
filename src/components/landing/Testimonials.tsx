import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Head de Vendas",
    company: "TechNova",
    initials: "MC",
    quote:
      "Desde que adotamos o Nexus CRM, nosso time fechou 40% mais negócios. A automação de follow-ups sozinha já pagou o investimento.",
  },
  {
    name: "Rafael Souza",
    role: "CEO",
    company: "Vertix Digital",
    initials: "RS",
    quote:
      "O pipeline visual é game-changer. Conseguimos ver exatamente onde cada deal está e onde precisamos agir. Recomendo demais.",
  },
  {
    name: "Camila Ribeiro",
    role: "Gerente Comercial",
    company: "BluePeak",
    initials: "CR",
    quote:
      "Testamos 4 CRMs antes de encontrar o Nexus. A curva de aprendizado é mínima e o suporte é excelente. Meu time adotou em uma semana.",
  },
];

const Testimonials = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="depoimentos" className="bg-muted/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Quem usa, <span className="gradient-text">recomenda</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que líderes de vendas estão dizendo sobre o Nexus CRM.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-xs font-bold text-primary-foreground">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
