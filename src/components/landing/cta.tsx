"use client";
import Balancer from "react-wrap-balancer";
import { CredForm } from "../cred-form";
import { useLocale } from "next-intl";
import Scaler from "../Scaler";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const CTA = () => {
  const locale = useLocale();
  
  const { theme } = useTheme();
  const [color, setColor] = useState('#ffffff')
  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000')
  }, [theme])

  return (

    <section className="!py-0 w-full">
      <Scaler className="!py-0 w-full">
      <div className="container flex flex-col items-center gap-6  border  p-2 text-center md:rounded-xl w-full py-8 ">

        <div className="flex items-center gap-6">

        {theme === 'dark' ?
            <>
          <Image
            src="/AttentionEyes.svg"
            alt="AttentionEyes"
            width={200}
            height={200}
            // className="transform scale-x-[-1]"
          />
            </>
            :
            <>
          <Image
            src="/AttentionEyes1.svg"
            alt="AttentionEyes"
            width={200}
            height={200}
            // className="transform scale-x-[-1]"
          />
            </>
          }

          <div className="flex flex-col w-full py-8 items-center gap-6 p-2 text-center">
            <h2 className="!my-0 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-[#e93331] ltr:tracking-wides">
              <Balancer>
                {
                  locale === "en" ? "Ready to get started?" : "هل أنت جاهز للبدء؟"
                }
              </Balancer>
            </h2>
            <h3 className="!mb-0 dark:text-zinc-200 text-lg lg:text-xl text-black">
              <Balancer>
                {
                  locale === "en" ? "Let's create something amazing together." : "لنخلق شيئًا مذهلاً معًا."
                }
              </Balancer>
            </h3>
            <div className="not-prose mx-auto flex items-center gap-2">
              <CredForm />
            </div>
          </div>
          {theme === 'dark' ?
            <>
          <Image
            src="/Something.svg"
            alt="Something"
            width={100}
            height={100}
            // className="transform scale-x-[-1]"
          />
            </>
            :
            <>
          <Image
            src="/Something1.svg"
            alt="Something"
            width={120}
            height={120}
            // className="transform scale-x-[-1]"
          />
            </>
          }
        </div>


      </div>
      </Scaler>
    </section>
  );
};

export default CTA;
