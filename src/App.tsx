import { About } from "@/components/About";
import { Automations } from "@/components/Automations";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { WebCreation } from "@/components/WebCreation";
import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-muted/40 border-y">
        <WebCreation />
      </div>
      <div className="bg-gradient-to-b from-background to-muted/40">
        <Automations />
      </div>
      <div className="bg-background">
        <Services />
      </div>
      <div className="bg-muted/40 border-y">
        <Pricing />
      </div>
      <div className="bg-background">
        <FAQ />
      </div>
      <div className="bg-muted/30">
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;
