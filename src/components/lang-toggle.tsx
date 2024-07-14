"use client";
import * as React from "react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export function LanguageToggle() {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = () => {
    startTransition(() => {
      router.replace(`/${localActive === "en" ? "ar" : "en"}`);
    });
  };
  return (

    <Button variant="outline" size="icon" onClick={() => onSelectChange()}
    >
      {localActive === "en" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 [&_path]:fill-black dark:[&_path]:fill-white"
          viewBox="0 0 24 24"
        >
          <path d="M14 10h2v.757a4.5 4.5 0 0 1 7 3.743V20h-2v-5.5c0-1.43-1.174-2.5-2.5-2.5S16 13.07 16 14.5V20h-2zm-2-6v2H4v5h8v2H4v5h8v2H2V4z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 [&_path]:fill-black dark:[&_path]:fill-white"
          viewBox="0 0 20 20"
        >
          <path d="M6.89 11.9c0 1.57 1.61 2.44 4.85 2.63l2.55-.04l.37.05c-.03.14-.29.4-.77.76l-.1.07A6.97 6.97 0 0 1 9.63 17a4.3 4.3 0 0 1-3.16-1.16a4.3 4.3 0 0 1-1.13-3.15c0-1.58.66-3 1.96-4.27v-.05l-.7-.64A1.1 1.1 0 0 1 6.33 7c0-.58.28-1.3.84-2.18C7.93 3.6 8.7 3 9.46 3c1.03 0 1.89.49 2.56 1.45c.38.56-.03.65-1.24.26q-1.47-.57-2.4.96l.02.1l1.31 1h.06c1.64-.57 2.82-.86 3.55-.84a5.5 5.5 0 0 0-.28.86a32 32 0 0 1-.36 1.14l-.14.44l-.45.05c-2.04.28-3.5.84-4.37 1.67a2.5 2.5 0 0 0-.83 1.78" />
        </svg>
      )}
      <span className="sr-only">Toggle Language</span>
    </Button>


  );
}
