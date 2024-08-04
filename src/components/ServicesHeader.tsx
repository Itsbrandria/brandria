'use client'
import Balancer from "react-wrap-balancer";
import dynamic from "next/dynamic";
import GradualSpacing from "./magicui/gradual-spacing";
import BlurFade from "./magicui/blur-fade";
import { useLocale, useTranslations } from "next-intl";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function ServicesHeader() {
  const t = useTranslations("OurServices");
  const locale =  useLocale();
  return (
      <div className="flex gap-1">
        <div className="flex-1 text-center">
        {locale === "en" ? 
          (      
            <Balancer>

          <GradualSpacing inView className="font-display text-2xl font-bold text-black dark:text-white sm:text-5xl md:text-4xl md:leading-[5rem]"
            text={t("h")} />
            </Balancer>
          ) :  (
          <h2 className="text-3xl font-bold ltr:tracking-tighter sm:text-4xl md:text-5xl text-center">
            {t("h")}
          </h2>
          )}
            <p className="text-xl text-center lg:w-3/4 mx-auto pt-4">
              <Balancer>
                {t("p")}
              </Balancer>
            </p>
          </div>
          {/* <div className="w-72 h-52 self-center justify-self-start">
            <DotLottieReact
              src="Shapes.json"
              autoplay
              loop
              width={70}
              height={70}
            />
        </div> */}
      </div>
  )
}