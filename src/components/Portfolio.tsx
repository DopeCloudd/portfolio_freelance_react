import Ltk from "../assets/ltk.png";
import Myprottracker from "../assets/myprottracker.png";

export const Portfolio = () => {
  interface website {
    url: string;
    title: string;
    image?: string;
  }

  const websites: website[] = [
    {
      url: "https://www.myprottracker.com/",
      title: "MyProtTracker",
      image: Myprottracker,
    },
    {
      url: "https://anais-difilippo.fr/",
      title: "Anaïs Di filippo",
      image: Myprottracker,
    },
    {
      url: "https://ltk-couverture.fr/",
      title: "LTK Couverture",
      image: Ltk,
    },
    {
      url: "https://optifroid.fr/",
      title: "Optifroid",
      image: Ltk,
    },
    {
      url: "https://optima-groupe.com/",
      title: "Optima Groupe",
      image: Ltk,
    },
  ];

  return (
    <section id="statistics" className="text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Mes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          projets{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Voici quelques-uns des sites web que j'ai réalisés pour mes clients.
      </p>

      <div className="flex flex-wrap justify-center items-center md:gap-20">
        {websites.map(({ url, title, image }: website) => (
          <div key={title} className="space-y-3 w-[300px]">
            <span data-state="closed">
              <div className="overflow-hidden rounded-md">
                <img
                  alt="Thinking Components"
                  loading="lazy"
                  width="300"
                  height="200"
                  decoding="async"
                  data-nimg="1"
                  className="h-auto w-auto object-cover transition-all hover:scale-105"
                  srcSet={image}
                  src={image}
                />
              </div>
            </span>
            <div className="space-y-1 text-sm">
              <a className="font-medium leading-none" href={url}>
                {title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
