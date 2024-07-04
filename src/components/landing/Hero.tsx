"use client"
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button/button";
import { ShinyTextButton } from "../ui/button/shiny-button";
export function Hero() {
  const [state, setState] = React.useState(false);

  const navigation = [
    { title: "Home", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },
    { title: "Services", path: "javascript:void(0)" },
    { title: "Portfolio", path: "javascript:void(0)" },
    { title: "Blog", path: "javascript:void(0)" },
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
      <nav className="relative items-center pt-5 px-4 mx-auto w-full sm:px-8 lg:flex md:space-x-6">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src="https://dbrandria.com/wp-content/uploads/2023/08/brandria-logo.svg"
              width={120}
              height={50}
              alt="FarmUI logo"
              className="w-48"
            />
          </Link>
          <button
            className="text-gray-500 outline-none md:hidden"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${state
            ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"
            : "hidden"
            }`}
        >
          <li className="flex flex-col justify-center">
            <ul className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
              {navigation.map((item, idx) => (
                <li className="text-gray-700 dark:text-gray-400 hover:text-indigo-600" key={idx}>
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </li>
          <li className="order-2 py-5 md:py-0">
            <Button variant='gooeyLeft'>
              Start Your Project
            </Button>
          </li>
        </ul>
      </nav>
      <section className="py-28 z-10 select-none">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-gray-700 dark:text-gray-400 group font-geist mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              Over 300+ projects finished
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>
            <h2 className="text-4xl md:text-5xl font-geist font-normal tracking-tighter lg:text-5xl text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] !text-neutral-900 dark:text-neutral-100 !leading-snug">
              Leading Digital Agency In Egypt
            </h2>
            <p className="font-geist">
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
            <img
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

