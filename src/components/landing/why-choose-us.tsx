import React from "react";
import Balancer from "react-wrap-balancer";
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
    icon: <BookOpenIcon className="flex-shrink-0 w-5 h-5" />,
    title: "Guaranteed results",
    description: "Our results are tangible and increase return on investment.",
    titleAR: "نتائج مضمونة",
    descriptionAR:
      "نتائجنا ملموسة وتزيد من عائد الاستثمار.",
  },
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
  return (
    <>
      <div className="container py-12 2xl:py-24">
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
          <div className="space-y-6 lg:space-y-10">
            {
              featureText.map(
                (f) => (
                  <div className="flex" key={f.title}>
                    <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                      {
                        f.icon
                      }
                    </span>
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-xl sm:text-lg font-semibold">
                        {
                          locale === 'en' ? f.title : f.titleAR
                        }
                      </h3>
                      <p className="mt-1 text-muted-foreground text-lg">
                        <Balancer>
                          {
                            locale === 'en' ? f.description : f.descriptionAR
                          }
                        </Balancer>
                      </p>
                    </div>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};
