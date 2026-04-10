import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl gradient-primary p-10 text-center md:p-16">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Pronto para vender mais e melhor?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
          Junte-se a mais de 500 empresas que já transformaram sua operação
          comercial com o Nexus CRM. Comece grátis hoje.
        </p>
        <Button
          size="lg"
          className="bg-white text-primary font-semibold shadow-lg hover:bg-white/90"
        >
          Começar grátis agora
          <ArrowRight size={18} />
        </Button>
        <p className="mt-4 text-sm text-white/60">
          14 dias grátis · Sem cartão de crédito
        </p>
      </div>
    </section>
  );
};

export default CTASection;
