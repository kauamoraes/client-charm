import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "O Nexus CRM é difícil de configurar?",
    a: "Não! A maioria dos times configura tudo em menos de 2 minutos. Basta criar a conta, convidar seu time e importar seus contatos. Oferecemos templates prontos para diferentes segmentos.",
  },
  {
    q: "Posso migrar meus dados de outro CRM?",
    a: "Sim, temos importação nativa para os principais CRMs do mercado (Pipedrive, HubSpot, RD Station). Basta exportar um CSV e importar no Nexus em poucos cliques.",
  },
  {
    q: "Existe período de teste gratuito?",
    a: "Sim! Você pode testar o plano Pro completo por 14 dias, sem precisar informar cartão de crédito. Ao final do período, escolha o plano ideal para seu time.",
  },
  {
    q: "O Nexus CRM funciona no celular?",
    a: "Sim, temos aplicativos nativos para iOS e Android, além da versão web responsiva. Seu time pode acessar deals, contatos e tarefas de qualquer lugar.",
  },
  {
    q: "Quais integrações estão disponíveis?",
    a: "Integramos com Gmail, Outlook, Google Calendar, Slack, WhatsApp Business, Zapier e mais de 50 outras ferramentas. Também oferecemos API REST para integrações customizadas.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Plano Starter: suporte por e-mail em até 24h. Plano Pro: chat em tempo real e suporte prioritário. Enterprise: gerente de sucesso dedicado com SLA garantido.",
  },
];

const FAQ = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="faq" className="bg-muted/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o Nexus CRM.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-lg border border-border/50 bg-card px-6"
            >
              <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
