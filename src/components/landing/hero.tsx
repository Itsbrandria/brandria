"use client"
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button/button";
import { ShinyTextButton } from "../ui/button/shiny-button";
import { useTranslations } from "next-intl";
export function Hero() {
  const [state, setState] = React.useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/" },
    { title: "Services", path: "/" },
    { title: "Portfolio", path: "/" },
    { title: "Blog", path: "/" },
  ];

  const TopEntities = [
    {
      name: "Arab League",
      logo: "https://dbrandria.com/wp-content/uploads/2023/06/Brandria-Logos-17.svg",
    },
    {
      name: "Sky News",
      logo: "https://dbrandria.com/wp-content/uploads/2023/06/Brandria-Logos-11.svg"
    },
    {
      name: "talabat",
      logo: "https://dbrandria.com/wp-content/uploads/2023/06/Brandria-Logos-09.svg"
    },
    {
      name: "Umraa and Hajj Ministry",
      logo: "https://dbrandria.com/wp-content/uploads/2023/06/Brandria-Logos-01.svg"
    }
  ]

  const t = useTranslations('Hero');


  return (
    <div className="relative w-full flex flex-col">
      <Image
        className="absolute top-0 z-0 -translate-y-1/2"
        src={"https://farmui.vercel.app/bg-back.png"}
        width={1000}
        height={1000}
        alt="back bg"
      />

      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <section className="pt-28 z-10 select-none">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-gray-700 dark:text-gray-400 group font-geist mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              Over 300+ projects finished
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>
            <h2 className="text-4xl md:text-5xl font-geist font-normal tracking-tighter lg:text-5xl text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] !text-neutral-900 dark:!text-neutral-100 !leading-snug">
              {t('title')}
            </h2>
            <p className="dark:text-neutral-200">
              Our Digital Agency Services In Egypt connects you to new markets, clients, and customers and help you reach new horizons.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <ShinyTextButton
                size='lg'
              >
                Start Your Project
              </ShinyTextButton>

            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <Image
              src="https://wordpress-1021214-4677805.cloudwaysapps.com/wp-content/uploads/2024/07/16.png"
              className=" md:rounded-tl-[108px]"
              alt=""
              width={600}
              height={400}
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8">
          <p className="text-center font-displayAlt text-sm text-gray-700 font-semibold">
            Trusted by the Top Entities
          </p>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
            {
              TopEntities.map((entity, idx) => (
                <div key={idx} className="flex items-center justify-center">
                  <Image
                    src={entity.logo}
                    alt={entity.name}
                    width={200}
                    height={200}
                    className="w-36"
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}

