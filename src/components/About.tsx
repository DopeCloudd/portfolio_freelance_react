import portrait from "@/assets/file.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Handshake, Shield, Clock } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        {/* Colonne texte */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            À propos —
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}proche de vos enjeux
            </span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Je conçois des sites et des automatisations qui vous ressemblent,
            en partant de votre réalité terrain. Mon objectif: transformer vos
            idées en résultats concrets, avec clarté, transparence et un vrai
            sens du service.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="flex items-start gap-3">
              <Handshake className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Compréhension avant solution</p>
                <p className="text-sm text-muted-foreground">
                  On cadre ensemble vos besoins et priorités pour livrer juste ce qu’il faut, au bon rythme.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Transparence et fiabilité</p>
                <p className="text-sm text-muted-foreground">
                  Devis clair, jalons visibles, documentation courte et maintenable. Vous gardez la main.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Réactivité et accompagnement</p>
                <p className="text-sm text-muted-foreground">
                  Des retours rapides, des itérations courtes et un support après mise en ligne.
                </p>
              </div>
            </div>
          </div>

          <Card className="mt-8 bg-muted/50 border shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Méthode de travail</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside grid gap-2 text-sm text-muted-foreground">
                <li>Entretien express: objectifs, contexte, contraintes.</li>
                <li>Proposition claire: périmètre, délais, budget.</li>
                <li>Itérations courtes: retours fréquents et démos.</li>
                <li>Livraison + transfert: doc concise et passation.</li>
              </ol>
            </CardContent>
          </Card>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Pédagogie</Badge>
            <Badge variant="secondary">Qualité</Badge>
            <Badge variant="secondary">Respect des délais</Badge>
          </div>

          <div className="mt-8">
            <Button
              className="w-full md:w-auto"
              onClick={() => window.open("mailto:contact@valentin-lerouge.fr?subject=Echange%20projet")}
            >
              Discuter de votre projet
            </Button>
          </div>
        </div>

        {/* Colonne image + engagements */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
          <Card className="relative bg-background/80 border shadow-sm overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col items-center text-center gap-4">
                <img
                  src={portrait}
                  alt="Portrait"
                  className="w-40 h-40 rounded-xl object-cover border"
                />
                <div>
                  <p className="font-semibold">Valentin Lerouge</p>
                  <p className="text-sm text-muted-foreground">Développeur web & automatisations</p>
                </div>

                <div className="w-full mt-4 grid gap-3 text-left">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-sm">Devis et délais expliqués simplement</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-sm">Pas de jargon: on parle objectifs</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-sm">Accompagnement après la mise en ligne</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
