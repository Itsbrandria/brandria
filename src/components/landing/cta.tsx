"use client";
import Balancer from "react-wrap-balancer";
import { CredForm } from "../cred-form";
import { useLocale } from "next-intl";
import Scaler from "../Scaler";

const CTA = () => {
  const locale = useLocale();
  return (

    <section className="!py-0 w-full">
      <Scaler className="!py-0 w-full">
      <div className="container flex flex-col items-center gap-6  border  p-2 text-center md:rounded-xl w-full py-8 ">

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
      </Scaler>
    </section>
  );
};

export default CTA;
