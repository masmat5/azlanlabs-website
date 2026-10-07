import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Work from "./components/Work";
import Why from "./components/Why";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <Work />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
