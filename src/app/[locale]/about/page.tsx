import BlurFade from "@/components/magicui/blur-fade";
import SparklesText from "@/components/magicui/sparkles-text";
import { useTranslations } from "next-intl";
import Balancer from "react-wrap-balancer";
import "lite-youtube-embed/src/lite-yt-embed.css";
import Script from "next/script";
import { Suspense } from "react";
import VideoComponent from "@/components/ui/video";
<<<<<<< Updated upstream
=======
import dynamic from "next/dynamic";
import { Coins } from "lucide-react";
import NumberTicker from "@/components/magicui/number-ticker";
import Image from "next/image";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
// import { useGLTF } from '@react-three/drei'



const featureText = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Fueling Creativity and Innovation",
    description:
      "We are fueled by a relentless drive for creativity and innovation, constantly pushing boundaries to create unique and standout solutions for your brand.",
    arTitle:"تحفيز الإبداع والابتكار",
    arDescription:"نحن مدفوعون بدافع لا يتوقف نحو الإبداع والابتكار، ونسعى دائمًا لتجاوز الحدود لخلق حلول فريدة ومميزة لعلامتك التجارية."
    },

  {
    icon: <Coins className="h-6 w-6" />,
    title: "Expertise, Experience, and Global Reach",
    description:
      "With extensive expertise and global reach, our seasoned professionals deliver tailored solutions that drive real results.",
    arTitle: "الخبرة، التجربة، والانتشار العالمي",
    arDescription:"بفضل خبرتنا الواسعة وانتشارنا العالمي، يقدم محترفونا المتمرسون حلولًا مخصصة تحقق نتائج حقيقية.",
  },

  {
    icon: <Coins className="h-6 w-6" />,
    title: "Collaboration and Client-Centric Approach",
    description:
      "We value collaboration and take a client-centric approach, ensuring your vision and goals are at the forefront of our strategies."
  
    },
];


const featureText2 = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "People first",
    description:
      "Be real, be authentic. Strive for growth, and challenge yourself to be your best version. Don’t be afraid to try and fail. Most importantly, be yourself"
  },

  {
    icon: <Coins className="h-6 w-6" />,
    title: "Teamwork",
    description:
      "Push each other forward with curiosity and the desire to learn more and be the better version of yourself, but be understanding, kind, and supportive of your teammates."
  }, {
    icon: < Coins className="h-6 w-6" />,
    title: "Always aim higher",
    description: "With extensive expertise and global reach, our seasoned professionals deliver tailored solutions that drive real results."
  },
];
// const Scene = dynamic(() => import('@/components/ThreeD/Scene'), { ssr: false })
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    </section>
=======
      <section className="w-9/12 mx-auto flex flex-col gap-8 ">
        <h2 className="text-2xl lg:text-6xl font-bold">
          {t("h2")}
        </h2>
        <p className="text-lg lg:text-xl !leading-loose ">
          {t("p3")}  
        </p>
        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
          {featureText.map(({ icon, title, description }, index) => (
            <div className="flex flex-col gap-4" key={index}>
              {icon}
              <h4 className="text-2xl text-primary font-semibold">{title}</h4>
              <p className="text-lg !leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-9/12 mx-auto flex flex-col gap-2">
        <h2 className="text-2xl lg:text-6xl font-bold">
          {t("h3")}
        </h2>
        <p className="text-lg lg:text-xl !leading-loose ">
          {t("p4")}
        </p>
        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
          {featureText2.map(({ icon, title, description }, index) => (
            <div className="flex flex-col gap-4" key={index}>
              {icon}
              <h4 className="text-2xl text-primary font-semibold">{title}</h4>
              <p className="text-lg !leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex gap-4 w-9/12 mx-auto mt-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-6xl font-bold">
            {t("h4")}
          </h2>
          <p className="text-lg lg:text-xl !leading-loose ">
            Our branches’ offices are not just the physical place that hosts our team of professionals and specialists. It is the place that makes us feel connected, opens our hearts to each other, and helps us out through thick and thin. It’s also a place to enjoy great food and organize wonderful weekend gatherings. Our office is an environment that fosters a sense of connection and nurtures its community.          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-6xl font-bold">
            {t("h5")}
          </h2>
          <p className="text-lg lg:text-xl !leading-loose ">
            Our mission is to strive to eradicate the mediocrity of digital marketing worldwide. Not to be the best in digital marketing, but to master the ability to foster a nurturing environment for people in the digital marketing field.
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-2 w-9/12 mx-auto">
        <div className="flex gap-4 text-5xl italic ">
          <div className="flex gap-1 text-brand">
            <NumberTicker value={500} className="text-5xl !text-brand font-bold" />
            +
          </div>
          <div>
            Clients
          </div>
        </div>
        <div className="grid grid-cols-8 gap-4">
          {Array.from({ length: 46 }, (_, i) => i + 10).map((client) => (
            <Image
              key={`client-${client}`}
              src={`https://dbrandria.com/wp-content/uploads/2023/06/Brandria-Logos-${client}.svg`}
              alt={`client-${client}`}
              width={50}
              height={50}
              className="w-32 h-32 object-contain mx-2"
            />
          ))}
        </div>
      </section>
      <section>
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </section>
    </main>
>>>>>>> Stashed changes
  );
}
