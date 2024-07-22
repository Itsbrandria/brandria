"use client";
import { AuroraHero } from "@/components/AuroraHero";
import { Clients } from "@/components/landing/clients";
import CTA from "@/components/landing/cta";
import FAQ from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { Process } from "@/components/landing/process";
import { Services } from "@/components/landing/services";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { StarryNight } from "@/components/StarryNight";
import { useLenis } from "lenis/react";

export default function Home() {
  const lenis = useLenis(({ scroll }) => { });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-8 gap-8  py-8 ">
      <Hero />
      <Clients />
      <Services />
      <section className="px-4 w-full">
        <StarryNight>
          <WhyChooseUs />
        </StarryNight>
      </section>
      <CTA />
      <section className="px-4 flex flex-col justify-center items-center">
        <Process />
        <FAQ />
      </section>
      <AuroraHero>
        <h1 className="text-4xl">
          Hello To Everyone Here
        </h1>
      </AuroraHero>
    </main>
  );
}
