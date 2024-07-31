import { getTranslations } from "next-intl/server";
import { Card } from "../ui/service-card";
import Balancer from "react-wrap-balancer";
import dynamic from "next/dynamic";
import { headers } from 'next/headers';
import GradualSpacing from "../magicui/gradual-spacing";
import { getLocale } from "next-intl/server";
import BlurFade from "../magicui/blur-fade";

const HorizontalScrollCarousel = dynamic(() => import('@/components/horizontal-scroll'), { ssr: false });

export async function Services() {
  const t = await getTranslations("OurServices");
  const locale = await getLocale();
  const userAgent = headers().get('user-agent') || '';
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent);

  return (
    <section className="lg:relative w-full overflow-hidden" id='ourS'>
      <div className="flex">
        <div className="flex-1">
          
        {locale === "en" ? 
          <>        
          <GradualSpacing className="font-display text-center text-2xl font-bold tracking-[-0.1em]  text-black dark:text-white sm:text-5xl md:text-4xl md:leading-[5rem]"
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
      </div>
      {
        isMobile ? (
          <section>
            <div className="flex flex-col gap-4">
              {[1, 2, 3, 4].map((card, index) => (
                <div key={index}>
                  <Card card={card} />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <HorizontalScrollCarousel />
        )
      }
    </section >
  )
}