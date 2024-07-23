'use client';
import BlurFade from "@/components/magicui/blur-fade";
import SparklesText from "@/components/magicui/sparkles-text";
import { useLocale, useTranslations } from "next-intl";
import Balancer from "react-wrap-balancer";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {Lightbulb, Earth, Handshake, UsersRound, UserRoundPlus, Target} from "lucide-react";
import NumberTicker from "@/components/magicui/number-ticker";
import Image from "next/image";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { StarryNight } from "@/components/StarryNight";
// import { useGLTF } from '@react-three/drei'



const featureText = [
  {
    icon: <Lightbulb className="h-9 w-9" />,
    title: "Fueling Creativity and Innovation",
    description:
      "We are fueled by a relentless drive for creativity and innovation, constantly pushing boundaries to create unique and standout solutions for your brand.",
    titleAR:"تحفيز الإبداع والابتكار", 
    descriptionAR:"نحن مدفوعون بدافع لا يتوقف نحو الإبداع والابتكار، ونسعى دائمًا لتجاوز الحدود لخلق حلول فريدة ومميزة لعلامتك التجارية." 
  },

  {
    icon: <Earth className="h-9 w-9" />,
    title: "Expertise, Experience, and Global Reach",
    description:
      "With extensive expertise and global reach, our seasoned professionals deliver tailored solutions that drive real results.",
    titleAR:"الخبرة، التجربة، والانتشار العالمي",
    descriptionAR:"بفضل خبرتنا الواسعة وانتشارنا العالمي، يقدم محترفونا المتمرسون حلولًا مخصصة تحقق نتائج حقيقية."
  }, 
  {
    icon: <Handshake className="h-9 w-9" />,
    title: "Collaboration and Client-Centric Approach",
    description:
      "We value collaboration and take a client-centric approach, ensuring your vision and goals are at the forefront of our strategies.",
    titleAR:"التعاون والنهج المرتكز على العميل",
    descriptionAR:"نحن نقدر التعاون ونتبع نهجًا يركز على العميل، لضمان أن تكون رؤيتك وأهدافك في طليعة استراتيجياتنا."
  },
];


const featureText2 = [
  {
    icon: <UserRoundPlus className="h-9 w-9" />,
    title: "People first",
    description:
      "Be real, be authentic. Strive for growth, and challenge yourself to be your best version. Don’t be afraid to try and fail. Most importantly, be yourself",
    titleAR:"الأشخاص أولاً",
    descriptionAR:"كن صادقًا، وكن أصيلًا. اسعَ للنمو، وتحدَّ نفسك لتكون أفضل نسخة منك. لا تخف من المحاولة والفشل. والأهم من ذلك، كن نفسك."
  },

  {
    icon: <UsersRound className="h-9 w-9" />,
    title: "Teamwork",
    description:
      "Push each other forward with curiosity and the desire to learn more and be the better version of yourself, but be understanding, kind, and supportive of your teammates.",
    titleAR:"العمل الجماعى",
    descriptionAR:"ادفعوا بعضكم البعض للأمام بالفضول ورغبة التعلم والنمو لتكونوا أفضل نسخة من أنفسكم، ولكن كونوا في ذات الوقت متفهمين، طيبين، وداعمين لزملائكم."
    }, 
  
  {
    icon: < Target className="h-9 w-9" />,
    title: "Always aim higher",
    description: "With extensive expertise and global reach, our seasoned professionals deliver tailored solutions that drive real results.",
    titleAR:"دوماً هدفك أعلى",
    descriptionAR:"بفضل خبرتنا الواسعة وانتشارنا العالمي، يقدم محترفونا المتمرسون حلولاً مخصصة تحقق نتائج حقيقية."
  },
];
// const Scene = dynamic(() => import('@/components/ThreeD/Scene'), { ssr: false })

