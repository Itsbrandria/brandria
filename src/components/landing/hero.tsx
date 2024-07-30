import { HeroParallax } from "../hero-parallax";
import MobileHero from "./mb-hero";
import { headers } from 'next/headers';

export function Hero() {
  const userAgent = headers().get('user-agent') || '';
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent);

  return !isMobile ? <HeroParallax products={
    products
  } /> : <MobileHero />;
}
export const products = [
  {
    title: "Mn Elshorfa",
    link: "#",
    thumbnail: "https://dbrandria.com/wp-content/uploads/2023/07/mn-elshorfa.webp",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae at, qui alias quaerat accusamus nemo repellendus, velit eius tenetur eum nulla commodi enim deleniti provident veniam ratione nisi nihil similique."
  },
  {
    title: "Shoryan Mn Dahab",
    link: "#",
    thumbnail: "https://dbrandria.com/wp-content/uploads/2023/07/shoryan-men-dahab.jpg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae at, qui alias quaerat accusamus nemo repellendus, velit eius tenetur eum nulla commodi enim deleniti provident veniam ratione nisi nihil similique."
  },
  {
    title: "Capmas",
    link: "#",
    thumbnail: "https://dbrandria.com/wp-content/uploads/2022/11/capmas.jpg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae at, qui alias quaerat accusamus nemo repellendus, velit eius tenetur eum nulla commodi enim deleniti provident veniam ratione nisi nihil similique."
  },
  {
    title: "El Rehla",
    link: "#",
    thumbnail:
      "https://dbrandria.com/wp-content/uploads/2023/07/elrehla-cover.webp",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae at, qui alias quaerat accusamus nemo repellendus, velit eius tenetur eum nulla commodi enim deleniti provident veniam ratione nisi nihil similique."
  },
  {
    title: "Egyptain LNG",
    link: "#",
    thumbnail: "https://dbrandria.com/wp-content/uploads/2023/07/lng.webp",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae at, qui alias quaerat accusamus nemo repellendus, velit eius tenetur eum nulla commodi enim deleniti provident veniam ratione nisi nihil similique."
  },
  {
    title: "Arab League Documentry",
    link: "#",
    thumbnail:
      "https://dbrandria.com/wp-content/uploads/2023/07/arabl-2048x1118.webp",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae at, qui alias quaerat accusamus nemo repellendus, velit eius tenetur eum nulla commodi enim deleniti provident veniam ratione nisi nihil similique."
  },
];
