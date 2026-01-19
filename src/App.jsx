// src/App.jsx
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import SignatureSelection from "./sections/SignatureSelection";
import StoryConcept from "./sections/StoryConcept";
import Craft from "./sections/Craft";
import ProductList from "./sections/ProductList";
import GiftSet from "./sections/GiftSet";
import SectionDivider from "./sections/SectionDivider";
import ProductCategories from "./sections/ProductCategories";
import BrandQuality from "./sections/BrandQuality";
import VoiceTestimonials from "./sections/VoiceTestimonials";
import PhilosophyPackaging from "./sections/PhilosophyPackaging";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import ThanksFooter from "./sections/ThanksFooter";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />                  {/* id="top" */}
        <SignatureSelection />
        <StoryConcept />          {/* id="concept" */}
        <Craft />

        <ProductList />           {/* id="products" */}
        <GiftSet />               {/* id="gift" */}

        <SectionDivider />

        <ProductCategories />
        <BrandQuality />
        <VoiceTestimonials />

        <PhilosophyPackaging />
        <FAQ />
        <Contact />               {/* id="contact" */}
      </main>

      <ThanksFooter />
    </>
  );
}
