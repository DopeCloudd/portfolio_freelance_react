import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { Statistics } from "@/components/Statistics";
import { Reviews } from "@/components/Reviews";
import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <Services />
      <Portfolio />
      <Cta />
      <Pricing />
      <FAQ />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
