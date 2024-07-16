import { useTranslations } from "next-intl";
import HorizontalScrollCarousel from "../horizontal-scroll";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Card } from "../ui/service-card";
import Balancer from "react-wrap-balancer";

export function Services() {

  const t = useTranslations("OurServices");

  const isMobile = useMediaQuery('(max-width: 640px)');



  return (
    <div className="lg:relative w-full">
      <h2 className="text-3xl font-bold ltr:tracking-tighter sm:text-4xl md:text-5xl text-center">
        {t("h")}
      </h2>
      <p className="text-xl text-center lg:w-3/4 mx-auto pt-4">
        <Balancer>
          {t("p")}
        </Balancer>
      </p>
      {
        isMobile ? (<>
          <section>
            <div className="flex flex-col">
              {[1, 2, 3, 4].map((card, index) => (
                <div key={index} >
                  <Card card={card} />
                </div>
              ))}
            </div>
          </section>

        </>) : (<HorizontalScrollCarousel />)
      }
    </div>

  )
}