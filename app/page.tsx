import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Clarification } from "@/components/Clarification";
import { ServiceTypes } from "@/components/ServiceTypes";
import { Specialty } from "@/components/Specialty";
import { Process } from "@/components/Process";
import { ForYou } from "@/components/ForYou";
import { Confidence } from "@/components/Confidence";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clarification />
        <ServiceTypes />
        <Specialty />
        <Process />
        <ForYou />
        <Confidence />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
