"use client";
import { Clients } from "@/components/landing/clients";
import { Hero } from "@/components/landing/hero";
import { Projects } from "@/components/landing/projects";
import { Services } from "@/components/landing/services";
import { useLenis } from "lenis/react";



export default function Home() {
  useLenis();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-14">
      <Hero />
      <Projects />
      <Clients />
      <Services />
    </main>
  );
}
