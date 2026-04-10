import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logos = ["TechNova", "Vertix", "BluePeak", "Orbitec", "Solvex", "DataPrime"];

const LogoBar = () => {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="border-y border-border bg-muted/30 px-6 py-12">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Usado por +500 empresas em todo o Brasil
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((name) => (
            <span
              key={name}
              className="text-lg font-bold tracking-tight text-muted-foreground/40 transition-colors hover:text-muted-foreground/70 md:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
