import { Hero } from "@/components/landing/Hero";
import { ThemeChanger } from "@/lib/theme-changer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Hero />
      <ThemeChanger />
    </main>
  );
}
