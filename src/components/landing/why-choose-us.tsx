import React from "react";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Coins } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import BlurFade from "../magicui/blur-fade";

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
  const lang = useLocale();
  return (
    <Section className="border-b " >
      <Container className="not-prose">
        <div className="flex flex-col gap-6" dir={
          lang === "en" ? "ltr" : "rtl"

        }>
          <BlurFade inView delay={0.05}>
            <h2 className="text-3xl font-bold ltr:tracking-tighter sm:text-4xl md:text-5xl !leading-relaxed">
              <Balancer>
                {
                  t('title')
                }
              </Balancer>
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.05 * 2}>
            <p className="text-2xl font-light opacity-70">
              <Balancer>
                {
                  t('p')
                }
              </Balancer>

            </p>
          </BlurFade>
          <BlurFade inView delay={0.05 * 3}>
            <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
              {featureText.map(({ icon, title, description }, index) => (
                <div className="flex flex-col gap-4" key={index}>
                  {icon}
                  <h4 className="text-xl text-primary">{title}</h4>
                  <p className="text-base opacity-75">{description}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </Container>
    </Section>
  );
};
