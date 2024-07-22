"use client";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { useTranslations, useLocale } from "next-intl";

export function Clients() {
  const t = useTranslations("Clients");
  const locale = useLocale();
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background  gap-4">
      <Marquee pauseOnHover className="[--duration:40s] ">
        {Array.from({ length: 46 }, (_, i) => i + 10).map((client) => (
          <Image
            key={`client-${client}`}
            src={`https://dbrandria.com/wp-content/uploads/2023/06/Brandria-Logos-${client}.svg`}
            alt={`client-${client}`}
            width={50}
            height={50}
            className="w-32 h-32 object-contain mx-2"
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
