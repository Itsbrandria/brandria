"use client";
import { Clients } from "@/components/landing/clients";
import CTA from "@/components/landing/cta";
import FAQ from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { Process } from "@/components/landing/process";
import { Services } from "@/components/landing/services";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { useLenis } from "lenis/react";

export default function Home() {
  const lenis = useLenis(({ scroll }) => { });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-8">
      <Hero />
      <Clients />
      <Services />
      <WhyChooseUs />
      <CTA />
      <Process />
      <FAQ />
    </main>
  );
}
