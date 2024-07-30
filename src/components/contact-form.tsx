"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { InputBlock as Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input"
import { isValidPhoneNumber } from "react-phone-number-input";
import { Select } from "./ui/select"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useLocale } from "next-intl"


const serviceOptions = [
  "Web Development",
  "Marketing",
  "Design",
  "SEO",
  "Other",
] as const

type Service = typeof serviceOptions[number]

const formSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  message: z.string().min(10).max(200),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" })
    .or(z.literal("")),
  country: z.string().min(3).max(20),
  service: z.enum(serviceOptions),
})


export function OurForm() {

  const locale = useLocale();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: '',
      country: "",
      service: serviceOptions[0],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between gap-1">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  {
                    locale === "en" ? "Name" : "الاسم"
                  }
                </FormLabel>
                <FormControl>
                  <Input placeholder={
                    locale === "en" ? "Name" : "الاسم"
                  } {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  {
                    locale === "en" ? "Email" : "البريد الإلكتروني"
                  }
                </FormLabel>
                <FormControl>
                  <Input placeholder={
                    locale === "en" ? "Email" : "البريد الإلكتروني"
                  } {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel className="text-left">
                {
                  locale === "en" ? "Phone" : "الهاتف"
                }
              </FormLabel>
              <FormControl className="w-full">
                <PhoneInput placeholder={
                  locale === "en" ? "Phone" : "الهاتف"
                } {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{
                locale === "en" ? "Service" : "الخدمة"
              }</FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={locale === 'en' ? 'Service' : 'الخدمة'} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {serviceOptions.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {
                  locale === "en" ? "Message" : "الرسالة"
                }
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    locale === "en" ? "Message" : "الرسالة"
                  }
                  {...field}
                  className="resize-none h-52"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{
          locale === "en" ? "Submit" : "إرسال"
        }</Button>
      </form>
    </Form>
  )
}