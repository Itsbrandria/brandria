import clsx from "clsx";
import { Separator } from "../ui/separator";
import { useLocale } from "next-intl"
import BlurFade from "../magicui/blur-fade";

const processes = [
  {
    title: "Listen",
    description: "We take the time to listen to your story and relate to your needs, always putting you first. This stage is essential for any digital marketing agency in Egypt, as learning the client’s needs is what creates a solid marketing strategy.",
    titleAR: "الاستماع",
    descriptionAR: "نحن نأخذ الوقت للاستماع إلى قصتك والتعاطف مع احتياجاتك، مع وضعك دائمًا أولاً. هذه المرحلة أساسية لأي وكالة تسويق رقمي في مصر، حيث أن تعلم احتياجات العميل هو ما يخلق استراتيجية تسويق قوية.",
    color: 'bg-red-700'
  },
  {
    title: "Analyze",
    description: "We start by analyzing your needs and what needs to be implemented to bring the best out of your brand online and offline. We do a complete competitor and gap analysis, and we use the data to create an effective action plan.",
    titleAR: "تحليل",
    descriptionAR: "نبدأ بتحليل احتياجاتك وما يجب تنفيذه لإظهار أفضل ما لديك من علامة تجارية على الإنترنت وغيرها. نقوم بتحليل كامل للمنافسين والفجوات، ونستخدم البيانات لإنشاء خطة عمل فعالة.",
    color: "bg-green-700"
  },
  {
    title: "Evaluate",
    description: "What’s the real problem? How can we get ahead of it? How can we get the best possible solutions for you? Learning these questions and connecting them with our Listening and Analyzing processes helps us evaluate your situation.",
    titleAR: "تقييم",
    descriptionAR: "ما هي المشكلة الحقيقية؟ كيف يمكننا التقدم فيها؟ كيف يمكننا الحصول على أفضل الحلول الممكنة لك؟ تعلم هذه الأسئلة وربطها بعمليات الاستماع والتحليل الخاصة بنا يساعدنا على تقييم وضعك.",
    color: "bg-emerald-700"

  },
  {
    title: "Strategy",
    description: "We work together to figure out and execute a plan that brings out the uniqueness and distinctive features of your brand identity. At this stage, we come up with an actionable plan that fits your brand’s image and personality.",
    titleAR: "استراتيجية",
    descriptionAR: "نعمل معًا لمعرفة وتنفيذ خطة تبرز السمات الفريدة والمميزة لهوية علامتك التجارية. في هذه المرحلة، نقدم خطة عمل يمكن تنفيذها تتناسب مع صورة علامتك التجارية وشخصيتها.",
    color: "bg-blue-700"

  },
  {
    title: "Deliver Results",
    description: "Now it’s time to enjoy the success and rapid growth of your brand. There will be no need to worry again about advertising, marketing, and brand identity growth with Digital Brandria, the best creative digital marketing agency in Egypt.",
    titleAR: "تقديم النتائج",
    descriptionAR: "الآن حان الوقت للاستمتاع بالنجاح والنمو السريع لعلامتك التجارية. لن يكون هناك حاجة للقلق مرة أخرى بشأن الإعلان والتسويق ونمو هوية العلامة مع Digital Brandria، أفضل وكالة تسويق رقمي إبداعية في مصر.",
    color: "bg-orange-700"

  },
];

export function Process() {
  const locale = useLocale()
  return (
    <section className="space-y-8 w-full max-w-6xl" dir={
      locale === "en" ? "ltr" : "rtl"

    }>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        {
          locale === "en" ? "How it works" : "كيف نقوم بذلك؟"
        }
      </h2>
      <div className="lg:grid-cols-2 *:max-lg:col-span-2 grid gap-x-4 gap-y-8 w-full">
        {processes.map((process, index) => (
          <ProcessCard
            key={index}
            title={process.title}
            description={process.description}
            titleAR={process.titleAR ?? ''}
            descriptionAR={process.descriptionAR ?? ''}
            index={index + 1}
            lang={locale}
            className={
              clsx(
                index === 4 ? "col-span-2 max-w-2xl justify-center mx-auto" : "",
              )
            }
            color={process.color}
          />
        ))}
      </div>
    </section>
  );
}

function ProcessCard({
  title,
  description,
  titleAR,
  descriptionAR,
  index,
  lang,
  className,
  color
}: {
  title: string;
  description: string;
  titleAR: string;
  descriptionAR: string;
  index: number;
  lang: string;
  className?: string;
  color: string
}) {
  return (
    <BlurFade inView delay={0.05 * index} className={className}>
      <div className={
        clsx(
          "drop-shadow-xl relative shadow-[0px_5px_0px_0px_rgba(255,0,0,0.7)] dark:shadow-[0px_4px_0px_0px_rgba(255,0,0,0.5)] rounded-xl w-full p-4 flex flex-col gap-4",
        )
      } dir={
        lang === "en" ? "ltr" : "rtl"
      }>
        <div className="flex items-center gap-2">
          <span className={
            clsx(
              "h-8 w-8 relative flex items-center justify-center rounded-full shadow-xl",
              color
            )
          }>
            <span className="absolute  text-lg font-bold">
              {index}
            </span>
          </span>
          <h3 className="text-2xl font-bold ltr:tracking-wider">
            {
              lang === "en" ? title : titleAR
            }
          </h3>
        </div>
        <p className="text-lg">
          {
            lang === "en" ? description : descriptionAR
          }
        </p>
      </div>
    </BlurFade>
  );
}
