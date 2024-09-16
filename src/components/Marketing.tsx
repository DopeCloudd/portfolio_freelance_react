import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Connected } from "@/components/Connected";

export const Marketing = () => {
  return (
    <section id="marketing" className="py-16 mb-24 sm:mb-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="space-y-4 w-full">
          <Connected />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold ">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Attirez{" "}
            </span>
            grâce à votre présence en ligne
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Donnez vie à votre identité visuelle et attirez de nouveaux clients
            ou fidélisez votre audience.
          </p>
        </div>
      </div>
    </section>
  );
};
