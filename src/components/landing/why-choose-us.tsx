"use client";
import React, { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import { useLocale, useTranslations } from "next-intl";
import BlurFade from "../magicui/blur-fade";
import {
  BookOpenIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  ThumbsUpIcon,
} from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import clsx from "clsx";
import FlipText from "../magicui/flip-text";
import Scaler from "../Scaler";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";


type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  titleAR: string;
  descriptionAR: string;
};

const featureText: FeatureText[] = [

  {
    icon: <MessagesSquareIcon className="flex-shrink-0 w-5 h-5" />,
    title: "Extensive experience",
    description:
      "We have years of experience working with major brands in Egypt and the Middle East.",
    titleAR: "خبرة واسعة",
    descriptionAR:
      "لدينا سنوات من الخبرة في العمل مع العلامات التجارية الكبرى في مصر والشرق الأوسط.",
  },
  {
    icon: <BookOpenIcon className="flex-shrink-0 w-5 h-5" />,
    title: "Guaranteed results",
    description: "Our results are tangible and increase return on investment.",
    titleAR: "نتائج مضمونة",
    descriptionAR:
      "نتائجنا ملموسة وتزيد من عائد الاستثمار.",
  }, {
    icon: <ThumbsUpIcon className="flex-shrink-0 w-5 h-5" />,
    title: "Professional and creative team",
    description:
      "We have our specialized and creative team ready to turn your ideas into reality or help you create new ideas.",
    titleAR: "فريق محترف وإبداعي",
    descriptionAR:
      "لدينا فريقنا المتخصص والإبداعي جاهز لتحويل أفكارك إلى واقع أو مساعدتك في إنشاء أفكار جديدة.",
  },
];

export const WhyChooseUs = () => {
  const t = useTranslations('WhyChooseUs');
  const locale = useLocale()
  const { theme } = useTheme();

  const [color, setColor] = useState('#ffffff')

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000')
  }, [theme])

  return (
    <>

      <section className="container pt-12 pb-4 2xl:py-24 space-y-8 lg:space-y-14 bg-neutral-100 dark:bg-transparent">

        <div className="h-36 flex justify-center">
          {theme === 'dark' ?
            <>
              <motion.img
                src="/Alien.svg"
                alt="Blue Tree"
                width={90}
                height={90}
                animate={{
                  y: [0, -20, 0], // Animation keyframes
                }}
                transition={{
                  duration: 2, // Duration of each loop
                  repeat: Infinity, // Infinite looping
                  ease: "easeInOut", // Easing function
                }}
              />
            </>
            :
            <>
              <motion.img
                src="/Bee.svg"
                alt="Blue Tree"
                width={130}
                height={130}
                animate={{
                  y: [0, -20, 0], // Animation keyframes
                }}
                transition={{
                  duration: 2, // Duration of each loop
                  repeat: Infinity, // Infinite looping
                  ease: "easeInOut", // Easing function
                }}
              />
            </>
          }
        </div>

        <h2 className="text-3xl  tracking-tighter sm:text-4xl md:text-5xl text-center ">
          <BlurFade>
            {
              locale === 'en' ? (
                <Balancer>
                  <FlipText inView word="Why Choose" />
                  <span className="font-bold italic text-[#e93331] pr-0.5">  Digital Brandria </span>?
                </Balancer>
              ) : (
                <Balancer>
                  لماذا تختار <span className="font-bold italic text-[#e93331] pr-0.5 tracking-normal">ديجيتال براندريا</span>؟
                </Balancer>
              )
            }
          </BlurFade>
        </h2>
        <Scaler>
          <div className="grid lg:grid-cols-2 gap-8 gap-y-12 grid-cols-1">
            {
              featureText.map(
                (f, idx) => (
                  <div key={f.title} className={clsx(
                    "flex flex-col gap-2 justify-center max-w-lg",
                    idx === 2 && "lg:col-span-2 lg:max-w-2xl lg:justify-center lg:mx-auto"
                  )}>
                    <h3 className="text-2xl tracking-tight md:text-3xl text-center font-medium">
                      <Balancer>
                        {locale === "en" ? f.title : f.titleAR}
                      </Balancer>
                    </h3>
                    <Separator className="bg-zinc-200" />
                    <p className="text-pretty text-lg md:text-xl px-2 text-center">
                      <Balancer>
                        {locale === "en" ? f.description : f.descriptionAR}
                      </Balancer>
                    </p>
                  </div>
                )
              )
            }
          </div>
        </Scaler>
      </section>
    </>
  );
};
