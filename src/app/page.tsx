import Logos from "./components/Logos";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <main>
      <Solutions />
      <Logos />
      <AboutUs />
      <Hero />
      <FAQ />
      <ContactForm
        header="Get in Touch with Spine"
        location="Plovdiv, K. Riacho 95, Bulgaria"
        phone="+359 884 77 77 777"
        email="j.borisov@spine.com"
      />
    </main>
  );
}
