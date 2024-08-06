"use client";
import { Projects } from "@/lib/types";
import { Button } from "./ui/button/button";
import { useState } from "react";
import { PortfolioItem } from "./portfolio-item";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import MouseFollower from "./MouseFollower";
export function PortfolioBody({
  data
}: {
  data: Projects
}) {

  const [shownData, setShownData] = useState(data);
  const t = useTranslations("Portfolio");
  return (<>
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
      <h1 className="text-4xl font-bold tracking-tighter">{t("h")}</h1>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="px-4 py-2 text-lg" onClick={
          () => {
            setShownData(data)
          }
        }>
          All
        </Button>
        <Button variant="outline" className="px-4 py-2 text-lg" onClick={
          () => {
            setShownData(data.filter(project => project.portfolio_category.includes(8)))
          }
        }>
          Branding
        </Button>
        <Button variant="outline" className="px-4 py-2 text-lg" onClick={
          () => {
            setShownData(data.filter(project => project.portfolio_category.includes(9)))
          }
        }>
          UI/UX
        </Button>
        <Button variant="outline" className="px-4 py-2 text-lg" onClick={
          () => {
            setShownData(data.filter(project => project.portfolio_category.includes(10)))
          }
        }>
          Web Development
        </Button>
        <Button variant="outline" className="px-4 py-2 text-lg" onClick={
          () => {
            setShownData(data.filter(project => project.portfolio_category.includes(11)))
          }
        }>
          Video Production
        </Button>
      </div>
      <p className="text-muted-foreground md:text-lg">{t("p")}</p>
      <Image
        src="/BlueTree.svg"
        alt="Blue Tree"
        width={50}
        height={50}
      />
    </div>

      <motion.div 
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3 xl:gap-5">

        {
          shownData.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))
        }
      </motion.div>
  </>
  )
}