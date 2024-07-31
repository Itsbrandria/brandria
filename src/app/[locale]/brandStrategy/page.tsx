import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CredForm } from "@/components/cred-form";
import { Button } from "@/components/ui/button/button";
import NumberTicker from "@/components/magicui/number-ticker";
import Timeline from "@/components/timeline";
import { OurForm } from "@/components/contact-form";


const timelineItems = [
  {
    date: "1",
    label: "Discover",
    title: "Discover",
    content: "Assess your strengths, learn your values and goals, and set an unclouded vision for the future."
  },
  {
    date: "2",
    label: "Create",
    title: "Create",
    content: "Research, take notes, and start creating plans to take your brand strategies to the next level."
  },
  {
    date: "3",
    label: "Execute",
    title: "Execute",
    content: "Implement your branding strategy, take actions, and start your actual journey of polishing your brand identity."
  },
  {
    date: "4",
    label: "Measure",
    title: "Measure",
    content: "Measure your campaigns’ success, assess what went right and what went wrong, and repeat until you perfect your strategy."
  },
]


export default function Page() {
  return (
    <main className="py-36 flex flex-col px-4 lg:px-0 gap-14 lg:gap-20  bg-[#7447A7]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 lg:grid-cols-2">
          <div>
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-mono">
              Brand Strategy
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter md:text-4xl/tight !leading-relaxed">
              <Balancer>
                Present your brand to the world. Polish its image with a unique
                and daring strategy
              </Balancer>
            </h2>
            <p className="mt-4 max-w-[600px] text-slate-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Your brand strategy is your map and plan to build a stunning image
              for your business. It helps you build an easily identifiable image
              for your brand, increase brand awareness through clever tactics,
              and inspire your customers in diverse ways, encouraging positive
              word-of-mouth marketing and retaining loyal and repeat customers.
              Lacking a solid brand plan runs the risk of going bankrupt,
              becoming a relic of the past, and losing all brand identity—an
              effortless way to be forgotten.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <CredForm />
              {/* <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Us
              </Link> */}
            </div>
          </div>
          <div className="grid gap-6">
            <SimpleCard_V1 />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center container px-4 md:px-6 bg-background py-8 rounded-2xl shadow-2xl flex-col lg:flex-row max-sm:gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold leading-relaxed text-center italic">
            <Balancer>Why Invest in Branding Strategy from Brandria ?</Balancer>
          </h2>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4">
          <p>
            Building trust, authenticity, and tone of voice is an essential part of marketing. Having a solid brand strategy grows businesses, helps you expand your reach to new audiences and markets, and lets you break new limits.
            What makes Brandria the logical option for you to choose for your brand strategy needs is that we create tailored branding experiences and implement groundbreaking practices for your business to completely transform it from the inside out, developing an environment for customers to help them thrive and helping you increase your authenticity and profits. All done by our talented and experienced team of strategists.
          </p>
          <Button>
            Stragize your brand
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-10 container px-4 md:px-6">
        <h2 className="font-bold text-2xl text-center">
          Did you know?
        </h2>
        <div className="flex flex-col lg:flex-row max-sm:gap-8">
          <div>
            <h3 className="font-bold text-xl">
              0.05 sec
            </h3>
            <p className="text-slate-100">
              According to 8ways, customers form an opinion on a brand in the first 0.05 seconds of their visit to the business’ website.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl">
              <NumberTicker value={88} /> %
            </h3>
            <p className="text-slate-100">
              According to Stackla, 88% of customers say that authenticity is the driving factor when deciding which brand, they like and support.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl">
              <NumberTicker value={46} /> %
            </h3>
            <p className="text-slate-100">
              According to Salsify, 46% of customers will pay more happily for a brand they trust.
            </p>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row justify-between bg-background py-8 rounded-xl shadow-2xl from-[#7447A7] via-background to-red-800 bg-gradient-to-tr max-sm:gap-8">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-bold text-center italic !leading-relaxed">
            What is our brand strategy process?
          </h2>
        </div>
        <Timeline
          items={
            timelineItems
          }
        />
      </div>
      <div className="flex justify-between container px-2 md:px-6 flex-col lg:flex-row max-sm:gap-8">
        <div className=" lg:w-1/2 flex flex-col gap-4 items-center justify-center">
          <h2 className="text-4xl font-bold !leading-relaxed italic ">
            <Balancer>
              Lets work on your new great project!
            </Balancer>
          </h2>
          <p>
            Whether it’s an internal tool for your company or a highly available Software-as-a-Service — we help you to get your ideas off the ground!
          </p>
        </div>
        <div className="bg-background p-4 lg:p-8 rounded-xl">
          <OurForm />
        </div>
      </div>
    </main>
  );
}

const CardBody = ({ className = "p-4" }) => (
  <>
    <div className={cn("text-left", className)}>
      <Image
        src="https://dbrandria.com/wp-content/uploads/2022/11/capmas-2048x1241.webp"
        alt="Brand Strategy"
        width={300}
        height={200}
        className="h-full w-full object-cover rounded-lg"
      />

      {/* <p className="text-gray-700 dark:text-gray-300">
      {cardContent.description}
    </p> */}
    </div>
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <span className="text-sm font-light font-mono">Featured Project</span>
      <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">
        Capmas
      </h3>
    </div>
  </>
);

export const SimpleCard_V1 = () => {
  const Ellipses = () => {
    const sharedClasses =
      "rounded-full outline outline-8 dark:outline-gray-950 sm:my-6 md:my-8 size-1 my-4 outline-gray-50 bg-red-800";
    return (
      <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
        <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
        </section>
      </div>
    );
  };
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto w-full rounded-lg border border-dashed border-zinc-300 px-4 dark:border-zinc-800 sm:px-6 md:px-8">
      <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:top-6 md:top-8"></div>
      <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:bottom-6 md:bottom-8"></div>
      <div className="relative w-full border-x border-zinc-400 dark:border-zinc-700">
        <Ellipses />
        <div className="relative z-20 mx-auto py-8">{children}</div>
      </div>
    </div>
  );
  return (
    <div className="">
      <Container>
        <div className="p-3 w-full center">
          <CardBody />
        </div>
      </Container>
    </div>
  );
};
