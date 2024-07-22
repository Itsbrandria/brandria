import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "./button/button";
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Balancer from "react-wrap-balancer";

export const Card = ({ card }: { card: number }) => {
  const t = useTranslations(`OurServices.cards.${card}`);

  return (
    <div className="flex items-end  h-full lg:p-8 lg:flex-row flex-col lg:w-screen">
      <div className="h-full flex justify-center  lg:w-6/12">
        <DotLottieReact
          src={t('image')}
          loop
          autoplay
          width={500}
          height={500}
          className="object-contain h-full lg:w-full"
        />

      </div>
      <div className="flex items-center justify-center h-full lg:flex-1 lg:w-6/12 *:w-fit *:overflow-x-hidden ">
        <div className="text-center lg:w-3/4 lg:px-4 flex flex-col lg:gap-4 gap-2 h-full justify-center">
          <span className="ltr:tracking-widest ltr:font-mono dark:text-red-400 font-bold lg:text-3xl text-red-700">
            {
              t('subtitle')
            }
          </span>
          <h3 className="2xl:text-7xl text-5xl font-bold ltr:tracking-tighter rtl:leading-tight">
            <Balancer>
              {
                t('title')
              }
            </Balancer>
          </h3>
          <p className="2xl:text-2xl text-lg !leading-relaxed">
            <Balancer>
              {
                t('description')
              }
            </Balancer>
          </p>
          <Button variant='ringHover' className="2xl:text-3xl lg:py-8 text-lg" >
            <Link href={
              t('link')
            }>
              {
                t('btnText')
              }
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
