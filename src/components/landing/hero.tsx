import { HeroParallax } from "../hero-parallax";
import MobileHero from "./mb-hero";
import { headers } from 'next/headers';

export function Hero() {
  const userAgent = headers().get('user-agent') || '';
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent);

  return isMobile ? (
    <>
      <MobileHero />
    </>
  ) : (
    <HeroParallax products={products} />
  );
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
