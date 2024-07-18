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
import { Separator } from "../ui/separator";
import clsx from "clsx";


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
  return (
    <>
      <section className="container py-12 2xl:py-24 space-y-8 lg:space-y-14">
        <h2 className="text-3xl  tracking-tighter sm:text-4xl md:text-5xl text-center ">
          {
            locale === 'en' ? (
              <Balancer>
                Why Choose <span className="font-bold italic text-[#e93331] pr-0.5">Digital Brandria</span>?
              </Balancer>
            ) : (
              <Balancer>
                لماذا تختار <span className="font-bold italic text-[#e93331] pr-0.5 tracking-normal">ديجيتال براندريا</span>؟
              </Balancer>
            )
          }
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 gap-y-12">
          {
            featureText.map(
              (f, idx) => (
                <div key={f.title} className={clsx(
                  "flex flex-col gap-2 justify-center max-w-lg",
                  idx === 2 && "col-span-2 max-w-2xl justify-center mx-auto"
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
      </section>
    </>
  );
};
