import { HeroCards } from "@/components/HeroCards";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Développeur {""}
            <span className="inline bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text">
              web
            </span>{" "}
            freelance
          </h1>{" "}
          sur {""}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text">
              Montpellier
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Sites, applications et automatisations sur mesure. Je conçois aussi
          des robots de scraping et des intégrations pour éliminer les tâches
          répétitives et vous donner de la visibilité sur vos données.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button
            className="w-full md:w-1/3"
            onClick={() => (window.location.hash = "#automations")}
          >
            Automatisations
          </Button>
          <Button
            className="w-full md:w-1/3"
            onClick={() => (window.location.hash = "#creation")}
          >
            Site web
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow-bg"></div>
    </section>
  );
};
