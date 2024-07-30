"use client";
import { Blogs } from "@/lib/types";
import { Button } from "./ui/button/button";
import { useState } from "react";
import { PortfolioItem } from "./portfolio-item";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BlogItem } from "./blog-item";

export function BlogBody({
  data
}: {
  data: Blogs
}) {

  const [shownData, setShownData] = useState(data);

  return (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-10">
      {
        shownData.map((blog, index) => (
          <BlogItem key={index} {...blog} />
        ))
      }
    </div>
  </>
  )
}