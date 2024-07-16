import { useTranslations } from "next-intl";
import HorizontalScrollCarousel from "../horizontal-scroll";

export function Services() {

  const t = useTranslations("OurServices");



  return (
    <div className="relative w-full">
      <h2 className="text-3xl font-bold ltr:tracking-tighter sm:text-4xl md:text-5xl text-center">
        {t("h")}
      </h2>
      <p className="text-xl text-center w-3/4 mx-auto pt-4">
        {t("p")}
      </p>
      <HorizontalScrollCarousel />
    </div>

  )
}