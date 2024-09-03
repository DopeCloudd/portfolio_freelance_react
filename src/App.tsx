import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Services } from "@/components/Services";
import { About } from "@/components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
