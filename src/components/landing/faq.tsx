// React and Next.js imports
import React from "react";

// Third-party library imports
import { ArrowUpRight } from "lucide-react";

// UI component imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { useLocale } from "next-intl";

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
    question: "What are digital marketing companies?",
    answer:
      "Digital marketing companies are leading and innovative companies that offer outstanding and effective Digital marketing services. These companies open up new horizons for online success through a wide range of creative and impactful marketing activities. Our excellent services include designing attractive websites, efficiently optimizing search engines (SEO), effectively marketing via email, smart social media marketing strategies, and precisely targeted paid ads. In addition, these distinguished companies offer a variety of innovative methods, services, and technologies that ensure the success of clients and achieve their marketing goals amazingly.",
  },
  {
    questionAR: 'ما هي الخدمات التي تقدمها ديجيتال براندريا كشركة ديجيتال ماركتنج؟',
    answerAR: "نحن نفخر بتقديم مجموعة استثنائية ومتكاملة من الخدمات الرائدة التي تحقق نتائج مبهرة لعملائنا. خدماتنا المتميزة تشمل التسويق الرقمي الإبداعي، الإدارة الاحترافية والفعالة لوسائل التواصل الاجتماعي، تحسين محركات البحث (SEO) بتقنيات متطورة لتحقيق أعلى المراتب، الإعلانات المدفوعة (PPC) المستهدفة بدقة لتحقيق أقصى عائد على الاستثمار، التسويق عبر البريد الإلكتروني بأساليب مبتكرة تضمن التفاعل الأمثل، التصميم الإبداعي الملهم الذي يأسر القلوب والعقول، إنتاج محتوى عالي الجودة يثري تجربة الجمهور، وخدمات العلاقات العامة الاستراتيجية التي تعزز سمعة عملائنا بشكل مذهل. نحن ملتزمون بتحقيق النجاح الباهر لكل عميل من خلال خدماتنا المتميزة والمتكاملة.",
    question: "What services does Digital Brandria offer as a digital marketing company?",
    answer:
      "We pride ourselves on providing an exceptional and integrated range of leading services that achieve amazing results for our clients. Our distinguished services include creative digital marketing, professional and effective social media management, advanced SEO techniques to achieve the highest rankings, precisely targeted paid ads (PPC) to maximize ROI, innovative email marketing methods that ensure optimal interaction, inspiring creative design that captivates hearts and minds, high-quality content production that enriches the audience experience, and strategic public relations services that remarkably enhance our clients' reputation. We are committed to achieving outstanding success for each client through our distinguished and integrated services.",
  },
  {
    questionAR: "كيف يمكنني التواصل مع فريق ديجيتال براندريا؟",
    answerAR: "يمكنك التواصل معنا عبر الهاتف على [رقم الهاتف]، أو البريد الإلكتروني [البريد الإلكتروني]. كما يمكنك زيارة مكتبنا في [العنوان]. اتصل بنا اليوم للحصول على استشارة مجانية!",
    question: "How can I contact the Digital Brandria team?",
    answer:
      "You can contact us by phone at [phone number], or email [email]. You can also visit our office at [address]. Contact us today for a free consultation!",
  },
  {
    questionAR: "ما هي تكلفة خدمات التسويق الالكتروني؟",
    answerAR:
      "نحن نفخر بتقديم حلول استثنائية ومرنة تماماً تتناسب مع احتياجات كل عميل الفريدة. خدماتنا المتميزة مصممة خصيصاً لتحقيق أقصى عائد على استثمارك، مهما كان نوع نشاطك أو حجمه أو موقعه. نمتلك خبرة واسعة ومثبتة في التعامل بنجاح باهر مع جميع أنواع الأعمال والشركات، من الشركات الناشئة الطموحة إلى المؤسسات العالمية الكبرى. نحن نضمن لكم خدمات استثنائية الجودة بأسعار تنافسية للغاية، مما يجعلنا الشريك المثالي لتحقيق أهدافكم وتجاوز توقعاتكم. التزامنا الراسخ هو تقديم قيمة فائقة لكل عميل، مع ضمان أن استثماركم في خدماتنا سيؤدي إلى نتائج ملموسة ومذهلة تدفع نمو أعمالكم إلى آفاق جديدة.",
    question: "What is the cost of digital marketing services?",
    answer:
      "We pride ourselves on providing exceptional and completely flexible solutions that perfectly suit the unique needs of each client. Our distinguished services are specifically designed to achieve maximum ROI, regardless of your business type, size, or location. We have extensive and proven experience in successfully dealing with all types of businesses and companies, from ambitious startups to large global enterprises. We guarantee you exceptional quality services at extremely competitive prices, making us the perfect partner to achieve your goals and exceed your expectations. Our strong commitment is to provide superior value to each client, ensuring that your investment in our services will lead to tangible and amazing results that drive your business growth to new heights.",
  },
];

const FAQ = () => {
  const locale = useLocale();
  return (
    <section className="">
      <div>
        <h2 className="!mt-0 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          {
            locale === 'en' ? <>
              Frequently Asked Questions
            </> : <>
              الأسئلة الأكثر شيوعا
            </>
          }
        </h2>

        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={locale === 'en' ? item.question : item.questionAR}
                className="rounded-md  px-4 transition-all hover:bg-muted/50 !border-b-0"
              >
                <AccordionTrigger className="ltr:text-left rtl:text-start hover:no-underline text-3xl lg:text-5xl leading-normal ">
                  {
                    locale === 'en' ? item.question : item.questionAR

                  }
                </AccordionTrigger>
                <AccordionContent className="lg:text-2xl text-xl leading-relaxed">
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
  );
};

export default FAQ;
