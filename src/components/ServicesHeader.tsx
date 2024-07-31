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
      <div className="flex justify-center items-center">
        <div>
        {locale === "en" ? 
          <>        
          <GradualSpacing className="font-display text-2xl font-bold  text-black dark:text-white sm:text-5xl md:text-4xl md:leading-[5rem]"
            text={t("h")} />
          </> :  <>
          <h2 className="text-3xl font-bold ltr:tracking-tighter sm:text-4xl md:text-5xl text-center">
            {t("h")}
          </h2>
          </>}
          <BlurFade>
            <p className="text-xl text-center lg:w-3/4 mx-auto pt-4">
              <Balancer>
                {t("p")}
              </Balancer>
            </p>
          </BlurFade>
          </div>
          <div>
            <DotLottieReact
              src="Animation1.json"
              autoplay
              loop
              width={50}
              height={50}

            />
          
        </div>
      </div>
  )
}