export default function Page() {
  const t = useTranslations("About");
  const locale = useLocale()
  // useGLTF.preload('/vintage_camera.glp')
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate rotation based on mouseY
  const rotation = (mouseY / window.innerWidth - 0.1) * 150; // Adjust 20 to control the rotation sensitivity

  return (
    <main className="py-36 flex flex-col gap-20">
      <div className="flex px-14 flex-col gap-12">
        <h1 className="text-4xl font-bold ltr:tracking-wider sm:text-5xl md:text-6xl text-left overflow-hidden">
          <SparklesText text={t("h")} sparklesCount={30} />
        </h1>
        <div>
        <motion.img
            style={{ perspective: '1000px'}}
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: rotation }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
             src="/GooglyEyes.svg"
            alt="Description of the image"
            width={100}
            height={100}
            />
        </div>
        <div className="flex">
          <div className="lg:max-w-5xl mx-auto space-y-4 ">
            <div className="text-lg lg:text-2xl  !leading-relaxed">
              <BlurFade inView delay={0.1}>
                <Balancer>{t("p1")}</Balancer>
              </BlurFade>
            </div>
            <div className="text-lg lg:text-2xl font-light !leading-relaxed">
              <BlurFade inView delay={0.1 * 2}>
                <Balancer>{t("p2")} </Balancer>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <div className="aspect-w-16 aspect-h-9">
          <VideoComponent
            src="https://www.youtube.com/embed/5qap5aO4i9A"
            title="Video"
          />
        </div>
      </Suspense> */}
      <StarryNight>
      <section className="w-9/12 mx-auto flex flex-col gap-8 ">
        <h2 className="text-2xl lg:text-6xl font-bold">
          {t("h2")}
        </h2>
        <p className="text-lg lg:text-xl !leading-loose ">
        {t("p3")}
        </p>
        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
          {featureText.map(
            (f , index) => (
            <div className="flex flex-col gap-4" key={index}>
              {f.icon}
              <h4 className="text-2xl text-primary font-semibold">{locale === "en" ? f.title : f.titleAR}</h4>
              <p className="text-lg !leading-relaxed">{locale === "en" ? f.description : f.descriptionAR}</p>
            </div>
          ))}
        </div>
      </section>
      </StarryNight>
      <section className="w-9/12 mx-auto flex flex-col gap-2">
        <h2 className="text-2xl lg:text-6xl font-bold">
        {t("h3")}
        </h2>
        <p className="text-lg lg:text-xl !leading-loose ">
          {t("p4")}
        </p>
        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
          {featureText2.map((f, index) => (
            <div className="flex flex-col gap-4" key={index}>
              {f.icon}
              <h4 className="text-2xl text-primary font-semibold">{locale === "en" ? f.title : f.titleAR}</h4>
              <p className="text-lg !leading-relaxed">{locale === "en" ? f.description : f.descriptionAR}</p>
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
          {t("p5")}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-6xl font-bold">
            {t("h5")}
          </h2>
          <p className="text-lg lg:text-xl !leading-loose ">
            {t("p6")}
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-2 w-9/12 mx-auto">
        <div className="flex gap-4 text-5xl italic ">
        {locale === "en" ? 
        <>
          <div className="flex gap-1 text-brand">
            <NumberTicker value={500} className="text-5xl !text-brand font-bold" />
            +
          </div>
            <div>
              {t("h6")}
            </div>
        </> 
        : 
        <>
          <div>
             {t("h6")}
          </div>
          <div className="flex gap-1 text-brand">
            <NumberTicker value={500} className="text-5xl !text-brand font-bold" />
            +
          </div>

        </>
        }
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
  );
}
const reviews = [
  {
    name: "Dr.Mona Gad",
    username: "Mona Gad",
    body: "Excellent team with brilliant ideas and great efforts",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Dr.Rasha Hamed Shereif",
    username: "YOUClinic",
    body: "Highly professional and I really recommend them",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Mohamed Tawansy",
    username: "LNG",
    body: "Although the business with Brandria started within less than a year, but one the advantages of working with them is the ability to speed delivery while maintaining quality, creative ideas and succession.. our work with them are distinguished.",
    img: "https://avatar.vercel.sh/john",
  },

];





const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-1/5 h-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="64" height="64" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-xl font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-lg font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-2xl">{body}</blockquote>
    </figure>
  );
};
