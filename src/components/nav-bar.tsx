"use client";
import { cn } from "@/lib/utils";
import { BookOpen, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./lang-toggle";
import { useLocale, useTranslations } from "next-intl";

export function NavBar() {
  const locale = useLocale();
  const navigation = [
    {
      title: "Home",
      titleAR:
        "الرئيسية",
      path: "/"
    },
    {
      title: "About",
      titleAR:
        "عننا",
      path: `/${locale}/about`
    },
    {
      title: "Services",
      titleAR:
        "خدماتنا",
      path: "/"
    },
    {
      title: "Portfolio",
      titleAR:
        "أعمالنا",
      path: `/${locale}/portfolio`
    },
    {
      title: "Blog",
      titleAR:
        "المدونة",
      path: `/${locale}/blog`
    },
    {
      title: "Contact",
      titleAR:
        "اتصل بنا",
      path: `/${locale}/contact`
    },
  ];

  const t = useTranslations('Hero')

  return (
    <nav className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
      <div className="flex justify-between md:w-1/2 w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Dialog>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <SheetTrigger className="min-[825px]:hidden p-2 transition flex gap-4 items-center justify-between w-full">
                <MenuIcon />
              </SheetTrigger>
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-28"
              />
            </div>
            <div className="flex gap-2 items-center lg:hidden">
              <ModeToggle />
              <LanguageToggle />
            </div>
          </div>

          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-44"
                />
              </SheetTitle>
              <SheetDescription>
                {
                  t('description')
                }
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              {navigation.map((item, index) => (
                <DialogClose asChild key={`Desktop-Item-${index}`}>
                  <Link href={item.path}>
                    <Button variant="outline" className="w-full text-lg">
                      {locale === 'en' ? item.title : item.titleAR}
                    </Button>
                  </Link>
                </DialogClose>
              ))}
              <div className="flex gap-2">
                <ModeToggle />
                <LanguageToggle />
              </div>
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              <Image
                src="/logo.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-44"
              />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          {navigation.map((item, index) => (
            <Link href={item.path} key={`item-${index}`}>
              <Button variant="ghost" className="text-lg">
                {locale === 'en' ? item.title : item.titleAR}
              </Button>
            </Link>
          ))}
          <ModeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
