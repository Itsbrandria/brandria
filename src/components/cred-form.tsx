import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/credenza"
import { Button } from "./ui/button/button"
import { OurForm } from './contact-form'

export function CredForm() {



  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button className="w-fit text-lg lg:text-xl" variant='shine'>
          Reach Us Now!
        </Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>
            Contact Us
          </CredenzaTitle>
          <CredenzaDescription>
            Tell us what you need and we will get back to you really fast.
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <OurForm />
        </CredenzaBody>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <button>Cancel</button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  )
}