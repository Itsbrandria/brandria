import { Clients } from "@/components/landing/clients";
import CTA from "@/components/landing/cta";
import FAQ from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import MobileHero from "@/components/landing/mb-hero";
import { Process } from "@/components/landing/process";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { StarryNight } from "@/components/StarryNight";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";
// import { useLenis } from "lenis/react";
import dynamic from "next/dynamic";

const Services = dynamic(() => import('@/components/landing/services').then((mod) => mod.Services), { ssr: false });

export default function Home() {
  // const lenis = useLenis(({ scroll }) => { });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-8 gap-8  py-8 lg:px-0">
      <Hero />
      <Clients />
      <Services />
      <section className="w-full">
        <StarryNight>
          <WhyChooseUs />
        </StarryNight>
      </section>
      <CTA />
      <section className="flex flex-col justify-center items-center gap-14 ">
        <Process />
        <StarryNight>
          <FAQ />
        </StarryNight>
        
      </section>
    </main>
  );
}
