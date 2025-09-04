import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WebCreation = () => {
  return (
    <section id="creation" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Création de {""}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          sites vitrines & plateformes
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-10 text-xl text-muted-foreground">
        Du site vitrine professionnel sous WordPress aux plateformes sur mesure
        en Next.js + TypeScript / Symfony. Pensés pour la performance, le SEO et
        la pérennité.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-muted/50 h-full border shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-left">Site vitrine WordPress</CardTitle>
          </CardHeader>
          <CardContent className="text-left space-y-4">
            <p className="text-muted-foreground">
              Idéal pour présenter votre activité avec un design élégant, un
              back-office simple et des contenus faciles à mettre à jour.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Thème sur mesure</Badge>
              <Badge variant="secondary">Pages rapides</Badge>
              <Badge variant="secondary">SEO technique</Badge>
              <Badge variant="secondary">Formulaires & RGPD</Badge>
              <Badge variant="secondary">Hébergement & maintenance</Badge>
            </div>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Design cohérent avec votre identité</li>
              <li>Architecture claire pour le référencement</li>
              <li>Tableau de bord simple pour vos mises à jour</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/50 h-full border shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-left">
              Plateforme Next.js + TypeScript / Symfony
            </CardTitle>
          </CardHeader>
          <CardContent className="text-left space-y-4">
            <p className="text-muted-foreground">
              Pour des besoins applicatifs: espace client, intégrations API,
              SEO/SSR et scalabilité. Code robuste, typé, et maintenable.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Next.js/SSR</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Symfony/PHP</Badge>
              <Badge variant="secondary">Base de données SQL/NoSQL</Badge>
              <Badge variant="secondary">Auth & Rôles</Badge>
              <Badge variant="secondary">Intégrations API</Badge>
              <Badge variant="secondary">CI/CD</Badge>
            </div>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Performances optimisées (Edge/ISR)</li>
              <li>Architecture modulaire et testable</li>
              <li>Observabilité, logs et monitoring</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <Button
          className="w-full md:w-auto"
          onClick={() =>
            window.open(
              "mailto:contact@valentin-lerouge.fr?subject=Creation%20de%20site"
            )
          }
        >
          Discuter de votre projet
        </Button>
      </div>
    </section>
  );
};

export default WebCreation;
