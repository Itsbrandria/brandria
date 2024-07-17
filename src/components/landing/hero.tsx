"use client";
import React from "react";
import { HeroParallax } from "../hero-parallax";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileHero from "./mb-hero";

export function Hero() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  return isMobile ? (
    <>
      <MobileHero />
    </>
  ) : (<HeroParallax products={products} />);
}
export const products = [
  {
    title: "Mn Elshorfa",
    link: "#",
    thumbnail:
      "https://dbrandria.com/wp-content/uploads/2023/07/mn-elshorfa.webp",
  },
  {
    title: "Shoryan Mn Dahab",
    link: "#",
    thumbnail:
      "https://dbrandria.com/wp-content/uploads/2023/07/shoryan-men-dahab.jpg",
  },
  {
    title: "Capmas",
    link: "#",
    thumbnail: "https://dbrandria.com/wp-content/uploads/2022/11/capmas.jpg",
  },
  {
    title: "El Rehla",
    link: "#",
    thumbnail:
      "https://dbrandria.com/wp-content/uploads/2023/07/elrehla-cover.webp",
  },
  {
    title: "Egyptain LNG",
    link: "#",
    thumbnail: "https://dbrandria.com/wp-content/uploads/2023/07/lng.webp",
  },
  {
    title: "Arab League Documentry",
    link: "#",
    thumbnail:
      "https://dbrandria.com/wp-content/uploads/2023/07/arabl-2048x1118.webp",
  },
];
