"use client";
import { useTranslations } from "next-intl";
import HorizontalScrollCarousel from "../horizontal-scroll";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Card } from "../ui/service-card";
import Balancer from "react-wrap-balancer";
import Scene from "../ThreeD/Scene";
import { useGLTF } from '@react-three/drei'
import { StarryNight } from "../StarryNight";

export function Services() {

  const t = useTranslations("OurServices");

  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <section className="lg:relative w-full overflow-hidden" id='ourS'>
      <div className="flex">
        <div className="flex-1">
          <h2 className="text-3xl font-bold ltr:tracking-tighter sm:text-4xl md:text-5xl text-center">
            {t("h")}
          </h2>
          <p className="text-xl text-center lg:w-3/4 mx-auto pt-4">
            <Balancer>
              {t("p")}
            </Balancer>
          </p>
        </div>
        {/* <div className=" h-96 border border-1 border-gray-500 rounded-3xl align-bottom flex-2">
          <StarryNight>
            <h1 className="text-center text-2xl font-extrabold z-0">They Are Watching</h1>
            <div className="z-40 h-96">
              <Scene/>
            </div>
            
          </StarryNight>

        </div> */}
      </div>
      {
        isMobile ? (<>
          <section>
            <div className="flex flex-col gap-4">
              {[1, 2, 3, 4].map((card, index) => (
                <div key={index}>
                  <Card card={card} />
                </div>
              ))}
            </div>
          </section>
        </>) : (<HorizontalScrollCarousel />)
      }
    </section >

  )
}