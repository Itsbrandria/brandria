"use client";
import BlurFade from "@/components/magicui/blur-fade";
import SparklesText from "@/components/magicui/sparkles-text";
import { useLocale, useTranslations } from "next-intl";
import Balancer from "react-wrap-balancer";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Lightbulb,
  Earth,
  Handshake,
  UsersRound,
  UserRoundPlus,
  Target,
} from "lucide-react";
import NumberTicker from "@/components/magicui/number-ticker";
import Image from "next/image";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { AnimationProps, motion, Variant } from "framer-motion";
// import { useGLTF } from '@react-three/drei'

const Clients = dynamic(() => import("@/components/landing/clients").then((mod) => mod.Clients));

const featureText = [
  {
    icon: <Lightbulb className="h-9 w-9" />,
    title: "Fueling Creativity and Innovation",
    description:
      "We are fueled by a relentless drive for creativity and innovation, constantly pushing boundaries to create unique and standout solutions for your brand.",
    titleAR: "تحفيز الإبداع والابتكار",
    descriptionAR:
      "نحن مدفوعون بدافع لا يتوقف نحو الإبداع والابتكار، ونسعى دائمًا لتجاوز الحدود لخلق حلول فريدة ومميزة لعلامتك التجارية.",
  },

  {
    icon: <Earth className="h-9 w-9" />,
    title: "Expertise, Experience, and Global Reach",
    description:
      "With extensive expertise and global reach, our seasoned professionals deliver tailored solutions that drive real results.",
    titleAR: "الخبرة، التجربة، والانتشار العالمي",
    descriptionAR:
      "بفضل خبرتنا الواسعة وانتشارنا العالمي، يقدم محترفونا المتمرسون حلولًا مخصصة تحقق نتائج حقيقية.",
  },
  {
    icon: <Handshake className="h-9 w-9" />,
    title: "Collaboration and Client-Centric Approach",
    description:
      "We value collaboration and take a client-centric approach, ensuring your vision and goals are at the forefront of our strategies.",
    titleAR: "التعاون والنهج المرتكز على العميل",
    descriptionAR:
      "نحن نقدر التعاون ونتبع نهجًا يركز على العميل، لضمان أن تكون رؤيتك وأهدافك في طليعة استراتيجياتنا.",
  },
];

const featureText2 = [
  {
    icon: <UserRoundPlus className="h-9 w-9" />,
    title: "People first",
    description:
      "Be real, be authentic. Strive for growth, and challenge yourself to be your best version. Don’t be afraid to try and fail. Most importantly, be yourself",
    titleAR: "الأشخاص أولاً",
    descriptionAR:
      "كن صادقًا، وكن أصيلًا. اسعَ للنمو، وتحدَّ نفسك لتكون أفضل نسخة منك. لا تخف من المحاولة والفشل. والأهم من ذلك، كن نفسك.",
  },

  {
    icon: <UsersRound className="h-9 w-9" />,
    title: "Teamwork",
    description:
      "Push each other forward with curiosity and the desire to learn more and be the better version of yourself, but be understanding, kind, and supportive of your teammates.",
    titleAR: "العمل الجماعى",
    descriptionAR:
      "ادفعوا بعضكم البعض للأمام بالفضول ورغبة التعلم والنمو لتكونوا أفضل نسخة من أنفسكم، ولكن كونوا في ذات الوقت متفهمين، طيبين، وداعمين لزملائكم.",
  },

  {
    icon: <Target className="h-9 w-9" />,
    title: "Always aim higher",
    description:
      "With extensive expertise and global reach, our seasoned professionals deliver tailored solutions that drive real results.",
    titleAR: "دوماً هدفك أعلى",
    descriptionAR:
      "بفضل خبرتنا الواسعة وانتشارنا العالمي، يقدم محترفونا المتمرسون حلولاً مخصصة تحقق نتائج حقيقية.",
  },
];
// const Scene = dynamic(() => import('@/components/ThreeD/Scene'), { ssr: false })

