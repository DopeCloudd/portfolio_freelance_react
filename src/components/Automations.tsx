import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UseCaseProps {
  title: string;
  description: string;
  highlights: string[];
}

const useCases: UseCaseProps[] = [
  {
    title: "Scraping e-commerce",
    description:
      "Collecte de données produits (prix, stocks, avis) pour veilles concurrentielles et dashboards.",
    highlights: ["Playwright/Puppeteer", "Anti-bot", "Exports CSV/Google Sheets"],
  },
  {
    title: "Automatisation CRM",
    description:
      "Enrichissement de leads, création automatique de contacts et synchronisation multi-outils.",
    highlights: ["HubSpot/Pipedrive", "Airtable/Notion", "Make/Zapier/Custom API"],
  },
  {
    title: "Reporting & monitoring",
    description:
      "Rapports périodiques, alertes email/Slack, suivi d'indicateurs et anomalie detection.",
    highlights: ["Cron/AWS Lambda", "Slack/Email", "PDF/CSV/BI"],
  },
  {
    title: "RPA & back-office",
    description:
      "Automatisation de tâches répétitives (imports, nettoyages, validations) avec traçabilité.",
    highlights: ["Playwright/Selenium", "ETL léger", "Logs & retry"],
  },
];

export const Automations = () => {
  return (
    <section id="automations" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Automatisations {""}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          & Scraping
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Je conçois des robots fiables pour collecter des données, alimenter vos outils et
        supprimer les tâches répétitives. Résultat : gain de temps, qualité et visibilité.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <Badge variant="secondary">Playwright</Badge>
        <Badge variant="secondary">Puppeteer</Badge>
        <Badge variant="secondary">Python/Node.js</Badge>
        <Badge variant="secondary">Airtable</Badge>
        <Badge variant="secondary">Notion</Badge>
        <Badge variant="secondary">Make/Zapier</Badge>
        <Badge variant="secondary">AWS Lambda/Cron</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {useCases.map(({ title, description, highlights }) => (
          <Card key={title} className="bg-muted/50 h-full border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <p className="text-muted-foreground">{description}</p>
              <div className="flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <Badge key={h} variant="outline">
                    {h}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-left">Processus d'intervention</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="grid gap-3 list-decimal list-inside text-left text-muted-foreground">
              <li>Atelier express: cible, sources de données, outputs attendus.</li>
              <li>Prototype rapide et test anti-bot sur vos cas réels.</li>
              <li>Industrialisation: hébergement, planification, logs et alertes.</li>
              <li>Handover: doc courte, accès, et petit guide d'exploitation.</li>
            </ol>
          </CardContent>
        </Card>
        <Card className="bg-muted/50 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-left">Résultats typiques</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2 text-left text-muted-foreground">
              <li>×5 à ×20 de gain de temps</li>
              <li>Données consolidées et fiables</li>
              <li>Alertes proactives sur anomalies</li>
              <li>Intégration fluide avec vos outils</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <Button
          className="w-full md:w-auto"
          onClick={() => window.open("mailto:contact@valentin-lerouge.fr?subject=Automatisations%20%26%20Scraping")}
        >
          Demander une démo / audit gratuit
        </Button>
      </div>
    </section>
  );
};

export default Automations;
