import { Clients } from "@/components/landing/clients";
import { Hero } from "@/components/landing/hero";
import { Projects } from "@/components/landing/projects";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-12">
      <Hero />
      <Projects />
      <Clients />
    </main>
  );
}
