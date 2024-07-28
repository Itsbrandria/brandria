import BlurFade from '@/components/magicui/blur-fade';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react'
import Balancer from 'react-wrap-balancer';
import Image from "next/image";
import GradualSpacing from '@/components/magicui/gradual-spacing';

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("Contact");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();
  
  const ListText = 
    {
      subTitle: "If you need to contact us for any other matters, please use the following contact channels:",
      element1: "For security incidents, email security@brandira.com",
      element2: "Survicate has appointed a Data Protection Officer, Rudi Kosiór. If you have questions or concerns regarding data protection or compliance with privacy regulations, please dont hesitate to reach out to him by sending an email to security@brandira.com",
      element3: "If you have issues or complaints with service quality, billing, invoicing, or concerns about our policies, please reach out to us anytime through the send us a message button inside the Survicate product or send an email to security@brandira.com",
      subTitleAR: "تحفيز الإبداع والابتكارإذا كنت بحاجة إلى الاتصال بنا لأي أمور أخرى، يرجى استخدام قنوات الاتصال التالية:",
      element1AR: "لحوادث الأمان، يرجى إرسال بريد إلكتروني إلى security@brandira.com",
      element2AR: "عينت شركة Survicate مسؤول حماية البيانات، رودي كوسيور. إذا كانت لديك أي أسئلة أو مخاوف بشأن حماية البيانات أو الامتثال للوائح الخصوصية، فلا تتردد في التواصل معه عبر إرسال بريد إلكتروني إلى security@brandira.com.",
      element3AR: "إذا كانت لديك مشكلات أو شكاوى بخصوص جودة الخدمة أو الفواتير أو الفوترة أو مخاوف بشأن سياساتنا، يرجى التواصل معنا في أي وقت من خلال زر إرسال رسالة داخل منتج أو إرسال بريد إلكتروني إلى security@brandira.com.",
    };

  return (
    <main className="py-16 sm:py-36 flex flex-col gap-10 sm:gap-20">
      <div className="flex px-4 sm:px-14 flex-col gap-8 sm:gap-16">
        <BlurFade inView delay={0.1}>
            <div className='leading-loose flex flex-col justify-center gap-6'>
              <p className='lg:max-w-5xl mx-auto space-y-4'>{t("h")}</p>
              <div className='flex justify-center items-center gap-4'>
                <div className='flex flex-col gap-0'>
                <h1 className='text-2xl font-bold ltr:tracking-wider sm:text-5xl md:text-4xl text-center'>{t("h2")}</h1>
                <GradualSpacing className="font-display text-center text-2xl font-bold tracking-[-0.1em]  text-black dark:text-white sm:text-5xl md:text-4xl md:leading-[5rem]"
                text={t("h2N")}/>
                </div>
                <Image
                  src="/Alien.svg"
                  alt="Blue Tree"
                  width={50}
                  height={50}
                />
              </div>
              <h5 className='lg:max-w-5xl mx-auto space-y-4'>{t("p")}</h5>
            </div>
        </BlurFade>
        <form className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mx-4 sm:mx-52'>
          <div className='p-3 col-span-1 sm:col-span-1'>
          <BlurFade inView delay={0.5}>
            <input
              id="1"
              type="text"
              placeholder="First Name"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </BlurFade>
          </div>
          <div className='p-3 col-span-1 sm:col-span-1'>
          <BlurFade inView delay={0.6}>
            <input
              id="2"
              type="text"
              placeholder="Last Name"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </BlurFade>
          </div>
          
          <div className='p-3 col-span-1 sm:col-span-2'>
          <BlurFade inView delay={0.7}>
            <input
              id="3"
              type="email"
              placeholder="Email"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              </BlurFade>
          </div>
          
          <div className='p-3 col-span-1 sm:col-span-1'>
          <BlurFade inView delay={0.8}>
            <input
              id="4"
              type="tel"
              placeholder="Phone Number"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </BlurFade>
          </div>
          <div className='p-3 col-span-1 sm:col-span-1'>
          <BlurFade inView delay={0.9}>
            <input
              id="5"
              type="tel"
              placeholder="Gender"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </BlurFade>
          </div>
          <div className='p-3 col-span-1 sm:col-span-2'>
          <BlurFade inView delay={0.1}>      
            <textarea name="Message" id="6" rows={4} 
              placeholder="tell us a bit about your goals, what are you hoping to achieve"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </BlurFade>   
          </div>
          <div className='p-3 col-span-1'>
          <BlurFade inView delay={0.1}>
            <input type="submit" value={t("btn")} className='border rounded py-2 px-3 bg-white text-black cursor-pointer'/>
          </BlurFade>
          </div>
        </form>
        <BlurFade inView delay={0.3}>
        <div className='flex flex-col mx-4 sm:mx-40'>
          <h4>{locale === "en" ? ListText.subTitle : ListText.subTitleAR}</h4>
          <ul className='list-image-[url(/badge-check.svg)]'>
            <li>{locale === "en" ? ListText.element1 : ListText.element1AR}</li>
            <li>{locale === "en" ? ListText.element2 : ListText.element2AR}</li>
            <li>{locale === "en" ? ListText.element3 : ListText.element3AR}</li>
          </ul>
        </div>
        </BlurFade>
      </div>
    </main>
  )
}
