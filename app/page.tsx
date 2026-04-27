import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Clarification } from "@/components/Clarification";
import { Specialty } from "@/components/Specialty";
import { ServiceTypes } from "@/components/ServiceTypes";
import { Process } from "@/components/Process";
import { ForYou } from "@/components/ForYou";
import { EarlyStage } from "@/components/EarlyStage";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Clarification />
        <Specialty />
        <ServiceTypes />
        <Process />
        <ForYou />
        <EarlyStage />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
