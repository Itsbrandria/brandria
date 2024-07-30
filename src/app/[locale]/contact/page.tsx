import BlurFade from '@/components/magicui/blur-fade';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react'
import Balancer from 'react-wrap-balancer';
import Image from "next/image";
import GradualSpacing from '@/components/magicui/gradual-spacing';
import FAQ from '@/components/landing/faq';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BadgeCheck } from 'lucide-react';
import MouseFollower from '@/components/MouseFollower';


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

  const inputPlaceHolders = {
    fName: "First Name",
    lName: "Last Name",
    email: "Email",
    PhoneNum: "Phone Number",
    gender: { male: "Male", female: "Female" },
    textArea: "tell us a bit about your goals, what are you hoping to achieve",
    Btn: "Send",
    fNameAR: "الإسم",
    lNameAR: "إسم العائله",
    emailAR: "الإيميل",
    PhoneNumAR: "رقم الهاتف",
    genderAR: { male: "رجل", female: "إمرأه" },
    textAreaAR: "أخبرنا قليلاً عن أهدافك، ماذا تأمل أن تحقق؟",
    BtnAR: "إرسل"
  };

  type FAQItem = {
    question: string;
    answer: string;
    questionAR: string;
    answerAR: string;
    link?: string;
  };

  const content: FAQItem[] = [
    {
      questionAR: "ما هي شركات التسويق الرقمي أو شركات الديجيتال ماركتنج؟",
      answerAR:
        "شركات التسويق الرقمي أو الديجيتال ماركتنج هي شركات رائدة ومبتكرة تقدم خدمات التسويق الرقمى Digital marketing المتميزة والفعالة. هذه الشركات تفتح آفاقاً جديدة للنجاح عبر الإنترنت من خلال مجموعة واسعة من الأنشطة التسويقية الإبداعية والمؤثرة. تشمل خدماتنا الممتازة تصميم مواقع الويب الجذابة، وتحسين محركات البحث (SEO) بكفاءة عالية، والتسويق الفعال عبر البريد الإلكتروني، والاستراتيجيات الذكية للتسويق عبر وسائل التواصل الاجتماعي، والإعلانات المدفوعة “الممولة” المستهدفة بدقة. بالإضافة إلى ذلك، تقدم هذه الشركات المتميزة مجموعة متنوعة من الطرق والخدمات والتقنيات المبتكرة التي تضمن نجاح العملاء وتحقيق أهدافهم التسويقية بشكل مذهل.",
      question: "How Can I Choose the Right Digital Marketing Agency for My Business?",
      answer:
        `When choosing a digital marketing agency, it is important to consider the following factors:
            The agency’s experience and expertise
            Used Technologies and Tools
            Work Process
            Cost Of Service
            Online Reputation Of The Agency`,
    },
    {
      questionAR: 'ما هي الخدمات التي تقدمها ديجيتال براندريا كشركة ديجيتال ماركتنج؟',
      answerAR: "نحن نفخر بتقديم مجموعة استثنائية ومتكاملة من الخدمات الرائدة التي تحقق نتائج مبهرة لعملائنا. خدماتنا المتميزة تشمل التسويق الرقمي الإبداعي، الإدارة الاحترافية والفعالة لوسائل التواصل الاجتماعي، تحسين محركات البحث (SEO) بتقنيات متطورة لتحقيق أعلى المراتب، الإعلانات المدفوعة (PPC) المستهدفة بدقة لتحقيق أقصى عائد على الاستثمار، التسويق عبر البريد الإلكتروني بأساليب مبتكرة تضمن التفاعل الأمثل، التصميم الإبداعي الملهم الذي يأسر القلوب والعقول، إنتاج محتوى عالي الجودة يثري تجربة الجمهور، وخدمات العلاقات العامة الاستراتيجية التي تعزز سمعة عملائنا بشكل مذهل. نحن ملتزمون بتحقيق النجاح الباهر لكل عميل من خلال خدماتنا المتميزة والمتكاملة.",
      question: "What Are the Factors to Consider When Choosing a Digital Marketing Agency?",
      answer:
        "We pride ourselves on providing an exceptional and integrated range of leading services that achieve amazing results for our clients. Our distinguished services include creative digital marketing, professional and effective social media management, advanced SEO techniques to achieve the highest rankings, precisely targeted paid ads (PPC) to maximize ROI, innovative email marketing methods that ensure optimal interaction, inspiring creative design that captivates hearts and minds, high-quality content production that enriches the audience experience, and strategic public relations services that remarkably enhance our clients' reputation. We are committed to achieving outstanding success for each client through our distinguished and integrated services.",
    },
    {
      questionAR: "كيف يمكنني التواصل مع فريق ديجيتال براندريا؟",
      answerAR: "يمكنك التواصل معنا عبر الهاتف على [رقم الهاتف]، أو البريد الإلكتروني [البريد الإلكتروني]. كما يمكنك زيارة مكتبنا في [العنوان]. اتصل بنا اليوم للحصول على استشارة مجانية!",
      question: "Is It Worth Hiring a Digital Marketing Agency",
      answer:
        "You can contact us by phone at [phone number], or email [email]. You can also visit our office at [address]. Contact us today for a free consultation!",
    },
    {
      questionAR: "ما هي تكلفة خدمات التسويق الالكتروني؟",
      answerAR:
        "نحن نفخر بتقديم حلول استثنائية ومرنة تماماً تتناسب مع احتياجات كل عميل الفريدة. خدماتنا المتميزة مصممة خصيصاً لتحقيق أقصى عائد على استثمارك، مهما كان نوع نشاطك أو حجمه أو موقعه. نمتلك خبرة واسعة ومثبتة في التعامل بنجاح باهر مع جميع أنواع الأعمال والشركات، من الشركات الناشئة الطموحة إلى المؤسسات العالمية الكبرى. نحن نضمن لكم خدمات استثنائية الجودة بأسعار تنافسية للغاية، مما يجعلنا الشريك المثالي لتحقيق أهدافكم وتجاوز توقعاتكم. التزامنا الراسخ هو تقديم قيمة فائقة لكل عميل، مع ضمان أن استثماركم في خدماتنا سيؤدي إلى نتائج ملموسة ومذهلة تدفع نمو أعمالكم إلى آفاق جديدة.",
      question: "What Are the Services That a Digital Marketing Agency in Egypt Can Provide?",
      answer:
        "We pride ourselves on providing exceptional and completely flexible solutions that perfectly suit the unique needs of each client. Our distinguished services are specifically designed to achieve maximum ROI, regardless of your business type, size, or location. We have extensive and proven experience in successfully dealing with all types of businesses and companies, from ambitious startups to large global enterprises. We guarantee you exceptional quality services at extremely competitive prices, making us the perfect partner to achieve your goals and exceed your expectations. Our strong commitment is to provide superior value to each client, ensuring that your investment in our services will lead to tangible and amazing results that drive your business growth to new heights.",
    },
    {
      questionAR: "ما هي تكلفة خدمات التسويق الالكتروني؟",
      answerAR:
        "نحن نفخر بتقديم حلول استثنائية ومرنة تماماً تتناسب مع احتياجات كل عميل الفريدة. خدماتنا المتميزة مصممة خصيصاً لتحقيق أقصى عائد على استثمارك، مهما كان نوع نشاطك أو حجمه أو موقعه. نمتلك خبرة واسعة ومثبتة في التعامل بنجاح باهر مع جميع أنواع الأعمال والشركات، من الشركات الناشئة الطموحة إلى المؤسسات العالمية الكبرى. نحن نضمن لكم خدمات استثنائية الجودة بأسعار تنافسية للغاية، مما يجعلنا الشريك المثالي لتحقيق أهدافكم وتجاوز توقعاتكم. التزامنا الراسخ هو تقديم قيمة فائقة لكل عميل، مع ضمان أن استثماركم في خدماتنا سيؤدي إلى نتائج ملموسة ومذهلة تدفع نمو أعمالكم إلى آفاق جديدة.",
      question: "What Are the Benefits of Hiring a Digital Marketing Agency in Egypt?",
      answer:
        "We pride ourselves on providing exceptional and completely flexible solutions that perfectly suit the unique needs of each client. Our distinguished services are specifically designed to achieve maximum ROI, regardless of your business type, size, or location. We have extensive and proven experience in successfully dealing with all types of businesses and companies, from ambitious startups to large global enterprises. We guarantee you exceptional quality services at extremely competitive prices, making us the perfect partner to achieve your goals and exceed your expectations. Our strong commitment is to provide superior value to each client, ensuring that your investment in our services will lead to tangible and amazing results that drive your business growth to new heights.",
    },
    {
      questionAR: "ما هي تكلفة خدمات التسويق الالكتروني؟",
      answerAR:
        "نحن نفخر بتقديم حلول استثنائية ومرنة تماماً تتناسب مع احتياجات كل عميل الفريدة. خدماتنا المتميزة مصممة خصيصاً لتحقيق أقصى عائد على استثمارك، مهما كان نوع نشاطك أو حجمه أو موقعه. نمتلك خبرة واسعة ومثبتة في التعامل بنجاح باهر مع جميع أنواع الأعمال والشركات، من الشركات الناشئة الطموحة إلى المؤسسات العالمية الكبرى. نحن نضمن لكم خدمات استثنائية الجودة بأسعار تنافسية للغاية، مما يجعلنا الشريك المثالي لتحقيق أهدافكم وتجاوز توقعاتكم. التزامنا الراسخ هو تقديم قيمة فائقة لكل عميل، مع ضمان أن استثماركم في خدماتنا سيؤدي إلى نتائج ملموسة ومذهلة تدفع نمو أعمالكم إلى آفاق جديدة.",
      question: "How Much Does It Cost to Hire a Digital Marketing Agency in Egypt?",
      answer:
        "We pride ourselves on providing exceptional and completely flexible solutions that perfectly suit the unique needs of each client. Our distinguished services are specifically designed to achieve maximum ROI, regardless of your business type, size, or location. We have extensive and proven experience in successfully dealing with all types of businesses and companies, from ambitious startups to large global enterprises. We guarantee you exceptional quality services at extremely competitive prices, making us the perfect partner to achieve your goals and exceed your expectations. Our strong commitment is to provide superior value to each client, ensuring that your investment in our services will lead to tangible and amazing results that drive your business growth to new heights.",
    },

  ];
  return (
    <main className="py-16 sm:py-36 flex flex-col gap-10 sm:gap-20">
      <div className="flex px-4 sm:px-14 flex-col gap-8 sm:gap-16">
        <BlurFade inView delay={0.1}>
          <div className='leading-loose flex flex-col justify-center gap-6'>
            <p className='lg:max-w-5xl mx-auto space-y-4'>{t("h")}</p>
            <div className='flex justify-center items-center gap-4'>
              <div className='flex flex-col gap-0'>
                {locale === "en" ?
                  <>
                    <h1 className='text-red-600 text-2xl font-bold ltr:tracking-wider sm:text-5xl md:text-4xl text-center'>{t("h2")}</h1>
                    <GradualSpacing className="font-display text-center text-2xl font-bold tracking-[-0.1em]  text-black dark:text-white sm:text-5xl md:text-4xl md:leading-[5rem]"
                      text={t("h2N")} />
                  </> : <>
                    <h1 className='text-4xl font-bold ltr:tracking-wider sm:text-5xl md:text-6xl text-center'>{t("h2")}</h1>
                    <h1 className='text-4xl font-bold ltr:tracking-wider sm:text-5xl md:text-6xl text-center'>{t("h2N")}</h1>
                  </>}
              </div>
              <Image
                src="/Alien.svg"
                alt="Blue Tree"
                width={60}
                height={60}
              />
            </div>
            <h5 className='lg:max-w-5xl mx-auto space-y-4'>{t("p")}</h5>
          </div>
        </BlurFade>
        <section className='flex gap-1 justify-center align-middle'>
          <form className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 '>
            <div className='p-3 col-span-1 sm:col-span-1'>
              <BlurFade inView delay={0.5}>
                <input
                  id="1"
                  type="text"
                  placeholder={locale === "en" ? inputPlaceHolders.fName : inputPlaceHolders.fNameAR}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </BlurFade>
            </div>
            <div className='p-3 col-span-1 sm:col-span-1'>
              <BlurFade inView delay={0.6}>
                <input
                  id="2"
                  type="text"
                  placeholder={locale === "en" ? inputPlaceHolders.lName : inputPlaceHolders.lNameAR}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </BlurFade>
            </div>

            <div className='p-3 col-span-1 sm:col-span-2'>
              <BlurFade inView delay={0.7}>
                <input
                  id="3"
                  type="email"
                  placeholder={locale === "en" ? inputPlaceHolders.email : inputPlaceHolders.emailAR}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </BlurFade>
            </div>

            <div className='p-3 col-span-1 sm:col-span-1'>
              <BlurFade inView delay={0.1}>
                <input
                  id="4"
                  type="number"
                  placeholder={locale === "en" ? inputPlaceHolders.PhoneNum : inputPlaceHolders.PhoneNumAR}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </BlurFade>
            </div>
            <div className='p-3 col-span-1 sm:col-span-1'>
              <BlurFade inView delay={0.1}>
                <select name="gender" id="gender" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="Male">{locale === "en" ? inputPlaceHolders.gender.male : inputPlaceHolders.genderAR.male}</option>
                  <option value="Female">{locale === "en" ? inputPlaceHolders.gender.female : inputPlaceHolders.genderAR.female}</option>
                </select>
                {/* <input
              id="5"
              type="text"
              placeholder={locale === "en" ? inputPlaceHolders.gender : inputPlaceHolders.genderAR}              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            /> */}
              </BlurFade>
            </div>
            <div className='p-3 col-span-1 sm:col-span-2'>
              <BlurFade inView delay={0.1}>
                <textarea name="Message" id="6" rows={4}
                  placeholder={locale === "en" ? inputPlaceHolders.textArea : inputPlaceHolders.textAreaAR}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </BlurFade>
            </div>
            <div className='p-3 col-span-1'>
              <BlurFade inView delay={0.1}>
                <input type="submit" value={locale === "en" ? inputPlaceHolders.Btn : inputPlaceHolders.BtnAR} className='border rounded py-2 px-3 bg-white text-black cursor-pointer' />
              </BlurFade>
            </div>
          </form>
          <Image
            src="/Map.png"
            alt="Blue Tree"
            width={350}
            height={800}
          />
        </section>
        {/* <div className='w-full bg-slate-500 h-96 flex flex-col justify-evenly items-center'>
          <Image
            src="/CyanFlower.svg"
            alt="Blue Tree"
            width={60}
            height={60}
          />
          <h1 className=' text-red-700 text-2xl font-bold ltr:tracking-wider sm:text-5xl md:text-4xl'>Questions you may have.</h1>
        </div> */}

        <section className="border rounded-lg border-white px-10 py-10">
            <div>
              <h2 className="!mt-0 text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl ">
                {
                  locale === 'en' ? <>
                    FAQ
                  </> : <>
                    الأسئلة الأكثر شيوعا
                  </>
                }
              </h2>

              <div className="not-prose mt-2 flex flex-col gap-4 md:mt-5">
                {content.map((item, index) => (
                  <Accordion key={index} type="single" collapsible>
                    <AccordionItem
                      value={locale === 'en' ? item.question : item.questionAR}
                      className="rounded-md px-4 transition-all hover:bg-muted/50 !border-b-0">

                      <div className='flex'>
                        <BadgeCheck className='relative top-4 right-2' />
                        <AccordionTrigger className="ltr:text-left rtl:text-start hover:no-underline text-xl lg:text-xl leading-normal ">
                          {locale === 'en' ? item.question : item.questionAR}
                        </AccordionTrigger>
                      </div>

                      <AccordionContent className="lg:text-xl text-lg leading-relaxed">
                        <Balancer>
                          {
                            locale === 'en' ? item.answer : item.answerAR

                          }

                        </Balancer>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
        </section>
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
