"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "./ui/button/button";
import { useTranslations, useLocale } from "next-intl";
import { Dialog, DialogContent, DialogTrigger, DialogOverlay } from "./ui/dialog";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  }[];
}) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const thirdRow = products.slice(6, 9);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 300], [0, 300]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 300]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.1, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig,
  );
  return (
    <section
      ref={ref}
      className="h-[210dvh] 2xl:h-fit overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] -pt-8 w-full">
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>


      </motion.div>
    </section>
  );
};

export const Header = () => {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <div
      className="max-w-7xl 2xl:w-screen relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 flex flex-col gap-4 z-40"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="text-2xl md:text-7xl font-bold  !leading-snug max-w-4xl !line-clamp-2">
        {t("title")}
      </motion.h1>
      <p className="max-w-2xl text-lg md:text-xl dark:text-neutral-200 !leading-loose">
        <Balancer>
          {t("description")}
        </Balancer>
      </p>
      <div className="flex items-center gap-2 relative z-40">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Button
            size="lg"
            className="text-lg font-bold shadow-[0_4px_14px_0_rgb(255,0,0,39%)] hover:shadow-[0_6px_20px_rgba(255,0,0,23%)] hover:bg-[rgba(255,0,0,0.9)] bg-red-600 rounded-md text-white  transition duration-200 ease-linear"
          >
            {t("cta")}
          </Button>
        </motion.div>
        <a href="#ourS"><Button
          size="lg"
          variant="outline"
          className="dark:text-neutral-200 font-bold text-lg">
          {t("services")}
        </Button></a>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <motion.div
          style={{
            x: translate,
          }}
          whileHover={{
            y: -20,
          }}
          key={product.title}
          className="group/product h-96 w-[20rem] relative flex-shrink-0"
        >
          <Link
            href={product.link}
            className="block group-hover/product:shadow-2xl "
          >
            <Image
              src={product.thumbnail}
              height="800"
              width="800"
              className="object-cover absolute h-full w-full inset-0 aspect-square"
              alt={product.title}
            />
          </Link>
          <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black"></div>
          <div className="absolute flex flex-col gap-2 bottom-4 px-2">
            <h2 className=" opacity-0 group-hover/product:opacity-100 text-white text-2xl font-bold">
              {product.title}
            </h2>

          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent style={{ backgroundImage: `url(${product.thumbnail})` }}>
        <div style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
          {product.title}
        </div>
        <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
          {product.description}
        </p>
        <Button>
          Go To Project
        </Button>
      </DialogContent>
    </Dialog>
  );
};