const svgVariants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants: AnimationProps = {
  transition: {
    duration: 3,
    ease: "easeInOut",
  },
  variants: {
    visible: {
      pathLength: 1,
    },
    hidden: {
      pathLength: 0
    }
  }
}

const pathVariants1: AnimationProps ={
  transition: {
    duration:3,
    ease:"easeInOut"
  },
  variants:{
    visible: {
      fillOpacity:1,
      pathLength: 1,

      },
    hidden: {
      fillOpacity:0,
      pathLength: 0
    }
  }
}

export default function Page() {
  const t = useTranslations("About");
  const locale = useLocale();
  // useGLTF.preload('/vintage_camera.glp')
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate rotation based on mouseY
  const rotation = (mouseY / window.innerWidth - 0.25) * 200; 
  // Adjust 20 to control the rotation sensitivity
  const rotation2 = (mouseY / window.innerHeight - 0.25) * 500; // Adjust 20 to control the rotation sensitivity

  return (
    <main className="py-36 flex flex-col gap-20">
      <div className="flex px-14 flex-col gap-12">
        <div className="grid grid-cols-11 gap-4 ">
        <div className="p-4 col-span-2">
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
          <h1 className="text-4xl font-bold ltr:tracking-wider sm:text-5xl md:text-6xl text-center p-4 col-span-7 overflow-hidden">
            <SparklesText text={t("h")} sparklesCount={30} />
          </h1>
          <div className="p-4 col-span-1  transform scale-x-[-1]">
          <motion.img
              style={{ perspective: '1000px'}}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: rotation2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              src="/GooglyEyes.svg"
              alt="Description of the image"
              width={100}
              height={100}
              />
          </div>
          <div className="p-4 col-span-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="1117.362" height="264.168" viewBox="0 0 1117.362 264.168">
              <motion.path id="Path_565" data-name="Path 565" {...pathVariants} initial= "hidden" animate = "visible" d="M0,0S234.679,217.11,511.179,243.86,1106,107,1106,107" transform="translate(6.791 7.34)" fill="none" stroke="#ff0021" stroke-width="20"/>
            </svg>
          </div>
          <div className="flex p-4 col-span-8 ">
            <div className="lg:max-w-5xl mx-auto space-y-4 ">
              <div className="text-lg lg:text-2xl !leading-relaxed">
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
          <div className="p-4 col-span-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="133" height="250" viewBox="0 0 133.571 364.888">
            <g id="Dodles2" transform="translate(1104.122 -135.885)" >
              <motion.path id="Path_127" data-name="Path 127" {...pathVariants1} initial = "hidden" animate = "visible" d="M-1046.4,466.3c-5.1-1.6-10.6-.7-15.7,1,3.5-6,4.6-13.4,2.2-19.9a18.72,18.72,0,0,0-17.8-12.2,15.97,15.97,0,0,0-11.2,4.4c-1.3,1.2.7,3.2,2,2,6-5.9,16.5-4.2,21.7,1.9,6.3,7.3,4.4,18.9-1.5,25.8-.8.9-.1,2.9,1.3,2.3,8.2-3.4,21.3-6.2,25.7,4.3,3.5,8.4-1.2,17.5-9.5,20.7a23.831,23.831,0,0,1-15.6.2c-1.7-.5-2.4,2.1-.7,2.7,9.7,3.1,22.5.7,27.6-9C-1033.3,481.5-1036.4,469.5-1046.4,466.3Z" fill="#ff001c"/>
              <motion.path id="Path_128" data-name="Path 128" {...pathVariants1} initial = "hidden" animate = "visible" d="M-1061.2,222.8c-5.1-1.6-10.6-.7-15.7,1,3.5-6,4.6-13.4,2.2-19.9a18.72,18.72,0,0,0-17.8-12.2,15.97,15.97,0,0,0-11.2,4.4c-1.3,1.2.7,3.2,2,2,6-5.9,16.5-4.2,21.7,1.9,6.3,7.3,4.4,18.9-1.5,25.8-.8.9-.1,2.9,1.3,2.3,8.2-3.4,21.3-6.2,25.7,4.3,3.5,8.4-1.2,17.5-9.5,20.7a23.831,23.831,0,0,1-15.6.2c-1.7-.5-2.4,2.1-.7,2.7,9.7,3.1,22.5.7,27.6-9C-1048.1,238-1051.2,225.9-1061.2,222.8Z" fill="#ff001c"/>
              <motion.path id="Path_129" data-name="Path 129" {...pathVariants1} initial = "hidden" animate = "visible" d="M-971.7,136.2c-4.8-1.3-9,1.6-11.5,5.4-3,4.4-3.1,9.6-3.6,14.8s-1.9,10.2-6.5,13.3c-4.5,3-9.9,3.7-15.2,3.9-6,.3-12,.2-17.7,1.9a39.4,39.4,0,0,0-13.7,7.3c-4.1,3.4-7.9,7.8-9.5,12.9a18.409,18.409,0,0,0,1.8,14.5c5.4,10.1,16.2,14.4,25.6,20,4.6,2.7,8.9,5.9,11.8,10.5,2.6,4.1,4.1,9.1,2.6,13.8-2.8,8.7-13.5,10.4-21.3,10.1-5.8-.2-11.4-1.8-17.2-1.7a24.587,24.587,0,0,0-15,5.2c-8.1,6.3-13.1,16.5-15,26.5a53.939,53.939,0,0,0,3.1,30.5,54.478,54.478,0,0,0,3.5,6.8c1.1,1.8,3.9.1,2.8-1.6-10.6-16.9-9.8-41.7,4.2-56.6a22.654,22.654,0,0,1,13.3-7.3c5.9-.8,11.9.8,17.7,1.3,8,.8,17.8-.2,23.6-6.5,7-7.6,4.1-18.4-1.9-25.5-7.1-8.4-18.2-11.5-26.7-17.9-4-3-7.7-7.1-9.4-11.9-1.8-5.2-.7-10.1,2.5-14.5,6.2-8.7,16.4-13.5,26.9-14.2,10.1-.7,22.5.4,29.4-8.7,3.2-4.3,3.6-9.7,4.1-14.8.4-4.8,1.3-9.7,5.2-12.9a6.088,6.088,0,0,1,5.6-1.4C-970.6,139.9-969.7,136.8-971.7,136.2Z" fill="#ff001c"/>
              <motion.path id="Path_131" data-name="Path 131" {...pathVariants1} initial = "hidden" animate = "visible" d="M-1010.1,443.2c-3.9-1.6-8-2.2-12.1-2.9-3.8-.7-7.8-1.7-10.5-4.7-3.1-3.4-3.4-8.4-2-12.6a23.641,23.641,0,0,1,8.4-11.3c4.1-3.1,9.2-5.1,14.4-4.2,2,.3,2.9-2.8.9-3.1-10.5-1.7-20.8,5.4-25.4,14.5-2.3,4.7-3.1,10.1-1,15,1.9,4.5,5.8,7.2,10.4,8.6,5.1,1.5,10.5,1.5,15.4,3.6a1.734,1.734,0,0,0,2.2-.6A1.9,1.9,0,0,0-1010.1,443.2Z" fill="#ff001c"/>
              <motion.path id="Path_133" data-name="Path 133" {...pathVariants1} initial = "hidden" animate = "visible" d="M-1038.2,147a67.136,67.136,0,0,0-27,26.1c-1,1.8,1.6,3.6,2.7,1.8a63.756,63.756,0,0,1,25.7-25C-1034.9,148.9-1036.3,146-1038.2,147Z"  fill="#ff001c"/>
              <motion.path id="Path_138" data-name="Path 138" {...pathVariants1} initial = "hidden" animate = "visible" d="M-1013.1,333.8a70.965,70.965,0,0,0-19.2-34.9c-1.5-1.5-3.7,1-2.2,2.4a69.02,69.02,0,0,1,18.2,33.5C-1015.7,336.9-1012.6,335.9-1013.1,333.8Z" fill="#ff001c"/>
              <motion.path id="Path_140" data-name="Path 140" {...pathVariants1} initial = "hidden" animate = "visible" d="M-1024.8,356.5a15.435,15.435,0,0,0-10,5.1,25.887,25.887,0,0,0-3.7,5.6,16.185,16.185,0,0,0-17.2-6.7,15.592,15.592,0,0,0-9.7,7.3,16.84,16.84,0,0,0-2,4.8,12.277,12.277,0,0,0-3.3-3.9,9.31,9.31,0,0,0-11.4-.3c-6.9,5.3-8.3,16-5.9,23.8.8,2.7,5,1.3,4.2-1.4-1.8-5.9-1-13.9,3.7-18.3a4.983,4.983,0,0,1,7.2,0c2.6,2.3,3.4,6,4.3,9.2.5,2,4,1.9,4.2-.2.8-6.8,2.1-14.3,9.5-16.6a11.441,11.441,0,0,1,14.4,8.1,2.187,2.187,0,0,0,4,.3c2.3-5.1,5-11.2,11.2-12.3a10.44,10.44,0,0,1,12.1,8.5,2.291,2.291,0,0,0,2.3,2.1,2.219,2.219,0,0,0,2.1-2.3C-1010.2,361.6-1016.9,355.8-1024.8,356.5Z" fill="#ff001c"/>
            </g>
          </svg>
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


      </section>
      <section className="lg:w-9/12 mx-auto flex flex-col gap-2 ">
        <h2 className="text-2xl lg:text-6xl font-bold">{t("h2")}</h2>
        <p className="text-lg lg:text-xl !leading-loose ">{t("p3")}</p>
        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
          {featureText.map((f, index) => (
            <div className="flex flex-col gap-4" key={index}>
              {f.icon}
              <h4 className="text-2xl text-primary font-semibold">
                {locale === "en" ? f.title : f.titleAR}
              </h4>
              <p className="text-lg !leading-relaxed">
                {locale === "en" ? f.description : f.descriptionAR}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="lg:w-9/12 mx-auto flex flex-col gap-2 mt-20">
        <h2 className="text-2xl lg:text-6xl font-bold">{t("h3")}</h2>
        <p className="text-lg lg:text-xl !leading-loose ">{t("p4")}</p>
        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
          {featureText2.map((f, index) => (
            <div className="flex flex-col gap-4" key={index}>
              {f.icon}
              <h4 className="text-2xl text-primary font-semibold">
                {locale === "en" ? f.title : f.titleAR}
              </h4>
              <p className="text-lg !leading-relaxed">
                {locale === "en" ? f.description : f.descriptionAR}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex lg:gap-4 lg:w-9/12 mx-auto mt-20 flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-6xl font-bold">{t("h4")}</h2>
          <p className="text-lg lg:text-xl !leading-loose ">{t("p5")}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-6xl font-bold">{t("h5")}</h2>
          <p className="text-lg lg:text-xl !leading-loose ">{t("p6")}</p>
        </div>
      </section>
      <section className="flex flex-col gap-2 lg:w-9/12 mx-auto mt-20">
        <div className="flex gap-4 text-5xl italic ">
          {locale === "en" ? (
            <>
              <div className="flex gap-1 text-brand">
                <NumberTicker
                  value={500}
                  className="text-5xl !text-brand font-bold"
                />
                +
              </div>
              <div>{t("h6")}</div>
            </>
          ) : (
            <>
              <div>{t("h6")}</div>
              <div className="flex gap-1 text-brand">
                <NumberTicker
                  value={500}
                  className="text-5xl !text-brand font-bold"
                />
                +
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-8 gap-4 max-sm:hidden">
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
        {/* <div className="md:hidden">
          <Clients />
        </div> */}
      </section>
      <section className="mt-20">
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
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
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
