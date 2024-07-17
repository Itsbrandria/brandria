import React from "react";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Coins } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import BlurFade from "../magicui/blur-fade";
import {
  BookOpenIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  ThumbsUpIcon,
} from "lucide-react";


type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  titleAR: string;
  descriptionAR: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Guaranteed results",
    description: "Our results are tangible and increase return on investment.",
    titleAR: "نتائج مضمونة",
    descriptionAR:
      "نتائجنا ملموسة وتزيد من عائد الاستثمار.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Extensive experience",
    description:
      "We have years of experience working with major brands in Egypt and the Middle East.",
    titleAR: "خبرة واسعة",
    descriptionAR:
      "لدينا سنوات من الخبرة في العمل مع العلامات التجارية الكبرى في مصر والشرق الأوسط.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
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
  return (
    <>
      <div className="container py-12 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <BlurFade inView delay={0.05}>
              <h2 className="scroll-m-20 border-b pb-2 tracking-tight transition-colors first:mt-0 text-3xl font-bold ltr:tracking-tighter sm:text-4xl md:text-5xl text-center">
                <Balancer>
                  {
                    t('title')
                  }
                </Balancer>
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.05 * 2}>
              <p className="mt-3 text-muted-foreground text-xl !leading-relaxed">
                <Balancer>
                  {
                    t('p')
                  }
                </Balancer>
              </p>
            </BlurFade>
            <p className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 text-xl"
                href="#"
              >
                {
                  t('learnMore')
                }
                {
                  locale === 'en' ? (
                    <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />

                  ) : (
                    <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1 rotate-180" />

                  )
                }
              </a>
            </p>
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <BookOpenIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Industry-leading documentation
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Our documentation and extensive Client libraries contain
                  everything a business needs to build a custom integration in a
                  fraction of the time.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  bg-primary text-primary-foreground">
                <MessagesSquareIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Developer community support
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We actively contribute to open-source projects—giving back to
                  the community through development, patches, and sponsorships.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <ThumbsUpIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Simple and affordable
                </h3>
                <p className="mt-1 text-muted-foreground">
                  From boarding passes to movie tickets, there&apos;s pretty
                  much nothing you can&apos;t do.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </>
  );
};
