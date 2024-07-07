import { Hero } from "@/components/landing/Hero";
import { Projects } from "@/components/landing/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Hero />
      <Projects />
    </main>
  );
}
