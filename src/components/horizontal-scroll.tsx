import { FC, ReactNode, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button/button";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLocale, useTranslations } from "next-intl";
import styles from './styles.module.scss';
import { useMediaQuery } from "@/hooks/use-media-query";
import { Card } from "./ui/service-card";

interface Props {
  cards: {
    image: string;
    title: string;
    subtitle: string;
    description: ReactNode;
    link: string;
    btnText: string;
  }[]
}

export default function HorizontalScrollCarousel() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [currentCard, setCurrentCard] = useState(0);
  const isMobile = useMediaQuery('(max-width: 640px)');

  let isRTL = useLocale() === 'ar';





  !isMobile && gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const sections = gsap.utils.toArray(".card-section");
    const totalWidth = sections.length * 100;
    const pin = !isMobile && gsap.to(sections, {
      xPercent: isRTL ? 100 * (sections.length - 1) : -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 0.5,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.0000000005,
          ease: "power1.inOut"
        },
        end: () => `+=${totalWidth}%`,
        onUpdate: (self) => {
          const progress = isRTL ? 1 - self.progress : self.progress;
          const newCurrentCard = Math.round(progress * (4 - 1));
          setCurrentCard(newCurrentCard);
        },
      },
    });

    return () => {
      pin && pin.kill();
    };
  }, [isRTL]);
  console.log(isMobile);
  return (

    <section className={styles.scrollSectionOuter}>
      <div ref={triggerRef} className={styles.scrollContainer}>
        <div ref={sectionRef} className={styles.scrollSectionInner}>
          {[1, 2, 3, 4].map((card, index) => (
            <div key={index} className={`${styles.cardSection} card-section`}>
              <Card card={card} />
            </div>
          ))}
        </div>
        <Indicator total={4} current={currentCard} />
      </div>
    </section>

  );
}

const Indicator = ({ total, current }: {
  total: number;
  current: number;
}) => {
  return (
    <div className={styles.indicator}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`${styles.dot} ${index === current ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};