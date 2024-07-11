// React and Next.js
import React from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { Coins } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Guaranteed results",
    description: "Our results are tangible and increase return on investment.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Extensive experience",
    description:
      "We have years of experience working with major brands in Egypt and the Middle East.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Professional and creative team",
    description:
      "We have our specialized and creative team ready to turn your ideas into reality or help you create new ideas.",
  },
];

export const WhyChooseUs = () => {
  return (
    <Section className="border-b ">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl !leading-relaxed">
            <Balancer>Why choose Digital Branderia?</Balancer>
          </h2>
          <h3 className="text-2xl font-light opacity-70">
            <Balancer>
              Choosing Digital Branderia as your digital partner in the Middle
              East for digital marketing services is the best decision. Why?
            </Balancer>
          </h3>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
