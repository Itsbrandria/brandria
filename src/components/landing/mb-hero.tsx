import { Button } from "@/components/ui/button/button";
import { useLocale, useTranslations } from "next-intl";
import Balancer from "react-wrap-balancer";

export default function MobileHero() {
  const t = useTranslations('Hero')
  const locale = useLocale();
  return (
    <>
      <div className="relative overflow-hidden pt-24 w-screen -mt-8">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-red-700/50 to-red-700 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-red-700 via-red-700 to-red-800" />
        </div>
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="">
                {
                  locale === 'en' ? <>
                    Elevate your projects
                  </> : <>
                    ارفع مستوي مشروعك
                  </>
                }
              </p>
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl leading-normal">
                  {
                    t('title')
                  }
                </h1>
              </div>
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-zinc-">
                  <Balancer>
                    {
                      t('description')
                    }
                  </Balancer>
                </p>
              </div>
              <div className="mt-8 gap-3 flex justify-center">
                <Button size={"lg"} className="font-bold text-lg px-4">
                  {
                    t('cta')
                  }
                </Button>
                <Button size={"lg"} variant={"outline"} className="text-lg px-4">
                  {
                    locale === 'en' ? <>
                      Our Work
                    </> : <>
                      أعمالنا
                    </>
                  }
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
