import { ContactProvider } from "./components/contact-context";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Work from "./components/Work";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <ContactProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </ContactProvider>
  );
}
