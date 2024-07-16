import BlurFade from "@/components/magicui/blur-fade";
import SparklesText from "@/components/magicui/sparkles-text";
import { useTranslations } from "next-intl";
import Balancer from "react-wrap-balancer";
import "lite-youtube-embed/src/lite-yt-embed.css";
import Script from "next/script";
import { Suspense } from "react";
import VideoComponent from "@/components/ui/video";

export default function Page() {
  const t = useTranslations("About");

  return (
    <section className="py-36 space-y-12">
      <Script src="node_modules/lite-youtube-embed/src/lite-yt-embed.js"></Script>
      <h1 className="text-4xl font-bold ltr:tracking-wider sm:text-5xl md:text-6xl text-center ">
        <SparklesText text={t("h")} sparklesCount={30} />
      </h1>
      <div className="lg:max-w-7xl mx-auto space-y-4">
        <div className="text-2xl font-medium leading-relaxed">
          <BlurFade inView delay={0.1}>
            {" "}
            <Balancer>{t("p1")}</Balancer>
          </BlurFade>
        </div>

        <div className="text-2xl font-medium leading-relaxed">
          <BlurFade inView delay={0.1 * 2}>
            {" "}
            <Balancer>{t("p2")} </Balancer>
          </BlurFade>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="aspect-w-16 aspect-h-9">
          <VideoComponent
            src="https://www.youtube.com/embed/5qap5aO4i9A"
            title="Video"
          />
        </div>
      </Suspense>
    </section>
  );
}