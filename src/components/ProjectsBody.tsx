"use client";
import { Projects } from "@/lib/types";
import { Button } from "./ui/button/button";
import { useState } from "react";
import { PortfolioItem } from "./portfolio-item";
export function PortfolioBody({
  data
}: {
  data: Projects
}) {

  const [shownData, setShownData] = useState(data);

  return (<>
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
      <h1 className="text-4xl font-bold tracking-tighter">Our Portfolio</h1>
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
      <p className="text-muted-foreground md:text-lg">Explore the creative work of our talented team.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">

      {
        shownData.map((project, index) => (
          <PortfolioItem key={index} {...project} />
        ))
      }
    </div>
  </>
  )
}