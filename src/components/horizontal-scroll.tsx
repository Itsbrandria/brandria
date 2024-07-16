import { FC, ReactNode, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button/button";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from './styles.module.scss';

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

export default function HorizontalScrollCarousel({
  Cards
}: {
  Cards: Props['cards']
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [currentCard, setCurrentCard] = useState(0);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const sections = gsap.utils.toArray(".card-section");
    const totalWidth = sections.length * 100;

    const pin = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
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
          const progress = self.progress;
          const newCurrentCard = Math.round(progress * (Cards.length - 1));
          setCurrentCard(newCurrentCard);
        },
      },
    });

    return () => {
      pin.kill();
    };
  }, [Cards.length]);
  return (
    <main className={styles.scrollSectionOuter}>
      <div ref={triggerRef} className={styles.scrollContainer}>
        <div ref={sectionRef} className={styles.scrollSectionInner}>
          {Cards.map((card, index) => (
            <div key={index} className={`${styles.cardSection} card-section`}>
              <Card {...card} />
            </div>
          ))}
        </div>
        <Indicator total={Cards.length} current={currentCard} />
      </div>
    </main>
  );
}

const Card: FC<Props['cards'][0]> = (card) => {
  return (
    <div className="flex items-center w-full h-full p-8">
      <div className="h-full flex justify-center  w-5/12">
        <Image
          src={card.image}
          alt={card.title}
          width={500}
          height={500}
          unoptimized
          className="object-contain h-full w-full"
        />
      </div>
      <div className="flex items-center justify-center h-full flex-1 ">
        <div className="text-center w-3/4 flex flex-col gap-4">
          <span className="tracking-widest font-mono dark:text-red-400 font-bold text-3xl text-red-700">
            {card.subtitle}
          </span>
          <h3 className="text-9xl font-bold tracking-tighter">{card.title}</h3>
          <p className="text-2xl leading-relaxed">
            {card.description}
          </p>
          <Button variant='ringHover' className="text-3xl py-8" size='lg'>
            <Link href={card.link}>
              {card.btnText}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

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