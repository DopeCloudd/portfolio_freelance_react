export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "6",
      description: "Années d'expérience",
    },
    {
      quantity: "18",
      description: "Projets réalisés",
    },
    {
      quantity: "6",
      description: "Cafés par jour",
    },
    {
      quantity: "100%",
      description: "Satisfaction client",
    },
  ];

  return (
    <section id="statistics" className="bg-muted/50 py-8 sm:py-12">
      <div className="flex flex-wrap justify-center items-center md:gap-20">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
