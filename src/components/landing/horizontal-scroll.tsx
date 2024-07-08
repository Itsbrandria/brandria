import { FC, ReactNode, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button/button";
import Link from "next/link";


interface Props {
  cards: {
    image: string;
    title: string;
    description: ReactNode;
    link: string;
    btnText: string;
  }[]
}

const HorizontalScrollCarousel: FC<Props> = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);


  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] w-full"
    >
      <div className="sticky top-0 flex h-[60vh] items-center pt-24 overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4"
        >
          {cards.map((card) => (
            <Card
              {...card}
              key={card.title}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card: FC<Props['cards'][0]> = (card) => {
  return (
    <div
      key={card.title}
      className="group w-[50vw] overflow-hidden rounded-lg flex flex-col justify-center items-center max-h-full"
    >
      <Image
        src={card.image}
        objectFit="cover"
        width={450}
        height={450}
        alt={card.title}
        className="scale-[2]"
      />
      <div className=" bg-opacity-50 flex items-center justify-center h-full">
        <div className="text-center w-3/4 flex flex-col gap-2">
          <h3 className="text-xl font-bold">{card.title}</h3>
          {card.description}
          <Button variant='gooeyRight'>
            <Link href={card.link}>
              {card.btnText}
            </Link>
          </Button>
        </div>
      </div>
    </div >
  );
};

export default HorizontalScrollCarousel;
