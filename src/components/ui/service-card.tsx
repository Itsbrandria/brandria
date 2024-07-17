import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "./button/button";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export
  const Card = ({ card }: { card: number }) => {
    const t = useTranslations(`OurServices.cards.${card}`);
    return (
      <div className="flex items-center  h-full lg:p-8 lg:flex-row flex-col lg:w-screen max-w-sm">
        <div className="h-full flex justify-center  lg:w-6/12">
          <Image
            src={t('image')}
            alt={t('title')}
            width={500}
            height={500}
            unoptimized
            className="object-contain h-full "
          />
        </div>
        <div className="flex items-center justify-center h-full lg:flex-1 lg:w-6/12 *:w-fit *:overflow-x-hidden ">
          <div className="text-center lg:w-3/4 flex flex-col lg:gap-4 gap-2">
            <span className="ltr:tracking-widest ltr:font-mono dark:text-red-400 font-bold lg:text-3xl text-red-700">
              {
                t('subtitle')
              }
            </span>
            <h3 className="lg:text-9xl text-5xl font-bold ltr:tracking-tighter rtl:leading-tight">
              <Balancer>
                {
                  t('title')
                }
              </Balancer>
            </h3>
            <p className="lg:text-2xl text-lg leading-relaxed">
              <Balancer>
                {
                  t('description')
                }
              </Balancer>
            </p>
            <Button variant='ringHover' className="lg:text-3xl lg:py-8 text-lg" >
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
