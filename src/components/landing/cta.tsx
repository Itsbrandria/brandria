// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button/button";

// Custom components
import { Section, Container } from "@/components/craft";
import { ContactForm } from "../contact-form";

const CTA = () => {
  return (
    <Section className="px-4 !py-0 w-full">
      <Container className="flex flex-col items-center gap-6 rounded-lg border bg-accent/50 p-2 text-center md:rounded-xl w-full">
        <h2 className="!my-0 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          <Balancer>Ready to get started?</Balancer>
        </h2>
        <h3 className="!mb-0 text-muted-foreground">
          <Balancer>
            Contact us now to get a free consultation.
          </Balancer>
        </h3>
        <div className="not-prose mx-auto flex items-center gap-2">

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
};

export default CTA;
